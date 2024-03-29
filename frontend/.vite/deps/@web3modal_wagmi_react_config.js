import {
  require_buffer,
  require_dist
} from "./chunk-MZY7V62A.js";
import {
  require_metamask_sdk
} from "./chunk-QPIPNZJW.js";
import {
  require_dist as require_dist2
} from "./chunk-4SPLTJAT.js";
import {
  require_src
} from "./chunk-UFZVUXLL.js";
import "./chunk-HFRDTJY5.js";
import "./chunk-UX6WLYHD.js";
import "./chunk-AAVJCE3U.js";
import {
  W3mFrameProvider,
  getTransport
} from "./chunk-7BIR7QIQ.js";
import "./chunk-HKERLTQ6.js";
import "./chunk-B5NAUE2Y.js";
import "./chunk-TWKACX2D.js";
import {
  ConstantsUtil
} from "./chunk-TKKBJD7K.js";
import "./chunk-MFTJC365.js";
import "./chunk-UXBCPHH7.js";
import "./chunk-RZICIBFF.js";
import {
  ChainNotConfiguredError,
  ProviderNotFoundError,
  createConfig,
  createConnector,
  injected,
  normalizeChainId
} from "./chunk-4IPQV33A.js";
import "./chunk-YIMMHLSJ.js";
import "./chunk-SMPVNPHN.js";
import "./chunk-EINCNUU3.js";
import {
  ResourceUnavailableRpcError,
  SwitchChainError,
  UserRejectedRequestError,
  getAddress,
  numberToHex
} from "./chunk-YAGZCFYI.js";
import "./chunk-Z4ZRCRDQ.js";
import "./chunk-MTX74L3H.js";
import "./chunk-L34ZC64S.js";
import {
  __toESM
} from "./chunk-JUYIN33I.js";

// node_modules/@web3modal/polyfills/dist/esm/index.js
var import_buffer = __toESM(require_buffer());
var _a;
if (typeof window !== "undefined") {
  if (!window.Buffer) {
    window.Buffer = import_buffer.Buffer;
  }
  if (!window.global) {
    window.global = window;
  }
  if (!window.process) {
    window.process = {};
  }
  if (!((_a = window.process) == null ? void 0 : _a.env)) {
    window.process = { env: {} };
  }
}

// node_modules/@wagmi/connectors/dist/esm/coinbaseWallet.js
var import_wallet_sdk = __toESM(require_dist(), 1);
coinbaseWallet.type = "coinbaseWallet";
function coinbaseWallet(parameters) {
  const reloadOnDisconnect = false;
  let sdk;
  let walletProvider;
  return createConnector((config) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    type: coinbaseWallet.type,
    async connect({ chainId } = {}) {
      try {
        const provider = await this.getProvider();
        const accounts = (await provider.request({
          method: "eth_requestAccounts"
        })).map((x) => getAddress(x));
        provider.on("accountsChanged", this.onAccountsChanged);
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect.bind(this));
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = (chain == null ? void 0 : chain.id) ?? currentChainId;
        }
        return { accounts, chainId: currentChainId };
      } catch (error) {
        if (/(user closed modal|accounts received is empty|user denied account)/i.test(error.message))
          throw new UserRejectedRequestError(error);
        throw error;
      }
    },
    async disconnect() {
      const provider = await this.getProvider();
      provider.removeListener("accountsChanged", this.onAccountsChanged);
      provider.removeListener("chainChanged", this.onChainChanged);
      provider.removeListener("disconnect", this.onDisconnect.bind(this));
      provider.disconnect();
      provider.close();
    },
    async getAccounts() {
      const provider = await this.getProvider();
      return (await provider.request({
        method: "eth_accounts"
      })).map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      const chainId = await provider.request({ method: "eth_chainId" });
      return normalizeChainId(chainId);
    },
    async getProvider() {
      var _a2;
      if (!walletProvider) {
        const { default: CoinbaseWalletSDK } = await import("./dist-LBKHYPWL.js");
        let SDK;
        if (typeof CoinbaseWalletSDK !== "function" && typeof CoinbaseWalletSDK.default === "function")
          SDK = CoinbaseWalletSDK.default;
        else
          SDK = CoinbaseWalletSDK;
        sdk = new SDK({ reloadOnDisconnect, ...parameters });
        const walletExtensionChainId = (_a2 = sdk.walletExtension) == null ? void 0 : _a2.getChainId();
        const chain = config.chains.find((chain2) => parameters.chainId ? chain2.id === parameters.chainId : chain2.id === walletExtensionChainId) || config.chains[0];
        const chainId = parameters.chainId || (chain == null ? void 0 : chain.id);
        const jsonRpcUrl = parameters.jsonRpcUrl || (chain == null ? void 0 : chain.rpcUrls.default.http[0]);
        walletProvider = sdk.makeWeb3Provider(jsonRpcUrl, chainId);
      }
      return walletProvider;
    },
    async isAuthorized() {
      try {
        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ chainId }) {
      var _a2, _b;
      const chain = config.chains.find((chain2) => chain2.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      const provider = await this.getProvider();
      const chainId_ = numberToHex(chain.id);
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainId_ }]
        });
        return chain;
      } catch (error) {
        if (error.code === 4902) {
          try {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: chainId_,
                  chainName: chain.name,
                  nativeCurrency: chain.nativeCurrency,
                  rpcUrls: [((_a2 = chain.rpcUrls.default) == null ? void 0 : _a2.http[0]) ?? ""],
                  blockExplorerUrls: [(_b = chain.blockExplorers) == null ? void 0 : _b.default.url]
                }
              ]
            });
            return chain;
          } catch (error2) {
            throw new UserRejectedRequestError(error2);
          }
        }
        throw new SwitchChainError(error);
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        config.emitter.emit("disconnect");
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = normalizeChainId(chain);
      config.emitter.emit("change", { chainId });
    },
    async onDisconnect(_error) {
      config.emitter.emit("disconnect");
      const provider = await this.getProvider();
      provider.removeListener("accountsChanged", this.onAccountsChanged);
      provider.removeListener("chainChanged", this.onChainChanged);
      provider.removeListener("disconnect", this.onDisconnect.bind(this));
    }
  }));
}

// node_modules/@wagmi/connectors/dist/esm/metaMask.js
var import_sdk = __toESM(require_metamask_sdk(), 1);
metaMask.type = "metaMask";
function metaMask(parameters = {}) {
  let sdk;
  let walletProvider;
  return createConnector((config) => ({
    id: "metaMaskSDK",
    name: "MetaMask",
    type: metaMask.type,
    async setup() {
      const provider = await this.getProvider();
      if (provider)
        provider.on("connect", this.onConnect.bind(this));
    },
    async connect({ chainId, isReconnecting } = {}) {
      var _a2, _b, _c, _d, _e, _f;
      const provider = await this.getProvider();
      let accounts = null;
      if (!isReconnecting) {
        accounts = await this.getAccounts().catch(() => null);
        const isAuthorized = !!(accounts == null ? void 0 : accounts.length);
        if (isAuthorized)
          try {
            const permissions = await provider.request({
              method: "wallet_requestPermissions",
              params: [{ eth_accounts: {} }]
            });
            accounts = (_d = (_c = (_b = (_a2 = permissions[0]) == null ? void 0 : _a2.caveats) == null ? void 0 : _b[0]) == null ? void 0 : _c.value) == null ? void 0 : _d.map((x) => getAddress(x));
          } catch (err) {
            const error = err;
            if (error.code === UserRejectedRequestError.code)
              throw new UserRejectedRequestError(error);
            if (error.code === ResourceUnavailableRpcError.code)
              throw error;
          }
      }
      try {
        if (!(accounts == null ? void 0 : accounts.length)) {
          const requestedAccounts = await sdk.connect();
          accounts = requestedAccounts.map((x) => getAddress(x));
        }
        provider.removeListener("connect", this.onConnect.bind(this));
        provider.on("accountsChanged", this.onAccountsChanged.bind(this));
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect.bind(this));
        if (!sdk.isExtensionActive() && !((_e = sdk._getConnection()) == null ? void 0 : _e.isAuthorized())) {
          let waitForAuthorized = function() {
            return new Promise((resolve) => {
              const connection = sdk._getConnection();
              const connector = connection == null ? void 0 : connection.getConnector();
              connector == null ? void 0 : connector.once(import_sdk.EventType.AUTHORIZED, () => resolve(true));
            });
          };
          await waitForAuthorized();
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = (chain == null ? void 0 : chain.id) ?? currentChainId;
        }
        await ((_f = config.storage) == null ? void 0 : _f.removeItem("metaMaskSDK.disconnected"));
        return { accounts, chainId: currentChainId };
      } catch (err) {
        const error = err;
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        if (error.code === ResourceUnavailableRpcError.code)
          throw new ResourceUnavailableRpcError(error);
        throw error;
      }
    },
    async disconnect() {
      var _a2;
      const provider = await this.getProvider();
      provider.removeListener("accountsChanged", this.onAccountsChanged.bind(this));
      provider.removeListener("chainChanged", this.onChainChanged);
      provider.removeListener("disconnect", this.onDisconnect.bind(this));
      provider.on("connect", this.onConnect.bind(this));
      sdk.terminate();
      await ((_a2 = config.storage) == null ? void 0 : _a2.setItem("metaMaskSDK.disconnected", true));
    },
    async getAccounts() {
      const provider = await this.getProvider();
      const accounts = await provider.request({
        method: "eth_accounts"
      });
      return accounts.map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      const chainId = provider.chainId ?? await (provider == null ? void 0 : provider.request({ method: "eth_chainId" }));
      return normalizeChainId(chainId);
    },
    async getProvider() {
      if (!walletProvider) {
        if (!sdk || !(sdk == null ? void 0 : sdk.isInitialized())) {
          const { MetaMaskSDK } = await import("./metamask-sdk-SAGJSW5V.js");
          sdk = new MetaMaskSDK({
            dappMetadata: { name: "wagmi" },
            enableAnalytics: false,
            extensionOnly: true,
            modals: {
              // Disable by default since it pops up when mobile tries to reconnect
              otp() {
                const noop = () => {
                };
                return { mount: noop, unmount: noop };
              }
            },
            useDeeplink: true,
            _source: "wagmi",
            ...parameters,
            checkInstallationImmediately: false,
            checkInstallationOnAllCalls: false
          });
          await sdk.init();
        }
        try {
          walletProvider = sdk.getProvider();
        } catch (error) {
          const regex = /^SDK state invalid -- undefined( mobile)? provider$/;
          if (!regex.test(error.message))
            throw error;
        }
      }
      return walletProvider;
    },
    async isAuthorized() {
      var _a2;
      try {
        const isDisconnected = (
          // If shim exists in storage, connector is disconnected
          await ((_a2 = config.storage) == null ? void 0 : _a2.getItem("metaMaskSDK.disconnected"))
        );
        if (isDisconnected)
          return false;
        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ chainId }) {
      var _a2, _b, _c;
      const provider = await this.getProvider();
      const chain = config.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      try {
        await Promise.all([
          provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: numberToHex(chainId) }]
          }),
          new Promise((resolve) => config.emitter.once("change", ({ chainId: currentChainId }) => {
            if (currentChainId === chainId)
              resolve();
          }))
        ]);
        return chain;
      } catch (err) {
        const error = err;
        if (error.code === 4902 || // Unwrapping for MetaMask Mobile
        // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
        ((_b = (_a2 = error == null ? void 0 : error.data) == null ? void 0 : _a2.originalError) == null ? void 0 : _b.code) === 4902) {
          try {
            const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
            let blockExplorerUrls = [];
            if (blockExplorer)
              blockExplorerUrls = [
                blockExplorer.url,
                ...Object.values(blockExplorers).map((x) => x.url)
              ];
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: numberToHex(chainId),
                  chainName: chain.name,
                  nativeCurrency: chain.nativeCurrency,
                  rpcUrls: [((_c = chain.rpcUrls.default) == null ? void 0 : _c.http[0]) ?? ""],
                  blockExplorerUrls
                }
              ]
            });
            const currentChainId = await this.getChainId();
            if (currentChainId !== chainId)
              throw new UserRejectedRequestError(new Error("User rejected switch after adding network."));
            return chain;
          } catch (error2) {
            throw new UserRejectedRequestError(error2);
          }
        }
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        throw new SwitchChainError(error);
      }
    },
    async onAccountsChanged(accounts) {
      var _a2;
      if (accounts.length === 0)
        this.onDisconnect();
      else if (config.emitter.listenerCount("connect")) {
        const chainId = (await this.getChainId()).toString();
        this.onConnect({ chainId });
        await ((_a2 = config.storage) == null ? void 0 : _a2.removeItem("metaMaskSDK.disconnected"));
      } else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = normalizeChainId(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const accounts = await this.getAccounts();
      if (accounts.length === 0)
        return;
      const chainId = normalizeChainId(connectInfo.chainId);
      config.emitter.emit("connect", { accounts, chainId });
      const provider = await this.getProvider();
      if (provider) {
        provider.removeListener("connect", this.onConnect.bind(this));
        provider.on("accountsChanged", this.onAccountsChanged.bind(this));
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect.bind(this));
      }
    },
    async onDisconnect(error) {
      const provider = await this.getProvider();
      if (error && error.code === 1013) {
        if (provider && !!(await this.getAccounts()).length)
          return;
      }
      config.emitter.emit("disconnect");
      provider.removeListener("accountsChanged", this.onAccountsChanged.bind(this));
      provider.removeListener("chainChanged", this.onChainChanged);
      provider.removeListener("disconnect", this.onDisconnect.bind(this));
      provider.on("connect", this.onConnect.bind(this));
    }
  }));
}

// node_modules/@wagmi/connectors/dist/esm/safe.js
var import_safe_apps_provider = __toESM(require_dist2(), 1);
var import_safe_apps_sdk = __toESM(require_src(), 1);
safe.type = "safe";
function safe(parameters = {}) {
  const { shimDisconnect = false } = parameters;
  let provider_;
  return createConnector((config) => ({
    id: "safe",
    name: "Safe",
    type: safe.type,
    async connect() {
      var _a2;
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const accounts = await this.getAccounts();
      const chainId = await this.getChainId();
      provider.on("disconnect", this.onDisconnect.bind(this));
      if (shimDisconnect)
        await ((_a2 = config.storage) == null ? void 0 : _a2.removeItem("safe.disconnected"));
      return { accounts, chainId };
    },
    async disconnect() {
      var _a2;
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      provider.removeListener("disconnect", this.onDisconnect.bind(this));
      if (shimDisconnect)
        await ((_a2 = config.storage) == null ? void 0 : _a2.setItem("safe.disconnected", true));
    },
    async getAccounts() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      return (await provider.request({ method: "eth_accounts" })).map(getAddress);
    },
    async getProvider() {
      const isIframe = typeof window !== "undefined" && (window == null ? void 0 : window.parent) !== window;
      if (!isIframe)
        return;
      if (!provider_) {
        const { default: SafeAppsSDK } = await import("./src-DVWQDOOC.js");
        let SDK;
        if (typeof SafeAppsSDK !== "function" && typeof SafeAppsSDK.default === "function")
          SDK = SafeAppsSDK.default;
        else
          SDK = SafeAppsSDK;
        const sdk = new SDK(parameters);
        const safe2 = await sdk.safe.getInfo();
        if (!safe2)
          throw new Error("Could not load Safe information");
        const { SafeAppProvider } = await import("./dist-HAHNVQGV.js");
        provider_ = new SafeAppProvider(safe2, sdk);
      }
      return provider_;
    },
    async getChainId() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      return normalizeChainId(provider.chainId);
    },
    async isAuthorized() {
      var _a2;
      try {
        const isDisconnected = shimDisconnect && // If shim exists in storage, connector is disconnected
        await ((_a2 = config.storage) == null ? void 0 : _a2.getItem("safe.disconnected"));
        if (isDisconnected)
          return false;
        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    onAccountsChanged() {
    },
    onChainChanged() {
    },
    onDisconnect() {
      config.emitter.emit("disconnect");
    }
  }));
}

// node_modules/@wagmi/connectors/dist/esm/walletConnect.js
walletConnect.type = "walletConnect";
function walletConnect(parameters) {
  const isNewChainsStale = parameters.isNewChainsStale ?? true;
  let provider_;
  let providerPromise;
  const NAMESPACE = "eip155";
  return createConnector((config) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: walletConnect.type,
    async setup() {
      const provider = await this.getProvider().catch(() => null);
      if (!provider)
        return;
      provider.on("connect", this.onConnect.bind(this));
      provider.on("session_delete", this.onSessionDelete.bind(this));
    },
    async connect({ chainId, ...rest } = {}) {
      var _a2, _b;
      try {
        const provider = await this.getProvider();
        if (!provider)
          throw new ProviderNotFoundError();
        provider.on("display_uri", this.onDisplayUri);
        let targetChainId = chainId;
        if (!targetChainId) {
          const state = await ((_a2 = config.storage) == null ? void 0 : _a2.getItem("state")) ?? {};
          const isChainSupported = config.chains.some((x) => x.id === state.chainId);
          if (isChainSupported)
            targetChainId = state.chainId;
          else
            targetChainId = (_b = config.chains[0]) == null ? void 0 : _b.id;
        }
        if (!targetChainId)
          throw new Error("No chains found on connector.");
        const isChainsStale = await this.isChainsStale();
        if (provider.session && isChainsStale)
          await provider.disconnect();
        if (!provider.session || isChainsStale) {
          const optionalChains = config.chains.filter((chain) => chain.id !== targetChainId).map((optionalChain) => optionalChain.id);
          await provider.connect({
            optionalChains: [targetChainId, ...optionalChains],
            ..."pairingTopic" in rest ? { pairingTopic: rest.pairingTopic } : {}
          });
          this.setRequestedChainsIds(config.chains.map((x) => x.id));
        }
        const accounts = (await provider.enable()).map((x) => getAddress(x));
        const currentChainId = await this.getChainId();
        provider.removeListener("display_uri", this.onDisplayUri);
        provider.removeListener("connect", this.onConnect.bind(this));
        provider.on("accountsChanged", this.onAccountsChanged.bind(this));
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect.bind(this));
        provider.on("session_delete", this.onSessionDelete.bind(this));
        return { accounts, chainId: currentChainId };
      } catch (error) {
        if (/(user rejected|connection request reset)/i.test(error == null ? void 0 : error.message)) {
          throw new UserRejectedRequestError(error);
        }
        throw error;
      }
    },
    async disconnect() {
      const provider = await this.getProvider();
      try {
        await (provider == null ? void 0 : provider.disconnect());
      } catch (error) {
        if (!/No matching key/i.test(error.message))
          throw error;
      } finally {
        provider == null ? void 0 : provider.removeListener("accountsChanged", this.onAccountsChanged.bind(this));
        provider == null ? void 0 : provider.removeListener("chainChanged", this.onChainChanged);
        provider == null ? void 0 : provider.removeListener("disconnect", this.onDisconnect.bind(this));
        provider == null ? void 0 : provider.removeListener("session_delete", this.onSessionDelete.bind(this));
        provider == null ? void 0 : provider.on("connect", this.onConnect.bind(this));
        this.setRequestedChainsIds([]);
      }
    },
    async getAccounts() {
      const provider = await this.getProvider();
      return provider.accounts.map((x) => getAddress(x));
    },
    async getProvider({ chainId } = {}) {
      var _a2;
      async function initProvider() {
        const optionalChains = config.chains.map((x) => x.id);
        if (!optionalChains.length)
          return;
        const { EthereumProvider } = await import("./index.es-VDEMMTDI.js");
        return await EthereumProvider.init({
          ...parameters,
          disableProviderPing: true,
          optionalChains,
          projectId: parameters.projectId,
          rpcMap: Object.fromEntries(config.chains.map((chain) => [
            chain.id,
            chain.rpcUrls.default.http[0]
          ])),
          showQrModal: parameters.showQrModal ?? true
        });
      }
      if (!provider_) {
        if (!providerPromise)
          providerPromise = initProvider();
        provider_ = await providerPromise;
        provider_ == null ? void 0 : provider_.events.setMaxListeners(Infinity);
      }
      if (chainId)
        await ((_a2 = this.switchChain) == null ? void 0 : _a2.call(this, { chainId }));
      return provider_;
    },
    async getChainId() {
      const provider = await this.getProvider();
      return provider.chainId;
    },
    async isAuthorized() {
      try {
        const [accounts, provider] = await Promise.all([
          this.getAccounts(),
          this.getProvider()
        ]);
        if (!accounts.length)
          return false;
        const isChainsStale = await this.isChainsStale();
        if (isChainsStale && provider.session) {
          await provider.disconnect().catch(() => {
          });
          return false;
        }
        return true;
      } catch {
        return false;
      }
    },
    async switchChain({ chainId }) {
      var _a2;
      const chain = config.chains.find((chain2) => chain2.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      try {
        const provider = await this.getProvider();
        const namespaceChains = this.getNamespaceChainsIds();
        const namespaceMethods = this.getNamespaceMethods();
        const isChainApproved = namespaceChains.includes(chainId);
        if (!isChainApproved && namespaceMethods.includes("wallet_addEthereumChain")) {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: numberToHex(chain.id),
                blockExplorerUrls: [(_a2 = chain.blockExplorers) == null ? void 0 : _a2.default.url],
                chainName: chain.name,
                nativeCurrency: chain.nativeCurrency,
                rpcUrls: [...chain.rpcUrls.default.http]
              }
            ]
          });
          const requestedChains = await this.getRequestedChainsIds();
          this.setRequestedChainsIds([...requestedChains, chainId]);
        }
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: numberToHex(chainId) }]
        });
        return chain;
      } catch (error) {
        const message = typeof error === "string" ? error : error == null ? void 0 : error.message;
        if (/user rejected request/i.test(message))
          throw new UserRejectedRequestError(error);
        throw new SwitchChainError(error);
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = normalizeChainId(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const chainId = normalizeChainId(connectInfo.chainId);
      const accounts = await this.getAccounts();
      config.emitter.emit("connect", { accounts, chainId });
    },
    async onDisconnect(_error) {
      this.setRequestedChainsIds([]);
      config.emitter.emit("disconnect");
      const provider = await this.getProvider();
      provider.removeListener("accountsChanged", this.onAccountsChanged.bind(this));
      provider.removeListener("chainChanged", this.onChainChanged);
      provider.removeListener("disconnect", this.onDisconnect.bind(this));
      provider.removeListener("session_delete", this.onSessionDelete.bind(this));
      provider.on("connect", this.onConnect.bind(this));
    },
    onDisplayUri(uri) {
      config.emitter.emit("message", { type: "display_uri", data: uri });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      var _a2, _b, _c;
      if (!provider_)
        return [];
      const chainIds = (_c = (_b = (_a2 = provider_.session) == null ? void 0 : _a2.namespaces[NAMESPACE]) == null ? void 0 : _b.chains) == null ? void 0 : _c.map((chain) => parseInt(chain.split(":")[1] || ""));
      return chainIds ?? [];
    },
    getNamespaceMethods() {
      var _a2, _b;
      if (!provider_)
        return [];
      const methods = (_b = (_a2 = provider_.session) == null ? void 0 : _a2.namespaces[NAMESPACE]) == null ? void 0 : _b.methods;
      return methods ?? [];
    },
    async getRequestedChainsIds() {
      var _a2;
      return await ((_a2 = config.storage) == null ? void 0 : _a2.getItem(this.requestedChainsStorageKey)) ?? [];
    },
    /**
     * Checks if the target chains match the chains that were
     * initially requested by the connector for the WalletConnect session.
     * If there is a mismatch, this means that the chains on the connector
     * are considered stale, and need to be revalidated at a later point (via
     * connection).
     *
     * There may be a scenario where a dapp adds a chain to the
     * connector later on, however, this chain will not have been approved or rejected
     * by the wallet. In this case, the chain is considered stale.
     *
     * There are exceptions however:
     * -  If the wallet supports dynamic chain addition via `eth_addEthereumChain`,
     *    then the chain is not considered stale.
     * -  If the `isNewChainsStale` flag is falsy on the connector, then the chain is
     *    not considered stale.
     *
     * For the above cases, chain validation occurs dynamically when the user
     * attempts to switch chain.
     *
     * Also check that dapp supports at least 1 chain from previously approved session.
     */
    async isChainsStale() {
      const namespaceMethods = this.getNamespaceMethods();
      if (namespaceMethods.includes("wallet_addEthereumChain"))
        return false;
      if (!isNewChainsStale)
        return false;
      const connectorChains = config.chains.map((x) => x.id);
      const namespaceChains = this.getNamespaceChainsIds();
      if (namespaceChains.length && !namespaceChains.some((id) => connectorChains.includes(id)))
        return false;
      const requestedChains = await this.getRequestedChainsIds();
      return !connectorChains.every((id) => requestedChains.includes(id));
    },
    async setRequestedChainsIds(chains) {
      var _a2;
      await ((_a2 = config.storage) == null ? void 0 : _a2.setItem(this.requestedChainsStorageKey, chains));
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    }
  }));
}

// node_modules/@web3modal/wagmi/dist/esm/src/connectors/EmailConnector.js
function emailConnector(parameters) {
  return createConnector((config) => ({
    id: ConstantsUtil.EMAIL_CONNECTOR_ID,
    name: "Web3Modal Email",
    type: "w3mEmail",
    async connect(options = {}) {
      const provider = await this.getProvider();
      const { address, chainId } = await provider.connect({ chainId: options.chainId });
      const { isDeployed, address: smartAccountAddress } = await this.initSmartAccount();
      if (isDeployed && smartAccountAddress) {
        return {
          accounts: [smartAccountAddress],
          account: smartAccountAddress,
          chainId,
          chain: {
            id: chainId,
            unsuported: false
          }
        };
      }
      return {
        accounts: [address],
        account: address,
        chainId,
        chain: {
          id: chainId,
          unsuported: false
        }
      };
    },
    async initSmartAccount() {
      if (!parameters.options.enableSmartAccounts) {
        return { isDeployed: false };
      }
      const provider = await this.getProvider();
      const chainId = await this.getChainId();
      const { smartAccountEnabledNetworks } = await provider.getSmartAccountEnabledNetworks();
      if (smartAccountEnabledNetworks.includes(chainId)) {
        return await provider.initSmartAccount();
      }
      return { isDeployed: false };
    },
    async disconnect() {
      const provider = await this.getProvider();
      await provider.disconnect();
    },
    async getAccounts() {
      const provider = await this.getProvider();
      const { address } = await provider.connect();
      return [address];
    },
    async getProvider() {
      if (!this.provider) {
        this.provider = new W3mFrameProvider(parameters.options.projectId);
      }
      return Promise.resolve(this.provider);
    },
    async getChainId() {
      const provider = await this.getProvider();
      const { chainId } = await provider.getChainId();
      return chainId;
    },
    async isAuthorized() {
      const provider = await this.getProvider();
      const { isConnected } = await provider.isConnected();
      return isConnected;
    },
    async switchChain({ chainId }) {
      try {
        const chain = config.chains.find((c) => c.id === chainId);
        if (!chain) {
          throw new SwitchChainError(new Error("chain not found on connector."));
        }
        const provider = await this.getProvider();
        await provider.switchNetwork(chainId);
        config.emitter.emit("change", { chainId: normalizeChainId(chainId) });
        return chain;
      } catch (error) {
        if (error instanceof Error) {
          throw new SwitchChainError(error);
        }
        throw error;
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0) {
        this.onDisconnect();
      } else {
        config.emitter.emit("change", { accounts: accounts.map(getAddress) });
      }
    },
    onChainChanged(chain) {
      const chainId = normalizeChainId(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const chainId = normalizeChainId(connectInfo.chainId);
      const accounts = await this.getAccounts();
      config.emitter.emit("connect", { accounts, chainId });
    },
    async onDisconnect(_error) {
      const provider = await this.getProvider();
      await provider.disconnect();
    }
  }));
}

// node_modules/@web3modal/wagmi/dist/esm/src/utils/defaultWagmiReactConfig.js
function defaultWagmiConfig({ projectId, chains, metadata, enableInjected, enableCoinbase, enableEmail, enableWalletConnect, enableEIP6963, enableSmartAccounts, ...wagmiConfig }) {
  const connectors = [];
  const transportsArr = chains.map((chain) => [
    chain.id,
    getTransport({ chainId: chain.id, projectId })
  ]);
  const transports = Object.fromEntries(transportsArr);
  if (enableWalletConnect !== false) {
    connectors.push(walletConnect({ projectId, metadata, showQrModal: false }));
  }
  if (enableInjected !== false) {
    connectors.push(injected({ shimDisconnect: true }));
  }
  if (enableCoinbase !== false) {
    connectors.push(coinbaseWallet({
      appName: (metadata == null ? void 0 : metadata.name) ?? "Unknown",
      appLogoUrl: (metadata == null ? void 0 : metadata.icons[0]) ?? "Unknown",
      enableMobileWalletLink: true
    }));
  }
  if (enableEmail === true) {
    connectors.push(emailConnector({ chains: [...chains], options: { projectId, enableSmartAccounts } }));
  }
  return createConfig({
    chains,
    multiInjectedProviderDiscovery: enableEIP6963 !== false,
    transports,
    ...wagmiConfig,
    connectors
  });
}
export {
  defaultWagmiConfig
};
//# sourceMappingURL=@web3modal_wagmi_react_config.js.map
