import {
  W3mFrameHelpers,
  W3mFrameRpcConstants,
  Web3ModalScaffold,
  getCaipDefaultChain,
  getEmailCaipNetworks,
  getWalletConnectCaipNetworks
} from "./chunk-7BIR7QIQ.js";
import "./chunk-HKERLTQ6.js";
import "./chunk-B5NAUE2Y.js";
import "./chunk-TWKACX2D.js";
import {
  ConstantsUtil as ConstantsUtil2,
  HelpersUtil,
  PresetsUtil
} from "./chunk-TKKBJD7K.js";
import {
  ConstantsUtil
} from "./chunk-MFTJC365.js";
import "./chunk-UXBCPHH7.js";
import "./chunk-RZICIBFF.js";
import {
  connect,
  disconnect,
  getAccount,
  getBalance,
  getEnsAvatar,
  getEnsName,
  signMessage,
  switchChain,
  watchAccount,
  watchConnectors
} from "./chunk-4IPQV33A.js";
import "./chunk-YIMMHLSJ.js";
import "./chunk-SMPVNPHN.js";
import {
  defineBlock,
  defineChain,
  defineTransaction,
  defineTransactionReceipt,
  formatLog,
  formatTransaction,
  serializeAccessList,
  serializeTransaction,
  toRlp,
  toYParitySignatureArray
} from "./chunk-EINCNUU3.js";
import {
  BaseError,
  FeeCapTooHighError,
  InvalidAddressError,
  InvalidChainIdError,
  TipAboveFeeCapError,
  concatHex,
  defineTransactionRequest,
  hexToBigInt,
  hexToBytes,
  hexToNumber,
  isAddress,
  numberToHex,
  toHex,
  trim
} from "./chunk-YAGZCFYI.js";
import "./chunk-Z4ZRCRDQ.js";
import "./chunk-MTX74L3H.js";
import {
  require_react
} from "./chunk-L34ZC64S.js";
import {
  __toESM
} from "./chunk-JUYIN33I.js";

// node_modules/@web3modal/scaffold-react/dist/esm/index.js
var import_react = __toESM(require_react());
var modal = void 0;
function getWeb3Modal(web3modal) {
  if (web3modal) {
    modal = web3modal;
  }
}
function useWeb3ModalTheme() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook');
  }
  function setThemeMode(themeMode2) {
    modal == null ? void 0 : modal.setThemeMode(themeMode2);
  }
  function setThemeVariables(themeVariables2) {
    modal == null ? void 0 : modal.setThemeVariables(themeVariables2);
  }
  const [themeMode, setInternalThemeMode] = (0, import_react.useState)(modal.getThemeMode());
  const [themeVariables, setInternalThemeVariables] = (0, import_react.useState)(modal.getThemeVariables());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeTheme((state) => {
      setInternalThemeMode(state.themeMode);
      setInternalThemeVariables(state.themeVariables);
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return {
    themeMode,
    themeVariables,
    setThemeMode,
    setThemeVariables
  };
}
function useWeb3Modal() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');
  }
  async function open(options) {
    await (modal == null ? void 0 : modal.open(options));
  }
  async function close() {
    await (modal == null ? void 0 : modal.close());
  }
  return { open, close };
}
function useWeb3ModalState() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');
  }
  const [state, setState] = (0, import_react.useState)(modal.getState());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeState((newState) => {
      setState({ ...newState });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return state;
}
function useWeb3ModalEvents() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');
  }
  const [event, setEvents] = (0, import_react.useState)(modal.getEvent());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeEvents((newEvent) => {
      setEvents({ ...newEvent });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return event;
}

// node_modules/viem/_esm/chains/definitions/acala.js
var acala = defineChain({
  id: 787,
  name: "Acala",
  network: "acala",
  nativeCurrency: {
    name: "Acala",
    symbol: "ACA",
    decimals: 18
  },
  rpcUrls: {
    public: {
      http: ["https://eth-rpc-acala.aca-api.network"],
      webSocket: ["wss://eth-rpc-acala.aca-api.network"]
    },
    default: {
      http: ["https://eth-rpc-acala.aca-api.network"],
      webSocket: ["wss://eth-rpc-acala.aca-api.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Acala Blockscout",
      url: "https://blockscout.acala.network",
      apiUrl: "https://blockscout.acala.network/api"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/opStack/contracts.js
var contracts = {
  gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" },
  l1Block: { address: "0x4200000000000000000000000000000000000015" },
  l2CrossDomainMessenger: {
    address: "0x4200000000000000000000000000000000000007"
  },
  l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" },
  l2StandardBridge: { address: "0x4200000000000000000000000000000000000010" },
  l2ToL1MessagePasser: {
    address: "0x4200000000000000000000000000000000000016"
  }
};

// node_modules/viem/_esm/chains/opStack/formatters.js
var formatters = {
  block: defineBlock({
    format(args) {
      var _a;
      const transactions = (_a = args.transactions) == null ? void 0 : _a.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        const formatted = formatTransaction(transaction);
        if (formatted.typeHex === "0x7e") {
          formatted.isSystemTx = transaction.isSystemTx;
          formatted.mint = transaction.mint ? hexToBigInt(transaction.mint) : void 0;
          formatted.sourceHash = transaction.sourceHash;
          formatted.type = "deposit";
        }
        return formatted;
      });
      return {
        transactions,
        stateRoot: args.stateRoot
      };
    }
  }),
  transaction: defineTransaction({
    format(args) {
      const transaction = {};
      if (args.type === "0x7e") {
        transaction.isSystemTx = args.isSystemTx;
        transaction.mint = args.mint ? hexToBigInt(args.mint) : void 0;
        transaction.sourceHash = args.sourceHash;
        transaction.type = "deposit";
      }
      return transaction;
    }
  }),
  transactionReceipt: defineTransactionReceipt({
    format(args) {
      return {
        l1GasPrice: args.l1GasPrice ? hexToBigInt(args.l1GasPrice) : null,
        l1GasUsed: args.l1GasUsed ? hexToBigInt(args.l1GasUsed) : null,
        l1Fee: args.l1Fee ? hexToBigInt(args.l1Fee) : null,
        l1FeeScalar: args.l1FeeScalar ? Number(args.l1FeeScalar) : null
      };
    }
  })
};

// node_modules/viem/_esm/chains/opStack/serializers.js
function serializeTransaction2(transaction, signature) {
  if (isDeposit(transaction))
    return serializeTransactionDeposit(transaction);
  return serializeTransaction(transaction, signature);
}
var serializers = {
  transaction: serializeTransaction2
};
function serializeTransactionDeposit(transaction) {
  assertTransactionDeposit(transaction);
  const { sourceHash, data, from, gas, isSystemTx, mint, to, value } = transaction;
  const serializedTransaction = [
    sourceHash,
    from,
    to ?? "0x",
    mint ? toHex(mint) : "0x",
    value ? toHex(value) : "0x",
    gas ? toHex(gas) : "0x",
    isSystemTx ? "0x1" : "0x",
    data ?? "0x"
  ];
  return concatHex([
    "0x7e",
    toRlp(serializedTransaction)
  ]);
}
function isDeposit(transaction) {
  if (transaction.type === "deposit")
    return true;
  if (typeof transaction.sourceHash !== "undefined")
    return true;
  return false;
}
function assertTransactionDeposit(transaction) {
  const { from, to } = transaction;
  if (from && !isAddress(from))
    throw new InvalidAddressError({ address: from });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
}

// node_modules/viem/_esm/chains/opStack/chainConfig.js
var chainConfig = {
  contracts,
  formatters,
  serializers
};

// node_modules/viem/_esm/chains/definitions/ancient8.js
var sourceId = 1;
var ancient8 = defineChain({
  ...chainConfig,
  id: 888888888,
  name: "Ancient8",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ancient8.gg"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ancient8 explorer",
      url: "https://scan.ancient8.gg",
      apiUrl: "https://scan.ancient8.gg/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId]: {
        address: "0xB09DC08428C8b4EFB4ff9C0827386CDF34277996"
      }
    },
    portal: {
      [sourceId]: {
        address: "0x639F2AECE398Aa76b07e59eF6abe2cFe32bacb68",
        blockCreated: 19070571
      }
    },
    l1StandardBridge: {
      [sourceId]: {
        address: "0xd5e3eDf5b68135D559D572E26bF863FBC1950033",
        blockCreated: 19070571
      }
    }
  },
  sourceId
});

// node_modules/viem/_esm/chains/definitions/ancient8Sepolia.js
var sourceId2 = 11155111;
var ancient8Sepolia = defineChain({
  ...chainConfig,
  id: 28122024,
  name: "Ancient8 Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpcv2-testnet.ancient8.gg"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ancient8 Celestia Testnet explorer",
      url: "https://scanv2-testnet.ancient8.gg",
      apiUrl: "https://scanv2-testnet.ancient8.gg/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId2]: {
        address: "0x942fD5017c0F60575930D8574Eaca13BEcD6e1bB"
      }
    },
    portal: {
      [sourceId2]: {
        address: "0xfa1d9E26A6aCD7b22115D27572c1221B9803c960",
        blockCreated: 4972908
      }
    },
    l1StandardBridge: {
      [sourceId2]: {
        address: "0xF6Bc0146d3c74D48306e79Ae134A260E418C9335",
        blockCreated: 4972908
      }
    }
  },
  sourceId: sourceId2
});

// node_modules/viem/_esm/chains/definitions/anvil.js
var anvil = defineChain({
  id: 31337,
  name: "Anvil",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"]
    }
  }
});

// node_modules/viem/_esm/chains/definitions/apexTestnet.js
var apexTestnet = defineChain({
  id: 3993,
  name: "APEX Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.apexlayer.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://exp-testnet.apexlayer.xyz",
      apiUrl: "https://exp-testnet.apexlayer.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xf7642be33a6b18D16a995657adb5a68CD0438aE2",
      blockCreated: 283775
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/arbitrum.js
var arbitrum = defineChain({
  id: 42161,
  name: "Arbitrum One",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://arb1.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://arbiscan.io",
      apiUrl: "https://api.arbiscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707
    }
  }
});

// node_modules/viem/_esm/chains/definitions/arbitrumGoerli.js
var arbitrumGoerli = defineChain({
  id: 421613,
  name: "Arbitrum Goerli",
  nativeCurrency: {
    name: "Arbitrum Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://goerli.arbiscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 88114
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/arbitrumNova.js
var arbitrumNova = defineChain({
  id: 42170,
  name: "Arbitrum Nova",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://nova.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://nova.arbiscan.io",
      apiUrl: "https://api-nova.arbiscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1746963
    }
  }
});

// node_modules/viem/_esm/chains/definitions/astar.js
var astar = defineChain({
  id: 592,
  name: "Astar",
  network: "astar-mainnet",
  nativeCurrency: {
    name: "Astar",
    symbol: "ASTR",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://astar.api.onfinality.io/public"] }
  },
  blockExplorers: {
    default: {
      name: "Astar Subscan",
      url: "https://astar.subscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 761794
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/astarZkEVM.js
var astarZkEVM = defineChain({
  id: 3776,
  name: "Astar zkEVM",
  network: "AstarZkEVM",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.startale.com/astar-zkevm"]
    }
  },
  blockExplorers: {
    default: {
      name: "Astar zkEVM Explorer",
      url: "https://astar-zkevm.explorer.startale.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x36eabf148272BA81A5225C6a3637972F0EE17771",
      blockCreated: 93528
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/astarZkyoto.js
var astarZkyoto = defineChain({
  id: 6038361,
  name: "Astar zkEVM Testnet zKyoto",
  network: "zKyoto",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.startale.com/zkyoto"]
    }
  },
  blockExplorers: {
    default: {
      name: "zKyoto Explorer",
      url: "https://astar-zkyoto.blockscout.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 196153
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/arbitrumSepolia.js
var arbitrumSepolia = defineChain({
  id: 421614,
  name: "Arbitrum Sepolia",
  nativeCurrency: {
    name: "Arbitrum Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://sepolia.arbiscan.io",
      apiUrl: "https://sepolia.arbiscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 81930
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/astarZkatana.js
var astarZkatana = defineChain({
  id: 1261120,
  name: "Astar zkEVM Testnet zKatana",
  network: "zKatana",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://rpc.zkatana.gelato.digital",
        "https://rpc.startale.com/zkatana"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "zKatana Explorer",
      url: "https://zkatana.explorer.startale.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 31317
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/aurora.js
var aurora = defineChain({
  id: 1313161554,
  name: "Aurora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.aurora.dev"] }
  },
  blockExplorers: {
    default: {
      name: "Aurorascan",
      url: "https://aurorascan.dev",
      apiUrl: "https://aurorascan.dev/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 62907816
    }
  }
});

// node_modules/viem/_esm/chains/definitions/auroraTestnet.js
var auroraTestnet = defineChain({
  id: 1313161555,
  name: "Aurora Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://testnet.aurora.dev"] }
  },
  blockExplorers: {
    default: {
      name: "Aurorascan",
      url: "https://testnet.aurorascan.dev",
      apiUrl: "https://testnet.aurorascan.dev/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/auroria.js
var auroria = defineChain({
  id: 205205,
  name: "Auroria Testnet",
  network: "auroria",
  nativeCurrency: {
    name: "Auroria Stratis",
    symbol: "tSTRAX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://auroria.rpc.stratisevm.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Auroria Testnet Explorer",
      url: "https://auroria.explorer.stratisevm.com"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/avalanche.js
var avalanche = defineChain({
  id: 43114,
  name: "Avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "SnowScan",
      url: "https://snowscan.xyz",
      apiUrl: "https://api.snowscan.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11907934
    }
  }
});

// node_modules/viem/_esm/chains/definitions/avalancheFuji.js
var avalancheFuji = defineChain({
  id: 43113,
  name: "Avalanche Fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "SnowScan",
      url: "https://testnet.snowscan.xyz",
      apiUrl: "https://api-testnet.snowscan.xyz"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7096959
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/bahamut.js
var bahamut = defineChain({
  id: 5165,
  network: "bahamut",
  name: "Bahamut",
  nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://rpc1.bahamut.io",
        "https://bahamut.publicnode.com",
        "https://rpc2.bahamut.io"
      ],
      webSocket: [
        "wss://ws1.sahara.bahamutchain.com",
        "wss://bahamut.publicnode.com",
        "wss://ws2.sahara.bahamutchain.com"
      ]
    },
    public: {
      http: [
        "https://rpc1.bahamut.io",
        "https://bahamut.publicnode.com",
        "https://rpc2.bahamut.io"
      ],
      webSocket: [
        "wss://ws1.sahara.bahamutchain.com",
        "wss://bahamut.publicnode.com",
        "wss://ws2.sahara.bahamutchain.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Ftnscan",
      url: "https://www.ftnscan.com",
      apiUrl: "https://www.ftnscan.com/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/base.js
var sourceId3 = 1;
var base = defineChain({
  ...chainConfig,
  id: 8453,
  name: "Base",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://basescan.org",
      apiUrl: "https://api.basescan.org/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId3]: {
        address: "0x56315b90c40730925ec5485cf004d835058518A0"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 5022
    },
    portal: {
      [sourceId3]: {
        address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
        blockCreated: 17482143
      }
    },
    l1StandardBridge: {
      [sourceId3]: {
        address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
        blockCreated: 17482143
      }
    }
  },
  sourceId: sourceId3
});

// node_modules/viem/_esm/chains/definitions/baseGoerli.js
var sourceId4 = 5;
var baseGoerli = defineChain({
  ...chainConfig,
  id: 84531,
  name: "Base Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://goerli.base.org"] }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://goerli.basescan.org",
      apiUrl: "https://goerli.basescan.org/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId4]: {
        address: "0x2A35891ff30313CcFa6CE88dcf3858bb075A2298"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1376988
    },
    portal: {
      [sourceId4]: {
        address: "0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA"
      }
    },
    l1StandardBridge: {
      [sourceId4]: {
        address: "0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a"
      }
    }
  },
  testnet: true,
  sourceId: sourceId4
});

// node_modules/viem/_esm/chains/definitions/baseSepolia.js
var sourceId5 = 11155111;
var baseSepolia = defineChain({
  ...chainConfig,
  id: 84532,
  network: "base-sepolia",
  name: "Base Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
      apiUrl: "https://api-sepolia.basescan.org/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId5]: {
        address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
      }
    },
    portal: {
      [sourceId5]: {
        address: "0x49f53e41452c74589e85ca1677426ba426459e85",
        blockCreated: 4446677
      }
    },
    l1StandardBridge: {
      [sourceId5]: {
        address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
        blockCreated: 4446677
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1059647
    }
  },
  testnet: true,
  sourceId: sourceId5
});

// node_modules/viem/_esm/chains/definitions/beam.js
var beam = defineChain({
  id: 4337,
  name: "Beam",
  network: "beam",
  nativeCurrency: {
    decimals: 18,
    name: "Beam",
    symbol: "BEAM"
  },
  rpcUrls: {
    public: {
      http: ["https://build.onbeam.com/rpc"],
      webSocket: ["wss://build.onbeam.com/ws"]
    },
    default: {
      http: ["https://build.onbeam.com/rpc"],
      webSocket: ["wss://build.onbeam.com/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Beam Explorer",
      url: "https://subnets.avax.network/beam"
    }
  },
  contracts: {
    multicall3: {
      address: "0x4956f15efdc3dc16645e90cc356eafa65ffc65ec",
      blockCreated: 1
    }
  }
});

// node_modules/viem/_esm/chains/definitions/beamTestnet.js
var beamTestnet = defineChain({
  id: 13337,
  name: "Beam Testnet",
  network: "beam",
  nativeCurrency: {
    decimals: 18,
    name: "Beam",
    symbol: "BEAM"
  },
  rpcUrls: {
    public: {
      http: ["https://build.onbeam.com/rpc/testnet"],
      webSocket: ["wss://build.onbeam.com/ws/testnet"]
    },
    default: {
      http: ["https://build.onbeam.com/rpc/testnet"],
      webSocket: ["wss://build.onbeam.com/ws/testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "Beam Explorer",
      url: "https://subnets-test.avax.network/beam"
    }
  },
  contracts: {
    multicall3: {
      address: "0x9bf49b704ee2a095b95c1f2d4eb9010510c41c9e",
      blockCreated: 3
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/bearNetworkChainMainnet.js
var bearNetworkChainMainnet = defineChain({
  id: 641230,
  name: "Bear Network Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "BearNetworkChain",
    symbol: "BRNKC"
  },
  rpcUrls: {
    default: { http: ["https://brnkc-mainnet.bearnetwork.net"] }
  },
  blockExplorers: {
    default: {
      name: "BrnkScan",
      url: "https://brnkscan.bearnetwork.net",
      apiUrl: "https://brnkscan.bearnetwork.net/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bearNetworkChainTestnet.js
var bearNetworkChainTestnet = defineChain({
  id: 751230,
  name: "Bear Network Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "tBRNKC",
    symbol: "tBRNKC"
  },
  rpcUrls: {
    default: { http: ["https://brnkc-test.bearnetwork.net"] }
  },
  blockExplorers: {
    default: {
      name: "BrnkTestScan",
      url: "https://brnktest-scan.bearnetwork.net",
      apiUrl: "https://brnktest-scan.bearnetwork.net/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/berachainTestnet.js
var berachainTestnet = defineChain({
  id: 80085,
  name: "Berachain Artio",
  nativeCurrency: {
    decimals: 18,
    name: "BERA Token",
    symbol: "BERA"
  },
  rpcUrls: {
    default: { http: ["https://artio.rpc.berachain.com"] }
  },
  blockExplorers: {
    default: {
      name: "Berachain",
      url: "https://artio.beratrail.io"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/bitTorrent.js
var bitTorrent = defineChain({
  id: 199,
  name: "BitTorrent",
  network: "bittorrent-chain-mainnet",
  nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.bittorrentchain.io"] },
    public: { http: ["https://rpc.bittorrentchain.io"] }
  },
  blockExplorers: {
    default: {
      name: "Bttcscan",
      url: "https://bttcscan.com",
      apiUrl: "https://api.bttcscan.com/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bitTorrentTestnet.js
var bitTorrentTestnet = defineChain({
  id: 1028,
  name: "BitTorrent Chain Testnet",
  network: "bittorrent-chain-testnet",
  nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://testrpc.bittorrentchain.io"] },
    public: { http: ["https://testrpc.bittorrentchain.io"] }
  },
  blockExplorers: {
    default: {
      name: "Bttcscan",
      url: "https://testnet.bttcscan.com",
      apiUrl: "https://testnet.bttcscan.com/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/blast.js
var sourceId6 = 1;
var blast = defineChain({
  id: 81457,
  name: "Blast",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://rpc.blast.io"] }
  },
  blockExplorers: {
    default: { name: "Blastscan", url: "https://blastscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 212929
    }
  },
  sourceId: sourceId6
});

// node_modules/viem/_esm/chains/definitions/blastSepolia.js
var sourceId7 = 11155111;
var blastSepolia = defineChain({
  id: 168587773,
  name: "Blast Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.blast.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blastscan",
      url: "https://testnet.blastscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 756690
    }
  },
  testnet: true,
  sourceId: sourceId7
});

// node_modules/viem/_esm/chains/definitions/boba.js
var boba = defineChain({
  id: 288,
  name: "Boba Network",
  nativeCurrency: {
    decimals: 18,
    name: "Boba",
    symbol: "BOBA"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.boba.network"] }
  },
  blockExplorers: {
    default: {
      name: "BOBAScan",
      url: "https://bobascan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 446859
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bronos.js
var bronos = defineChain({
  id: 1039,
  name: "Bronos",
  nativeCurrency: {
    decimals: 18,
    name: "BRO",
    symbol: "BRO"
  },
  rpcUrls: {
    default: { http: ["https://evm.bronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "BronoScan",
      url: "https://broscan.bronos.org"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bronosTestnet.js
var bronosTestnet = defineChain({
  id: 1038,
  name: "Bronos Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Bronos Coin",
    symbol: "tBRO"
  },
  rpcUrls: {
    default: { http: ["https://evm-testnet.bronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "BronoScan",
      url: "https://tbroscan.bronos.org"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/bsc.js
var bsc = defineChain({
  id: 56,
  name: "BNB Smart Chain",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB"
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/bsc"] }
  },
  blockExplorers: {
    default: {
      name: "BscScan",
      url: "https://bscscan.com",
      apiUrl: "https://api.bscscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15921452
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bscTestnet.js
var bscTestnet = defineChain({
  id: 97,
  name: "Binance Smart Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    default: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] }
  },
  blockExplorers: {
    default: {
      name: "BscScan",
      url: "https://testnet.bscscan.com",
      apiUrl: "https://testnet.bscscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/bscGreenfield.js
var bscGreenfield = defineChain({
  id: 1017,
  name: "BNB Greenfield Chain",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB"
  },
  rpcUrls: {
    default: { http: ["https://greenfield-chain.bnbchain.org"] }
  },
  blockExplorers: {
    default: {
      name: "BNB Greenfield Mainnet Scan",
      url: "https://greenfieldscan.com"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/bxn.js
var bxn = defineChain({
  id: 4999,
  name: "BlackFort Exchange Network",
  nativeCurrency: { name: "BlackFort Token", symbol: "BXN", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.blackfort.network/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.blackfort.network",
      apiUrl: "https://explorer.blackfort.network/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bxnTestnet.js
var bxnTestnet = defineChain({
  id: 4777,
  name: "BlackFort Exchange Network Testnet",
  nativeCurrency: {
    name: "BlackFort Testnet Token",
    symbol: "TBXN",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.blackfort.network/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet-explorer.blackfort.network",
      apiUrl: "https://testnet-explorer.blackfort.network/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/canto.js
var canto = defineChain({
  id: 7700,
  name: "Canto",
  nativeCurrency: {
    decimals: 18,
    name: "Canto",
    symbol: "CANTO"
  },
  rpcUrls: {
    default: { http: ["https://canto.gravitychain.io"] }
  },
  blockExplorers: {
    default: {
      name: "Tuber.Build (Blockscout)",
      url: "https://tuber.build"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2905789
    }
  }
});

// node_modules/viem/_esm/chains/celo/utils.js
function isEmpty(value) {
  return value === 0 || value === 0n || value === void 0 || value === null || value === "0" || value === "" || typeof value === "string" && (trim(value).toLowerCase() === "0x" || trim(value).toLowerCase() === "0x00");
}
function isPresent(value) {
  return !isEmpty(value);
}
function isEIP1559(transaction) {
  return typeof transaction.maxFeePerGas !== "undefined" && typeof transaction.maxPriorityFeePerGas !== "undefined";
}
function isCIP42(transaction) {
  if (transaction.type === "cip42") {
    return true;
  }
  return isEIP1559(transaction) && (isPresent(transaction.feeCurrency) || isPresent(transaction.gatewayFeeRecipient) || isPresent(transaction.gatewayFee));
}
function isCIP64(transaction) {
  if (transaction.type === "cip64") {
    return true;
  }
  return isEIP1559(transaction) && isPresent(transaction.feeCurrency) && isEmpty(transaction.gatewayFee) && isEmpty(transaction.gatewayFeeRecipient);
}

// node_modules/viem/_esm/chains/celo/formatters.js
var formatters2 = {
  block: defineBlock({
    exclude: ["difficulty", "gasLimit", "mixHash", "nonce", "uncles"],
    format(args) {
      var _a;
      const transactions = (_a = args.transactions) == null ? void 0 : _a.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        return {
          ...formatTransaction(transaction),
          feeCurrency: transaction.feeCurrency,
          ...transaction.type !== "0x7b" ? {
            gatewayFee: transaction.gatewayFee ? hexToBigInt(transaction.gatewayFee) : null,
            gatewayFeeRecipient: transaction.gatewayFeeRecipient || null
          } : {}
        };
      });
      return {
        randomness: args.randomness,
        transactions
      };
    }
  }),
  transaction: defineTransaction({
    format(args) {
      const transaction = { feeCurrency: args.feeCurrency };
      if (args.type === "0x7b")
        transaction.type = "cip64";
      else {
        if (args.type === "0x7c")
          transaction.type = "cip42";
        transaction.gatewayFee = args.gatewayFee ? hexToBigInt(args.gatewayFee) : null;
        transaction.gatewayFeeRecipient = args.gatewayFeeRecipient;
      }
      return transaction;
    }
  }),
  transactionRequest: defineTransactionRequest({
    format(args) {
      const request = {
        feeCurrency: args.feeCurrency
      };
      if (isCIP64(args))
        request.type = "0x7b";
      else {
        if (isCIP42(args))
          request.type = "0x7c";
        request.gatewayFee = typeof args.gatewayFee !== "undefined" ? numberToHex(args.gatewayFee) : void 0;
        request.gatewayFeeRecipient = args.gatewayFeeRecipient;
      }
      return request;
    }
  })
};

// node_modules/viem/_esm/chains/celo/serializers.js
function serializeTransaction3(transaction, signature) {
  if (isCIP64(transaction))
    return serializeTransactionCIP64(transaction, signature);
  if (isCIP42(transaction))
    return serializeTransactionCIP42(transaction, signature);
  return serializeTransaction(transaction, signature);
}
var serializers2 = {
  transaction: serializeTransaction3
};
function serializeTransactionCIP42(transaction, signature) {
  assertTransactionCIP42(transaction);
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, gatewayFeeRecipient, gatewayFee, data } = transaction;
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    feeCurrency ?? "0x",
    gatewayFeeRecipient ?? "0x",
    gatewayFee ? toHex(gatewayFee) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializeAccessList(accessList),
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x7c",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionCIP64(transaction, signature) {
  assertTransactionCIP64(transaction);
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, data } = transaction;
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializeAccessList(accessList),
    feeCurrency,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x7b",
    toRlp(serializedTransaction)
  ]);
}
var MAX_MAX_FEE_PER_GAS = 2n ** 256n - 1n;
function assertTransactionCIP42(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency, gatewayFee, gatewayFeeRecipient } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (gasPrice)
    throw new BaseError("`gasPrice` is not a valid CIP-42 Transaction attribute.");
  if (isPresent(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (isPresent(maxPriorityFeePerGas) && isPresent(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
  if (isPresent(gatewayFee) && isEmpty(gatewayFeeRecipient) || isPresent(gatewayFeeRecipient) && isEmpty(gatewayFee)) {
    throw new BaseError("`gatewayFee` and `gatewayFeeRecipient` must be provided together.");
  }
  if (isPresent(feeCurrency) && !isAddress(feeCurrency)) {
    throw new BaseError("`feeCurrency` MUST be a token address for CIP-42 transactions.");
  }
  if (isPresent(gatewayFeeRecipient) && !isAddress(gatewayFeeRecipient)) {
    throw new InvalidAddressError(gatewayFeeRecipient);
  }
  if (isEmpty(feeCurrency) && isEmpty(gatewayFeeRecipient)) {
    throw new BaseError("Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions.");
  }
}
function assertTransactionCIP64(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (gasPrice)
    throw new BaseError("`gasPrice` is not a valid CIP-64 Transaction attribute.");
  if (isPresent(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (isPresent(maxPriorityFeePerGas) && isPresent(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
  if (isPresent(feeCurrency) && !isAddress(feeCurrency)) {
    throw new BaseError("`feeCurrency` MUST be a token address for CIP-64 transactions.");
  }
  if (isEmpty(feeCurrency)) {
    throw new BaseError("`feeCurrency` must be provided for CIP-64 transactions.");
  }
}

// node_modules/viem/_esm/chains/celo/chainConfig.js
var chainConfig2 = {
  formatters: formatters2,
  serializers: serializers2
};

// node_modules/viem/_esm/chains/definitions/celo.js
var celo = defineChain({
  ...chainConfig2,
  id: 42220,
  name: "Celo",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO"
  },
  rpcUrls: {
    default: { http: ["https://forno.celo.org"] }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/mainnet",
      apiUrl: "https://explorer.celo.org/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 13112599
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/celoAlfajores.js
var celoAlfajores = defineChain({
  ...chainConfig2,
  id: 44787,
  name: "Alfajores",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "A-CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/alfajores",
      apiUrl: "https://explorer.celo.org/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14569001
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/chiliz.js
var chiliz = defineChain({
  id: 88888,
  name: "Chiliz Chain",
  network: "chiliz-chain",
  nativeCurrency: {
    decimals: 18,
    name: "CHZ",
    symbol: "CHZ"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/chiliz", "https://chiliz.publicnode.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Chiliz Explorer",
      url: "https://scan.chiliz.com",
      apiUrl: "https://scan.chiliz.com/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/classic.js
var classic = defineChain({
  id: 61,
  name: "Ethereum Classic",
  nativeCurrency: {
    decimals: 18,
    name: "ETC",
    symbol: "ETC"
  },
  rpcUrls: {
    default: { http: ["https://etc.rivet.link"] }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.com/etc/mainnet"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/confluxESpace.js
var confluxESpace = defineChain({
  id: 1030,
  name: "Conflux eSpace",
  nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm.confluxrpc.org"],
      webSocket: ["wss://evm.confluxrpc.org/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "ConfluxScan",
      url: "https://evm.confluxscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
      blockCreated: 68602935
    }
  }
});

// node_modules/viem/_esm/chains/definitions/confluxESpaceTestnet.js
var confluxESpaceTestnet = defineChain({
  id: 71,
  name: "Conflux eSpace Testnet",
  network: "cfx-espace-testnet",
  testnet: true,
  nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evmtestnet.confluxrpc.org"],
      webSocket: ["wss://evmtestnet.confluxrpc.org/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "ConfluxScan",
      url: "https://evmtestnet.confluxscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
      blockCreated: 117499050
    }
  }
});

// node_modules/viem/_esm/chains/definitions/coreDao.js
var coreDao = defineChain({
  id: 1116,
  name: "Core Dao",
  nativeCurrency: {
    decimals: 18,
    name: "Core",
    symbol: "CORE"
  },
  rpcUrls: {
    default: { http: ["https://rpc.coredao.org"] }
  },
  blockExplorers: {
    default: {
      name: "CoreDao",
      url: "https://scan.coredao.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 11907934
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/cronos.js
var cronos = defineChain({
  id: 25,
  name: "Cronos Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos",
    symbol: "CRO"
  },
  rpcUrls: {
    default: { http: ["https://evm.cronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "Cronoscan",
      url: "https://cronoscan.com",
      apiUrl: "https://api.cronoscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1963112
    }
  }
});

// node_modules/viem/_esm/chains/definitions/cronosTestnet.js
var cronosTestnet = defineChain({
  id: 338,
  name: "Cronos Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "CRO",
    symbol: "tCRO"
  },
  rpcUrls: {
    default: { http: ["https://evm-t3.cronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "Cronos Explorer",
      url: "https://cronos.org/explorer/testnet3"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 10191251
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/crossbell.js
var crossbell = defineChain({
  id: 3737,
  name: "Crossbell",
  nativeCurrency: {
    decimals: 18,
    name: "CSB",
    symbol: "CSB"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.crossbell.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "CrossScan",
      url: "https://scan.crossbell.io",
      apiUrl: "https://scan.crossbell.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 38246031
    }
  }
});

// node_modules/viem/_esm/chains/definitions/defichainEvm.js
var defichainEvm = defineChain({
  id: 1130,
  network: "defichain-evm",
  name: "DeFiChain EVM Mainnet",
  nativeCurrency: {
    name: "DeFiChain",
    symbol: "DFI",
    decimals: 8
  },
  rpcUrls: {
    default: {
      http: ["https://eth.mainnet.ocean.jellyfishsdk.com"]
    },
    public: {
      http: ["https://eth.mainnet.ocean.jellyfishsdk.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "DeFiScan",
      url: "https://meta.defiscan.live"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 137852
    }
  }
});

// node_modules/viem/_esm/chains/definitions/defichainEvmTestnet.js
var defichainEvmTestnet = defineChain({
  id: 1131,
  network: "defichain-evm-testnet",
  name: "DeFiChain EVM Testnet",
  nativeCurrency: {
    name: "DeFiChain",
    symbol: "DFI",
    decimals: 8
  },
  rpcUrls: {
    default: {
      http: ["https://eth.testnet.ocean.jellyfishsdk.com"]
    },
    public: {
      http: ["https://eth.testnet.ocean.jellyfishsdk.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "DeFiScan",
      url: "https://meta.defiscan.live/?network=TestNet"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 156462
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/dfk.js
var dfk = defineChain({
  id: 53935,
  name: "DFK Chain",
  nativeCurrency: {
    decimals: 18,
    name: "Jewel",
    symbol: "JEWEL"
  },
  rpcUrls: {
    default: {
      http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "DFKSubnetScan",
      url: "https://subnets.avax.network/defi-kingdoms"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/dogechain.js
var dogechain = defineChain({
  id: 2e3,
  name: "Dogechain",
  nativeCurrency: {
    decimals: 18,
    name: "Dogechain",
    symbol: "DC"
  },
  rpcUrls: {
    default: { http: ["https://rpc.dogechain.dog"] }
  },
  blockExplorers: {
    default: {
      name: "DogeChainExplorer",
      url: "https://explorer.dogechain.dog",
      apiUrl: "https://explorer.dogechain.dog/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/edgeware.js
var edgeware = defineChain({
  id: 2021,
  name: "Edgeware EdgeEVM Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Edgeware",
    symbol: "EDG"
  },
  rpcUrls: {
    default: { http: ["https://edgeware-evm.jelliedowl.net"] }
  },
  blockExplorers: {
    default: {
      name: "Edgscan by Bharathcoorg",
      url: "https://edgscan.live",
      apiUrl: "https://edgscan.live/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 18117872
    }
  }
});

// node_modules/viem/_esm/chains/definitions/edgewareTestnet.js
var edgewareTestnet = defineChain({
  id: 2022,
  name: "Beresheet BereEVM Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Testnet EDG",
    symbol: "tEDG"
  },
  rpcUrls: {
    default: { http: ["https://beresheet-evm.jelliedowl.net"] }
  },
  blockExplorers: {
    default: {
      name: "Edgscan by Bharathcoorg",
      url: "https://testnet.edgscan.live",
      apiUrl: "https://testnet.edgscan.live/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/eos.js
var eos = defineChain({
  id: 17777,
  name: "EOS EVM",
  nativeCurrency: {
    decimals: 18,
    name: "EOS",
    symbol: "EOS"
  },
  rpcUrls: {
    default: { http: ["https://api.evm.eosnetwork.com"] }
  },
  blockExplorers: {
    default: {
      name: "EOS EVM Explorer",
      url: "https://explorer.evm.eosnetwork.com",
      apiUrl: "https://explorer.evm.eosnetwork.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7943933
    }
  }
});

// node_modules/viem/_esm/chains/definitions/eosTestnet.js
var eosTestnet = defineChain({
  id: 15557,
  name: "EOS EVM Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "EOS",
    symbol: "EOS"
  },
  rpcUrls: {
    default: { http: ["https://api.testnet.evm.eosnetwork.com"] }
  },
  blockExplorers: {
    default: {
      name: "EOS EVM Testnet Explorer",
      url: "https://explorer.testnet.evm.eosnetwork.com",
      apiUrl: "https://explorer.testnet.evm.eosnetwork.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9067940
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/etherlinkTestnet.js
var etherlinkTestnet = defineChain({
  id: 128123,
  name: "Etherlink Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Tez",
    symbol: "XTZ"
  },
  rpcUrls: {
    default: { http: ["https://node.ghostnet.etherlink.com"] }
  },
  blockExplorers: {
    default: {
      name: "Etherlink Testnet",
      url: "https://testnet-explorer.etherlink.com"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/evmos.js
var evmos = defineChain({
  id: 9001,
  name: "Evmos",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS"
  },
  rpcUrls: {
    default: { http: ["https://eth.bd.evmos.org:8545"] }
  },
  blockExplorers: {
    default: {
      name: "Evmos Block Explorer",
      url: "https://escan.live"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/evmosTestnet.js
var evmosTestnet = defineChain({
  id: 9e3,
  name: "Evmos Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS"
  },
  rpcUrls: {
    default: { http: ["https://eth.bd.evmos.dev:8545"] }
  },
  blockExplorers: {
    default: {
      name: "Evmos Testnet Block Explorer",
      url: "https://evm.evmos.dev/"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/ekta.js
var ekta = defineChain({
  id: 1994,
  name: "Ekta",
  nativeCurrency: {
    decimals: 18,
    name: "EKTA",
    symbol: "EKTA"
  },
  rpcUrls: {
    default: { http: ["https://main.ekta.io"] }
  },
  blockExplorers: {
    default: {
      name: "Ektascan",
      url: "https://ektascan.io",
      apiUrl: "https://ektascan.io/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/ektaTestnet.js
var ektaTestnet = defineChain({
  id: 1004,
  name: "Ekta Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "EKTA",
    symbol: "EKTA"
  },
  rpcUrls: {
    default: { http: ["https://test.ekta.io:8545"] }
  },
  blockExplorers: {
    default: {
      name: "Test Ektascan",
      url: "https://test.ektascan.io",
      apiUrl: "https://test.ektascan.io/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/fantom.js
var fantom = defineChain({
  id: 250,
  name: "Fantom",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/fantom"] }
  },
  blockExplorers: {
    default: {
      name: "FTMScan",
      url: "https://ftmscan.com",
      apiUrl: "https://api.ftmscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 33001987
    }
  }
});

// node_modules/viem/_esm/chains/definitions/fantomSonicTestnet.js
var fantomSonicTestnet = defineChain({
  id: 64240,
  name: "Fantom Sonic Open Testnet",
  network: "fantom-sonic-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpcapi.sonic.fantom.network"] }
  },
  blockExplorers: {
    default: {
      name: "Fantom Sonic Open Testnet Explorer",
      url: "https://public-sonic.fantom.network"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/fantomTestnet.js
var fantomTestnet = defineChain({
  id: 4002,
  name: "Fantom Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.fantom.network"] }
  },
  blockExplorers: {
    default: {
      name: "FTMScan",
      url: "https://testnet.ftmscan.com",
      apiUrl: "https://testnet.ftmscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 8328688
    }
  }
});

// node_modules/viem/_esm/chains/definitions/fibo.js
var fibo = defineChain({
  id: 12306,
  name: "Fibo Chain",
  nativeCurrency: {
    decimals: 18,
    name: "fibo",
    symbol: "FIBO"
  },
  rpcUrls: {
    default: { http: ["https://network.hzroc.art"] }
  },
  blockExplorers: {
    default: {
      name: "FiboScan",
      url: "https://scan.fibochain.org"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/filecoin.js
var filecoin = defineChain({
  id: 314,
  name: "Filecoin Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "filecoin",
    symbol: "FIL"
  },
  rpcUrls: {
    default: { http: ["https://api.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: {
      name: "Filfox",
      url: "https://filfox.info/en"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3328594
    }
  }
});

// node_modules/viem/_esm/chains/definitions/filecoinCalibration.js
var filecoinCalibration = defineChain({
  id: 314159,
  name: "Filecoin Calibration",
  nativeCurrency: {
    decimals: 18,
    name: "testnet filecoin",
    symbol: "tFIL"
  },
  rpcUrls: {
    default: { http: ["https://api.calibration.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: {
      name: "Filscan",
      url: "https://calibration.filscan.io"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/filecoinHyperspace.js
var filecoinHyperspace = defineChain({
  id: 3141,
  name: "Filecoin Hyperspace",
  nativeCurrency: {
    decimals: 18,
    name: "testnet filecoin",
    symbol: "tFIL"
  },
  rpcUrls: {
    default: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: {
      name: "Filfox",
      url: "https://hyperspace.filfox.info/en"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/flare.js
var flare = defineChain({
  id: 14,
  name: "Flare Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "flare",
    symbol: "FLR"
  },
  rpcUrls: {
    default: { http: ["https://flare-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Flare Explorer",
      url: "https://flare-explorer.flare.network",
      apiUrl: "https://flare-explorer.flare.network/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/flareTestnet.js
var flareTestnet = defineChain({
  id: 114,
  name: "Coston2",
  nativeCurrency: {
    decimals: 18,
    name: "coston2flare",
    symbol: "C2FLR"
  },
  rpcUrls: {
    default: { http: ["https://coston2-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Coston2 Explorer",
      url: "https://coston2-explorer.flare.network",
      apiUrl: "https://coston2-explorer.flare.network/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/flowPreviewnet.js
var flowPreviewnet = defineChain({
  id: 646,
  name: "FlowEVM Previewnet",
  nativeCurrency: {
    decimals: 18,
    name: "Flow",
    symbol: "FLOW"
  },
  rpcUrls: {
    default: {
      http: ["https://previewnet.evm.nodes.onflow.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Previewnet Explorer",
      url: "https://previewnet.flowdiver.io"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/flowMainnet.js
var flowMainnet = defineChain({
  id: 747,
  name: "FlowEVM Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Flow",
    symbol: "FLOW"
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.evm.nodes.onflow.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Mainnet Explorer",
      url: "https://flowdiver.io"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/foundry.js
var foundry = defineChain({
  id: 31337,
  name: "Foundry",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"]
    }
  }
});

// node_modules/viem/_esm/chains/definitions/fraxtal.js
var sourceId8 = 1;
var fraxtal = defineChain({
  ...chainConfig,
  id: 252,
  name: "Fraxtal",
  nativeCurrency: { name: "Frax Ether", symbol: "frxETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.frax.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "fraxscan",
      url: "https://fraxscan.com",
      apiUrl: "https://api.fraxscan.com/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId8]: {
        address: "0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11"
    },
    portal: {
      [sourceId8]: {
        address: "0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D",
        blockCreated: 19135323
      }
    },
    l1StandardBridge: {
      [sourceId8]: {
        address: "0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2",
        blockCreated: 19135323
      }
    }
  },
  sourceId: sourceId8
});

// node_modules/viem/_esm/chains/definitions/fraxtalTestnet.js
var sourceId9 = 17e3;
var fraxtalTestnet = defineChain({
  ...chainConfig,
  id: 2522,
  name: "Fraxtal Testnet",
  nativeCurrency: { name: "Frax Ether", symbol: "frxETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.frax.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "fraxscan testnet",
      url: "https://holesky.fraxscan.com",
      apiUrl: "https://api-holesky.fraxscan.com/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId9]: {
        address: "0x715EA64DA13F4d0831ece4Ad3E8c1aa013167F32"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11"
    },
    portal: {
      [sourceId9]: {
        address: "0xB9c64BfA498d5b9a8398Ed6f46eb76d90dE5505d",
        blockCreated: 318416
      }
    },
    l1StandardBridge: {
      [sourceId9]: {
        address: "0x0BaafC217162f64930909aD9f2B27125121d6332",
        blockCreated: 318416
      }
    }
  },
  sourceId: sourceId9
});

// node_modules/viem/_esm/chains/definitions/fuse.js
var fuse = defineChain({
  id: 122,
  name: "Fuse",
  nativeCurrency: { name: "Fuse", symbol: "FUSE", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.fuse.io"] }
  },
  blockExplorers: {
    default: {
      name: "Fuse Explorer",
      url: "https://explorer.fuse.io",
      apiUrl: "https://explorer.fuse.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 16146628
    }
  }
});

// node_modules/viem/_esm/chains/definitions/fuseSparknet.js
var fuseSparknet = defineChain({
  id: 123,
  name: "Fuse Sparknet",
  nativeCurrency: { name: "Spark", symbol: "SPARK", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.fusespark.io"] }
  },
  blockExplorers: {
    default: {
      name: "Sparkent Explorer",
      url: "https://explorer.fusespark.io",
      apiUrl: "https://explorer.fusespark.io/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/iotex.js
var iotex = defineChain({
  id: 4689,
  name: "IoTeX",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX"
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.mainnet.iotex.io"],
      webSocket: ["wss://babel-api.mainnet.iotex.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "IoTeXScan",
      url: "https://iotexscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 22163670
    }
  }
});

// node_modules/viem/_esm/chains/definitions/iotexTestnet.js
var iotexTestnet = defineChain({
  id: 4690,
  name: "IoTeX Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX"
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.testnet.iotex.io"],
      webSocket: ["wss://babel-api.testnet.iotex.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "IoTeXScan",
      url: "https://testnet.iotexscan.io"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/jbc.js
var jbc = defineChain({
  id: 8899,
  name: "JIBCHAIN L1",
  network: "jbc",
  nativeCurrency: { name: "JBC", symbol: "JBC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-l1.jibchain.net"]
    },
    public: {
      http: ["https://rpc-l1.jibchain.net"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://exp-l1.jibchain.net",
      apiUrl: "https://exp-l1.jibchain.net/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xc0C8C486D1466C57Efe13C2bf000d4c56F47CBdC",
      blockCreated: 2299048
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/karura.js
var karura = defineChain({
  id: 686,
  name: "Karura",
  network: "karura",
  nativeCurrency: {
    name: "Karura",
    symbol: "KAR",
    decimals: 18
  },
  rpcUrls: {
    public: {
      http: ["https://eth-rpc-karura.aca-api.network"],
      webSocket: ["wss://eth-rpc-karura.aca-api.network"]
    },
    default: {
      http: ["https://eth-rpc-karura.aca-api.network"],
      webSocket: ["wss://eth-rpc-karura.aca-api.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Karura Blockscout",
      url: "https://blockscout.karura.network",
      apiUrl: "https://blockscout.karura.network/api"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/gobi.js
var gobi = defineChain({
  id: 1663,
  name: "Horizen Gobi Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Test ZEN",
    symbol: "tZEN"
  },
  rpcUrls: {
    default: { http: ["https://gobi-testnet.horizenlabs.io/ethv1"] }
  },
  blockExplorers: {
    default: {
      name: "Gobi Explorer",
      url: "https://gobi-explorer.horizen.io"
    }
  },
  contracts: {},
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/goerli.js
var goerli = defineChain({
  id: 5,
  name: "Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io",
      apiUrl: "https://api-goerli.etherscan.io/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xfc4AC75C46C914aF5892d6d3eFFcebD7917293F1",
      blockCreated: 10339206
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6507670
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/gnosis.js
var gnosis = defineChain({
  id: 100,
  name: "Gnosis",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.gnosischain.com"],
      webSocket: ["wss://rpc.gnosischain.com/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "Gnosisscan",
      url: "https://gnosisscan.io",
      apiUrl: "https://api.gnosisscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 21022491
    }
  }
});

// node_modules/viem/_esm/chains/definitions/gnosisChiado.js
var gnosisChiado = defineChain({
  id: 10200,
  name: "Gnosis Chiado",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.chiadochain.net"],
      webSocket: ["wss://rpc.chiadochain.net/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.chiadochain.net",
      apiUrl: "https://blockscout.chiadochain.net/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4967313
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/hardhat.js
var hardhat = defineChain({
  id: 31337,
  name: "Hardhat",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] }
  }
});

// node_modules/viem/_esm/chains/definitions/harmonyOne.js
var harmonyOne = defineChain({
  id: 16666e5,
  name: "Harmony One",
  nativeCurrency: {
    name: "Harmony",
    symbol: "ONE",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/harmony"] }
  },
  blockExplorers: {
    default: {
      name: "Harmony Explorer",
      url: "https://explorer.harmony.one"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 24185753
    }
  }
});

// node_modules/viem/_esm/chains/definitions/haqqMainnet.js
var haqqMainnet = defineChain({
  id: 11235,
  name: "HAQQ Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLM"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.haqq.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.haqq.network",
      apiUrl: "https://explorer.haqq.network/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/haqqTestedge2.js
var haqqTestedge2 = defineChain({
  id: 54211,
  name: "HAQQ Testedge 2",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLMT"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.testedge2.haqq.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.testedge2.haqq.network",
      apiUrl: "https://explorer.testedge2.haqq.network/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/hedera.js
var hedera = defineChain({
  id: 295,
  name: "Hedera Mainnet",
  network: "hedera-mainnet",
  nativeCurrency: {
    symbol: "HBAR",
    name: "HBAR",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.hashio.io/api"]
    }
  },
  blockExplorers: {
    default: {
      name: "Hashscan",
      url: "https://hashscan.io/mainnet"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/hederaTestnet.js
var hederaTestnet = defineChain({
  id: 296,
  name: "Hedera Testnet",
  network: "hedera-testnet",
  nativeCurrency: {
    symbol: "HBAR",
    name: "HBAR",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.hashio.io/api"]
    }
  },
  blockExplorers: {
    default: {
      name: "Hashscan",
      url: "https://hashscan.io/testnet"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/hederaPreviewnet.js
var hederaPreviewnet = defineChain({
  id: 297,
  name: "Hedera Previewnet",
  network: "hedera-previewnet",
  nativeCurrency: {
    symbol: "HBAR",
    name: "HBAR",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://previewnet.hashio.io/api"]
    }
  },
  blockExplorers: {
    default: {
      name: "Hashscan",
      url: "https://hashscan.io/previewnet"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/holesky.js
var holesky = defineChain({
  id: 17e3,
  name: "Holesky",
  nativeCurrency: { name: "Holesky Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://ethereum-holesky.publicnode.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://holesky.etherscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 77
    },
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
      blockCreated: 801613
    },
    ensUniversalResolver: {
      address: "0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b",
      blockCreated: 973484
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/kakarotSepolia.js
var kakarotSepolia = defineChain({
  id: 107107114116,
  name: "Kakarot Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rpc.kakarot.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kakarot Scan",
      url: "https://sepolia.kakarotscan.org"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/kava.js
var kava = defineChain({
  id: 2222,
  name: "Kava EVM",
  network: "kava-mainnet",
  nativeCurrency: {
    name: "Kava",
    symbol: "KAVA",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://evm.kava.io"] }
  },
  blockExplorers: {
    default: {
      name: "Kava EVM Explorer",
      url: "https://kavascan.com",
      apiUrl: "https://kavascan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 3661165
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/kavaTestnet.js
var kavaTestnet = defineChain({
  id: 2221,
  name: "Kava EVM Testnet",
  network: "kava-testnet",
  nativeCurrency: {
    name: "Kava",
    symbol: "KAVA",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://evm.testnet.kava.io"] }
  },
  blockExplorers: {
    default: {
      name: "Kava EVM Testnet Explorer",
      url: "https://testnet.kavascan.com/",
      apiUrl: "https://testnet.kavascan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6",
      blockCreated: 7242179
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/kcc.js
var kcc = defineChain({
  id: 321,
  name: "KCC Mainnet",
  network: "KCC Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "KCS",
    symbol: "KCS"
  },
  rpcUrls: {
    default: {
      http: ["https://kcc-rpc.com"]
    },
    public: {
      http: ["https://kcc-rpc.com"]
    }
  },
  blockExplorers: {
    default: { name: "KCC Explorer", url: "https://explorer.kcc.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11760430
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/klaytn.js
var klaytn = defineChain({
  id: 8217,
  name: "Klaytn",
  nativeCurrency: {
    decimals: 18,
    name: "Klaytn",
    symbol: "KLAY"
  },
  rpcUrls: {
    default: { http: ["https://public-en-cypress.klaytn.net"] }
  },
  blockExplorers: {
    default: {
      name: "KlaytnScope",
      url: "https://scope.klaytn.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 96002415
    }
  }
});

// node_modules/viem/_esm/chains/definitions/klaytnBaobab.js
var klaytnBaobab = defineChain({
  id: 1001,
  name: "Klaytn Baobab Testnet",
  network: "klaytn-baobab",
  nativeCurrency: {
    decimals: 18,
    name: "Baobab Klaytn",
    symbol: "KLAY"
  },
  rpcUrls: {
    default: { http: ["https://public-en-baobab.klaytn.net"] }
  },
  blockExplorers: {
    default: {
      name: "KlaytnScope",
      url: "https://baobab.klaytnscope.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 123390593
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/kroma.js
var kroma = defineChain({
  id: 255,
  name: "Kroma",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.kroma.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kroma Explorer",
      url: "https://blockscout.kroma.network",
      apiUrl: "https://blockscout.kroma.network/api"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/kromaSepolia.js
var kromaSepolia = defineChain({
  id: 2358,
  name: "Kroma Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.sepolia.kroma.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kroma Sepolia Explorer",
      url: "https://blockscout.sepolia.kroma.network",
      apiUrl: "https://blockscout.sepolia.kroma.network/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/lightlinkPegasus.js
var lightlinkPegasus = defineChain({
  id: 1891,
  name: "LightLink Pegasus Testnet",
  network: "lightlink-pegasus",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://replicator.pegasus.lightlink.io/rpc/v1"]
    }
  },
  blockExplorers: {
    default: {
      name: "LightLink Pegasus Explorer",
      url: "https://pegasus.lightlink.io"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/lightlinkPhoenix.js
var lightlinkPhoenix = defineChain({
  id: 1890,
  name: "LightLink Phoenix Mainnet",
  network: "lightlink-phoenix",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://replicator.phoenix.lightlink.io/rpc/v1"]
    }
  },
  blockExplorers: {
    default: {
      name: "LightLink Phoenix Explorer",
      url: "https://phoenix.lightlink.io"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/linea.js
var linea = defineChain({
  id: 59144,
  name: "Linea Mainnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.linea.build"],
      webSocket: ["wss://rpc.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://lineascan.build",
      apiUrl: "https://api.lineascan.build/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 42
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/lineaTestnet.js
var lineaTestnet = defineChain({
  id: 59140,
  name: "Linea Goerli Testnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.goerli.linea.build"],
      webSocket: ["wss://rpc.goerli.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli.lineascan.build",
      apiUrl: "https://goerli.lineascan.build/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 498623
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/liskSepolia.js
var sourceId10 = 11155111;
var liskSepolia = defineChain({
  ...chainConfig,
  id: 4202,
  network: "lisk-sepolia",
  name: "Lisk Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia-api.lisk.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
      apiUrl: "https://sepolia-blockscout.lisk.com/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId10]: {
        address: "0xA0E35F56C318DE1bD5D9ca6A94Fe7e37C5663348"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11"
    },
    portal: {
      [sourceId10]: {
        address: "0xe3d90F21490686Ec7eF37BE788E02dfC12787264"
      }
    },
    l1StandardBridge: {
      [sourceId10]: {
        address: "0x1Fb30e446eA791cd1f011675E5F3f5311b70faF5"
      }
    }
  },
  testnet: true,
  sourceId: sourceId10
});

// node_modules/viem/_esm/chains/definitions/localhost.js
var localhost = defineChain({
  id: 1337,
  name: "Localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] }
  }
});

// node_modules/viem/_esm/chains/definitions/lukso.js
var lukso = defineChain({
  id: 42,
  network: "lukso",
  name: "LUKSO",
  nativeCurrency: {
    name: "LUKSO",
    symbol: "LYX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.lukso.network"],
      webSocket: ["wss://ws-rpc.mainnet.lukso.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "LUKSO Mainnet Explorer",
      url: "https://explorer.execution.mainnet.lukso.network",
      apiUrl: "https://api.explorer.execution.mainnet.lukso.network/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mainnet.js
var mainnet = defineChain({
  id: 1,
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://cloudflare-eth.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
      apiUrl: "https://api.etherscan.io/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
      blockCreated: 19258213
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mandala.js
var mandala = defineChain({
  id: 595,
  name: "Mandala TC9",
  network: "mandala",
  nativeCurrency: {
    name: "Mandala",
    symbol: "mACA",
    decimals: 18
  },
  rpcUrls: {
    public: {
      http: ["https://eth-rpc-tc9.aca-staging.network"],
      webSocket: ["wss://eth-rpc-tc9.aca-staging.network"]
    },
    default: {
      http: ["https://eth-rpc-tc9.aca-staging.network"],
      webSocket: ["wss://eth-rpc-tc9.aca-staging.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Mandala Blockscout",
      url: "https://blockscout.mandala.aca-staging.network",
      apiUrl: "https://blockscout.mandala.aca-staging.network/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/manta.js
var manta = defineChain({
  id: 169,
  name: "Manta Pacific Mainnet",
  network: "manta",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://pacific-rpc.manta.network/http"] }
  },
  blockExplorers: {
    default: {
      name: "Manta Explorer",
      url: "https://pacific-explorer.manta.network",
      apiUrl: "https://pacific-explorer.manta.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 332890
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mantaTestnet.js
var mantaTestnet = defineChain({
  id: 3441005,
  name: "Manta Pacific Testnet",
  network: "manta-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://manta-testnet.calderachain.xyz/http"] }
  },
  blockExplorers: {
    default: {
      name: "Manta Testnet Explorer",
      url: "https://pacific-explorer.testnet.manta.network",
      apiUrl: "https://pacific-explorer.testnet.manta.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
      blockCreated: 419915
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/mantle.js
var mantle = defineChain({
  id: 5e3,
  name: "Mantle",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.mantle.xyz"] }
  },
  blockExplorers: {
    default: {
      name: "Mantle Explorer",
      url: "https://explorer.mantle.xyz",
      apiUrl: "https://explorer.mantle.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 304717
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mantleTestnet.js
var mantleTestnet = defineChain({
  id: 5001,
  name: "Mantle Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.mantle.xyz"] }
  },
  blockExplorers: {
    default: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz",
      apiUrl: "https://explorer.testnet.mantle.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 561333
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/merlin.js
var merlin = defineChain({
  id: 4200,
  name: "Merlin",
  nativeCurrency: {
    name: "BTC",
    symbol: "BTC",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://rpc.merlinchain.io"] }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://scan.merlinchain.io",
      apiUrl: "https://scan.merlinchain.io/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/metachain.js
var metachain = defineChain({
  id: 571,
  name: "MetaChain Mainnet",
  nativeCurrency: { name: "Metatime Coin", symbol: "MTC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.metatime.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "MetaExplorer",
      url: "https://explorer.metatime.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0000000000000000000000000000000000003001",
      blockCreated: 0
    }
  }
});

// node_modules/viem/_esm/chains/definitions/metachainIstanbul.js
var metachainIstanbul = defineChain({
  id: 1453,
  name: "MetaChain Istanbul",
  nativeCurrency: { name: "Metatime Coin", symbol: "MTC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://istanbul-rpc.metachain.dev"]
    }
  },
  blockExplorers: {
    default: {
      name: "MetaExplorer",
      url: "https://istanbul-explorer.metachain.dev"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0000000000000000000000000000000000003001",
      blockCreated: 0
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/meter.js
var meter = defineChain({
  id: 82,
  name: "Meter",
  nativeCurrency: {
    decimals: 18,
    name: "MTR",
    symbol: "MTR"
  },
  rpcUrls: {
    default: { http: ["https://rpc.meter.io"] }
  },
  blockExplorers: {
    default: {
      name: "MeterScan",
      url: "https://scan.meter.io"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/meterTestnet.js
var meterTestnet = defineChain({
  id: 83,
  name: "Meter Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MTR",
    symbol: "MTR"
  },
  rpcUrls: {
    default: { http: ["https://rpctest.meter.io"] }
  },
  blockExplorers: {
    default: {
      name: "MeterTestnetScan",
      url: "https://scan-warringstakes.meter.io"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/metis.js
var metis = defineChain({
  id: 1088,
  name: "Metis",
  nativeCurrency: {
    decimals: 18,
    name: "Metis",
    symbol: "METIS"
  },
  rpcUrls: {
    default: { http: ["https://andromeda.metis.io/?owner=1088"] }
  },
  blockExplorers: {
    default: {
      name: "Andromeda Explorer",
      url: "https://andromeda-explorer.metis.io",
      apiUrl: "https://andromeda-explorer.metis.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2338552
    }
  }
});

// node_modules/viem/_esm/chains/definitions/metisGoerli.js
var metisGoerli = defineChain({
  id: 599,
  name: "Metis Goerli",
  nativeCurrency: {
    decimals: 18,
    name: "Metis Goerli",
    symbol: "METIS"
  },
  rpcUrls: {
    default: { http: ["https://goerli.gateway.metisdevops.link"] }
  },
  blockExplorers: {
    default: {
      name: "Metis Goerli Explorer",
      url: "https://goerli.explorer.metisdevops.link",
      apiUrl: "https://goerli.explorer.metisdevops.link/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1006207
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mev.js
var mev = defineChain({
  id: 7518,
  name: "MEVerse Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "MEVerse",
    symbol: "MEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.meversemainnet.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://www.meversescan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 86881340
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mevTestnet.js
var mevTestnet = defineChain({
  id: 4759,
  name: "MEVerse Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MEVerse",
    symbol: "MEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.meversetestnet.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://testnet.meversescan.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 64371115
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/mintSepoliaTestnet.js
var mintSepoliaTestnet = defineChain({
  id: 1686,
  name: "Mint Sepolia Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.mintchain.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Mintchain Testnet explorer",
      url: "https://testnet-explorer.mintchain.io"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/mode.js
var mode = defineChain({
  id: 34443,
  name: "Mode Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.mode.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Mode Explorer",
      url: "https://explorer.mode.network"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2465882
    }
  }
});

// node_modules/viem/_esm/chains/definitions/modeTestnet.js
var modeTestnet = defineChain({
  id: 919,
  name: "Mode Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.mode.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia.explorer.mode.network",
      apiUrl: "https://sepolia.explorer.mode.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
      blockCreated: 3019007
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/moonbaseAlpha.js
var moonbaseAlpha = defineChain({
  id: 1287,
  name: "Moonbase Alpha",
  nativeCurrency: {
    decimals: 18,
    name: "DEV",
    symbol: "DEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      webSocket: ["wss://wss.api.moonbase.moonbeam.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonbase.moonscan.io",
      apiUrl: "https://moonbase.moonscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1850686
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/moonbeam.js
var moonbeam = defineChain({
  id: 1284,
  name: "Moonbeam",
  nativeCurrency: {
    decimals: 18,
    name: "GLMR",
    symbol: "GLMR"
  },
  rpcUrls: {
    default: {
      http: ["https://moonbeam.public.blastapi.io"],
      webSocket: ["wss://moonbeam.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonscan.io",
      apiUrl: "https://api-moonbeam.moonscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 609002
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/moonbeamDev.js
var moonbeamDev = defineChain({
  id: 1281,
  name: "Moonbeam Development Node",
  nativeCurrency: {
    decimals: 18,
    name: "DEV",
    symbol: "DEV"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:9944"],
      webSocket: ["wss://127.0.0.1:9944"]
    }
  }
});

// node_modules/viem/_esm/chains/definitions/moonriver.js
var moonriver = defineChain({
  id: 1285,
  name: "Moonriver",
  nativeCurrency: {
    decimals: 18,
    name: "MOVR",
    symbol: "MOVR"
  },
  rpcUrls: {
    default: {
      http: ["https://moonriver.public.blastapi.io"],
      webSocket: ["wss://moonriver.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonriver.moonscan.io",
      apiUrl: "https://api-moonriver.moonscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1597904
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/morphSepolia.js
var morphSepolia = defineChain({
  id: 2710,
  name: "Morph Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.morphl2.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Morph Testnet Explorer",
      url: "https://explorer-testnet.morphl2.io",
      apiUrl: "https://explorer-api-testnet.morphl2.io/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/neonDevnet.js
var neonDevnet = defineChain({
  id: 245022926,
  name: "Neon EVM DevNet",
  nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://devnet.neonevm.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Neonscan",
      url: "https://devnet.neonscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 205206112
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/neonMainnet.js
var neonMainnet = defineChain({
  id: 245022934,
  network: "neonMainnet",
  name: "Neon EVM MainNet",
  nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://neon-proxy-mainnet.solana.p2p.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Neonscan",
      url: "https://neonscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 206545524
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/nexi.js
var nexi = defineChain({
  id: 4242,
  name: "Nexi",
  nativeCurrency: { name: "Nexi", symbol: "NEXI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.chain.nexi.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "NexiScan",
      url: "https://www.nexiscan.com",
      apiUrl: "https://www.nexiscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
      blockCreated: 25770160
    }
  }
});

// node_modules/viem/_esm/chains/definitions/nexilix.js
var nexilix = defineChain({
  id: 240,
  name: "Nexilix Smart Chain",
  nativeCurrency: {
    decimals: 18,
    name: "Nexilix",
    symbol: "NEXILIX"
  },
  rpcUrls: {
    default: { http: ["https://rpcurl.pos.nexilix.com"] }
  },
  blockExplorers: {
    default: {
      name: "NexilixScan",
      url: "https://scan.nexilix.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",
      blockCreated: 74448
    }
  }
});

// node_modules/viem/_esm/chains/definitions/oasys.js
var oasys = defineChain({
  id: 248,
  name: "Oasys",
  nativeCurrency: { name: "Oasys", symbol: "OAS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.oasys.games"]
    }
  },
  blockExplorers: {
    default: {
      name: "OasysScan",
      url: "https://scan.oasys.games",
      apiUrl: "https://scan.oasys.games/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/oasisTestnet.js
var oasisTestnet = defineChain({
  id: 4090,
  network: "oasis-testnet",
  name: "Oasis Testnet",
  nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc1.oasis.bahamutchain.com"] },
    public: { http: ["https://rpc1.oasis.bahamutchain.com"] }
  },
  blockExplorers: {
    default: {
      name: "Ftnscan",
      url: "https://oasis.ftnscan.com",
      apiUrl: "https://oasis.ftnscan.com/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/okc.js
var okc = defineChain({
  id: 66,
  name: "OKC",
  nativeCurrency: {
    decimals: 18,
    name: "OKT",
    symbol: "OKT"
  },
  rpcUrls: {
    default: { http: ["https://exchainrpc.okex.org"] }
  },
  blockExplorers: {
    default: {
      name: "oklink",
      url: "https://www.oklink.com/okc"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 10364792
    }
  }
});

// node_modules/viem/_esm/chains/definitions/optimism.js
var sourceId11 = 1;
var optimism = defineChain({
  ...chainConfig,
  id: 10,
  name: "OP Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Optimism Explorer",
      url: "https://optimistic.etherscan.io",
      apiUrl: "https://api-optimistic.etherscan.io/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId11]: {
        address: "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263
    },
    portal: {
      [sourceId11]: {
        address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
      }
    },
    l1StandardBridge: {
      [sourceId11]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    }
  },
  sourceId: sourceId11
});

// node_modules/viem/_esm/chains/definitions/optimismGoerli.js
var sourceId12 = 5;
var optimismGoerli = defineChain({
  ...chainConfig,
  id: 420,
  name: "Optimism Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://goerli.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io",
      apiUrl: "https://goerli-optimism.etherscan.io/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId12]: {
        address: "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 49461
    },
    portal: {
      [sourceId12]: {
        address: "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383"
      }
    },
    l1StandardBridge: {
      [sourceId12]: {
        address: "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8"
      }
    }
  },
  testnet: true,
  sourceId: sourceId12
});

// node_modules/viem/_esm/chains/definitions/optimismSepolia.js
var sourceId13 = 11155111;
var optimismSepolia = defineChain({
  ...chainConfig,
  id: 11155420,
  name: "OP Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com",
      apiUrl: "https://optimism-sepolia.blockscout.com/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId13]: {
        address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1620204
    },
    portal: {
      [sourceId13]: {
        address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC"
      }
    },
    l1StandardBridge: {
      [sourceId13]: {
        address: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1"
      }
    }
  },
  testnet: true,
  sourceId: sourceId13
});

// node_modules/viem/_esm/chains/definitions/opBNB.js
var opBNB = defineChain({
  id: 204,
  name: "opBNB",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] }
  },
  blockExplorers: {
    default: {
      name: "opbnbscan",
      url: "https://mainnet.opbnbscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 512881
    }
  }
});

// node_modules/viem/_esm/chains/definitions/opBNBTestnet.js
var opBNBTestnet = defineChain({
  id: 5611,
  name: "opBNB Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "tBNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    default: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] }
  },
  blockExplorers: {
    default: {
      name: "opbnbscan",
      url: "https://testnet.opbnbscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3705108
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/oortmainnetDev.js
var oortMainnetDev = defineChain({
  id: 9700,
  name: "OORT MainnetDev",
  nativeCurrency: {
    decimals: 18,
    name: "OORT",
    symbol: "OORT"
  },
  rpcUrls: {
    default: { http: ["https://dev-rpc.oortech.com"] }
  },
  blockExplorers: {
    oort: {
      name: "OORT MainnetDev Explorer",
      url: "https://dev-scan.oortech.com"
    },
    default: {
      name: "OORT MainnetDev Explorer",
      url: "https://dev-scan.oortech.com"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/palm.js
var palm = defineChain({
  id: 11297108109,
  name: "Palm",
  nativeCurrency: {
    decimals: 18,
    name: "PALM",
    symbol: "PALM"
  },
  rpcUrls: {
    default: {
      http: ["https://palm-mainnet.public.blastapi.io"],
      webSocket: ["wss://palm-mainnet.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Chainlens",
      url: "https://palm.chainlens.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15429248
    }
  }
});

// node_modules/viem/_esm/chains/definitions/palmTestnet.js
var palmTestnet = defineChain({
  id: 11297108099,
  name: "Palm Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "PALM",
    symbol: "PALM"
  },
  rpcUrls: {
    default: {
      http: ["https://palm-mainnet.public.blastapi.io"],
      webSocket: ["wss://palm-mainnet.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Chainlens",
      url: "https://palm.chainlens.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15429248
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/pgn.js
var sourceId14 = 1;
var pgn = defineChain({
  id: 424,
  network: "pgn",
  name: "PGN",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.publicgoods.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "PGN Explorer",
      url: "https://explorer.publicgoods.network",
      apiUrl: "https://explorer.publicgoods.network/api"
    },
    blocksout: {
      name: "PGN Explorer",
      url: "https://explorer.publicgoods.network",
      apiUrl: "https://explorer.publicgoods.network/api"
    }
  },
  contracts: {
    l2OutputOracle: {
      [sourceId14]: {
        address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3380209
    },
    portal: {
      [sourceId14]: {
        address: "0xb26Fd985c5959bBB382BAFdD0b879E149e48116c"
      }
    },
    l1StandardBridge: {
      [sourceId14]: {
        address: "0xD0204B9527C1bA7bD765Fa5CCD9355d38338272b"
      }
    }
  },
  formatters,
  sourceId: sourceId14
});

// node_modules/viem/_esm/chains/definitions/pgnTestnet.js
var sourceId15 = 11155111;
var pgnTestnet = defineChain({
  id: 58008,
  network: "pgn-testnet",
  name: "PGN ",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.publicgoods.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "PGN Testnet Explorer",
      url: "https://explorer.sepolia.publicgoods.network",
      apiUrl: "https://explorer.sepolia.publicgoods.network/api"
    },
    blocksout: {
      name: "PGN Testnet Explorer",
      url: "https://explorer.sepolia.publicgoods.network",
      apiUrl: "https://explorer.sepolia.publicgoods.network/api"
    }
  },
  contracts: {
    l2OutputOracle: {
      [sourceId15]: {
        address: "0xD5bAc3152ffC25318F848B3DD5dA6C85171BaEEe"
      }
    },
    portal: {
      [sourceId15]: {
        address: "0xF04BdD5353Bb0EFF6CA60CfcC78594278eBfE179"
      }
    },
    l1StandardBridge: {
      [sourceId15]: {
        address: "0xFaE6abCAF30D23e233AC7faF747F2fC3a5a6Bfa3"
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3754925
    }
  },
  formatters,
  sourceId: sourceId15,
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/phoenix.js
var phoenix = defineChain({
  id: 13381,
  name: "Phoenix Blockchain",
  nativeCurrency: { name: "Phoenix", symbol: "PHX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.phoenixplorer.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Phoenixplorer",
      url: "https://phoenixplorer.com",
      apiUrl: "https://phoenixplorer.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0x498cF757a575cFF2c2Ed9f532f56Efa797f86442",
      blockCreated: 5620192
    }
  }
});

// node_modules/viem/_esm/chains/definitions/plinga.js
var plinga = defineChain({
  id: 242,
  name: "Plinga",
  nativeCurrency: { name: "Plinga", symbol: "PLINGA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpcurl.mainnet.plgchain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Plgscan",
      url: "https://www.plgscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0989576160f2e7092908BB9479631b901060b6e4",
      blockCreated: 204489
    }
  }
});

// node_modules/viem/_esm/chains/definitions/plumeTestnet.js
var sourceId16 = 11155111;
var plumeTestnet = defineChain({
  id: 161221135,
  name: "Plume Testnet",
  nativeCurrency: {
    name: "Plume Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://plume-testnet.rpc.caldera.xyz/http"],
      webSocket: ["wss://plume-testnet.rpc.caldera.xyz/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://plume-testnet.explorer.caldera.xyz",
      apiUrl: "https://plume-testnet.explorer.caldera.xyz/api"
    }
  },
  testnet: true,
  sourceId: sourceId16
});

// node_modules/viem/_esm/chains/definitions/polygon.js
var polygon = defineChain({
  id: 137,
  name: "Polygon",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://polygon-rpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://polygonscan.com",
      apiUrl: "https://api.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  }
});

// node_modules/viem/_esm/chains/definitions/polygonAmoy.js
var polygonAmoy = defineChain({
  id: 80002,
  name: "Polygon Amoy",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "OK LINK",
      url: "https://www.oklink.com/amoy"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/polygonMumbai.js
var polygonMumbai = defineChain({
  id: 80001,
  name: "Polygon Mumbai",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/polygon_mumbai"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com",
      apiUrl: "https://mumbai.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/polygonZkEvmTestnet.js
var polygonZkEvmTestnet = defineChain({
  id: 1442,
  name: "Polygon zkEVM Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.public.zkevm-test.net"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://testnet-zkevm.polygonscan.com",
      apiUrl: "https://testnet-zkevm.polygonscan.com/api"
    }
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 525686
    }
  }
});

// node_modules/viem/_esm/chains/definitions/polygonZkEvm.js
var polygonZkEvm = defineChain({
  id: 1101,
  name: "Polygon zkEVM",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://zkevm-rpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://zkevm.polygonscan.com",
      apiUrl: "https://api-zkevm.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 57746
    }
  }
});

// node_modules/viem/_esm/chains/definitions/pulsechain.js
var pulsechain = defineChain({
  id: 369,
  name: "PulseChain",
  nativeCurrency: { name: "Pulse", symbol: "PLS", decimals: 18 },
  testnet: false,
  rpcUrls: {
    default: {
      http: ["https://rpc.pulsechain.com"],
      webSocket: ["wss://ws.pulsechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PulseScan",
      url: "https://scan.pulsechain.com",
      apiUrl: "https://api.scan.pulsechain.com/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});

// node_modules/viem/_esm/chains/definitions/pulsechainV4.js
var pulsechainV4 = defineChain({
  id: 943,
  name: "PulseChain V4",
  testnet: true,
  nativeCurrency: { name: "V4 Pulse", symbol: "v4PLS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
      webSocket: ["wss://ws.v4.testnet.pulsechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PulseScan",
      url: "https://scan.v4.testnet.pulsechain.com",
      apiUrl: "https://scan.v4.testnet.pulsechain.com/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});

// node_modules/viem/_esm/chains/definitions/qMainnet.js
var qMainnet = defineChain({
  id: 35441,
  name: "Q Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Q",
    symbol: "Q"
  },
  rpcUrls: {
    default: { http: ["https://rpc.q.org"] }
  },
  blockExplorers: {
    default: {
      name: "Q Mainnet Explorer",
      url: "https://explorer.q.org",
      apiUrl: "https://explorer.q.org/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/qTestnet.js
var qTestnet = defineChain({
  id: 35443,
  name: "Q Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Q",
    symbol: "Q"
  },
  rpcUrls: {
    default: { http: ["https://rpc.qtestnet.org"] }
  },
  blockExplorers: {
    default: {
      name: "Q Testnet Explorer",
      url: "https://explorer.qtestnet.org",
      apiUrl: "https://explorer.qtestnet.org/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/rollux.js
var rollux = defineChain({
  id: 570,
  name: "Rollux Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.rollux.com"],
      webSocket: ["wss://rpc.rollux.com/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "RolluxExplorer",
      url: "https://explorer.rollux.com",
      apiUrl: "https://explorer.rollux.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 119222
    }
  }
});

// node_modules/viem/_esm/chains/definitions/rolluxTestnet.js
var rolluxTestnet = defineChain({
  id: 57e3,
  name: "Rollux Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-tanenbaum.rollux.com/"],
      webSocket: ["wss://rpc-tanenbaum.rollux.com/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "RolluxTestnetExplorer",
      url: "https://rollux.tanenbaum.io",
      apiUrl: "https://rollux.tanenbaum.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1813675
    }
  }
});

// node_modules/viem/_esm/chains/definitions/ronin.js
var ronin = defineChain({
  id: 2020,
  name: "Ronin",
  nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.roninchain.com/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ronin Explorer",
      url: "https://app.roninchain.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 26023535
    }
  }
});

// node_modules/viem/_esm/chains/definitions/rootstock.js
var rootstock = defineChain({
  id: 30,
  name: "Rootstock Mainnet",
  network: "rootstock",
  nativeCurrency: {
    decimals: 18,
    name: "Rootstock Bitcoin",
    symbol: "RBTC"
  },
  rpcUrls: {
    default: { http: ["https://public-node.rsk.co"] }
  },
  blockExplorers: {
    default: {
      name: "RSK Explorer",
      url: "https://explorer.rsk.co"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4249540
    }
  }
});

// node_modules/viem/_esm/chains/definitions/rss3.js
var sourceId17 = 1;
var rss3 = defineChain({
  ...chainConfig,
  id: 12553,
  name: "RSS3 VSL Mainnet",
  nativeCurrency: { name: "RSS3", symbol: "RSS3", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.rss3.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "RSS3 VSL Mainnet Scan",
      url: "https://scan.rss3.io",
      apiUrl: "https://scan.rss3.io/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId17]: {
        address: "0xE6f24d2C32B3109B18ed33cF08eFb490b1e09C10"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14193
    },
    portal: {
      [sourceId17]: {
        address: "0x6A12432491bbbE8d3babf75F759766774C778Db4",
        blockCreated: 19387057
      }
    },
    l1StandardBridge: {
      [sourceId17]: {
        address: "0x4cbab69108Aa72151EDa5A3c164eA86845f18438"
      }
    }
  },
  sourceId: sourceId17
});

// node_modules/viem/_esm/chains/definitions/rss3Sepolia.js
var sourceId18 = 11155111;
var rss3Sepolia = defineChain({
  ...chainConfig,
  id: 2331,
  name: "RSS3 VSL Sepolia Testnet",
  nativeCurrency: { name: "RSS3", symbol: "RSS3", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.rss3.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "RSS3 VSL Sepolia Testnet Scan",
      url: "https://scan.testnet.rss3.io",
      apiUrl: "https://scan.testnet.rss3.io/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId18]: {
        address: "0xDb5c46C3Eaa6Ed6aE8b2379785DF7dd029C0dC81"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 55697
    },
    portal: {
      [sourceId18]: {
        address: "0xcBD77E8E1E7F06B25baDe67142cdE82652Da7b57",
        blockCreated: 5345035
      }
    },
    l1StandardBridge: {
      [sourceId18]: {
        address: "0xdDD29bb63B0839FB1cE0eE439Ff027738595D07B"
      }
    }
  },
  testnet: true,
  sourceId: sourceId18
});

// node_modules/viem/_esm/chains/definitions/saigon.js
var saigon = defineChain({
  id: 2021,
  name: "Saigon Testnet",
  nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://saigon-testnet.roninchain.com/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Saigon Explorer",
      url: "https://saigon-app.roninchain.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 18736871
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/sapphire.js
var sapphire = defineChain({
  id: 23294,
  name: "Oasis Sapphire",
  network: "sapphire",
  nativeCurrency: { name: "Sapphire Rose", symbol: "ROSE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sapphire.oasis.io"],
      webSocket: ["wss://sapphire.oasis.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Oasis Sapphire Explorer",
      url: "https://explorer.sapphire.oasis.io",
      apiUrl: "https://explorer.sapphire.oasis.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 734531
    }
  }
});

// node_modules/viem/_esm/chains/definitions/sapphireTestnet.js
var sapphireTestnet = defineChain({
  id: 23295,
  name: "Oasis Sapphire Testnet",
  network: "sapphire-testnet",
  nativeCurrency: { name: "Sapphire Test Rose", symbol: "TEST", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.sapphire.oasis.dev"],
      webSocket: ["wss://testnet.sapphire.oasis.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Oasis Sapphire Testnet Explorer",
      url: "https://testnet.explorer.sapphire.oasis.dev",
      apiUrl: "https://testnet.explorer.sapphire.oasis.dev/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/scroll.js
var scroll = defineChain({
  id: 534352,
  name: "Scroll",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.scroll.io"],
      webSocket: ["wss://wss-rpc.scroll.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://scrollscan.com",
      apiUrl: "https://api.scrollscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/scrollSepolia.js
var scrollSepolia = defineChain({
  id: 534351,
  name: "Scroll Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rpc.scroll.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.scroll.io",
      apiUrl: "https://sepolia-blockscout.scroll.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9473
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/scrollTestnet.js
var scrollTestnet = defineChain({
  id: 534353,
  name: "Scroll Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://alpha-rpc.scroll.io/l2"],
      webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.scroll.io",
      apiUrl: "https://blockscout.scroll.io/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/sepolia.js
var sepolia = defineChain({
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "SEP", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
      apiUrl: "https://api-sepolia.etherscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
      blockCreated: 5317080
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/shimmer.js
var shimmer = defineChain({
  id: 148,
  name: "Shimmer",
  network: "shimmer",
  nativeCurrency: {
    decimals: 18,
    name: "Shimmer",
    symbol: "SMR"
  },
  rpcUrls: {
    default: {
      http: ["https://json-rpc.evm.shimmer.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shimmer Network Explorer",
      url: "https://explorer.evm.shimmer.network",
      apiUrl: "https://explorer.evm.shimmer.network/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/shimmerTestnet.js
var shimmerTestnet = defineChain({
  id: 1073,
  name: "Shimmer Testnet",
  network: "shimmer-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Shimmer",
    symbol: "SMR"
  },
  rpcUrls: {
    default: {
      http: ["https://json-rpc.evm.testnet.shimmer.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shimmer Network Explorer",
      url: "https://explorer.evm.testnet.shimmer.network",
      apiUrl: "https://explorer.evm.testnet.shimmer.network/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/skale/brawl.js
var skaleBlockBrawlers = defineChain({
  id: 391845894,
  name: "SKALE | Block Brawlers",
  nativeCurrency: { name: "BRAWL", symbol: "BRAWL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/calypso.js
var skaleCalypso = defineChain({
  id: 1564830818,
  name: "SKALE | Calypso NFT Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3107626
    }
  }
});

// node_modules/viem/_esm/chains/definitions/skale/calypsoTestnet.js
var skaleCalypsoTestnet = defineChain({
  id: 974399131,
  name: "SKALE Calypso Testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.skalenodes.com/v1/giant-half-dual-testnet"],
      webSocket: ["wss://testnet.skalenodes.com/v1/ws/giant-half-dual-testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 103220
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/skale/cryptoBlades.js
var skaleCryptoBlades = defineChain({
  id: 1026062157,
  name: "SKALE | CryptoBlades",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/cryptoColosseum.js
var skaleCryptoColosseum = defineChain({
  id: 2046399126,
  name: "SKALE | Crypto Colosseum",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/europa.js
var skaleEuropa = defineChain({
  id: 2046399126,
  name: "SKALE | Europa Liquidity Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3113495
    }
  }
});

// node_modules/viem/_esm/chains/definitions/skale/europaTestnet.js
var skaleEuropaTestnet = defineChain({
  id: 1444673419,
  name: "SKALE Europa Testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.skalenodes.com/v1/juicy-low-small-testnet"],
      webSocket: ["wss://testnet.skalenodes.com/v1/ws/juicy-low-small-testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 110858
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/skale/exorde.js
var skaleExorde = defineChain({
  id: 2139927552,
  name: "SKALE | Exorde",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/humanProtocol.js
var skaleHumanProtocol = defineChain({
  id: 1273227453,
  name: "SKALE | Human Protocol",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://wan-red-ain.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/nebula.js
var skaleNebula = defineChain({
  id: 1482601649,
  name: "SKALE | Nebula Gaming Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2372986
    }
  }
});

// node_modules/viem/_esm/chains/definitions/skale/nebulaTestnet.js
var skaleNebulaTestnet = defineChain({
  id: 37084624,
  name: "SKALE Nebula Testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet"],
      webSocket: ["wss://testnet.skalenodes.com/v1/ws/lanky-ill-funny-testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 105141
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/skale/razor.js
var skaleRazor = defineChain({
  id: 278611351,
  name: "SKALE | Razor Network",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/titan.js
var skaleTitan = defineChain({
  id: 1350216234,
  name: "SKALE | Titan Community Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2076458
    }
  }
});

// node_modules/viem/_esm/chains/definitions/skale/titanTestnet.js
var skaleTitanTestnet = defineChain({
  id: 1020352220,
  name: "SKALE Titan Hub",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.skalenodes.com/v1/aware-fake-trim-testnet"],
      webSocket: ["wss://testnet.skalenodes.com/v1/ws/aware-fake-trim-testnet"]
    }
  },
  blockExplorers: {
    default: {
      name: "SKALE Explorer",
      url: "https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 104072
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/songbird.js
var songbird = defineChain({
  id: 19,
  name: "Songbird Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "songbird",
    symbol: "SGB"
  },
  rpcUrls: {
    default: { http: ["https://songbird-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Songbird Explorer",
      url: "https://songbird-explorer.flare.network",
      apiUrl: "https://songbird-explorer.flare.network/api"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/songbirdTestnet.js
var songbirdTestnet = defineChain({
  id: 16,
  name: "Coston",
  nativeCurrency: {
    decimals: 18,
    name: "costonflare",
    symbol: "CFLR"
  },
  rpcUrls: {
    default: { http: ["https://coston-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Coston Explorer",
      url: "https://coston-explorer.flare.network",
      apiUrl: "https://coston-explorer.flare.network/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/spicy.js
var spicy = defineChain({
  id: 88882,
  name: "Chiliz Spicy Testnet",
  network: "chiliz-spicy-Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "CHZ",
    symbol: "CHZ"
  },
  rpcUrls: {
    default: {
      http: [
        "https://spicy-rpc.chiliz.com",
        "https://chiliz-spicy.publicnode.com"
      ],
      webSocket: [
        "wss://spicy-rpc-ws.chiliz.com",
        "wss://chiliz-spicy.publicnode.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Chiliz Explorer",
      url: "http://spicy-explorer.chiliz.com",
      apiUrl: "http://spicy-explorer.chiliz.com/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/shardeumSphinx.js
var shardeumSphinx = defineChain({
  id: 8082,
  name: "Shardeum Sphinx",
  nativeCurrency: { name: "SHARDEUM", symbol: "SHM", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sphinx.shardeum.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shardeum Explorer",
      url: "https://explorer-sphinx.shardeum.org"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/shibarium.js
var shibarium = defineChain({
  id: 109,
  name: "Shibarium",
  network: "shibarium",
  nativeCurrency: { name: "Bone", symbol: "BONE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.shibrpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://shibariumscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0x864Bf681ADD6052395188A89101A1B37d3B4C961",
      blockCreated: 265900
    }
  }
});

// node_modules/viem/_esm/chains/definitions/stratis.js
var stratis = defineChain({
  id: 105105,
  name: "Stratis Mainnet",
  network: "stratis",
  nativeCurrency: {
    name: "Stratis",
    symbol: "STRAX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.stratisevm.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Stratis Explorer",
      url: "https://explorer.stratisevm.com"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/syscoin.js
var syscoin = defineChain({
  id: 57,
  name: "Syscoin Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.syscoin.org"],
      webSocket: ["wss://rpc.syscoin.org/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "SyscoinExplorer",
      url: "https://explorer.syscoin.org",
      apiUrl: "https://explorer.syscoin.org/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 287139
    }
  }
});

// node_modules/viem/_esm/chains/definitions/syscoinTestnet.js
var syscoinTestnet = defineChain({
  id: 5700,
  name: "Syscoin Tanenbaum Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.tanenbaum.io"],
      webSocket: ["wss://rpc.tanenbaum.io/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "SyscoinTestnetExplorer",
      url: "https://tanenbaum.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 271288
    }
  }
});

// node_modules/viem/_esm/chains/definitions/taraxa.js
var taraxa = defineChain({
  id: 841,
  name: "Taraxa Mainnet",
  nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.taraxa.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.mainnet.taraxa.io"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/taikoJolnir.js
var taikoJolnir = defineChain({
  id: 167007,
  name: "Taiko Jolnir (Alpha-5 Testnet)",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.jolnir.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.jolnir.taiko.xyz"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 732706
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/taikoKatla.js
var taikoKatla = defineChain({
  id: 167008,
  name: "Taiko Katla (Alpha-6 Testnet)",
  network: "tko-katla",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.katla.taiko.xyz"]
    },
    public: {
      http: ["https://rpc.katla.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.katla.taiko.xyz"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/taikoTestnetSepolia.js
var taikoTestnetSepolia = defineChain({
  id: 167005,
  name: "Taiko (Alpha-3 Testnet)",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.test.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.test.taiko.xyz"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/taraxaTestnet.js
var taraxaTestnet = defineChain({
  id: 842,
  name: "Taraxa Testnet",
  nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.taraxa.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.testnet.taraxa.io"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/telos.js
var telos = defineChain({
  id: 40,
  name: "Telos",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.telos.net/evm"] }
  },
  blockExplorers: {
    default: {
      name: "Teloscan",
      url: "https://www.teloscan.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 246530709
    }
  }
});

// node_modules/viem/_esm/chains/definitions/telosTestnet.js
var telosTestnet = defineChain({
  id: 41,
  name: "Telos",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS"
  },
  rpcUrls: {
    default: { http: ["https://testnet.telos.net/evm"] }
  },
  blockExplorers: {
    default: {
      name: "Teloscan (testnet)",
      url: "https://testnet.teloscan.io/"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/tenet.js
var tenet = defineChain({
  id: 1559,
  name: "Tenet",
  network: "tenet-mainnet",
  nativeCurrency: {
    name: "TENET",
    symbol: "TENET",
    decimals: 18
  },
  rpcUrls: {
    default: { http: ["https://rpc.tenet.org"] }
  },
  blockExplorers: {
    default: {
      name: "TenetScan Mainnet",
      url: "https://tenetscan.io",
      apiUrl: "https://tenetscan.io/api"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/thunderTestnet.js
var thunderTestnet = defineChain({
  id: 997,
  name: "5ireChain Thunder Testnet",
  nativeCurrency: { name: "5ire Token", symbol: "5IRE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.5ire.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "5ireChain Explorer",
      url: "https://explorer.5ire.network"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/vechain.js
var vechain = defineChain({
  id: 100009,
  name: "Vechain",
  nativeCurrency: { name: "VeChain", symbol: "VET", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.vechain.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Vechain Explorer",
      url: "https://explore.vechain.org"
    },
    vechainStats: {
      name: "Vechain Stats",
      url: "https://vechainstats.com"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/wanchain.js
var wanchain = defineChain({
  id: 888,
  name: "Wanchain",
  nativeCurrency: { name: "WANCHAIN", symbol: "WAN", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://gwan-ssl.wandevs.org:56891",
        "https://gwan2-ssl.wandevs.org"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "WanScan",
      url: "https://wanscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
      blockCreated: 25312390
    }
  }
});

// node_modules/viem/_esm/chains/definitions/wanchainTestnet.js
var wanchainTestnet = defineChain({
  id: 999,
  name: "Wanchain Testnet",
  nativeCurrency: { name: "WANCHAIN", symbol: "WANt", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://gwan-ssl.wandevs.org:46891"]
    }
  },
  blockExplorers: {
    default: {
      name: "WanScanTest",
      url: "https://wanscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
      blockCreated: 24743448
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/wemix.js
var wemix = defineChain({
  id: 1111,
  name: "WEMIX",
  network: "wemix-mainnet",
  nativeCurrency: { name: "WEMIX", symbol: "WEMIX", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.wemix.com"] },
    public: { http: ["https://api.wemix.com"] }
  },
  blockExplorers: {
    default: {
      name: "wemixExplorer",
      url: "https://explorer.wemix.com"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/wemixTestnet.js
var wemixTestnet = defineChain({
  id: 1112,
  name: "WEMIX Testnet",
  network: "wemix-testnet",
  nativeCurrency: { name: "WEMIX", symbol: "tWEMIX", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.test.wemix.com"] },
    public: { http: ["https://api.test.wemix.com"] }
  },
  blockExplorers: {
    default: {
      name: "wemixExplorer",
      url: "https://testnet.wemixscan.com",
      apiUrl: "https://testnet.wemixscan.com/api"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/x1Testnet.js
var x1Testnet = defineChain({
  id: 195,
  name: "X1 Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "OKB",
    symbol: "OKB"
  },
  rpcUrls: {
    default: { http: ["https://x1testrpc.okx.com"] }
  },
  blockExplorers: {
    default: {
      name: "OKLink",
      url: "https://www.oklink.com/x1-test"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 624344
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/xdc.js
var xdc = defineChain({
  id: 50,
  name: "XinFin Network",
  nativeCurrency: {
    decimals: 18,
    name: "XDC",
    symbol: "XDC"
  },
  rpcUrls: {
    default: { http: ["https://rpc.xinfin.network"] }
  },
  blockExplorers: {
    xinfin: {
      name: "XinFin",
      url: "https://explorer.xinfin.network"
    },
    default: {
      name: "Blocksscan",
      url: "https://xdc.blocksscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 71542788
    }
  }
});

// node_modules/viem/_esm/chains/definitions/xdcTestnet.js
var xdcTestnet = defineChain({
  id: 51,
  name: "Apothem Network",
  nativeCurrency: {
    decimals: 18,
    name: "TXDC",
    symbol: "TXDC"
  },
  rpcUrls: {
    default: { http: ["https://erpc.apothem.network"] }
  },
  blockExplorers: {
    default: {
      name: "Blocksscan",
      url: "https://apothem.blocksscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 59765389
    }
  }
});

// node_modules/viem/_esm/chains/definitions/zhejiang.js
var zhejiang = defineChain({
  id: 1337803,
  name: "Zhejiang",
  nativeCurrency: { name: "Zhejiang Ether", symbol: "ZhejETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.zhejiang.ethpandaops.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Beaconchain",
      url: "https://zhejiang.beaconcha.in"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/zkFair.js
var zkFair = defineChain({
  id: 42766,
  name: "ZKFair Mainnet",
  network: "zkfair-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "USD Coin",
    symbol: "USDC"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.zkfair.io"]
    },
    public: {
      http: ["https://rpc.zkfair.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkFair Explorer",
      url: "https://scan.zkfair.io",
      apiUrl: "https://scan.zkfair.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6090959
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/zkFairTestnet.js
var zkFairTestnet = defineChain({
  id: 43851,
  name: "ZKFair Testnet",
  network: "zkfair-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "USD Coin",
    symbol: "USDC"
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.zkfair.io"]
    },
    public: {
      http: ["https://testnet-rpc.zkfair.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkFair Explorer",
      url: "https://testnet-scan.zkfair.io"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/zksync/formatters.js
var formatters3 = {
  block: defineBlock({
    format(args) {
      var _a;
      const transactions = (_a = args.transactions) == null ? void 0 : _a.map((transaction) => {
        var _a2;
        if (typeof transaction === "string")
          return transaction;
        const formatted = (_a2 = formatters3.transaction) == null ? void 0 : _a2.format(transaction);
        if (formatted.typeHex === "0x71")
          formatted.type = "eip712";
        else if (formatted.typeHex === "0xff")
          formatted.type = "priority";
        return formatted;
      });
      return {
        l1BatchNumber: args.l1BatchNumber ? hexToBigInt(args.l1BatchNumber) : null,
        l1BatchTimestamp: args.l1BatchTimestamp ? hexToBigInt(args.l1BatchTimestamp) : null,
        transactions
      };
    }
  }),
  transaction: defineTransaction({
    format(args) {
      const transaction = {};
      if (args.type === "0x71")
        transaction.type = "eip712";
      else if (args.type === "0xff")
        transaction.type = "priority";
      return {
        ...transaction,
        l1BatchNumber: args.l1BatchNumber ? hexToBigInt(args.l1BatchNumber) : null,
        l1BatchTxIndex: args.l1BatchTxIndex ? hexToBigInt(args.l1BatchTxIndex) : null
      };
    }
  }),
  transactionReceipt: defineTransactionReceipt({
    format(args) {
      return {
        l1BatchNumber: args.l1BatchNumber ? hexToBigInt(args.l1BatchNumber) : null,
        l1BatchTxIndex: args.l1BatchTxIndex ? hexToBigInt(args.l1BatchTxIndex) : null,
        logs: args.logs.map((log) => {
          return {
            ...formatLog(log),
            l1BatchNumber: log.l1BatchNumber ? hexToBigInt(log.l1BatchNumber) : null,
            transactionLogIndex: hexToNumber(log.transactionLogIndex),
            logType: log.logType
          };
        }),
        l2ToL1Logs: args.l2ToL1Logs.map((l2ToL1Log) => {
          return {
            blockNumber: hexToBigInt(l2ToL1Log.blockHash),
            blockHash: l2ToL1Log.blockHash,
            l1BatchNumber: hexToBigInt(l2ToL1Log.l1BatchNumber),
            transactionIndex: hexToBigInt(l2ToL1Log.transactionIndex),
            shardId: hexToBigInt(l2ToL1Log.shardId),
            isService: l2ToL1Log.isService,
            sender: l2ToL1Log.sender,
            key: l2ToL1Log.key,
            value: l2ToL1Log.value,
            transactionHash: l2ToL1Log.transactionHash,
            logIndex: hexToBigInt(l2ToL1Log.logIndex)
          };
        })
      };
    }
  }),
  transactionRequest: defineTransactionRequest({
    exclude: [
      "customSignature",
      "factoryDeps",
      "gasPerPubdata",
      "paymaster",
      "paymasterInput"
    ],
    format(args) {
      if (args.gasPerPubdata || args.paymaster && args.paymasterInput || args.factoryDeps || args.customSignature)
        return {
          eip712Meta: {
            ...args.gasPerPubdata ? { gasPerPubdata: toHex(args.gasPerPubdata) } : {},
            ...args.paymaster && args.paymasterInput ? {
              paymasterParams: {
                paymaster: args.paymaster,
                paymasterInput: Array.from(hexToBytes(args.paymasterInput))
              }
            } : {},
            ...args.factoryDeps ? { factoryDeps: args.factoryDeps } : {},
            ...args.customSignature ? {
              customSignature: Array.from(hexToBytes(args.customSignature))
            } : {}
          },
          type: "0x71"
        };
      return {};
    }
  })
};

// node_modules/viem/_esm/chains/zksync/errors/transaction.js
var InvalidEip712TransactionError = class extends BaseError {
  constructor() {
    super([
      "Transaction is not an EIP712 transaction.",
      "",
      "Transaction must:",
      '  - include `type: "eip712"`',
      "  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`"
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidEip712TransactionError"
    });
  }
};

// node_modules/viem/_esm/chains/zksync/utils/isEip712Transaction.js
function isEIP712Transaction(transaction) {
  if (transaction.type === "eip712")
    return true;
  if ("customSignature" in transaction && transaction.customSignature || "paymaster" in transaction && transaction.paymaster || "paymasterInput" in transaction && transaction.paymasterInput || "gasPerPubdata" in transaction && typeof transaction.gasPerPubdata === "bigint" || "factoryDeps" in transaction && transaction.factoryDeps)
    return true;
  return false;
}

// node_modules/viem/_esm/chains/zksync/utils/assertEip712Transaction.js
function assertEip712Transaction(transaction) {
  const { chainId, to, from, paymaster, paymasterInput } = transaction;
  if (!isEIP712Transaction(transaction))
    throw new InvalidEip712TransactionError();
  if (!chainId || chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (from && !isAddress(from))
    throw new InvalidAddressError({ address: from });
  if (paymaster && !isAddress(paymaster))
    throw new InvalidAddressError({ address: paymaster });
  if (paymaster && !paymasterInput) {
    throw new BaseError("`paymasterInput` must be provided when `paymaster` is defined");
  }
  if (!paymaster && paymasterInput) {
    throw new BaseError("`paymaster` must be provided when `paymasterInput` is defined");
  }
}

// node_modules/viem/_esm/chains/zksync/serializers.js
function serializeTransaction4(transaction, signature) {
  if (isEIP712Transaction(transaction))
    return serializeTransactionEIP712(transaction);
  return serializeTransaction(transaction, signature);
}
var serializers3 = {
  transaction: serializeTransaction4
};
function serializeTransactionEIP712(transaction) {
  const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
  assertEip712Transaction(transaction);
  const serializedTransaction = [
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x0",
    toHex(chainId),
    toHex(""),
    toHex(""),
    toHex(chainId),
    from ?? "0x",
    gasPerPubdata ? toHex(gasPerPubdata) : "0x",
    factoryDeps ?? [],
    customSignature ?? "0x",
    // EIP712 signature
    paymaster && paymasterInput ? [paymaster, paymasterInput] : []
  ];
  return concatHex([
    "0x71",
    toRlp(serializedTransaction)
  ]);
}

// node_modules/viem/_esm/chains/zksync/utils/getEip712Domain.js
var getEip712Domain = (transaction) => {
  assertEip712Transaction(transaction);
  const message = transactionToMessage(transaction);
  return {
    domain: {
      name: "zkSync",
      version: "2",
      chainId: transaction.chainId
    },
    types: {
      Transaction: [
        { name: "txType", type: "uint256" },
        { name: "from", type: "uint256" },
        { name: "to", type: "uint256" },
        { name: "gasLimit", type: "uint256" },
        { name: "gasPerPubdataByteLimit", type: "uint256" },
        { name: "maxFeePerGas", type: "uint256" },
        { name: "maxPriorityFeePerGas", type: "uint256" },
        { name: "paymaster", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "value", type: "uint256" },
        { name: "data", type: "bytes" },
        { name: "factoryDeps", type: "bytes32[]" },
        { name: "paymasterInput", type: "bytes" }
      ]
    },
    primaryType: "Transaction",
    message
  };
};
function transactionToMessage(transaction) {
  const { gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
  return {
    txType: 113n,
    from: BigInt(from),
    to: to ? BigInt(to) : 0n,
    gasLimit: gas ?? 0n,
    gasPerPubdataByteLimit: gasPerPubdata ?? 0n,
    maxFeePerGas: maxFeePerGas ?? 0n,
    maxPriorityFeePerGas: maxPriorityFeePerGas ?? 0n,
    paymaster: paymaster ? BigInt(paymaster) : 0n,
    nonce: nonce ? BigInt(nonce) : 0n,
    value: value ?? 0n,
    data: data ? data : "0x0",
    factoryDeps: factoryDeps ?? [],
    paymasterInput: paymasterInput ? paymasterInput : "0x0"
  };
}

// node_modules/viem/_esm/chains/zksync/chainConfig.js
var chainConfig3 = {
  formatters: formatters3,
  serializers: serializers3,
  custom: {
    getEip712Domain
  }
};

// node_modules/viem/_esm/chains/definitions/zkSync.js
var zkSync = defineChain({
  ...chainConfig3,
  id: 324,
  name: "zkSync Era",
  network: "zksync-era",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.era.zksync.io"],
      webSocket: ["wss://mainnet.era.zksync.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://era.zksync.network/",
      apiUrl: "https://api-era.zksync.network/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/zkSyncTestnet.js
var zkSyncTestnet = defineChain({
  ...chainConfig3,
  id: 280,
  name: "zkSync Era Testnet",
  network: "zksync-era-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.era.zksync.dev"],
      webSocket: ["wss://testnet.era.zksync.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkExplorer",
      url: "https://goerli.explorer.zksync.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/zkSyncSepoliaTestnet.js
var zkSyncSepoliaTestnet = defineChain({
  ...chainConfig3,
  id: 300,
  name: "zkSync Sepolia Testnet",
  network: "zksync-sepolia-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.era.zksync.dev"],
      webSocket: ["wss://sepolia.era.zksync.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkExplorer",
      url: "https://sepolia.explorer.zksync.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/zetachain.js
var zetachain = defineChain({
  id: 7e3,
  name: "ZetaChain",
  nativeCurrency: {
    decimals: 18,
    name: "Zeta",
    symbol: "ZETA"
  },
  rpcUrls: {
    default: {
      http: ["https://zetachain-evm.blockpi.network/v1/rpc/public"]
    }
  },
  blockExplorers: {
    default: {
      name: "ZetaScan",
      url: "https://explorer.zetachain.com"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/zetachainAthensTestnet.js
var zetachainAthensTestnet = defineChain({
  id: 7001,
  name: "ZetaChain Athens Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Zeta",
    symbol: "aZETA"
  },
  rpcUrls: {
    default: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    }
  },
  blockExplorers: {
    default: {
      name: "ZetaScan",
      url: "https://athens3.explorer.zetachain.com"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/zilliqa.js
var zilliqa = defineChain({
  id: 32769,
  name: "Zilliqa",
  network: "zilliqa",
  nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.zilliqa.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ethernal",
      url: "https://evmx.zilliqa.com"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/zilliqaTestnet.js
var zilliqaTestnet = defineChain({
  id: 33101,
  name: "Zilliqa Testnet",
  network: "zilliqa-testnet",
  nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://dev-api.zilliqa.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Ethernal",
      url: "https://evmx.testnet.zilliqa.com"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/zora.js
var sourceId19 = 1;
var zora = defineChain({
  ...chainConfig,
  id: 7777777,
  name: "Zora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.zora.energy"],
      webSocket: ["wss://rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.zora.energy",
      apiUrl: "https://explorer.zora.energy/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId19]: {
        address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 5882
    },
    portal: {
      [sourceId19]: {
        address: "0x1a0ad011913A150f69f6A19DF447A0CfD9551054"
      }
    },
    l1StandardBridge: {
      [sourceId19]: {
        address: "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631"
      }
    }
  },
  sourceId: sourceId19
});

// node_modules/viem/_esm/chains/definitions/zoraSepolia.js
var sourceId20 = 11155111;
var zoraSepolia = defineChain({
  ...chainConfig,
  id: 999999999,
  name: "Zora Sepolia",
  network: "zora-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Sepolia",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.rpc.zora.energy"],
      webSocket: ["wss://sepolia.rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Zora Sepolia Explorer",
      url: "https://sepolia.explorer.zora.energy/",
      apiUrl: "https://sepolia.explorer.zora.energy/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId20]: {
        address: "0x2615B481Bd3E5A1C0C7Ca3Da1bdc663E8615Ade9"
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 83160
    },
    portal: {
      [sourceId20]: {
        address: "0xeffE2C6cA9Ab797D418f0D91eA60807713f3536f"
      }
    },
    l1StandardBridge: {
      [sourceId20]: {
        address: "0x5376f1D543dcbB5BD416c56C189e4cB7399fCcCB"
      }
    }
  },
  sourceId: sourceId20,
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/zoraTestnet.js
var sourceId21 = 5;
var zoraTestnet = defineChain({
  ...chainConfig,
  id: 999,
  name: "Zora Goerli Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Goerli",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.rpc.zora.energy"],
      webSocket: ["wss://testnet.rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://testnet.explorer.zora.energy",
      apiUrl: "https://testnet.explorer.zora.energy/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 189123
    },
    portal: {
      [sourceId21]: {
        address: "0xDb9F51790365e7dc196e7D072728df39Be958ACe"
      }
    }
  },
  sourceId: sourceId21,
  testnet: true
});

// node_modules/@web3modal/wagmi/dist/esm/src/client.js
var Web3Modal = class extends Web3ModalScaffold {
  constructor(options) {
    const { wagmiConfig, siweConfig, defaultChain, tokens, _sdkVersion, ...w3mOptions } = options;
    if (!wagmiConfig) {
      throw new Error("web3modal:constructor - wagmiConfig is undefined");
    }
    if (!w3mOptions.projectId) {
      throw new Error("web3modal:constructor - projectId is undefined");
    }
    const networkControllerClient = {
      switchCaipNetwork: async (caipNetwork) => {
        const chainId = HelpersUtil.caipNetworkIdToNumber(caipNetwork == null ? void 0 : caipNetwork.id);
        if (chainId) {
          await switchChain(this.wagmiConfig, { chainId });
        }
      },
      getApprovedCaipNetworksData: async () => new Promise((resolve) => {
        var _a, _b;
        const connections = new Map(wagmiConfig.state.connections);
        const connection = connections.get(wagmiConfig.state.current || "");
        if (((_a = connection == null ? void 0 : connection.connector) == null ? void 0 : _a.id) === ConstantsUtil2.EMAIL_CONNECTOR_ID) {
          resolve(getEmailCaipNetworks());
        } else if (((_b = connection == null ? void 0 : connection.connector) == null ? void 0 : _b.id) === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID) {
          const connector = wagmiConfig.connectors.find((c) => c.id === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID);
          resolve(getWalletConnectCaipNetworks(connector));
        }
        resolve({ approvedCaipNetworkIds: void 0, supportsAllNetworks: true });
      })
    };
    const connectionControllerClient = {
      connectWalletConnect: async (onUri) => {
        var _a;
        const connector = wagmiConfig.connectors.find((c) => c.id === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID);
        if (!connector) {
          throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");
        }
        const provider = await connector.getProvider();
        provider.on("display_uri", (data) => {
          onUri(data);
        });
        const chainId = HelpersUtil.caipNetworkIdToNumber((_a = this.getCaipNetwork()) == null ? void 0 : _a.id);
        await connect(this.wagmiConfig, { connector, chainId });
      },
      connectExternal: async ({ id, provider, info }) => {
        var _a, _b;
        const connector = wagmiConfig.connectors.find((c) => c.id === id);
        if (!connector) {
          throw new Error("connectionControllerClient:connectExternal - connector is undefined");
        }
        if (provider && info && connector.id === ConstantsUtil2.EIP6963_CONNECTOR_ID) {
          (_a = connector.setEip6963Wallet) == null ? void 0 : _a.call(connector, { provider, info });
        }
        const chainId = HelpersUtil.caipNetworkIdToNumber((_b = this.getCaipNetwork()) == null ? void 0 : _b.id);
        await connect(this.wagmiConfig, { connector, chainId });
      },
      checkInstalled: (ids) => {
        const injectedConnector = this.getConnectors().find((c) => c.type === "INJECTED");
        if (!ids) {
          return Boolean(window.ethereum);
        }
        if (injectedConnector) {
          if (!(window == null ? void 0 : window.ethereum)) {
            return false;
          }
          return ids.some((id) => {
            var _a;
            return Boolean((_a = window.ethereum) == null ? void 0 : _a[String(id)]);
          });
        }
        return false;
      },
      disconnect: async () => {
        var _a;
        await disconnect(this.wagmiConfig);
        if ((_a = siweConfig == null ? void 0 : siweConfig.options) == null ? void 0 : _a.signOutOnDisconnect) {
          await siweConfig.signOut();
        }
      },
      signMessage: async (message) => signMessage(this.wagmiConfig, { message })
    };
    super({
      networkControllerClient,
      connectionControllerClient,
      siweControllerClient: siweConfig,
      defaultChain: getCaipDefaultChain(defaultChain),
      tokens: HelpersUtil.getCaipTokens(tokens),
      _sdkVersion: _sdkVersion ?? `html-wagmi-${ConstantsUtil2.VERSION}`,
      ...w3mOptions
    });
    this.hasSyncedConnectedAccount = false;
    this.options = void 0;
    this.options = options;
    this.wagmiConfig = wagmiConfig;
    this.syncRequestedNetworks([...wagmiConfig.chains]);
    this.syncConnectors([...wagmiConfig.connectors]);
    watchConnectors(this.wagmiConfig, {
      onChange: (connectors) => this.syncConnectors(connectors)
    });
    watchAccount(this.wagmiConfig, {
      onChange: (accountData) => this.syncAccount({ ...accountData })
    });
  }
  getState() {
    const state = super.getState();
    return {
      ...state,
      selectedNetworkId: HelpersUtil.caipNetworkIdToNumber(state.selectedNetworkId)
    };
  }
  subscribeState(callback) {
    return super.subscribeState((state) => callback({
      ...state,
      selectedNetworkId: HelpersUtil.caipNetworkIdToNumber(state.selectedNetworkId)
    }));
  }
  syncRequestedNetworks(chains) {
    const requestedCaipNetworks = chains == null ? void 0 : chains.map((chain) => {
      var _a, _b;
      return {
        id: `${ConstantsUtil2.EIP155}:${chain.id}`,
        name: chain.name,
        imageId: PresetsUtil.EIP155NetworkImageIds[chain.id],
        imageUrl: (_b = (_a = this.options) == null ? void 0 : _a.chainImages) == null ? void 0 : _b[chain.id]
      };
    });
    this.setRequestedCaipNetworks(requestedCaipNetworks ?? []);
  }
  async syncAccount({ address, isConnected, chainId }) {
    this.resetAccount();
    this.syncNetwork();
    if (isConnected && address && chainId) {
      const caipAddress = `${ConstantsUtil2.EIP155}:${chainId}:${address}`;
      this.setIsConnected(isConnected);
      this.setCaipAddress(caipAddress);
      await Promise.all([
        this.syncProfile(address, chainId),
        this.syncBalance(address, chainId),
        this.fetchTokenBalance(),
        this.getApprovedCaipNetworksData()
      ]);
      this.hasSyncedConnectedAccount = true;
    } else if (!isConnected && this.hasSyncedConnectedAccount) {
      this.resetWcConnection();
      this.resetNetwork();
    }
  }
  async syncNetwork() {
    var _a, _b, _c, _d;
    const { address, isConnected, chainId } = getAccount(this.wagmiConfig);
    const chain = this.wagmiConfig.chains.find((c) => c.id === chainId);
    if (chain || chainId) {
      const name = (chain == null ? void 0 : chain.name) ?? (chainId == null ? void 0 : chainId.toString());
      const id = Number((chain == null ? void 0 : chain.id) ?? chainId);
      const caipChainId = `${ConstantsUtil2.EIP155}:${id}`;
      this.setCaipNetwork({
        id: caipChainId,
        name,
        imageId: PresetsUtil.EIP155NetworkImageIds[id],
        imageUrl: (_b = (_a = this.options) == null ? void 0 : _a.chainImages) == null ? void 0 : _b[id]
      });
      if (isConnected && address && chainId) {
        const caipAddress = `${ConstantsUtil2.EIP155}:${id}:${address}`;
        this.setCaipAddress(caipAddress);
        if ((_d = (_c = chain == null ? void 0 : chain.blockExplorers) == null ? void 0 : _c.default) == null ? void 0 : _d.url) {
          const url = `${chain.blockExplorers.default.url}/address/${address}`;
          this.setAddressExplorerUrl(url);
        } else {
          this.setAddressExplorerUrl(void 0);
        }
        if (this.hasSyncedConnectedAccount) {
          await this.syncProfile(address, chainId);
          await this.syncBalance(address, chainId);
        }
      }
    }
  }
  async syncProfile(address, chainId) {
    if (chainId !== mainnet.id) {
      this.setProfileName(null);
      this.setProfileImage(null);
      return;
    }
    try {
      const { name, avatar } = await this.fetchIdentity({
        caipChainId: `${ConstantsUtil2.EIP155}:${chainId}`,
        address
      });
      this.setProfileName(name);
      this.setProfileImage(avatar);
    } catch {
      const profileName = await getEnsName(this.wagmiConfig, { address, chainId });
      if (profileName) {
        this.setProfileName(profileName);
        const profileImage = await getEnsAvatar(this.wagmiConfig, {
          name: profileName,
          chainId
        });
        if (profileImage) {
          this.setProfileImage(profileImage);
        }
      }
    }
  }
  async syncBalance(address, chainId) {
    var _a, _b, _c;
    const chain = this.wagmiConfig.chains.find((c) => c.id === chainId);
    if (chain) {
      const balance = await getBalance(this.wagmiConfig, {
        address,
        chainId: chain.id,
        token: (_c = (_b = (_a = this.options) == null ? void 0 : _a.tokens) == null ? void 0 : _b[chain.id]) == null ? void 0 : _c.address
      });
      this.setBalance(balance.formatted, balance.symbol);
      return;
    }
    this.setBalance(void 0, void 0);
  }
  syncConnectors(connectors) {
    const uniqueIds = /* @__PURE__ */ new Set();
    const filteredConnectors = connectors.filter((item) => !uniqueIds.has(item.id) && uniqueIds.add(item.id));
    const w3mConnectors = [];
    const coinbaseSDKId = ConstantsUtil2.COINBASE_SDK_CONNECTOR_ID;
    const coinbaseConnector = filteredConnectors.find((c) => c.id === ConstantsUtil.CONNECTOR_RDNS_MAP[coinbaseSDKId]);
    filteredConnectors.forEach(({ id, name, type, icon }) => {
      var _a, _b;
      const shouldSkip = coinbaseConnector && id === coinbaseSDKId || ConstantsUtil2.EMAIL_CONNECTOR_ID === id;
      if (!shouldSkip) {
        w3mConnectors.push({
          id,
          explorerId: PresetsUtil.ConnectorExplorerIds[id],
          imageUrl: ((_b = (_a = this.options) == null ? void 0 : _a.connectorImages) == null ? void 0 : _b[id]) ?? icon,
          name: PresetsUtil.ConnectorNamesMap[id] ?? name,
          imageId: PresetsUtil.ConnectorImageIds[id],
          type: PresetsUtil.ConnectorTypesMap[type] ?? "EXTERNAL"
        });
      }
    });
    this.setConnectors(w3mConnectors);
    this.syncEmailConnector(filteredConnectors);
  }
  async syncEmailConnector(connectors) {
    const emailConnector = connectors.find(({ id }) => id === ConstantsUtil2.EMAIL_CONNECTOR_ID);
    if (emailConnector) {
      const provider = await emailConnector.getProvider();
      this.addConnector({
        id: ConstantsUtil2.EMAIL_CONNECTOR_ID,
        type: "EMAIL",
        name: "Email",
        provider
      });
      this.listenEmailConnector(emailConnector);
      this.listenModal(emailConnector);
    }
  }
  async listenEmailConnector(connector) {
    if (typeof window !== "undefined" && connector) {
      super.setLoading(true);
      const provider = await connector.getProvider();
      const isLoginEmailUsed = provider.getLoginEmailUsed();
      super.setLoading(isLoginEmailUsed);
      if (isLoginEmailUsed) {
        this.setIsConnected(false);
      }
      provider.onInitSmartAccount((isDeployed) => {
        this.setSmartAccountDeployed(isDeployed);
      });
      provider.onRpcRequest((request) => {
        if (W3mFrameHelpers.checkIfRequestExists(request)) {
          if (!W3mFrameHelpers.checkIfRequestIsAllowed(request)) {
            super.open({ view: "ApproveTransaction" });
          }
        } else {
          super.open();
          const method = W3mFrameHelpers.getRequestMethod(request);
          console.error(W3mFrameRpcConstants.RPC_METHOD_NOT_ALLOWED_MESSAGE, { method });
          setTimeout(() => {
            this.showErrorMessage(W3mFrameRpcConstants.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE);
          }, 300);
          provider.rejectRpcRequest();
        }
      });
      provider.onRpcResponse(() => {
        super.close();
      });
      provider.onNotConnected(() => {
        this.setIsConnected(false);
        super.setLoading(false);
      });
      provider.onIsConnected(() => {
        this.setIsConnected(true);
        super.setLoading(false);
      });
    }
  }
  async listenModal(connector) {
    const provider = await connector.getProvider();
    this.subscribeState((val) => {
      if (!val.open) {
        provider.rejectRpcRequest();
      }
    });
  }
};

// node_modules/@web3modal/wagmi/dist/esm/exports/react/index.js
var modal2 = void 0;
function createWeb3Modal(options) {
  if (!modal2) {
    modal2 = new Web3Modal({ ...options, _sdkVersion: `react-wagmi-${ConstantsUtil2.VERSION}` });
    getWeb3Modal(modal2);
  }
  return modal2;
}
export {
  createWeb3Modal,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme
};
//# sourceMappingURL=@web3modal_wagmi_react.js.map
