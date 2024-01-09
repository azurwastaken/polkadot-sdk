(function() {var implementors = {
"bp_polkadot_bulletin":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"bp_polkadot_bulletin/struct.SignedExtension.html\" title=\"struct bp_polkadot_bulletin::SignedExtension\">SignedExtension</a>"]],
"bp_runtime":[["impl&lt;S&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"bp_runtime/extensions/struct.GenericSignedExtension.html\" title=\"struct bp_runtime::extensions::GenericSignedExtension\">GenericSignedExtension</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"bp_runtime/extensions/trait.SignedExtensionSchema.html\" title=\"trait bp_runtime::extensions::SignedExtensionSchema\">SignedExtensionSchema</a>,\n    S::<a class=\"associatedtype\" href=\"bp_runtime/extensions/trait.SignedExtensionSchema.html#associatedtype.Payload\" title=\"type bp_runtime::extensions::SignedExtensionSchema::Payload\">Payload</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    S::<a class=\"associatedtype\" href=\"bp_runtime/extensions/trait.SignedExtensionSchema.html#associatedtype.AdditionalSigned\" title=\"type bp_runtime::extensions::SignedExtensionSchema::AdditionalSigned\">AdditionalSigned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"bridge_hub_rococo_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.BridgeRejectObsoleteHeadersAndMessages.html\" title=\"struct bridge_hub_rococo_runtime::BridgeRejectObsoleteHeadersAndMessages\">BridgeRejectObsoleteHeadersAndMessages</a>"]],
"bridge_hub_westend_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.BridgeRejectObsoleteHeadersAndMessages.html\" title=\"struct bridge_hub_westend_runtime::BridgeRejectObsoleteHeadersAndMessages\">BridgeRejectObsoleteHeadersAndMessages</a>"]],
"bridge_runtime_common":[["impl&lt;T: <a class=\"trait\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html\" title=\"trait bridge_runtime_common::refund_relayer_extension::RefundSignedExtension\">RefundSignedExtension</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.RefundSignedExtensionAdapter.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::RefundSignedExtensionAdapter\">RefundSignedExtensionAdapter</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundSignedExtension::Runtime\">Runtime</a> as <a class=\"trait\" href=\"pallet_bridge_grandpa/pallet/trait.Config.html\" title=\"trait pallet_bridge_grandpa::pallet::Config\">GrandpaConfig</a>&lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html#associatedtype.GrandpaInstance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundSignedExtension::GrandpaInstance\">GrandpaInstance</a>&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_bridge_grandpa/pallet/trait.Config.html#associatedtype.BridgedChain\" title=\"type pallet_bridge_grandpa::pallet::Config::BridgedChain\">BridgedChain</a>: Chain&lt;BlockNumber = <a class=\"type\" href=\"pallet_bridge_parachains/type.RelayBlockNumber.html\" title=\"type pallet_bridge_parachains::RelayBlockNumber\">RelayBlockNumber</a>&gt;,\n    &lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundSignedExtension::Runtime\">Runtime</a> as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/misc/trait.IsSubType.html\" title=\"trait frame_support::traits::misc::IsSubType\">IsSubType</a>&lt;<a class=\"type\" href=\"frame_support/dispatch/type.CallableCallFor.html\" title=\"type frame_support::dispatch::CallableCallFor\">CallableCallFor</a>&lt;Pallet&lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundSignedExtension::Runtime\">Runtime</a>&gt;, T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundSignedExtension::Runtime\">Runtime</a>&gt;&gt; + <a class=\"trait\" href=\"pallet_bridge_grandpa/call_ext/trait.CallSubType.html\" title=\"trait pallet_bridge_grandpa::call_ext::CallSubType\">GrandpaCallSubType</a>&lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundSignedExtension::Runtime\">Runtime</a>, T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html#associatedtype.GrandpaInstance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundSignedExtension::GrandpaInstance\">GrandpaInstance</a>&gt; + <a class=\"trait\" href=\"bridge_runtime_common/messages_call_ext/trait.MessagesCallSubType.html\" title=\"trait bridge_runtime_common::messages_call_ext::MessagesCallSubType\">MessagesCallSubType</a>&lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundSignedExtension::Runtime\">Runtime</a>, &lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundSignedExtension.html#associatedtype.Msgs\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundSignedExtension::Msgs\">Msgs</a> as <a class=\"trait\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableMessagesLaneId.html\" title=\"trait bridge_runtime_common::refund_relayer_extension::RefundableMessagesLaneId\">RefundableMessagesLaneId</a>&gt;::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableMessagesLaneId.html#associatedtype.Instance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundableMessagesLaneId::Instance\">Instance</a>&gt;,</span>"]],
"frame":[],
"frame_system":[["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckNonZeroSender.html\" title=\"struct frame_system::CheckNonZeroSender\">CheckNonZeroSender</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>&gt;,</span>"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckTxVersion.html\" title=\"struct frame_system::CheckTxVersion\">CheckTxVersion</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckGenesis.html\" title=\"struct frame_system::CheckGenesis\">CheckGenesis</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckMortality.html\" title=\"struct frame_system::CheckMortality\">CheckMortality</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckWeight.html\" title=\"struct frame_system::CheckWeight\">CheckWeight</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt;,</span>"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckSpecVersion.html\" title=\"struct frame_system::CheckSpecVersion\">CheckSpecVersion</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"frame_system/struct.CheckNonce.html\" title=\"struct frame_system::CheckNonce\">CheckNonce</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>&gt;,</span>"]],
"pallet_asset_conversion_tx_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_asset_conversion_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_conversion_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::Fungibles\">Fungibles</a> as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    &lt;&lt;T as Config&gt;::OnChargeTransaction as OnChargeTransaction&lt;T&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.Balance\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::Balance\">Balance</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.AssetId\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::AssetId\">AssetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"pallet_asset_tx_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_asset_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_tx_payment::pallet::Config::Fungibles\">Fungibles</a> as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    &lt;&lt;T as Config&gt;::OnChargeTransaction as OnChargeTransaction&lt;T&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/misc/trait.IsType.html\" title=\"trait frame_support::traits::misc::IsType\">IsType</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.Balance\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::Balance\">Balance</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.AssetId\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::AssetId\">AssetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    <a class=\"type\" href=\"frame_support/traits/tokens/fungibles/imbalance/type.Credit.html\" title=\"type frame_support::traits::tokens::fungibles::imbalance::Credit\">Credit</a>&lt;T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>, T::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_tx_payment::pallet::Config::Fungibles\">Fungibles</a>&gt;: <a class=\"trait\" href=\"frame_support/traits/misc/trait.IsType.html\" title=\"trait frame_support::traits::misc::IsType\">IsType</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt;,</span>"]],
"pallet_example_basic":[["impl&lt;T: <a class=\"trait\" href=\"pallet_example_basic/pallet/trait.Config.html\" title=\"trait pallet_example_basic::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_example_basic/struct.WatchDummy.html\" title=\"struct pallet_example_basic::WatchDummy\">WatchDummy</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"frame_support/traits/misc/trait.IsSubType.html\" title=\"trait frame_support::traits::misc::IsSubType\">IsSubType</a>&lt;<a class=\"enum\" href=\"pallet_example_basic/pallet/enum.Call.html\" title=\"enum pallet_example_basic::pallet::Call\">Call</a>&lt;T&gt;&gt;,</span>"]],
"pallet_skip_feeless_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_skip_feeless_payment/pallet/trait.Config.html\" title=\"trait pallet_skip_feeless_payment::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, S: <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a>&lt;AccountId = T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_skip_feeless_payment/struct.SkipCheckIfFeeless.html\" title=\"struct pallet_skip_feeless_payment::SkipCheckIfFeeless\">SkipCheckIfFeeless</a>&lt;T, S&gt;<span class=\"where fmt-newline\">where\n    S::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.SignedExtension.html#associatedtype.Call\" title=\"type sp_runtime::traits::SignedExtension::Call\">Call</a>: <a class=\"trait\" href=\"frame_support/dispatch/trait.CheckIfFeeless.html\" title=\"trait frame_support::dispatch::CheckIfFeeless\">CheckIfFeeless</a>&lt;Origin = <a class=\"type\" href=\"frame_system/pallet_prelude/type.OriginFor.html\" title=\"type frame_system::pallet_prelude::OriginFor\">OriginFor</a>&lt;T&gt;&gt;,</span>"]],
"pallet_sudo":[["impl&lt;T: <a class=\"trait\" href=\"pallet_sudo/pallet/trait.Config.html\" title=\"trait pallet_sudo::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_sudo/struct.CheckOnlySudoAccount.html\" title=\"struct pallet_sudo::CheckOnlySudoAccount\">CheckOnlySudoAccount</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;T as <a class=\"trait\" href=\"pallet_sudo/pallet/trait.Config.html\" title=\"trait pallet_sudo::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_sudo/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type pallet_sudo::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>&gt;,</span>"]],
"pallet_transaction_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_transaction_payment/pallet/trait.Config.html\" title=\"trait pallet_transaction_payment::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"pallet_transaction_payment/struct.ChargeTransactionPayment.html\" title=\"struct pallet_transaction_payment::ChargeTransactionPayment\">ChargeTransactionPayment</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_transaction_payment/pallet/trait.Config.html\" title=\"trait pallet_transaction_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_payment/pallet/trait.Config.html#associatedtype.OnChargeTransaction\" title=\"type pallet_transaction_payment::pallet::Config::OnChargeTransaction\">OnChargeTransaction</a> as <a class=\"trait\" href=\"pallet_transaction_payment/trait.OnChargeTransaction.html\" title=\"trait pallet_transaction_payment::OnChargeTransaction\">OnChargeTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_payment/trait.OnChargeTransaction.html#associatedtype.Balance\" title=\"type pallet_transaction_payment::OnChargeTransaction::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u64.html\">u64</a>&gt;,\n    T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt;,</span>"]],
"polkadot_runtime_common":[["impl&lt;T: <a class=\"trait\" href=\"polkadot_runtime_common/claims/pallet/trait.Config.html\" title=\"trait polkadot_runtime_common::claims::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"polkadot_runtime_common/claims/struct.PrevalidateAttests.html\" title=\"struct polkadot_runtime_common::claims::PrevalidateAttests\">PrevalidateAttests</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type frame_system::pallet::Config::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"frame_support/traits/misc/trait.IsSubType.html\" title=\"trait frame_support::traits::misc::IsSubType\">IsSubType</a>&lt;<a class=\"enum\" href=\"polkadot_runtime_common/claims/pallet/enum.Call.html\" title=\"enum polkadot_runtime_common::claims::pallet::Call\">Call</a>&lt;T&gt;&gt;,</span>"]],
"polkadot_sdk_docs":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"polkadot_sdk_docs/reference_docs/signed_extensions/signed_extensions_example/struct.AddToSignaturePayload.html\" title=\"struct polkadot_sdk_docs::reference_docs::signed_extensions::signed_extensions_example::AddToSignaturePayload\">AddToSignaturePayload</a>"],["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"polkadot_sdk_docs/reference_docs/signed_extensions/signed_extensions_example/struct.AddToPayload.html\" title=\"struct polkadot_sdk_docs::reference_docs::signed_extensions::signed_extensions_example::AddToPayload\">AddToPayload</a>"]],
"polkadot_service":[],
"shell_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"shell_runtime/struct.DisallowSigned.html\" title=\"struct shell_runtime::DisallowSigned\">DisallowSigned</a>"]],
"sp_runtime":[],
"substrate_test_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.SignedExtension.html\" title=\"trait sp_runtime::traits::SignedExtension\">SignedExtension</a> for <a class=\"struct\" href=\"substrate_test_runtime/struct.CheckSubstrateCall.html\" title=\"struct substrate_test_runtime::CheckSubstrateCall\">CheckSubstrateCall</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()