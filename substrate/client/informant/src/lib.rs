// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: GPL-3.0-or-later WITH Classpath-exception-2.0

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

//! Console informant. Prints sync progress and block events. Runs on the calling thread.

use ansi_term::Colour;
use futures::prelude::*;
use futures_timer::Delay;
use log::{debug, info, trace};
use sc_client_api::{BlockchainEvents, UsageProvider};
use sc_network::NetworkStatusProvider;
use sc_network_common::sync::SyncStatusProvider;
use sp_blockchain::HeaderMetadata;
use sp_core::U256;
use sp_runtime::{
	generic::{Digest, OpaqueDigestItemId},
	traits::{Block as BlockT, Header},
	ConsensusEngineId, DigestItem,
};
use starknet_ff::FieldElement;
use std::{collections::VecDeque, fmt::Display, sync::Arc, time::Duration};
mod display;

/// Creates a stream that returns a new value every `duration`.
fn interval(duration: Duration) -> impl Stream<Item = ()> + Unpin {
	futures::stream::unfold((), move |_| Delay::new(duration).map(|_| Some(((), ())))).map(drop)
}

/// The format to print telemetry output in.
#[derive(Clone, Debug)]
pub struct OutputFormat {
	/// Enable color output in logs.
	///
	/// Is enabled by default.
	pub enable_color: bool,
}

impl Default for OutputFormat {
	fn default() -> Self {
		Self { enable_color: true }
	}
}

/// Builds the informant and returns a `Future` that drives the informant.
pub async fn build<B: BlockT, C, N, S>(client: Arc<C>, network: N, syncing: S, format: OutputFormat)
where
	N: NetworkStatusProvider,
	S: SyncStatusProvider<B>,
	C: UsageProvider<B> + HeaderMetadata<B> + BlockchainEvents<B>,
	<C as HeaderMetadata<B>>::Error: Display,
{
	let mut display = display::InformantDisplay::new(format.clone());

	let client_1 = client.clone();

	let display_notifications = interval(Duration::from_millis(5000))
		.filter_map(|_| async {
			let net_status = network.status().await;
			let sync_status = syncing.status().await;

			match (net_status.ok(), sync_status.ok()) {
				(Some(net), Some(sync)) => Some((net, sync)),
				_ => None,
			}
		})
		.for_each(move |(net_status, sync_status)| {
			let info = client_1.usage_info();
			if let Some(ref usage) = info.usage {
				trace!(target: "usage", "Usage statistics: {}", usage);
			} else {
				trace!(
					target: "usage",
					"Usage statistics not displayed as backend does not provide it",
				)
			}
			display.display(&info, net_status, sync_status);
			future::ready(())
		});

	futures::select! {
		() = display_notifications.fuse() => (),
		() = display_block_import(client).fuse() => (),
	};
}

#[derive(Clone, Debug)]
pub struct StarkHash(pub [u8; 32]);
#[derive(Clone, Debug)]
pub struct ResourcePrice {
	/// The price of one unit of the given resource, denominated in fri (10^-18 strk)
	pub price_in_strk: Option<u64>,
	/// The price of one unit of the given resource, denominated in wei
	pub price_in_wei: u128,
}

#[derive(Clone, Debug)]
pub struct StarknetHeader {
	/// The hash of this block’s parent.
	pub parent_block_hash: StarkHash,
	/// The number (height) of this block.
	pub block_number: u64,
	/// The state commitment after the block.
	pub global_state_root: StarkHash,
	/// The Starknet address of the sequencer who created this block.
	pub sequencer_address: StarkHash,
	/// The time the sequencer created this block before executing transactions
	pub block_timestamp: u64,
	/// The number of transactions in a block
	pub transaction_count: u128,
	/// The state commitment after the block.
	pub transaction_commitment: StarkHash,
	/// The number of events
	pub event_count: u128,
	/// The state commitment after the block.
	pub event_commitment: StarkHash,
	/// l1 gas price for this block
	pub l1_gas_price: ResourcePrice,
	/// l1 gas price for this block
	// pub l1_data_gas_price: ResourcePrice,
	/// The version of the Starknet protocol used when creating this block
	pub protocol_version: u8,
	/// Extraneous data that might be useful for running transactions
	pub extra_data: Option<U256>,
}

fn display_block_import<B: BlockT, C>(client: Arc<C>) -> impl Future<Output = ()>
where
	C: UsageProvider<B> + HeaderMetadata<B> + BlockchainEvents<B>,
	<C as HeaderMetadata<B>>::Error: Display,
{
	let mut last_best = {
		let info = client.usage_info();
		Some((info.chain.best_number, info.chain.best_hash))
	};

	// Hashes of the last blocks we have seen at import.
	let mut last_blocks = VecDeque::new();
	let max_blocks_to_track = 100;

	client.import_notification_stream().for_each(move |n| {
		// detect and log reorganizations.
		// println!("n type = {}", std::any::type_name::<typeof(n)>());
		// println! {"N CONTAINS : {:#?}",n};
		if let Some((ref last_num, ref last_hash)) = last_best {
			if n.header.parent_hash() != last_hash && n.is_new_best {
				let maybe_ancestor =
					sp_blockchain::lowest_common_ancestor(&*client, *last_hash, n.hash);

				match maybe_ancestor {
					Ok(ref ancestor) if ancestor.hash != *last_hash => info!(
						"♻️  Reorg on #{},{} to #{},{}, common ancestor #{},{}",
						Colour::Red.bold().paint(format!("{}", last_num)),
						last_hash,
						Colour::Green.bold().paint(format!("{}", n.header.number())),
						n.hash,
						Colour::White.bold().paint(format!("{}", ancestor.number)),
						ancestor.hash,
					),
					Ok(_) => {},
					Err(e) => debug!("Error computing tree route: {}", e),
				}
			}
		}

		if n.is_new_best {
			last_best = Some((*n.header.number(), n.hash));
		}

		// If we already printed a message for a given block recently,
		// we should not print it again.
		if !last_blocks.contains(&n.hash) {
			last_blocks.push_back(n.hash);

			if last_blocks.len() > max_blocks_to_track {
				last_blocks.pop_front();
			}

			// hash :
			// recuperer le digest
			const MADARA_ENGINE_ID: ConsensusEngineId = [b'm', b'a', b'd', b'a'];

			let mut digest = n.header.digest().logs();
			// // refaire la fonction find_starknet_block de madara
			// let mut digest_item_id = OpaqueDigestItemId::Consensus(&MADARA_ENGINE_ID);
			// // let mut found;
			println!("ITEM IN DIGEST :");
			let mut nb = 0;
			let mut starknet_block: Vec<u8> = vec![];
			for item in digest {
				println!("item {} : ", nb);
				nb += 1;
				// 	let log: std::option::Option<T> = log.try_to(digest_item_id);
				match (item) {
					(DigestItem::Consensus(MADARA_ENGINE_ID, block)) => {
						println!("log = {:?}", block);
						starknet_block = block.to_vec();
					},
					_ => {},
				}
			}

			let parent_block_hash = StarkHash(
				starknet_block[1..33].try_into().expect("Failed to parse parent_block_hash"),
			);
			let block_number = u64::from_le_bytes(
				starknet_block[33..41].try_into().expect("Failed to parse block_number"),
			);
			let global_state_root = StarkHash(
				starknet_block[41..73].try_into().expect("Failed to parse sequencer_address"),
			);
			let sequencer_address = StarkHash(
				starknet_block[73..105].try_into().expect("Failed to parse sequencer_address"),
			);
			let block_timestamp = u64::from_le_bytes(
				starknet_block[105..113].try_into().expect("Failed to parse block_timestamp"),
			);
			let transaction_count = u128::from_le_bytes(
				starknet_block[113..129].try_into().expect("Failed to parse transaction_count"),
			);
			let transaction_commitment = StarkHash(
				starknet_block[129..161].try_into().expect("Failed to parse sequencer_address"),
			);
			let event_count = u128::from_le_bytes(
				starknet_block[161..177].try_into().expect("Failed to parse event_count"),
			);
			let event_commitment = StarkHash(
				starknet_block[177..209].try_into().expect("Failed to parse sequencer_address"),
			);
			let protocol_version = starknet_block[209];
			let price_in_strk = Some(u64::from_le_bytes(
				starknet_block[211..219].try_into().expect("Failed to parse price_in_strk"),
			));
			let price_in_wei = u128::from_le_bytes(
				starknet_block[219..235].try_into().expect("Failed to parse price_in_wei"),
			);

			let l1_gas_price = ResourcePrice { price_in_strk, price_in_wei };
			let extra_data = None;

			let mut header = StarknetHeader {
				parent_block_hash: parent_block_hash.clone(),
				block_number,
				global_state_root: global_state_root.clone(),
				sequencer_address: sequencer_address.clone(),
				block_timestamp,
				transaction_count,
				transaction_commitment: transaction_commitment.clone(),
				event_count,
				event_commitment: event_commitment.clone(),
				protocol_version,
				l1_gas_price,
				extra_data,
			};

			// println!("HEADER : {:#?}", header);
			// compute hash
			let data: &[FieldElement] = &[
				block_number.into(),
				FieldElement::from_bytes_be(&global_state_root.0).expect("Failed to conv 1"),
				FieldElement::from_bytes_be(&sequencer_address.0).expect("Failed to conv 2"),
				block_timestamp.into(),
				transaction_count.into(),
				FieldElement::from_bytes_be(&transaction_commitment.0).expect("Failed to conv 2"),
				event_count.into(),
				FieldElement::from_bytes_be(&event_commitment.0).expect("Failed to conv 2"),
				FieldElement::ZERO,
				FieldElement::ZERO,
				FieldElement::from_bytes_be(&parent_block_hash.0).expect("Failed to conv 3"),
			];

			let data_as_madara: &[FieldElement] = &[
				header.block_number.into(),
				FieldElement::from_bytes_be(&header.sequencer_address.0).expect("Failed to conv 2"),
				header.block_timestamp.into(),
				header.transaction_count.into(),
				header.event_count.into(),
				header.protocol_version.into(),
				FieldElement::ZERO,
				FieldElement::from_bytes_be(&header.parent_block_hash.0).expect("Failed to conv 3"),
			];

			println!("DATAS : {:#?}", data);

			let block_hash = starknet_core::crypto::compute_hash_on_elements(data);
			println!("HASH SRSLY : {:#?}", block_hash);

			println!("MADARA DATAS : {:#?}", data_as_madara);

			let madara_hash = starknet_core::crypto::compute_hash_on_elements(data_as_madara);
			println!("MADARA HASH SRSLY : {:#?}", madara_hash);
			// h(
			// 	block_number,
			// 	global_state_root,
			// 	sequencer_address,
			// 	block_timestamp,
			// 	transaction_count,
			// 	transaction_commitment,
			// 	event_count,
			// 	event_commitment,
			// 	0,
			// 	0,
			// 	parent_block_hash
			// )

			info!(
				target: "substrate",
				"✨ Imported #{} ({})",
				Colour::White.bold().paint(format!("{}", n.header.number())),
				n.hash, // recuperer ca du digest
			);
		}
		future::ready(())
	})
}
