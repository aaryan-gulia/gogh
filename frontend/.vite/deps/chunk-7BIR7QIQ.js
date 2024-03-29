import {
  LitElement,
  _$LH,
  css,
  html,
  nothing,
  property,
  state
} from "./chunk-HKERLTQ6.js";
import {
  ConstantsUtil as ConstantsUtil2,
  PresetsUtil
} from "./chunk-TKKBJD7K.js";
import {
  AccountController,
  ApiController,
  AssetController,
  AssetUtil,
  BlockchainApiController,
  ConnectionController,
  ConnectorController,
  ConstantsUtil,
  CoreHelperUtil,
  DateUtil,
  EventsController,
  ModalController,
  NetworkController,
  OnRampController,
  OptionsController,
  PublicStateController,
  RouterController,
  RouterUtil,
  SnackController,
  StorageUtil,
  ThemeController,
  TransactionUtil,
  TransactionsController,
  UiHelperUtil,
  customElement,
  setColorTheme,
  setThemeVariables
} from "./chunk-MFTJC365.js";
import {
  http
} from "./chunk-EINCNUU3.js";

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js
var W3mFrameConstants = {
  SECURE_SITE_SDK: "https://secure.walletconnect.com/sdk",
  APP_EVENT_KEY: "@w3m-app/",
  FRAME_EVENT_KEY: "@w3m-frame/",
  RPC_METHOD_KEY: "RPC_",
  STORAGE_KEY: "@w3m-storage/",
  SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
  EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
  LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
  LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
  EMAIL: "EMAIL",
  PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
  APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
  APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
  APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
  APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
  APP_GET_USER: "@w3m-app/GET_USER",
  APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
  APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
  APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
  APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
  APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
  APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
  APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
  APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
  APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
  APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
  APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS: "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
  APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
  APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
  FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
  FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
  FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
  FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
  FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
  FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
  FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
  FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
  FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
  FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
  FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
  FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
  FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
  FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
  FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
  FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
  FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
  FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
  FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
  FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
  FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
  FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
  FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
  FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
  FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
  FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
  FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
  FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
  FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
  FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
  FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
  FRAME_INIT_SMART_ACCOUNT_SUCCESS: "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
  FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
  FRAME_SET_PREFERRED_ACCOUNT_SUCCESS: "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
  FRAME_SET_PREFERRED_ACCOUNT_ERROR: "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR"
};
var W3mFrameRpcConstants = {
  SAFE_RPC_METHODS: [
    "eth_accounts",
    "eth_blockNumber",
    "eth_call",
    "eth_chainId",
    "eth_estimateGas",
    "eth_feeHistory",
    "eth_gasPrice",
    "eth_getAccount",
    "eth_getBalance",
    "eth_getBlockByHash",
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
    "eth_getCode",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_getLogs",
    "eth_getProof",
    "eth_getStorageAt",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
    "eth_maxPriorityFeePerGas",
    "eth_newBlockFilter",
    "eth_newFilter",
    "eth_newPendingTransactionFilter",
    "eth_sendRawTransaction",
    "eth_syncing",
    "eth_uninstallFilter"
  ],
  NOT_SAFE_RPC_METHODS: ["personal_sign", "eth_signTypedData_v4", "eth_sendTransaction"],
  GET_CHAIN_ID: "eth_chainId",
  RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
  RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed"
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameStorage.js
var W3mFrameStorage = {
  set(key, value) {
    if (W3mFrameHelpers.isClient) {
      localStorage.setItem(`${W3mFrameConstants.STORAGE_KEY}${key}`, value);
    }
  },
  get(key) {
    if (W3mFrameHelpers.isClient) {
      return localStorage.getItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
    }
    return null;
  },
  delete(key) {
    if (W3mFrameHelpers.isClient) {
      localStorage.removeItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
    }
  }
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js
var RESTRICTED_TIMEZONES = [
  "ASIA/SHANGHAI",
  "ASIA/URUMQI",
  "ASIA/CHONGQING",
  "ASIA/HARBIN",
  "ASIA/KASHGAR",
  "ASIA/MACAU",
  "ASIA/HONG_KONG",
  "ASIA/MACAO",
  "ASIA/BEIJING",
  "ASIA/HARBIN"
];
var EMAIL_MINIMUM_TIMEOUT = 30 * 1e3;
var W3mFrameHelpers = {
  getBlockchainApiUrl() {
    try {
      const { timeZone } = new Intl.DateTimeFormat().resolvedOptions();
      const capTimeZone = timeZone.toUpperCase();
      return RESTRICTED_TIMEZONES.includes(capTimeZone) ? "https://rpc.walletconnect.org" : "https://rpc.walletconnect.com";
    } catch {
      return false;
    }
  },
  checkIfAllowedToTriggerEmail() {
    const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
    if (lastEmailLoginTime) {
      const difference = Date.now() - Number(lastEmailLoginTime);
      if (difference < EMAIL_MINIMUM_TIMEOUT) {
        const cooldownSec = Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1e3);
        throw new Error(`Please try again after ${cooldownSec} seconds`);
      }
    }
  },
  getTimeToNextEmailLogin() {
    const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
    if (lastEmailLoginTime) {
      const difference = Date.now() - Number(lastEmailLoginTime);
      if (difference < EMAIL_MINIMUM_TIMEOUT) {
        return Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1e3);
      }
    }
    return 0;
  },
  checkIfRequestExists(request) {
    const method = this.getRequestMethod(request);
    return W3mFrameRpcConstants.NOT_SAFE_RPC_METHODS.includes(method) || W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(method);
  },
  getRequestMethod(request) {
    var _a2;
    return (_a2 = request == null ? void 0 : request.payload) == null ? void 0 : _a2.method;
  },
  checkIfRequestIsAllowed(request) {
    const method = this.getRequestMethod(request);
    return W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(method);
  },
  isClient: typeof window !== "undefined"
};

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data3) => {
  const t = typeof data3;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data3) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data3)) {
        return ZodParsedType.array;
      }
      if (data3 === null) {
        return ZodParsedType.null;
      }
      if (data3.then && typeof data3.then === "function" && data3.catch && typeof data3.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data3 instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data3 instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data3 instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data: data3, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data: data3, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent2, value, path, key) {
    this._cachedPath = [];
    this.parent = parent2;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data3, params) {
    const result = this.safeParse(data3, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data3, params) {
    var _a2;
    const ctx = {
      common: {
        issues: [],
        async: (_a2 = params === null || params === void 0 ? void 0 : params.async) !== null && _a2 !== void 0 ? _a2 : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: data3,
      parsedType: getParsedType(data3)
    };
    const result = this._parseSync({ data: data3, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data3, params) {
    const result = await this.safeParseAsync(data3, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data3, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: data3,
      parsedType: getParsedType(data3)
    };
    const maybeAsyncResult = this._parse({ data: data3, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data3) => {
          if (!data3) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a2) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data3) => regex.test(data3), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a2;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a2 = options === null || options === void 0 ? void 0 : options.offset) !== null && _a2 !== void 0 ? _a2 : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a2;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a2;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a2, _b2, _c, _d;
          const defaultError = (_c = (_b2 = (_a2 = this._def).errorMap) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return _ZodEnum.create(values);
  }
  exclude(values) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data3) => {
      return this._def.type.parseAsync(data3, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data3 = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data3 = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data: data3,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data3 = ctx.data;
    return this._def.type._parse({
      data: data3,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data3, ctx) => {
      var _a2, _b2;
      if (!check(data3)) {
        const p = typeof params === "function" ? params(data3) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b2 = (_a2 = p.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b2 !== void 0 ? _b2 : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data3) => data3 instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameSchema.js
var zError = z.object({ message: z.string() });
function zType(key) {
  return z.literal(W3mFrameConstants[key]);
}
var GetTransactionByHashResponse = z.object({
  accessList: z.array(z.string()),
  blockHash: z.string().nullable(),
  blockNumber: z.string().nullable(),
  chainId: z.string(),
  from: z.string(),
  gas: z.string(),
  hash: z.string(),
  input: z.string().nullable(),
  maxFeePerGas: z.string(),
  maxPriorityFeePerGas: z.string(),
  nonce: z.string(),
  r: z.string(),
  s: z.string(),
  to: z.string(),
  transactionIndex: z.string().nullable(),
  type: z.string(),
  v: z.string(),
  value: z.string()
});
var AppSwitchNetworkRequest = z.object({ chainId: z.number() });
var AppConnectEmailRequest = z.object({ email: z.string().email() });
var AppConnectOtpRequest = z.object({ otp: z.string() });
var AppGetUserRequest = z.object({ chainId: z.optional(z.number()) });
var AppUpdateEmailRequest = z.object({ email: z.string().email() });
var AppUpdateEmailPrimaryOtpRequest = z.object({ otp: z.string() });
var AppUpdateEmailSecondaryOtpRequest = z.object({ otp: z.string() });
var AppSyncThemeRequest = z.object({
  themeMode: z.optional(z.enum(["light", "dark"])),
  themeVariables: z.optional(z.record(z.string(), z.string().or(z.number())))
});
var AppSyncDappDataRequest = z.object({
  metadata: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    icons: z.array(z.string())
  }).optional(),
  sdkVersion: z.string(),
  projectId: z.string()
});
var AppSetPreferredAccountRequest = z.object({ type: z.string() });
var FrameConnectEmailResponse = z.object({
  action: z.enum(["VERIFY_DEVICE", "VERIFY_OTP"])
});
var FrameGetUserResponse = z.object({
  email: z.string().email(),
  address: z.string(),
  chainId: z.number()
});
var FrameIsConnectedResponse = z.object({ isConnected: z.boolean() });
var FrameGetChainIdResponse = z.object({ chainId: z.number() });
var FrameSwitchNetworkResponse = z.object({ chainId: z.number() });
var FrameUpdateEmailSecondaryOtpResolver = z.object({ newEmail: z.string().email() });
var FrameGetSmartAccountEnabledNetworksResponse = z.object({
  smartAccountEnabledNetworks: z.array(z.number())
});
var FrameInitSmartAccountResponse = z.object({
  address: z.string(),
  isDeployed: z.boolean()
});
var FrameSetPreferredAccountResponse = z.object({ type: z.string() });
var RpcResponse = z.any();
var RpcEthAccountsRequest = z.object({
  method: z.literal("eth_accounts")
});
var RpcEthBlockNumber = z.object({
  method: z.literal("eth_blockNumber")
});
var RpcEthCall = z.object({
  method: z.literal("eth_call"),
  params: z.array(z.any())
});
var RpcEthChainId = z.object({
  method: z.literal("eth_chainId")
});
var RpcEthEstimateGas = z.object({
  method: z.literal("eth_estimateGas"),
  params: z.array(z.any())
});
var RpcEthFeeHistory = z.object({
  method: z.literal("eth_feeHistory"),
  params: z.array(z.any())
});
var RpcEthGasPrice = z.object({
  method: z.literal("eth_gasPrice")
});
var RpcEthGetAccount = z.object({
  method: z.literal("eth_getAccount"),
  params: z.array(z.any())
});
var RpcEthGetBalance = z.object({
  method: z.literal("eth_getBalance"),
  params: z.array(z.any())
});
var RpcEthGetBlockyByHash = z.object({
  method: z.literal("eth_getBlockByHash"),
  params: z.array(z.any())
});
var RpcEthGetBlockByNumber = z.object({
  method: z.literal("eth_getBlockByNumber"),
  params: z.array(z.any())
});
var RpcEthGetBlockReceipts = z.object({
  method: z.literal("eth_getBlockReceipts"),
  params: z.array(z.any())
});
var RcpEthGetBlockTransactionCountByHash = z.object({
  method: z.literal("eth_getBlockTransactionCountByHash"),
  params: z.array(z.any())
});
var RcpEthGetBlockTransactionCountByNumber = z.object({
  method: z.literal("eth_getBlockTransactionCountByNumber"),
  params: z.array(z.any())
});
var RpcEthGetCode = z.object({
  method: z.literal("eth_getCode"),
  params: z.array(z.any())
});
var RpcEthGetFilter = z.object({
  method: z.literal("eth_getFilterChanges"),
  params: z.array(z.any())
});
var RpcEthGetFilterLogs = z.object({
  method: z.literal("eth_getFilterLogs"),
  params: z.array(z.any())
});
var RpcEthGetLogs = z.object({
  method: z.literal("eth_getLogs"),
  params: z.array(z.any())
});
var RpcEthGetProof = z.object({
  method: z.literal("eth_getProof"),
  params: z.array(z.any())
});
var RpcEthGetStorageAt = z.object({
  method: z.literal("eth_getStorageAt"),
  params: z.array(z.any())
});
var RpcEthGetTransactionByBlockHashAndIndex = z.object({
  method: z.literal("eth_getTransactionByBlockHashAndIndex"),
  params: z.array(z.any())
});
var RpcEthGetTransactionByBlockNumberAndIndex = z.object({
  method: z.literal("eth_getTransactionByBlockNumberAndIndex"),
  params: z.array(z.any())
});
var RpcEthGetTransactionByHash = z.object({
  method: z.literal("eth_getTransactionByHash"),
  params: z.array(z.any())
});
var RpcEthGetTransactionCount = z.object({
  method: z.literal("eth_getTransactionCount"),
  params: z.array(z.any())
});
var RpcEthGetTransactionReceipt = z.object({
  method: z.literal("eth_getTransactionReceipt"),
  params: z.array(z.any())
});
var RpcEthGetUncleCountByBlockHash = z.object({
  method: z.literal("eth_getUncleCountByBlockHash"),
  params: z.array(z.any())
});
var RpcEthGetUncleCountByBlockNumber = z.object({
  method: z.literal("eth_getUncleCountByBlockNumber"),
  params: z.array(z.any())
});
var RpcEthMaxPriorityFeePerGas = z.object({
  method: z.literal("eth_maxPriorityFeePerGas")
});
var RpcEthNewBlockFilter = z.object({
  method: z.literal("eth_newBlockFilter")
});
var RpcEthNewFilter = z.object({
  method: z.literal("eth_newFilter"),
  params: z.array(z.any())
});
var RpcEthNewPendingTransactionFilter = z.object({
  method: z.literal("eth_newPendingTransactionFilter")
});
var RpcEthSendRawTransaction = z.object({
  method: z.literal("eth_sendRawTransaction"),
  params: z.array(z.any())
});
var RpcEthSyncing = z.object({
  method: z.literal("eth_syncing"),
  params: z.array(z.any())
});
var RpcUnistallFilter = z.object({
  method: z.literal("eth_uninstallFilter"),
  params: z.array(z.any())
});
var RpcPersonalSignRequest = z.object({
  method: z.literal("personal_sign"),
  params: z.array(z.any())
});
var RpcEthSignTypedDataV4 = z.object({
  method: z.literal("eth_signTypedData_v4"),
  params: z.array(z.any())
});
var RpcEthSendTransactionRequest = z.object({
  method: z.literal("eth_sendTransaction"),
  params: z.array(z.any())
});
var FrameSession = z.object({
  token: z.string()
});
var W3mFrameSchema = {
  appEvent: z.object({ type: zType("APP_SWITCH_NETWORK"), payload: AppSwitchNetworkRequest }).or(z.object({ type: zType("APP_CONNECT_EMAIL"), payload: AppConnectEmailRequest })).or(z.object({ type: zType("APP_CONNECT_DEVICE") })).or(z.object({ type: zType("APP_CONNECT_OTP"), payload: AppConnectOtpRequest })).or(z.object({ type: zType("APP_GET_USER"), payload: z.optional(AppGetUserRequest) })).or(z.object({ type: zType("APP_SIGN_OUT") })).or(z.object({ type: zType("APP_IS_CONNECTED"), payload: z.optional(FrameSession) })).or(z.object({ type: zType("APP_GET_CHAIN_ID") })).or(z.object({ type: zType("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS") })).or(z.object({ type: zType("APP_INIT_SMART_ACCOUNT") })).or(z.object({ type: zType("APP_SET_PREFERRED_ACCOUNT"), payload: AppSetPreferredAccountRequest })).or(z.object({
    type: zType("APP_RPC_REQUEST"),
    payload: RpcPersonalSignRequest.or(RpcEthSendTransactionRequest).or(RpcEthAccountsRequest).or(RpcEthBlockNumber).or(RpcEthCall).or(RpcEthChainId).or(RpcEthEstimateGas).or(RpcEthFeeHistory).or(RpcEthGasPrice).or(RpcEthGetAccount).or(RpcEthGetBalance).or(RpcEthGetBlockyByHash).or(RpcEthGetBlockByNumber).or(RpcEthGetBlockReceipts).or(RcpEthGetBlockTransactionCountByHash).or(RcpEthGetBlockTransactionCountByNumber).or(RpcEthGetCode).or(RpcEthGetFilter).or(RpcEthGetFilterLogs).or(RpcEthGetLogs).or(RpcEthGetProof).or(RpcEthGetStorageAt).or(RpcEthGetTransactionByBlockHashAndIndex).or(RpcEthGetTransactionByBlockNumberAndIndex).or(RpcEthGetTransactionByHash).or(RpcEthGetTransactionCount).or(RpcEthGetTransactionReceipt).or(RpcEthGetUncleCountByBlockHash).or(RpcEthGetUncleCountByBlockNumber).or(RpcEthMaxPriorityFeePerGas).or(RpcEthNewBlockFilter).or(RpcEthNewFilter).or(RpcEthNewPendingTransactionFilter).or(RpcEthSendRawTransaction).or(RpcEthSyncing).or(RpcUnistallFilter).or(RpcPersonalSignRequest).or(RpcEthSignTypedDataV4).or(RpcEthSendTransactionRequest)
  })).or(z.object({ type: zType("APP_UPDATE_EMAIL"), payload: AppUpdateEmailRequest })).or(z.object({
    type: zType("APP_UPDATE_EMAIL_PRIMARY_OTP"),
    payload: AppUpdateEmailPrimaryOtpRequest
  })).or(z.object({
    type: zType("APP_UPDATE_EMAIL_SECONDARY_OTP"),
    payload: AppUpdateEmailSecondaryOtpRequest
  })).or(z.object({ type: zType("APP_SYNC_THEME"), payload: AppSyncThemeRequest })).or(z.object({ type: zType("APP_SYNC_DAPP_DATA"), payload: AppSyncDappDataRequest })),
  frameEvent: z.object({ type: zType("FRAME_SWITCH_NETWORK_ERROR"), payload: zError }).or(z.object({ type: zType("FRAME_SWITCH_NETWORK_SUCCESS"), payload: FrameSwitchNetworkResponse })).or(z.object({ type: zType("FRAME_CONNECT_EMAIL_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_CONNECT_EMAIL_SUCCESS"), payload: FrameConnectEmailResponse })).or(z.object({ type: zType("FRAME_CONNECT_OTP_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_CONNECT_OTP_SUCCESS") })).or(z.object({ type: zType("FRAME_CONNECT_DEVICE_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_CONNECT_DEVICE_SUCCESS") })).or(z.object({ type: zType("FRAME_GET_USER_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_GET_USER_SUCCESS"), payload: FrameGetUserResponse })).or(z.object({ type: zType("FRAME_SIGN_OUT_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_SIGN_OUT_SUCCESS") })).or(z.object({ type: zType("FRAME_IS_CONNECTED_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_IS_CONNECTED_SUCCESS"), payload: FrameIsConnectedResponse })).or(z.object({ type: zType("FRAME_GET_CHAIN_ID_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_GET_CHAIN_ID_SUCCESS"), payload: FrameGetChainIdResponse })).or(z.object({ type: zType("FRAME_RPC_REQUEST_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_RPC_REQUEST_SUCCESS"), payload: RpcResponse })).or(z.object({ type: zType("FRAME_SESSION_UPDATE"), payload: FrameSession })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_SUCCESS") })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS") })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"), payload: zError })).or(z.object({
    type: zType("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),
    payload: FrameUpdateEmailSecondaryOtpResolver
  })).or(z.object({ type: zType("FRAME_SYNC_THEME_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_SYNC_THEME_SUCCESS") })).or(z.object({ type: zType("FRAME_SYNC_DAPP_DATA_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_SYNC_DAPP_DATA_SUCCESS") })).or(z.object({
    type: zType("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),
    payload: FrameGetSmartAccountEnabledNetworksResponse
  })).or(z.object({
    type: zType("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),
    payload: zError
  })).or(z.object({
    type: zType("FRAME_INIT_SMART_ACCOUNT_SUCCESS"),
    payload: FrameInitSmartAccountResponse
  })).or(z.object({ type: zType("FRAME_INIT_SMART_ACCOUNT_ERROR"), payload: zError })).or(z.object({
    type: zType("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),
    payload: FrameSetPreferredAccountResponse
  })).or(z.object({ type: zType("FRAME_SET_PREFERRED_ACCOUNT_ERROR"), payload: zError }))
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrame.js
var W3mFrame = class {
  constructor(projectId, isAppClient = false) {
    this.iframe = null;
    this.rpcUrl = W3mFrameHelpers.getBlockchainApiUrl();
    this.events = {
      onFrameEvent: (callback) => {
        if (W3mFrameHelpers.isClient) {
          window.addEventListener("message", ({ data: data3 }) => {
            var _a2;
            if (!((_a2 = data3.type) == null ? void 0 : _a2.includes(W3mFrameConstants.FRAME_EVENT_KEY))) {
              return;
            }
            const frameEvent = W3mFrameSchema.frameEvent.parse(data3);
            callback(frameEvent);
          });
        }
      },
      onAppEvent: (callback) => {
        if (W3mFrameHelpers.isClient) {
          window.addEventListener("message", ({ data: data3 }) => {
            var _a2;
            if (!((_a2 = data3.type) == null ? void 0 : _a2.includes(W3mFrameConstants.APP_EVENT_KEY))) {
              return;
            }
            const appEvent = W3mFrameSchema.appEvent.parse(data3);
            callback(appEvent);
          });
        }
      },
      postAppEvent: (event) => {
        var _a2;
        if (W3mFrameHelpers.isClient) {
          if (!((_a2 = this.iframe) == null ? void 0 : _a2.contentWindow)) {
            throw new Error("W3mFrame: iframe is not set");
          }
          W3mFrameSchema.appEvent.parse(event);
          window.postMessage(event);
          this.iframe.contentWindow.postMessage(event, "*");
        }
      },
      postFrameEvent: (event) => {
        if (W3mFrameHelpers.isClient) {
          if (!parent) {
            throw new Error("W3mFrame: parent is not set");
          }
          W3mFrameSchema.frameEvent.parse(event);
          parent.postMessage(event, "*");
        }
      }
    };
    this.projectId = projectId;
    this.frameLoadPromise = new Promise((resolve, reject) => {
      this.frameLoadPromiseResolver = { resolve, reject };
    });
    if (isAppClient) {
      this.frameLoadPromise = new Promise((resolve, reject) => {
        this.frameLoadPromiseResolver = { resolve, reject };
      });
      if (W3mFrameHelpers.isClient) {
        const iframe = document.createElement("iframe");
        iframe.id = "w3m-iframe";
        iframe.src = `${W3mFrameConstants.SECURE_SITE_SDK}?projectId=${projectId}`;
        iframe.style.position = "fixed";
        iframe.style.zIndex = "999999";
        iframe.style.display = "none";
        iframe.style.opacity = "0";
        iframe.style.borderRadius = `clamp(0px, var(--wui-border-radius-l), 44px)`;
        document.body.appendChild(iframe);
        this.iframe = iframe;
        this.iframe.onload = () => {
          var _a2;
          (_a2 = this.frameLoadPromiseResolver) == null ? void 0 : _a2.resolve(void 0);
        };
        this.iframe.onerror = () => {
          var _a2;
          (_a2 = this.frameLoadPromiseResolver) == null ? void 0 : _a2.reject("Unable to load email login dependency");
        };
      }
    }
  }
  get networks() {
    const data3 = [
      1,
      5,
      11155111,
      10,
      420,
      42161,
      421613,
      137,
      80001,
      42220,
      1313161554,
      1313161555,
      56,
      97,
      43114,
      43113,
      324,
      280,
      100,
      8453,
      84531,
      7777777,
      999
    ].map((id) => ({
      [id]: {
        rpcUrl: `${this.rpcUrl}/v1/?chainId=eip155:${id}&projectId=${this.projectId}`,
        chainId: id
      }
    }));
    return Object.assign({}, ...data3);
  }
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameProvider.js
var W3mFrameProvider = class {
  constructor(projectId) {
    this.connectEmailResolver = void 0;
    this.connectDeviceResolver = void 0;
    this.connectOtpResolver = void 0;
    this.connectResolver = void 0;
    this.disconnectResolver = void 0;
    this.isConnectedResolver = void 0;
    this.getChainIdResolver = void 0;
    this.switchChainResolver = void 0;
    this.rpcRequestResolver = void 0;
    this.updateEmailResolver = void 0;
    this.updateEmailPrimaryOtpResolver = void 0;
    this.updateEmailSecondaryOtpResolver = void 0;
    this.syncThemeResolver = void 0;
    this.syncDappDataResolver = void 0;
    this.smartAccountEnabledNetworksResolver = void 0;
    this.initSmartAccountResolver = void 0;
    this.setPreferredAccountResolver = void 0;
    this.w3mFrame = new W3mFrame(projectId, true);
    this.w3mFrame.events.onFrameEvent((event) => {
      console.log("💻 received", event);
      switch (event.type) {
        case W3mFrameConstants.FRAME_CONNECT_EMAIL_SUCCESS:
          return this.onConnectEmailSuccess(event);
        case W3mFrameConstants.FRAME_CONNECT_EMAIL_ERROR:
          return this.onConnectEmailError(event);
        case W3mFrameConstants.FRAME_CONNECT_DEVICE_SUCCESS:
          return this.onConnectDeviceSuccess();
        case W3mFrameConstants.FRAME_CONNECT_DEVICE_ERROR:
          return this.onConnectDeviceError(event);
        case W3mFrameConstants.FRAME_CONNECT_OTP_SUCCESS:
          return this.onConnectOtpSuccess();
        case W3mFrameConstants.FRAME_CONNECT_OTP_ERROR:
          return this.onConnectOtpError(event);
        case W3mFrameConstants.FRAME_GET_USER_SUCCESS:
          return this.onConnectSuccess(event);
        case W3mFrameConstants.FRAME_GET_USER_ERROR:
          return this.onConnectError(event);
        case W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS:
          return this.onIsConnectedSuccess(event);
        case W3mFrameConstants.FRAME_IS_CONNECTED_ERROR:
          return this.onIsConnectedError(event);
        case W3mFrameConstants.FRAME_GET_CHAIN_ID_SUCCESS:
          return this.onGetChainIdSuccess(event);
        case W3mFrameConstants.FRAME_GET_CHAIN_ID_ERROR:
          return this.onGetChainIdError(event);
        case W3mFrameConstants.FRAME_SIGN_OUT_SUCCESS:
          return this.onSignOutSuccess();
        case W3mFrameConstants.FRAME_SIGN_OUT_ERROR:
          return this.onSignOutError(event);
        case W3mFrameConstants.FRAME_SWITCH_NETWORK_SUCCESS:
          return this.onSwitchChainSuccess(event);
        case W3mFrameConstants.FRAME_SWITCH_NETWORK_ERROR:
          return this.onSwitchChainError(event);
        case W3mFrameConstants.FRAME_RPC_REQUEST_SUCCESS:
          return this.onRpcRequestSuccess(event);
        case W3mFrameConstants.FRAME_RPC_REQUEST_ERROR:
          return this.onRpcRequestError(event);
        case W3mFrameConstants.FRAME_SESSION_UPDATE:
          return this.onSessionUpdate(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_SUCCESS:
          return this.onUpdateEmailSuccess();
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_ERROR:
          return this.onUpdateEmailError(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
          return this.onUpdateEmailPrimaryOtpSuccess();
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
          return this.onUpdateEmailPrimaryOtpError(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
          return this.onUpdateEmailSecondaryOtpSuccess(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
          return this.onUpdateEmailSecondaryOtpError(event);
        case W3mFrameConstants.FRAME_SYNC_THEME_SUCCESS:
          return this.onSyncThemeSuccess();
        case W3mFrameConstants.FRAME_SYNC_THEME_ERROR:
          return this.onSyncThemeError(event);
        case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_SUCCESS:
          return this.onSyncDappDataSuccess();
        case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_ERROR:
          return this.onSyncDappDataError(event);
        case W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
          return this.onSmartAccountEnabledNetworksSuccess(event);
        case W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
          return this.onSmartAccountEnabledNetworksError(event);
        case W3mFrameConstants.FRAME_INIT_SMART_ACCOUNT_SUCCESS:
          return this.onInitSmartAccountSuccess(event);
        case W3mFrameConstants.FRAME_INIT_SMART_ACCOUNT_ERROR:
          return this.onInitSmartAccountError(event);
        case W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
          return this.onPreferSmartAccountSuccess(event);
        case W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_ERROR:
          return this.onPreferSmartAccountError();
        default:
          return null;
      }
    });
  }
  getLoginEmailUsed() {
    return Boolean(W3mFrameStorage.get(W3mFrameConstants.EMAIL_LOGIN_USED_KEY));
  }
  getEmail() {
    return W3mFrameStorage.get(W3mFrameConstants.EMAIL);
  }
  rejectRpcRequest() {
    var _a2;
    (_a2 = this.rpcRequestResolver) == null ? void 0 : _a2.reject();
  }
  async connectEmail(payload) {
    await this.w3mFrame.frameLoadPromise;
    W3mFrameHelpers.checkIfAllowedToTriggerEmail();
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_EMAIL, payload });
    return new Promise((resolve, reject) => {
      this.connectEmailResolver = { resolve, reject };
    });
  }
  async connectDevice() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_DEVICE });
    return new Promise((resolve, reject) => {
      this.connectDeviceResolver = { resolve, reject };
    });
  }
  async connectOtp(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_OTP, payload });
    return new Promise((resolve, reject) => {
      this.connectOtpResolver = { resolve, reject };
    });
  }
  async isConnected() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_IS_CONNECTED,
      payload: void 0
    });
    return new Promise((resolve, reject) => {
      this.isConnectedResolver = { resolve, reject };
    });
  }
  async getChainId() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_GET_CHAIN_ID });
    return new Promise((resolve, reject) => {
      this.getChainIdResolver = { resolve, reject };
    });
  }
  async updateEmail(payload) {
    await this.w3mFrame.frameLoadPromise;
    W3mFrameHelpers.checkIfAllowedToTriggerEmail();
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_UPDATE_EMAIL, payload });
    return new Promise((resolve, reject) => {
      this.updateEmailResolver = { resolve, reject };
    });
  }
  async updateEmailPrimaryOtp(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_UPDATE_EMAIL_PRIMARY_OTP,
      payload
    });
    return new Promise((resolve, reject) => {
      this.updateEmailPrimaryOtpResolver = { resolve, reject };
    });
  }
  async updateEmailSecondaryOtp(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_UPDATE_EMAIL_SECONDARY_OTP,
      payload
    });
    return new Promise((resolve, reject) => {
      this.updateEmailSecondaryOtpResolver = { resolve, reject };
    });
  }
  async syncTheme(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SYNC_THEME, payload });
    return new Promise((resolve, reject) => {
      this.syncThemeResolver = { resolve, reject };
    });
  }
  async syncDappData(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SYNC_DAPP_DATA, payload });
    return new Promise((resolve, reject) => {
      this.syncDappDataResolver = { resolve, reject };
    });
  }
  async getSmartAccountEnabledNetworks() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS
    });
    return new Promise((resolve, reject) => {
      this.smartAccountEnabledNetworksResolver = { resolve, reject };
    });
  }
  async initSmartAccount() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_INIT_SMART_ACCOUNT });
    return new Promise((resolve, reject) => {
      this.initSmartAccountResolver = { resolve, reject };
    });
  }
  async setPreferredAccount(type) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_SET_PREFERRED_ACCOUNT,
      payload: { type }
    });
    return new Promise((resolve, reject) => {
      this.setPreferredAccountResolver = { resolve, reject };
    });
  }
  async connect(payload) {
    const chainId = (payload == null ? void 0 : payload.chainId) ?? this.getLastUsedChainId() ?? 1;
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_GET_USER,
      payload: { chainId }
    });
    return new Promise((resolve, reject) => {
      this.connectResolver = { resolve, reject };
    });
  }
  async switchNetwork(chainId) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_SWITCH_NETWORK,
      payload: { chainId }
    });
    return new Promise((resolve, reject) => {
      this.switchChainResolver = { resolve, reject };
    });
  }
  async disconnect() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SIGN_OUT });
    return new Promise((resolve, reject) => {
      this.disconnectResolver = { resolve, reject };
    });
  }
  async request(req) {
    await this.w3mFrame.frameLoadPromise;
    if (W3mFrameRpcConstants.GET_CHAIN_ID === req.method) {
      return this.getLastUsedChainId();
    }
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_RPC_REQUEST,
      payload: req
    });
    return new Promise((resolve, reject) => {
      this.rpcRequestResolver = { resolve, reject };
    });
  }
  onRpcRequest(callback) {
    this.w3mFrame.events.onAppEvent((event) => {
      if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
        callback(event);
      }
    });
  }
  onRpcResponse(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
        callback(event);
      }
    });
  }
  onIsConnected(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_GET_USER_SUCCESS) {
        callback();
      }
    });
  }
  onNotConnected(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_IS_CONNECTED_ERROR) {
        callback();
      }
      if (event.type === W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS && !event.payload.isConnected) {
        callback();
      }
    });
  }
  onInitSmartAccount(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_INIT_SMART_ACCOUNT_SUCCESS) {
        callback(event.payload.isDeployed);
      } else if (event.type === W3mFrameConstants.FRAME_INIT_SMART_ACCOUNT_ERROR) {
        callback(false);
      }
    });
  }
  onConnectEmailSuccess(event) {
    var _a2;
    (_a2 = this.connectEmailResolver) == null ? void 0 : _a2.resolve(event.payload);
    this.setNewLastEmailLoginTime();
  }
  onConnectEmailError(event) {
    var _a2;
    (_a2 = this.connectEmailResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectDeviceSuccess() {
    var _a2;
    (_a2 = this.connectDeviceResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onConnectDeviceError(event) {
    var _a2;
    (_a2 = this.connectDeviceResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectOtpSuccess() {
    var _a2;
    (_a2 = this.connectOtpResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onConnectOtpError(event) {
    var _a2;
    (_a2 = this.connectOtpResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectSuccess(event) {
    var _a2;
    this.setEmailLoginSuccess(event.payload.email);
    this.setLastUsedChainId(event.payload.chainId);
    (_a2 = this.connectResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onConnectError(event) {
    var _a2;
    (_a2 = this.connectResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onIsConnectedSuccess(event) {
    var _a2;
    if (!event.payload.isConnected) {
      this.deleteEmailLoginCache();
    }
    (_a2 = this.isConnectedResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onIsConnectedError(event) {
    var _a2;
    (_a2 = this.isConnectedResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onGetChainIdSuccess(event) {
    var _a2;
    this.setLastUsedChainId(event.payload.chainId);
    (_a2 = this.getChainIdResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onGetChainIdError(event) {
    var _a2;
    (_a2 = this.getChainIdResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSignOutSuccess() {
    var _a2;
    (_a2 = this.disconnectResolver) == null ? void 0 : _a2.resolve(void 0);
    this.deleteEmailLoginCache();
  }
  onSignOutError(event) {
    var _a2;
    (_a2 = this.disconnectResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSwitchChainSuccess(event) {
    var _a2;
    this.setLastUsedChainId(event.payload.chainId);
    (_a2 = this.switchChainResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onSwitchChainError(event) {
    var _a2;
    (_a2 = this.switchChainResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onRpcRequestSuccess(event) {
    var _a2;
    (_a2 = this.rpcRequestResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onRpcRequestError(event) {
    var _a2;
    (_a2 = this.rpcRequestResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSessionUpdate(event) {
    const { payload } = event;
    if (payload) {
    }
  }
  onUpdateEmailSuccess() {
    var _a2;
    (_a2 = this.updateEmailResolver) == null ? void 0 : _a2.resolve(void 0);
    this.setNewLastEmailLoginTime();
  }
  onUpdateEmailError(event) {
    var _a2;
    (_a2 = this.updateEmailResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onUpdateEmailPrimaryOtpSuccess() {
    var _a2;
    (_a2 = this.updateEmailPrimaryOtpResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onUpdateEmailPrimaryOtpError(event) {
    var _a2;
    (_a2 = this.updateEmailPrimaryOtpResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onUpdateEmailSecondaryOtpSuccess(event) {
    var _a2;
    const { newEmail } = event.payload;
    this.setEmailLoginSuccess(newEmail);
    (_a2 = this.updateEmailSecondaryOtpResolver) == null ? void 0 : _a2.resolve({ newEmail });
  }
  onUpdateEmailSecondaryOtpError(event) {
    var _a2;
    (_a2 = this.updateEmailSecondaryOtpResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSyncThemeSuccess() {
    var _a2;
    (_a2 = this.syncThemeResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onSyncThemeError(event) {
    var _a2;
    (_a2 = this.syncThemeResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSyncDappDataSuccess() {
    var _a2;
    (_a2 = this.syncDappDataResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onSyncDappDataError(event) {
    var _a2;
    (_a2 = this.syncDappDataResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSmartAccountEnabledNetworksSuccess(event) {
    var _a2;
    (_a2 = this.smartAccountEnabledNetworksResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onSmartAccountEnabledNetworksError(event) {
    var _a2;
    (_a2 = this.smartAccountEnabledNetworksResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onInitSmartAccountSuccess(event) {
    var _a2;
    (_a2 = this.initSmartAccountResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onInitSmartAccountError(event) {
    var _a2;
    (_a2 = this.initSmartAccountResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onPreferSmartAccountSuccess(event) {
    var _a2;
    this.persistPreferredAccount(event.payload.type);
    (_a2 = this.setPreferredAccountResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onPreferSmartAccountError() {
    var _a2;
    (_a2 = this.setPreferredAccountResolver) == null ? void 0 : _a2.reject();
  }
  setNewLastEmailLoginTime() {
    W3mFrameStorage.set(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME, Date.now().toString());
  }
  setEmailLoginSuccess(email) {
    W3mFrameStorage.set(W3mFrameConstants.EMAIL, email);
    W3mFrameStorage.set(W3mFrameConstants.EMAIL_LOGIN_USED_KEY, "true");
    W3mFrameStorage.delete(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
  }
  deleteEmailLoginCache() {
    W3mFrameStorage.delete(W3mFrameConstants.EMAIL_LOGIN_USED_KEY);
    W3mFrameStorage.delete(W3mFrameConstants.EMAIL);
    W3mFrameStorage.delete(W3mFrameConstants.LAST_USED_CHAIN_KEY);
  }
  setLastUsedChainId(chainId) {
    W3mFrameStorage.set(W3mFrameConstants.LAST_USED_CHAIN_KEY, String(chainId));
  }
  getLastUsedChainId() {
    return Number(W3mFrameStorage.get(W3mFrameConstants.LAST_USED_CHAIN_KEY));
  }
  persistPreferredAccount(type) {
    W3mFrameStorage.set(W3mFrameConstants.PREFERRED_ACCOUNT_TYPE, type);
  }
};

// node_modules/@web3modal/scaffold/dist/esm/src/client.js
var isInitialized = false;
var Web3ModalScaffold = class {
  constructor(options) {
    this.initPromise = void 0;
    this.setIsConnected = (isConnected) => {
      AccountController.setIsConnected(isConnected);
    };
    this.setCaipAddress = (caipAddress) => {
      AccountController.setCaipAddress(caipAddress);
    };
    this.setBalance = (balance, balanceSymbol) => {
      AccountController.setBalance(balance, balanceSymbol);
    };
    this.fetchTokenBalance = () => {
      AccountController.fetchTokenBalance();
    };
    this.setProfileName = (profileName) => {
      AccountController.setProfileName(profileName);
    };
    this.setProfileImage = (profileImage) => {
      AccountController.setProfileImage(profileImage);
    };
    this.resetAccount = () => {
      AccountController.resetAccount();
    };
    this.setCaipNetwork = (caipNetwork) => {
      NetworkController.setCaipNetwork(caipNetwork);
    };
    this.getCaipNetwork = () => NetworkController.state.caipNetwork;
    this.setRequestedCaipNetworks = (requestedCaipNetworks) => {
      NetworkController.setRequestedCaipNetworks(requestedCaipNetworks);
    };
    this.getApprovedCaipNetworksData = () => NetworkController.getApprovedCaipNetworksData();
    this.resetNetwork = () => {
      NetworkController.resetNetwork();
    };
    this.setConnectors = (connectors) => {
      ConnectorController.setConnectors(connectors);
    };
    this.addConnector = (connector) => {
      ConnectorController.addConnector(connector);
    };
    this.getConnectors = () => ConnectorController.getConnectors();
    this.resetWcConnection = () => {
      ConnectionController.resetWcConnection();
    };
    this.fetchIdentity = (request) => BlockchainApiController.fetchIdentity(request);
    this.setAddressExplorerUrl = (addressExplorerUrl) => {
      AccountController.setAddressExplorerUrl(addressExplorerUrl);
    };
    this.setSmartAccountDeployed = (isDeployed) => {
      AccountController.setSmartAccountDeployed(isDeployed);
    };
    this.initControllers(options);
    this.initOrContinue();
  }
  async open(options) {
    await this.initOrContinue();
    ModalController.open(options);
  }
  async close() {
    await this.initOrContinue();
    ModalController.close();
  }
  setLoading(loading) {
    ModalController.setLoading(loading);
  }
  getThemeMode() {
    return ThemeController.state.themeMode;
  }
  getThemeVariables() {
    return ThemeController.state.themeVariables;
  }
  setThemeMode(themeMode) {
    ThemeController.setThemeMode(themeMode);
    setColorTheme(ThemeController.state.themeMode);
  }
  setThemeVariables(themeVariables) {
    ThemeController.setThemeVariables(themeVariables);
    setThemeVariables(ThemeController.state.themeVariables);
  }
  subscribeTheme(callback) {
    return ThemeController.subscribe(callback);
  }
  getState() {
    return { ...PublicStateController.state };
  }
  subscribeState(callback) {
    return PublicStateController.subscribe(callback);
  }
  showErrorMessage(message) {
    SnackController.showError(message);
  }
  showSuccessMessage(message) {
    SnackController.showSuccess(message);
  }
  getEvent() {
    return { ...EventsController.state };
  }
  subscribeEvents(callback) {
    return EventsController.subscribe(callback);
  }
  async initControllers(options) {
    NetworkController.setClient(options.networkControllerClient);
    NetworkController.setDefaultCaipNetwork(options.defaultChain);
    OptionsController.setProjectId(options.projectId);
    OptionsController.setAllWallets(options.allWallets);
    OptionsController.setIncludeWalletIds(options.includeWalletIds);
    OptionsController.setExcludeWalletIds(options.excludeWalletIds);
    OptionsController.setFeaturedWalletIds(options.featuredWalletIds);
    OptionsController.setTokens(options.tokens);
    OptionsController.setTermsConditionsUrl(options.termsConditionsUrl);
    OptionsController.setPrivacyPolicyUrl(options.privacyPolicyUrl);
    OptionsController.setCustomWallets(options.customWallets);
    OptionsController.setEnableAnalytics(options.enableAnalytics);
    OptionsController.setSdkVersion(options._sdkVersion);
    ConnectionController.setClient(options.connectionControllerClient);
    if (options.siweControllerClient) {
      const { SIWEController } = await import("./exports-Q62SY5QM.js");
      SIWEController.setSIWEClient(options.siweControllerClient);
    }
    if (options.metadata) {
      OptionsController.setMetadata(options.metadata);
    }
    if (options.themeMode) {
      ThemeController.setThemeMode(options.themeMode);
    }
    if (options.themeVariables) {
      ThemeController.setThemeVariables(options.themeVariables);
    }
    if (options.enableOnramp) {
      OptionsController.setOnrampEnabled(Boolean(options.enableOnramp));
    }
    if (options.enableWalletFeatures) {
      OptionsController.setWalletFeaturesEnabled(Boolean(options.enableWalletFeatures));
    }
    if (options.allowUnsupportedChain) {
      NetworkController.setAllowUnsupportedChain(options.allowUnsupportedChain);
    }
  }
  async initOrContinue() {
    if (!this.initPromise && !isInitialized && CoreHelperUtil.isClient()) {
      isInitialized = true;
      this.initPromise = new Promise(async (resolve) => {
        await Promise.all([import("./esm-OJOFBDEO.js"), import("./w3m-modal-EAFOMEPQ.js")]);
        const modal = document.createElement("w3m-modal");
        document.body.insertAdjacentElement("beforeend", modal);
        resolve();
      });
    }
    return this.initPromise;
  }
};

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/directives/if-defined.js
var ifDefined = (value) => value ?? nothing;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-account-button/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountButton = class W3mAccountButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.balance = "show";
    this.charsStart = 4;
    this.charsEnd = 6;
    this.address = AccountController.state.address;
    this.balanceVal = AccountController.state.balance;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.profileName = AccountController.state.profileName;
    this.profileImage = AccountController.state.profileImage;
    this.network = NetworkController.state.caipNetwork;
    this.isUnsupportedChain = NetworkController.state.isUnsupportedChain;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.isConnected) {
          this.address = val.address;
          this.balanceVal = val.balance;
          this.profileName = val.profileName;
          this.profileImage = val.profileImage;
          this.balanceSymbol = val.balanceSymbol;
        } else {
          this.address = "";
          this.balanceVal = "";
          this.profileName = "";
          this.profileImage = "";
          this.balanceSymbol = "";
        }
      }),
      NetworkController.subscribeKey("caipNetwork", (val) => this.network = val),
      NetworkController.subscribeKey("isUnsupportedChain", (val) => this.isUnsupportedChain = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const networkImage = AssetUtil.getNetworkImage(this.network);
    const showBalance = this.balance === "show";
    return html`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${ifDefined(this.profileName ?? this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${ifDefined(networkImage)}
        avatarSrc=${ifDefined(this.profileImage)}
        balance=${showBalance ? CoreHelperUtil.formatBalance(this.balanceVal, this.balanceSymbol) : ""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `;
  }
  onClick() {
    if (this.isUnsupportedChain) {
      ModalController.open({ view: "UnsupportedChain" });
    } else {
      ModalController.open();
    }
  }
};
__decorate([
  property({ type: Boolean })
], W3mAccountButton.prototype, "disabled", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "balance", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "charsStart", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "charsEnd", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "address", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "balanceVal", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "balanceSymbol", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "profileName", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "profileImage", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "network", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "isUnsupportedChain", void 0);
W3mAccountButton = __decorate([
  customElement("w3m-account-button")
], W3mAccountButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-button/styles.js
var styles_default = css`
  :host {
    display: block;
    width: max-content;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-button/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mButton = class W3mButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.balance = void 0;
    this.size = void 0;
    this.label = void 0;
    this.loadingLabel = void 0;
    this.charsStart = 4;
    this.charsEnd = 6;
    this.isAccount = AccountController.state.isConnected;
    this.unsubscribe.push(AccountController.subscribeKey("isConnected", (val) => {
      this.isAccount = val;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return this.isAccount ? html`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${ifDefined(this.balance)}
            .charsStart=${ifDefined(this.charsStart)}
            .charsEnd=${ifDefined(this.charsEnd)}
          >
          </w3m-account-button>
        ` : html`
          <w3m-connect-button
            size=${ifDefined(this.size)}
            label=${ifDefined(this.label)}
            loadingLabel=${ifDefined(this.loadingLabel)}
          ></w3m-connect-button>
        `;
  }
};
W3mButton.styles = styles_default;
__decorate2([
  property({ type: Boolean })
], W3mButton.prototype, "disabled", void 0);
__decorate2([
  property()
], W3mButton.prototype, "balance", void 0);
__decorate2([
  property()
], W3mButton.prototype, "size", void 0);
__decorate2([
  property()
], W3mButton.prototype, "label", void 0);
__decorate2([
  property()
], W3mButton.prototype, "loadingLabel", void 0);
__decorate2([
  property()
], W3mButton.prototype, "charsStart", void 0);
__decorate2([
  property()
], W3mButton.prototype, "charsEnd", void 0);
__decorate2([
  state()
], W3mButton.prototype, "isAccount", void 0);
W3mButton = __decorate2([
  customElement("w3m-button")
], W3mButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-connect-button/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectButton = class W3mConnectButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.size = "md";
    this.label = "Connect Wallet";
    this.loadingLabel = "Connecting...";
    this.open = ModalController.state.open;
    this.loading = ModalController.state.loading;
    this.unsubscribe.push(ModalController.subscribe((val) => {
      this.open = val.open;
      this.loading = val.loading;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const isLoading = this.loading || this.open;
    return html`
      <wui-connect-button
        size=${ifDefined(this.size)}
        .loading=${isLoading}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${isLoading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
  }
  onClick() {
    if (this.open) {
      ModalController.close();
    } else if (!this.loading) {
      ModalController.open();
    }
  }
};
__decorate3([
  property()
], W3mConnectButton.prototype, "size", void 0);
__decorate3([
  property()
], W3mConnectButton.prototype, "label", void 0);
__decorate3([
  property()
], W3mConnectButton.prototype, "loadingLabel", void 0);
__decorate3([
  state()
], W3mConnectButton.prototype, "open", void 0);
__decorate3([
  state()
], W3mConnectButton.prototype, "loading", void 0);
W3mConnectButton = __decorate3([
  customElement("w3m-connect-button")
], W3mConnectButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-network-button/styles.js
var styles_default2 = css`
  :host {
    display: block;
    width: max-content;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-network-button/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworkButton = class W3mNetworkButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.network = NetworkController.state.caipNetwork;
    this.connected = AccountController.state.isConnected;
    this.loading = ModalController.state.loading;
    this.isUnsupportedChain = NetworkController.state.isUnsupportedChain;
    this.unsubscribe.push(...[
      NetworkController.subscribeKey("caipNetwork", (val) => this.network = val),
      AccountController.subscribeKey("isConnected", (val) => this.connected = val),
      ModalController.subscribeKey("loading", (val) => this.loading = val),
      NetworkController.subscribeKey("isUnsupportedChain", (val) => this.isUnsupportedChain = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    return html`
      <wui-network-button
        .disabled=${Boolean(this.disabled || this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain ? "Switch Network" : ((_a2 = this.network) == null ? void 0 : _a2.name) ?? (this.connected ? "Unknown Network" : "Select Network")}
      </wui-network-button>
    `;
  }
  onClick() {
    if (!this.loading) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      ModalController.open({ view: "Networks" });
    }
  }
};
W3mNetworkButton.styles = styles_default2;
__decorate4([
  property({ type: Boolean })
], W3mNetworkButton.prototype, "disabled", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "network", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "connected", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "loading", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "isUnsupportedChain", void 0);
W3mNetworkButton = __decorate4([
  customElement("w3m-network-button")
], W3mNetworkButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-router/styles.js
var styles_default3 = css`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-router/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mRouter = class W3mRouter2 extends LitElement {
  constructor() {
    super();
    this.resizeObserver = void 0;
    this.prevHeight = "0px";
    this.prevHistoryLength = 1;
    this.unsubscribe = [];
    this.view = RouterController.state.view;
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => this.onViewChange(val)));
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(async ([content]) => {
      const height = `${content == null ? void 0 : content.contentRect.height}px`;
      if (this.prevHeight !== "0px") {
        await this.animate([{ height: this.prevHeight }, { height }], {
          duration: 150,
          easing: "ease",
          fill: "forwards"
        }).finished;
        this.style.height = "auto";
      }
      this.prevHeight = height;
    });
    this.resizeObserver.observe(this.getWrapper());
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this.resizeObserver) == null ? void 0 : _a2.unobserve(this.getWrapper());
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`<div>${this.viewTemplate()}</div>`;
  }
  viewTemplate() {
    switch (this.view) {
      case "Connect":
        return html`<w3m-connect-view></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return html`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingExternal":
        return html`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return html`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "AllWallets":
        return html`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "Networks":
        return html`<w3m-networks-view></w3m-networks-view>`;
      case "SwitchNetwork":
        return html`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "Account":
        return html`<w3m-account-view></w3m-account-view>`;
      case "AccountSettings":
        return html`<w3m-account-settings-view></w3m-account-settings-view>`;
      case "WhatIsAWallet":
        return html`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      case "WhatIsANetwork":
        return html`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      case "GetWallet":
        return html`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Downloads":
        return html`<w3m-downloads-view></w3m-downloads-view>`;
      case "EmailVerifyOtp":
        return html`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
      case "EmailVerifyDevice":
        return html`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
      case "ApproveTransaction":
        return html`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
      case "Transactions":
        return html`<w3m-transactions-view></w3m-transactions-view>`;
      case "UpgradeEmailWallet":
        return html`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
      case "UpgradeToSmartAccount":
        return html`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;
      case "UpdateEmailWallet":
        return html`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
      case "UpdateEmailPrimaryOtp":
        return html`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
      case "UpdateEmailSecondaryOtp":
        return html`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
      case "UnsupportedChain":
        return html`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
      case "OnRampProviders":
        return html`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
      case "OnRampActivity":
        return html`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;
      case "OnRampTokenSelect":
        return html`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
      case "OnRampFiatSelect":
        return html`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
      case "WhatIsABuy":
        return html`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
      case "BuyInProgress":
        return html`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
      case "WalletReceive":
        return html`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
      case "WalletCompatibleNetworks":
        return html`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
      default:
        return html`<w3m-connect-view></w3m-connect-view>`;
    }
  }
  async onViewChange(newView) {
    const { history } = RouterController.state;
    let xOut = -10;
    let xIn = 10;
    if (history.length < this.prevHistoryLength) {
      xOut = 10;
      xIn = -10;
    }
    this.prevHistoryLength = history.length;
    await this.animate([
      { opacity: 1, transform: "translateX(0px)" },
      { opacity: 0, transform: `translateX(${xOut}px)` }
    ], { duration: 150, easing: "ease", fill: "forwards" }).finished;
    this.view = newView;
    await this.animate([
      { opacity: 0, transform: `translateX(${xIn}px)` },
      { opacity: 1, transform: "translateX(0px)" }
    ], { duration: 150, easing: "ease", fill: "forwards", delay: 50 }).finished;
  }
  getWrapper() {
    var _a2;
    return (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("div");
  }
};
W3mRouter.styles = styles_default3;
__decorate5([
  state()
], W3mRouter.prototype, "view", void 0);
W3mRouter = __decorate5([
  customElement("w3m-router")
], W3mRouter);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-onramp-widget/styles.js
var styles_default4 = css`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-onramp-widget/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAYMENT_CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£"
};
var BUY_PRESET_AMOUNTS = [100, 250, 500, 1e3];
var W3mOnrampWidget = class W3mOnrampWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.connected = AccountController.state.isConnected;
    this.loading = ModalController.state.loading;
    this.paymentCurrency = OnRampController.state.paymentCurrency;
    this.paymentAmount = OnRampController.state.paymentAmount;
    this.purchaseAmount = OnRampController.state.purchaseAmount;
    this.quoteLoading = OnRampController.state.quotesLoading;
    this.unsubscribe.push(...[
      AccountController.subscribeKey("isConnected", (val) => {
        this.connected = val;
      }),
      ModalController.subscribeKey("loading", (val) => {
        this.loading = val;
      }),
      OnRampController.subscribe((val) => {
        this.paymentCurrency = val.paymentCurrency;
        this.paymentAmount = val.paymentAmount;
        this.purchaseAmount = val.purchaseAmount;
        this.quoteLoading = val.quotesLoading;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount || 0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount || 0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${BUY_PRESET_AMOUNTS.map((amount) => {
      var _a2;
      return html`<wui-button
                  variant=${this.paymentAmount === amount ? "accentBg" : "shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${() => this.selectPresetAmount(amount)}
                  >${`${PAYMENT_CURRENCY_SYMBOLS[((_a2 = this.paymentCurrency) == null ? void 0 : _a2.id) || "USD"]} ${amount}`}</wui-button
                >`;
    })}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `;
  }
  templateButton() {
    return this.connected ? html`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>` : html`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`;
  }
  getQuotes() {
    if (!this.loading) {
      ModalController.open({ view: "OnRampProviders" });
    }
  }
  openModal() {
    ModalController.open({ view: "Connect" });
  }
  async onPaymentAmountChange(event) {
    OnRampController.setPaymentAmount(Number(event.detail));
    await OnRampController.getQuote();
  }
  async selectPresetAmount(amount) {
    OnRampController.setPaymentAmount(amount);
    await OnRampController.getQuote();
  }
};
W3mOnrampWidget.styles = styles_default4;
__decorate6([
  property({ type: Boolean })
], W3mOnrampWidget.prototype, "disabled", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "connected", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "loading", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "paymentCurrency", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "paymentAmount", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "purchaseAmount", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "quoteLoading", void 0);
W3mOnrampWidget = __decorate6([
  customElement("w3m-onramp-widget")
], W3mOnrampWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-account-settings-view/styles.js
var styles_default5 = css`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background 0.2s linear;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-account-settings-view/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountSettingsView = class W3mAccountSettingsView2 extends LitElement {
  constructor() {
    super();
    this.usubscribe = [];
    this.networkImages = AssetController.state.networkImages;
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.disconnecting = false;
    this.usubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
        } else {
          ModalController.close();
        }
      })
    ], NetworkController.subscribeKey("caipNetwork", (val) => {
      if (val == null ? void 0 : val.id) {
        this.network = val;
      }
    }));
  }
  disconnectedCallback() {
    this.usubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2, _b2;
    if (!this.address) {
      throw new Error("w3m-account-settings-view: No account provided");
    }
    const networkImage = this.networkImages[((_a2 = this.network) == null ? void 0 : _a2.imageId) ?? ""];
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["0", "xl", "m", "xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ifDefined(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName ? UiHelperUtil.getTruncateString({
      string: this.profileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0", "xl", "m", "xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${networkImage ? "image" : "icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${ifDefined(networkImage)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((_b2 = this.network) == null ? void 0 : _b2.name) ?? "Unknown"}
            </wui-text>
          </wui-list-item>
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  isAllowedNetworkSwitch() {
    const { requestedCaipNetworks } = NetworkController.state;
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a2;
      return id === ((_a2 = this.network) == null ? void 0 : _a2.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  onCopyAddress() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
  emailBtnTemplate() {
    const type = StorageUtil.getConnectedConnector();
    const emailConnector = ConnectorController.getEmailConnector();
    if (!emailConnector || type !== "EMAIL") {
      return null;
    }
    const email = emailConnector.provider.getEmail() ?? "";
    return html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${true}
        @click=${() => this.onGoToUpdateEmail(email)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${email}</wui-text>
      </wui-list-item>
    `;
  }
  onGoToUpdateEmail(email) {
    RouterController.push("UpdateEmailWallet", { email });
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      RouterController.push("Networks");
    }
  }
  async onDisconnect() {
    try {
      this.disconnecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_SUCCESS" });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconnecting = false;
    }
  }
};
W3mAccountSettingsView.styles = styles_default5;
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "address", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "profileImage", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "profileName", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "network", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "disconnecting", void 0);
W3mAccountSettingsView = __decorate7([
  customElement("w3m-account-settings-view")
], W3mAccountSettingsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-account-view/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountView = class W3mAccountView2 extends LitElement {
  render() {
    const type = StorageUtil.getConnectedConnector();
    return html`
      ${OptionsController.state.enableWalletFeatures && type === "EMAIL" ? this.walletFeaturesTemplate() : this.defaultTemplate()}
    `;
  }
  walletFeaturesTemplate() {
    return html`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
  }
  defaultTemplate() {
    return html`<w3m-account-default-widget></w3m-account-default-widget>`;
  }
};
W3mAccountView = __decorate8([
  customElement("w3m-account-view")
], W3mAccountView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-all-wallets-view/index.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsView = class W3mAllWalletsView2 extends LitElement {
  constructor() {
    super(...arguments);
    this.search = "";
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    });
  }
  render() {
    const isSearch = this.search.length >= 2;
    return html`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch ? html`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>` : html`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  qrButtonTemplate() {
    if (CoreHelperUtil.isMobile()) {
      return html`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  onWalletConnectQr() {
    RouterController.push("ConnectingWalletConnect");
  }
};
__decorate9([
  state()
], W3mAllWalletsView.prototype, "search", void 0);
W3mAllWalletsView = __decorate9([
  customElement("w3m-all-wallets-view")
], W3mAllWalletsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-buy-in-progress-view/styles.js
var styles_default6 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-buy-in-progress-view/index.js
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mBuyInProgressView = class W3mBuyInProgressView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedOnRampProvider = OnRampController.state.selectedProvider;
    this.uri = ConnectionController.state.wcUri;
    this.ready = false;
    this.showRetry = false;
    this.buffering = false;
    this.error = false;
    this.startTime = null;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("selectedProvider", (val) => {
        this.selectedOnRampProvider = val;
      })
    ]);
    this.watchTransactions();
  }
  disconnectedCallback() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  render() {
    var _a2, _b2;
    let label = "Continue in external window";
    if (this.error) {
      label = "Buy failed";
    } else if (this.selectedOnRampProvider) {
      label = `Buy in ${(_a2 = this.selectedOnRampProvider) == null ? void 0 : _a2.label}`;
    }
    const subLabel = this.error ? "Buy can be declined from your side or due to and error on the provider app" : `We’ll notify you once your Buy is processed`;
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${ifDefined((_b2 = this.selectedOnRampProvider) == null ? void 0 : _b2.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        ${this.error ? this.tryAgainTemplate() : null}
      </wui-flex>

      <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `;
  }
  watchTransactions() {
    if (!this.selectedOnRampProvider) {
      return;
    }
    switch (this.selectedOnRampProvider.name) {
      case "coinbase":
        this.startTime = Date.now();
        this.initializeCoinbaseTransactions();
        break;
      default:
        break;
    }
  }
  async initializeCoinbaseTransactions() {
    await this.watchCoinbaseTransactions();
    this.intervalId = setInterval(() => this.watchCoinbaseTransactions(), 4e3);
  }
  async watchCoinbaseTransactions() {
    try {
      const address = AccountController.state.address;
      const projectId = OptionsController.state.projectId;
      if (!address) {
        throw new Error("No address found");
      }
      const coinbaseResponse = await BlockchainApiController.fetchTransactions({
        account: address,
        onramp: "coinbase",
        projectId
      });
      const newTransactions = coinbaseResponse.data.filter((tx) => new Date(tx.metadata.minedAt) > new Date(this.startTime) || tx.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS");
      if (newTransactions.length) {
        clearInterval(this.intervalId);
        RouterController.replace("OnRampActivity");
      } else if (this.startTime && Date.now() - this.startTime >= 18e4) {
        clearInterval(this.intervalId);
        this.error = true;
      }
    } catch (error) {
      SnackController.showError(error);
    }
  }
  onTryAgain() {
    if (!this.selectedOnRampProvider) {
      return;
    }
    this.error = false;
    CoreHelperUtil.openHref(this.selectedOnRampProvider.url, "popupWindow", "width=600,height=800,scrollbars=yes");
  }
  tryAgainTemplate() {
    var _a2;
    if (!((_a2 = this.selectedOnRampProvider) == null ? void 0 : _a2.url)) {
      return null;
    }
    return html`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`;
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    var _a2;
    if (!((_a2 = this.selectedOnRampProvider) == null ? void 0 : _a2.url)) {
      SnackController.showError("No link found");
      RouterController.goBack();
      return;
    }
    try {
      CoreHelperUtil.copyToClopboard(this.selectedOnRampProvider.url);
      SnackController.showSuccess("Link copied");
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mBuyInProgressView.styles = styles_default6;
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "selectedOnRampProvider", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "uri", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "ready", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "showRetry", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "buffering", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "error", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "intervalId", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "startTime", void 0);
__decorate10([
  property({ type: Boolean })
], W3mBuyInProgressView.prototype, "isMobile", void 0);
__decorate10([
  property()
], W3mBuyInProgressView.prototype, "onRetry", void 0);
W3mBuyInProgressView = __decorate10([
  customElement("w3m-buy-in-progress-view")
], W3mBuyInProgressView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-view/styles.js
var styles_default7 = css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-view/index.js
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectView = class W3mConnectView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  walletConnectConnectorTemplate() {
    if (CoreHelperUtil.isMobile()) {
      return null;
    }
    const connector = this.connectors.find((c) => c.type === "WALLET_CONNECT");
    if (!connector) {
      return null;
    }
    return html`
      <wui-list-wallet
        imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
        name=${connector.name ?? "Unknown"}
        @click=${() => this.onConnector(connector)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
  }
  customTemplate() {
    const { customWallets } = OptionsController.state;
    if (!(customWallets == null ? void 0 : customWallets.length)) {
      return null;
    }
    const wallets = this.filterOutDuplicateWallets(customWallets);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          name=${wallet.name ?? "Unknown"}
          @click=${() => this.onConnectWallet(wallet)}
          data-testid=${`wallet-selector-${wallet.id}`}
        >
        </wui-list-wallet>
      `);
  }
  featuredTemplate() {
    const connector = this.connectors.find((c) => c.type === "WALLET_CONNECT");
    if (!connector) {
      return null;
    }
    const { featured } = ApiController.state;
    if (!featured.length) {
      return null;
    }
    const wallets = this.filterOutDuplicateWallets(featured);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          name=${wallet.name ?? "Unknown"}
          @click=${() => this.onConnectWallet(wallet)}
        >
        </wui-list-wallet>
      `);
  }
  recentTemplate() {
    const recent = StorageUtil.getRecentWallets();
    return recent.map((wallet) => html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          name=${wallet.name ?? "Unknown"}
          @click=${() => this.onConnectWallet(wallet)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `);
  }
  announcedTemplate() {
    return this.connectors.map((connector) => {
      if (connector.type !== "ANNOUNCED") {
        return null;
      }
      return html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
          name=${connector.name ?? "Unknown"}
          @click=${() => this.onConnector(connector)}
          tagVariant="success"
          .installed=${true}
        >
        </wui-list-wallet>
      `;
    });
  }
  injectedTemplate() {
    return this.connectors.map((connector) => {
      if (connector.type !== "INJECTED") {
        return null;
      }
      if (!ConnectionController.checkInstalled()) {
        return null;
      }
      return html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
          .installed=${true}
          name=${connector.name ?? "Unknown"}
          @click=${() => this.onConnector(connector)}
        >
        </wui-list-wallet>
      `;
    });
  }
  externalTemplate() {
    const announcedRdns = ConnectorController.getAnnouncedConnectorRdns();
    return this.connectors.map((connector) => {
      if (["WALLET_CONNECT", "INJECTED", "ANNOUNCED", "EMAIL"].includes(connector.type)) {
        return null;
      }
      if (announcedRdns.includes(ConstantsUtil.CONNECTOR_RDNS_MAP[connector.id])) {
        return null;
      }
      return html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
          name=${connector.name ?? "Unknown"}
          @click=${() => this.onConnector(connector)}
        >
        </wui-list-wallet>
      `;
    });
  }
  allWalletsTemplate() {
    const connector = this.connectors.find((c) => c.type === "WALLET_CONNECT");
    const { allWallets } = OptionsController.state;
    if (!connector || allWallets === "HIDE") {
      return null;
    }
    if (allWallets === "ONLY_MOBILE" && !CoreHelperUtil.isMobile()) {
      return null;
    }
    const count = ApiController.state.count;
    const featuredCount = ApiController.state.featured.length;
    const rawCount = count + featuredCount;
    const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
    const tagLabel = roundedCount < rawCount ? `${roundedCount}+` : `${roundedCount}`;
    return html`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `;
  }
  recommendedTemplate() {
    const connector = this.connectors.find((c) => c.type === "WALLET_CONNECT");
    if (!connector) {
      return null;
    }
    const { recommended } = ApiController.state;
    const { customWallets, featuredWalletIds } = OptionsController.state;
    const { connectors } = ConnectorController.state;
    const recent = StorageUtil.getRecentWallets();
    const injected = connectors.filter((c) => c.type === "INJECTED");
    const filteredInjected = injected.filter((i) => i.name !== "Browser Wallet");
    if (featuredWalletIds || customWallets || !recommended.length) {
      return null;
    }
    const overrideLength = filteredInjected.length + recent.length;
    const maxRecommended = Math.max(0, 2 - overrideLength);
    const wallets = this.filterOutDuplicateWallets(recommended).slice(0, maxRecommended);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          name=${(wallet == null ? void 0 : wallet.name) ?? "Unknown"}
          @click=${() => this.onConnectWallet(wallet)}
        >
        </wui-list-wallet>
      `);
  }
  onConnector(connector) {
    if (connector.type === "WALLET_CONNECT") {
      if (CoreHelperUtil.isMobile()) {
        RouterController.push("AllWallets");
      } else {
        RouterController.push("ConnectingWalletConnect");
      }
    } else {
      RouterController.push("ConnectingExternal", { connector });
    }
  }
  filterOutDuplicateWallets(wallets) {
    const recent = StorageUtil.getRecentWallets();
    const recentIds = recent.map((wallet) => wallet.id);
    const filtered = wallets.filter((wallet) => !recentIds.includes(wallet.id));
    return filtered;
  }
  onAllWallets() {
    EventsController.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" });
    RouterController.push("AllWallets");
  }
  onConnectWallet(wallet) {
    RouterController.push("ConnectingWalletConnect", { wallet });
  }
};
W3mConnectView.styles = styles_default7;
__decorate11([
  state()
], W3mConnectView.prototype, "connectors", void 0);
W3mConnectView = __decorate11([
  customElement("w3m-connect-view")
], W3mConnectView);

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-connecting-widget/styles.js
var styles_default8 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-connecting-widget/index.js
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWidget = class extends LitElement {
  constructor() {
    var _a2, _b2, _c, _d;
    super();
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
    this.connector = (_b2 = RouterController.state.data) == null ? void 0 : _b2.connector;
    this.timeout = void 0;
    this.secondaryBtnLabel = "Try again";
    this.secondaryBtnIcon = "refresh";
    this.secondaryLabel = "Accept connection request in the wallet";
    this.onConnect = void 0;
    this.onRender = void 0;
    this.onAutoConnect = void 0;
    this.isWalletConnect = true;
    this.unsubscribe = [];
    this.imageSrc = AssetUtil.getWalletImage(this.wallet) ?? AssetUtil.getConnectorImage(this.connector);
    this.name = ((_c = this.wallet) == null ? void 0 : _c.name) ?? ((_d = this.connector) == null ? void 0 : _d.name) ?? "Wallet";
    this.isRetrying = false;
    this.uri = ConnectionController.state.wcUri;
    this.error = ConnectionController.state.wcError;
    this.ready = false;
    this.showRetry = false;
    this.buffering = false;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      ConnectionController.subscribeKey("wcUri", (val) => {
        var _a3;
        this.uri = val;
        if (this.isRetrying && this.onRetry) {
          this.isRetrying = false;
          (_a3 = this.onConnect) == null ? void 0 : _a3.call(this);
        }
      }),
      ConnectionController.subscribeKey("wcError", (val) => this.error = val),
      ConnectionController.subscribeKey("buffering", (val) => this.buffering = val)
    ]);
  }
  firstUpdated() {
    var _a2;
    (_a2 = this.onAutoConnect) == null ? void 0 : _a2.call(this);
    this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    clearTimeout(this.timeout);
  }
  render() {
    var _a2;
    (_a2 = this.onRender) == null ? void 0 : _a2.call(this);
    this.onShowRetry();
    const subLabel = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let label = `Continue in ${this.name}`;
    if (this.buffering) {
      label = "Connecting...";
    }
    if (this.error) {
      label = "Connection declined";
    }
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ifDefined(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error && this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect ? html`
            <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onShowRetry() {
    var _a2;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-button");
      retryButton == null ? void 0 : retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onTryAgain() {
    var _a2, _b2;
    if (!this.buffering) {
      ConnectionController.setWcError(false);
      if (this.onRetry) {
        this.isRetrying = true;
        (_a2 = this.onRetry) == null ? void 0 : _a2.call(this);
      } else {
        (_b2 = this.onConnect) == null ? void 0 : _b2.call(this);
      }
    }
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      if (this.uri) {
        CoreHelperUtil.copyToClopboard(this.uri);
        SnackController.showSuccess("Link copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mConnectingWidget.styles = styles_default8;
__decorate12([
  state()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "buffering", void 0);
__decorate12([
  property({ type: Boolean })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate12([
  property()
], W3mConnectingWidget.prototype, "onRetry", void 0);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connecting-external-view/index.js
var __decorate13 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingExternalView = class W3mConnectingExternalView2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.connector) {
      throw new Error("w3m-connecting-view: No connector provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.connector.name ?? "Unknown",
        platform: "browser"
      }
    });
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    this.isWalletConnect = false;
  }
  async onConnectProxy() {
    try {
      this.error = false;
      if (this.connector) {
        if (this.connector.imageUrl) {
          StorageUtil.setConnectedWalletImageUrl(this.connector.imageUrl);
        }
        await ConnectionController.connectExternal(this.connector);
        if (OptionsController.state.isSiweEnabled) {
          RouterController.push("ConnectingSiwe");
        } else {
          ModalController.close();
        }
        EventsController.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          properties: { method: "browser", name: this.connector.name || "Unknown" }
        });
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingExternalView = __decorate13([
  customElement("w3m-connecting-external-view")
], W3mConnectingExternalView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connecting-wc-view/index.js
var __decorate14 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcView = class W3mConnectingWcView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.interval = void 0;
    this.lastRetry = Date.now();
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
    this.platform = void 0;
    this.platforms = [];
    this.initializeConnection();
    this.interval = setInterval(this.initializeConnection.bind(this), ConstantsUtil.TEN_SEC_MS);
  }
  disconnectedCallback() {
    clearTimeout(this.interval);
  }
  render() {
    if (!this.wallet) {
      return html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
    }
    this.determinePlatforms();
    return html`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `;
  }
  async initializeConnection(retry = false) {
    try {
      const { wcPairingExpiry } = ConnectionController.state;
      if (retry || CoreHelperUtil.isPairingExpired(wcPairingExpiry)) {
        ConnectionController.connectWalletConnect();
        if (this.wallet) {
          const url = AssetUtil.getWalletImage(this.wallet);
          if (url) {
            StorageUtil.setConnectedWalletImageUrl(url);
          }
        } else {
          const connectors = ConnectorController.state.connectors;
          const connector = connectors.find((c) => c.type === "WALLET_CONNECT");
          const url = AssetUtil.getConnectorImage(connector);
          if (url) {
            StorageUtil.setConnectedWalletImageUrl(url);
          }
        }
        await ConnectionController.state.wcPromise;
        this.finalizeConnection();
        if (OptionsController.state.isSiweEnabled) {
          RouterController.push("ConnectingSiwe");
        } else {
          ModalController.close();
        }
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      ConnectionController.setWcError(true);
      if (CoreHelperUtil.isAllowedRetry(this.lastRetry)) {
        SnackController.showError("Declined");
        this.lastRetry = Date.now();
        this.initializeConnection(true);
      }
    }
  }
  finalizeConnection() {
    var _a2;
    const { wcLinking, recentWallet } = ConnectionController.state;
    if (wcLinking) {
      StorageUtil.setWalletConnectDeepLink(wcLinking);
    }
    if (recentWallet) {
      StorageUtil.setWeb3ModalRecent(recentWallet);
    }
    EventsController.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      properties: {
        method: wcLinking ? "mobile" : "qrcode",
        name: ((_a2 = this.wallet) == null ? void 0 : _a2.name) || "Unknown"
      }
    });
  }
  determinePlatforms() {
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");
    }
    if (this.platform) {
      return;
    }
    const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
    const injectedIds = injected == null ? void 0 : injected.map(({ injected_id }) => injected_id).filter(Boolean);
    const browserIds = rdns ? [rdns] : injectedIds ?? [];
    const isBrowser = browserIds.length;
    const isMobileWc = mobile_link;
    const isWebWc = webapp_link;
    const isBrowserInstalled = ConnectionController.checkInstalled(browserIds);
    const isBrowserWc = isBrowser && isBrowserInstalled;
    const isDesktopWc = desktop_link && !CoreHelperUtil.isMobile();
    if (isBrowserWc) {
      this.platforms.push("browser");
    }
    if (isMobileWc) {
      this.platforms.push(CoreHelperUtil.isMobile() ? "mobile" : "qrcode");
    }
    if (isWebWc) {
      this.platforms.push("web");
    }
    if (isDesktopWc) {
      this.platforms.push("desktop");
    }
    if (!isBrowserWc && isBrowser) {
      this.platforms.push("unsupported");
    }
    this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "desktop":
        return html`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
      case "web":
        return html`
          <w3m-connecting-wc-web .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-web>
        `;
      case "mobile":
        return html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
      default:
        return html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    const multiPlatform = this.platforms.length > 1;
    if (!multiPlatform) {
      return null;
    }
    return html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
  }
  async onSelectPlatform(platform) {
    var _a2;
    const container = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("div");
    if (container) {
      await container.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.platform = platform;
      container.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
__decorate14([
  state()
], W3mConnectingWcView.prototype, "platform", void 0);
__decorate14([
  state()
], W3mConnectingWcView.prototype, "platforms", void 0);
W3mConnectingWcView = __decorate14([
  customElement("w3m-connecting-wc-view")
], W3mConnectingWcView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-downloads-view/index.js
var __decorate15 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mDownloadsView = class W3mDownloadsView2 extends LitElement {
  constructor() {
    var _a2;
    super(...arguments);
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
  }
  render() {
    if (!this.wallet) {
      throw new Error("w3m-downloads-view");
    }
    return html`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s", "s", "l", "s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.chrome_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`;
  }
  iosTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.app_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`;
  }
  androidTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.play_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`;
  }
  homepageTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.homepage)) {
      return null;
    }
    return html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `;
  }
  onChromeStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.chrome_store) {
      CoreHelperUtil.openHref(this.wallet.chrome_store, "_blank");
    }
  }
  onAppStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mDownloadsView = __decorate15([
  customElement("w3m-downloads-view")
], W3mDownloadsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-get-wallet-view/index.js
var __decorate16 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EXPLORER = "https://walletconnect.com/explorer";
var W3mGetWalletView = class W3mGetWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${() => {
      CoreHelperUtil.openHref("https://walletconnect.com/explorer?type=wallet", "_blank");
    }}
        ></wui-list-wallet>
      </wui-flex>
    `;
  }
  recommendedWalletsTemplate() {
    const { recommended, featured } = ApiController.state;
    const { customWallets } = OptionsController.state;
    const wallets = [...featured, ...customWallets ?? [], ...recommended].slice(0, 4);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          name=${wallet.name ?? "Unknown"}
          tagVariant="main"
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          @click=${() => {
      CoreHelperUtil.openHref(wallet.homepage ?? EXPLORER, "_blank");
    }}
        ></wui-list-wallet>
      `);
  }
};
W3mGetWalletView = __decorate16([
  customElement("w3m-get-wallet-view")
], W3mGetWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-network-switch-view/styles.js
var styles_default9 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-network-switch-view/index.js
var __decorate17 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworkSwitchView = class W3mNetworkSwitchView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.network = (_a2 = RouterController.state.data) == null ? void 0 : _a2.network;
    this.unsubscribe = [];
    this.showRetry = false;
    this.error = false;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  firstUpdated() {
    this.onSwitchNetwork();
  }
  render() {
    if (!this.network) {
      throw new Error("w3m-network-switch-view: No network provided");
    }
    this.onShowRetry();
    const label = this.error ? "Switch declined" : "Approve in wallet";
    const subLabel = this.error ? "Switch can be declined if chain is not supported by a wallet or previous request is still active" : "Accept connection request in your wallet";
    return html`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "3xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : html`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${true}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${label}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
  }
  onShowRetry() {
    var _a2;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-button");
      retryButton == null ? void 0 : retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onSwitchNetwork() {
    try {
      this.error = false;
      if (this.network) {
        await NetworkController.switchActiveNetwork(this.network);
        if (!OptionsController.state.isSiweEnabled) {
          RouterUtil.navigateAfterNetworkSwitch();
        }
      }
    } catch {
      this.error = true;
    }
  }
};
W3mNetworkSwitchView.styles = styles_default9;
__decorate17([
  state()
], W3mNetworkSwitchView.prototype, "showRetry", void 0);
__decorate17([
  state()
], W3mNetworkSwitchView.prototype, "error", void 0);
W3mNetworkSwitchView = __decorate17([
  customElement("w3m-network-switch-view")
], W3mNetworkSwitchView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-networks-view/styles.js
var styles_default10 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-networks-view/index.js
var __decorate18 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworksView = class W3mNetworksView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.caipNetwork = NetworkController.state.caipNetwork;
    this.unsubscribe.push(NetworkController.subscribeKey("caipNetwork", (val) => this.caipNetwork = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `;
  }
  onNetworkHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" });
    RouterController.push("WhatIsANetwork");
  }
  networksTemplate() {
    const { approvedCaipNetworkIds, requestedCaipNetworks, supportsAllNetworks } = NetworkController.state;
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    return sortedNetworks == null ? void 0 : sortedNetworks.map((network) => {
      var _a2;
      return html`
        <wui-card-select
          .selected=${((_a2 = this.caipNetwork) == null ? void 0 : _a2.id) === network.id}
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          type="network"
          name=${network.name ?? network.id}
          @click=${() => this.onSwitchNetwork(network)}
          .disabled=${!supportsAllNetworks && !(approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id))}
          data-testid=${`w3m-network-switch-${network.name ?? network.id}`}
        ></wui-card-select>
      `;
    });
  }
  async onSwitchNetwork(network) {
    const { isConnected } = AccountController.state;
    const { approvedCaipNetworkIds, supportsAllNetworks, caipNetwork } = NetworkController.state;
    const { data: data3 } = RouterController.state;
    if (isConnected && (caipNetwork == null ? void 0 : caipNetwork.id) !== network.id) {
      if (approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id)) {
        await NetworkController.switchActiveNetwork(network);
        RouterUtil.navigateAfterNetworkSwitch();
      } else if (supportsAllNetworks) {
        RouterController.push("SwitchNetwork", { ...data3, network });
      }
    } else if (!isConnected) {
      NetworkController.setCaipNetwork(network);
      RouterController.push("Connect");
    }
  }
};
W3mNetworksView.styles = styles_default10;
__decorate18([
  state()
], W3mNetworksView.prototype, "caipNetwork", void 0);
W3mNetworksView = __decorate18([
  customElement("w3m-networks-view")
], W3mNetworksView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-activity-view/styles.js
var styles_default11 = css`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-activity-view/index.js
var __decorate19 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LOADING_ITEM_COUNT = 7;
var W3mOnRampActivityView = class W3mOnRampActivityView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.refetchTimeout = void 0;
    this.selectedOnRampProvider = OnRampController.state.selectedProvider;
    this.loading = false;
    this.coinbaseTransactions = TransactionsController.state.coinbaseTransactions;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("selectedProvider", (val) => {
        this.selectedOnRampProvider = val;
      }),
      AssetController.subscribeKey("tokenImages", (val) => this.tokenImages = val),
      () => {
        clearTimeout(this.refetchTimeout);
      },
      TransactionsController.subscribe((val) => {
        this.coinbaseTransactions = { ...val.coinbaseTransactions };
      })
    ]);
    this.fetchTransactions();
  }
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading ? this.templateLoading() : this.templateTransactionsByYear()}
      </wui-flex>
    `;
  }
  templateTransactions(transactions) {
    return transactions == null ? void 0 : transactions.map((transaction) => {
      var _a2, _b2, _c;
      const date = DateUtil.formatDate((_a2 = transaction == null ? void 0 : transaction.metadata) == null ? void 0 : _a2.minedAt);
      const transfer = transaction.transfers[0];
      const fungibleInfo = transfer == null ? void 0 : transfer.fungible_info;
      if (!fungibleInfo) {
        return null;
      }
      const icon = ((_b2 = fungibleInfo == null ? void 0 : fungibleInfo.icon) == null ? void 0 : _b2.url) || ((_c = this.tokenImages) == null ? void 0 : _c[fungibleInfo.symbol || ""]);
      return html`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${ifDefined(fungibleInfo.symbol)}
          purchaseValue=${transfer.quantity.numeric}
          date=${date}
          icon=${ifDefined(icon)}
          symbol=${ifDefined(fungibleInfo.symbol)}
        ></wui-onramp-activity-item>
      `;
    });
  }
  templateTransactionsByYear() {
    const sortedYearKeys = Object.keys(this.coinbaseTransactions).sort().reverse();
    return sortedYearKeys.map((year) => {
      const yearInt = parseInt(year, 10);
      const sortedMonthIndexes = new Array(12).fill(null).map((_, idx) => idx).reverse();
      return sortedMonthIndexes.map((month) => {
        var _a2;
        const groupTitle = TransactionUtil.getTransactionGroupTitle(yearInt, month);
        const transactions = (_a2 = this.coinbaseTransactions[yearInt]) == null ? void 0 : _a2[month];
        if (!transactions) {
          return null;
        }
        return html`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions)}
            </wui-flex>
          </wui-flex>
        `;
      });
    });
  }
  async fetchTransactions() {
    const provider = "coinbase";
    if (provider === "coinbase") {
      await this.fetchCoinbaseTransactions();
    }
  }
  async fetchCoinbaseTransactions() {
    const address = AccountController.state.address;
    const projectId = OptionsController.state.projectId;
    if (!address) {
      throw new Error("No address found");
    }
    if (!projectId) {
      throw new Error("No projectId found");
    }
    this.loading = true;
    await TransactionsController.fetchTransactions(address, "coinbase");
    this.loading = false;
    this.refetchLoadingTransactions();
  }
  refetchLoadingTransactions() {
    var _a2;
    const today = /* @__PURE__ */ new Date();
    const currentMonthTxs = ((_a2 = this.coinbaseTransactions[today.getFullYear()]) == null ? void 0 : _a2[today.getMonth()]) || [];
    const loadingTransactions = currentMonthTxs.filter((transaction) => transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS");
    if (loadingTransactions.length === 0) {
      clearTimeout(this.refetchTimeout);
      return;
    }
    this.refetchTimeout = setTimeout(async () => {
      const address = AccountController.state.address;
      await TransactionsController.fetchTransactions(address, "coinbase");
      this.refetchLoadingTransactions();
    }, 3e3);
  }
  templateLoading() {
    return Array(LOADING_ITEM_COUNT).fill(html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item) => item);
  }
};
W3mOnRampActivityView.styles = styles_default11;
__decorate19([
  state()
], W3mOnRampActivityView.prototype, "selectedOnRampProvider", void 0);
__decorate19([
  state()
], W3mOnRampActivityView.prototype, "loading", void 0);
__decorate19([
  state()
], W3mOnRampActivityView.prototype, "coinbaseTransactions", void 0);
__decorate19([
  state()
], W3mOnRampActivityView.prototype, "tokenImages", void 0);
W3mOnRampActivityView = __decorate19([
  customElement("w3m-onramp-activity-view")
], W3mOnRampActivityView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-fiat-select-view/styles.js
var styles_default12 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-fiat-select-view/index.js
var __decorate20 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnrampFiatSelectView = class W3mOnrampFiatSelectView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedCurrency = OnRampController.state.paymentCurrency;
    this.currencies = OnRampController.state.paymentCurrencies;
    this.currencyImages = AssetController.state.currencyImages;
    this.unsubscribe.push(...[
      OnRampController.subscribe((val) => {
        this.selectedCurrency = val.paymentCurrency;
        this.currencies = val.paymentCurrencies;
      }),
      AssetController.subscribeKey("currencyImages", (val) => this.currencyImages = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  currenciesTemplate() {
    return this.currencies.map((currency) => {
      var _a2;
      return html`
        <wui-list-item
          imageSrc=${ifDefined((_a2 = this.currencyImages) == null ? void 0 : _a2[currency.id])}
          @click=${() => this.selectCurrency(currency)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${currency.id}</wui-text>
        </wui-list-item>
      `;
    });
  }
  selectCurrency(currency) {
    if (!currency) {
      return;
    }
    OnRampController.setPaymentCurrency(currency);
    ModalController.close();
  }
};
W3mOnrampFiatSelectView.styles = styles_default12;
__decorate20([
  state()
], W3mOnrampFiatSelectView.prototype, "selectedCurrency", void 0);
__decorate20([
  state()
], W3mOnrampFiatSelectView.prototype, "currencies", void 0);
__decorate20([
  state()
], W3mOnrampFiatSelectView.prototype, "currencyImages", void 0);
W3mOnrampFiatSelectView = __decorate20([
  customElement("w3m-onramp-fiat-select-view")
], W3mOnrampFiatSelectView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-providers-view/index.js
var __decorate21 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampProvidersView = class W3mOnRampProvidersView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.providers = OnRampController.state.providers;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("providers", (val) => {
        this.providers = val;
      })
    ]);
  }
  firstUpdated() {
    const urlPromises = this.providers.map(async (provider) => {
      if (provider.name === "coinbase") {
        return await this.getCoinbaseOnRampURL();
      }
      return Promise.resolve(provider == null ? void 0 : provider.url);
    });
    Promise.all(urlPromises).then((urls) => {
      this.providers = this.providers.map((provider, index) => ({
        ...provider,
        url: urls[index] || ""
      }));
    });
  }
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `;
  }
  onRampProvidersTemplate() {
    return this.providers.map((provider) => html`
        <wui-onramp-provider-item
          label=${provider.label}
          name=${provider.name}
          feeRange=${provider.feeRange}
          @click=${() => {
      this.onClickProvider(provider);
    }}
          ?disabled=${!provider.url}
        ></wui-onramp-provider-item>
      `);
  }
  onClickProvider(provider) {
    OnRampController.setSelectedProvider(provider);
    RouterController.push("BuyInProgress");
    CoreHelperUtil.openHref(provider.url, "popupWindow", "width=600,height=800,scrollbars=yes");
  }
  async getCoinbaseOnRampURL() {
    const address = AccountController.state.address;
    const network = NetworkController.state.caipNetwork;
    if (!address) {
      throw new Error("No address found");
    }
    if (!(network == null ? void 0 : network.name)) {
      throw new Error("No network found");
    }
    const defaultNetwork = ConstantsUtil.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[network.name] ?? ConstantsUtil.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN;
    const purchaseCurrency = OnRampController.state.purchaseCurrency;
    const assets = purchaseCurrency ? [purchaseCurrency.symbol] : OnRampController.state.purchaseCurrencies.map((currency) => currency.symbol);
    return await BlockchainApiController.generateOnRampURL({
      defaultNetwork,
      destinationWallets: [
        { address, blockchains: ConstantsUtil.WC_COINBASE_PAY_SDK_CHAINS, assets }
      ],
      partnerUserId: address,
      purchaseAmount: OnRampController.state.purchaseAmount
    });
  }
};
__decorate21([
  state()
], W3mOnRampProvidersView.prototype, "providers", void 0);
W3mOnRampProvidersView = __decorate21([
  customElement("w3m-onramp-providers-view")
], W3mOnRampProvidersView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-tokens-select-view/styles.js
var styles_default13 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-tokens-select-view/index.js
var __decorate22 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnrampTokensView = class W3mOnrampTokensView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedCurrency = OnRampController.state.purchaseCurrencies;
    this.tokens = OnRampController.state.purchaseCurrencies;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(...[
      OnRampController.subscribe((val) => {
        this.selectedCurrency = val.purchaseCurrencies;
        this.tokens = val.purchaseCurrencies;
      }),
      AssetController.subscribeKey("tokenImages", (val) => this.tokenImages = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  currenciesTemplate() {
    return this.tokens.map((token) => {
      var _a2;
      return html`
        <wui-list-item
          imageSrc=${ifDefined((_a2 = this.tokenImages) == null ? void 0 : _a2[token.symbol])}
          @click=${() => this.selectToken(token)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${token.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${token.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `;
    });
  }
  selectToken(currency) {
    if (!currency) {
      return;
    }
    OnRampController.setPurchaseCurrency(currency);
    ModalController.close();
  }
};
W3mOnrampTokensView.styles = styles_default13;
__decorate22([
  state()
], W3mOnrampTokensView.prototype, "selectedCurrency", void 0);
__decorate22([
  state()
], W3mOnrampTokensView.prototype, "tokens", void 0);
__decorate22([
  state()
], W3mOnrampTokensView.prototype, "tokenImages", void 0);
W3mOnrampTokensView = __decorate22([
  customElement("w3m-onramp-token-select-view")
], W3mOnrampTokensView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-transactions-view/styles.js
var styles_default14 = css`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-transactions-view/index.js
var __decorate23 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mTransactionsView = class W3mTransactionsView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `;
  }
};
W3mTransactionsView.styles = styles_default14;
W3mTransactionsView = __decorate23([
  customElement("w3m-transactions-view")
], W3mTransactionsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-what-is-a-network-view/index.js
var __decorate24 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var data = [
  {
    images: ["network", "layers", "system"],
    title: "The system’s nuts and bolts",
    text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."
  },
  {
    images: ["noun", "defiAlt", "dao"],
    title: "Designed for different uses",
    text: "Each network is designed differently, and may therefore suit certain apps and experiences."
  }
];
var W3mWhatIsANetworkView = class W3mWhatIsANetworkView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${() => {
      CoreHelperUtil.openHref("https://ethereum.org/en/developers/docs/networks/", "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mWhatIsANetworkView = __decorate24([
  customElement("w3m-what-is-a-network-view")
], W3mWhatIsANetworkView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-what-is-a-wallet-view/index.js
var __decorate25 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var data2 = [
  {
    images: ["login", "profile", "lock"],
    title: "One login for all of web3",
    text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!"
  },
  {
    images: ["defi", "nft", "eth"],
    title: "A home for your digital assets",
    text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."
  },
  {
    images: ["browser", "noun", "dao"],
    title: "Your gateway to a new web",
    text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."
  }
];
var W3mWhatIsAWalletView = class W3mWhatIsAWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data2}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
  }
  onGetWallet() {
    EventsController.sendEvent({ type: "track", event: "CLICK_GET_WALLET" });
    RouterController.push("GetWallet");
  }
};
W3mWhatIsAWalletView = __decorate25([
  customElement("w3m-what-is-a-wallet-view")
], W3mWhatIsAWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-what-is-a-buy-view/index.js
var __decorate26 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWhatIsABuyView = class W3mWhatIsABuyView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "3xl", "xl", "3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mWhatIsABuyView = __decorate26([
  customElement("w3m-what-is-a-buy-view")
], W3mWhatIsABuyView);

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-email-otp-widget/styles.js
var styles_default15 = css`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-email-otp-widget/index.js
var __decorate27 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OTP_LENGTH = 6;
var W3mEmailOtpWidget = class W3mEmailOtpWidget2 extends LitElement {
  firstUpdated() {
    this.startOTPTimeout();
  }
  disconnectedCallback() {
    clearTimeout(this.OTPTimeout);
  }
  constructor() {
    var _a2;
    super();
    this.loading = false;
    this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
    this.error = "";
    this.otp = "";
    this.email = (_a2 = RouterController.state.data) == null ? void 0 : _a2.email;
    this.emailConnector = ConnectorController.getEmailConnector();
  }
  render() {
    if (!this.email) {
      throw new Error("w3m-email-otp-widget: No email provided");
    }
    const isResendDisabled = Boolean(this.timeoutTimeLeft);
    const footerLabels = this.getFooterLabels(isResendDisabled);
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l", "0", "l", "0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading ? html`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>` : html` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error ? html`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  ` : null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${footerLabels.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${isResendDisabled}>
            ${footerLabels.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
  }
  startOTPTimeout() {
    this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
    this.OTPTimeout = setInterval(() => {
      if (this.timeoutTimeLeft > 0) {
        this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
      } else {
        clearInterval(this.OTPTimeout);
      }
    }, 1e3);
  }
  async onOtpInputChange(event) {
    var _a2;
    try {
      if (!this.loading) {
        this.otp = event.detail;
        if (this.emailConnector && this.otp.length === OTP_LENGTH) {
          this.loading = true;
          await ((_a2 = this.onOtpSubmit) == null ? void 0 : _a2.call(this, this.otp));
        }
      }
    } catch (error) {
      this.error = CoreHelperUtil.parseError(error);
      this.loading = false;
    }
  }
  async onResendCode() {
    try {
      if (this.onOtpResend) {
        if (!this.loading && !this.timeoutTimeLeft) {
          this.error = "";
          this.otp = "";
          const emailConnector = ConnectorController.getEmailConnector();
          if (!emailConnector || !this.email) {
            throw new Error("w3m-email-otp-widget: Unable to resend email");
          }
          this.loading = true;
          await this.onOtpResend(this.email);
          this.startOTPTimeout();
          SnackController.showSuccess("Code email resent");
        }
      } else if (this.onStartOver) {
        this.onStartOver();
      }
    } catch (error) {
      SnackController.showError(error);
    } finally {
      this.loading = false;
    }
  }
  getFooterLabels(isResendDisabled) {
    if (this.onStartOver) {
      return {
        title: "Something wrong?",
        action: `Try again ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : ""}`
      };
    }
    return {
      title: `Didn't receive it?`,
      action: `Resend ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : "Code"}`
    };
  }
};
W3mEmailOtpWidget.styles = styles_default15;
__decorate27([
  state()
], W3mEmailOtpWidget.prototype, "loading", void 0);
__decorate27([
  state()
], W3mEmailOtpWidget.prototype, "timeoutTimeLeft", void 0);
__decorate27([
  state()
], W3mEmailOtpWidget.prototype, "error", void 0);
W3mEmailOtpWidget = __decorate27([
  customElement("w3m-email-otp-widget")
], W3mEmailOtpWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-email-verify-otp-view/index.js
var __decorate28 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailVerifyOtpView = class W3mEmailVerifyOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    super();
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.emailConnector) {
          await this.emailConnector.provider.connectOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          await ConnectionController.connectExternal(this.emailConnector);
          ModalController.close();
          EventsController.sendEvent({
            type: "track",
            event: "CONNECT_SUCCESS",
            properties: { method: "email", name: this.emailConnector.name || "Unknown" }
          });
        }
      } catch (error) {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_FAIL" });
        throw error;
      }
    };
    this.onOtpResend = async (email) => {
      if (this.emailConnector) {
        await this.emailConnector.provider.connectEmail({ email });
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
      }
    };
  }
};
W3mEmailVerifyOtpView = __decorate28([
  customElement("w3m-email-verify-otp-view")
], W3mEmailVerifyOtpView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-email-verify-device-view/styles.js
var styles_default16 = css`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-email-verify-device-view/index.js
var __decorate29 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailVerifyDeviceView = class W3mEmailVerifyDeviceView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.email = (_a2 = RouterController.state.data) == null ? void 0 : _a2.email;
    this.emailConnector = ConnectorController.getEmailConnector();
    this.loading = false;
    this.listenForDeviceApproval();
  }
  render() {
    if (!this.email) {
      throw new Error("w3m-email-verify-device-view: No email provided");
    }
    if (!this.emailConnector) {
      throw new Error("w3m-email-verify-device-view: No email connector provided");
    }
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl", "s", "xxl", "s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
  }
  async listenForDeviceApproval() {
    if (this.emailConnector) {
      try {
        await this.emailConnector.provider.connectDevice();
        EventsController.sendEvent({ type: "track", event: "DEVICE_REGISTERED_FOR_EMAIL" });
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
        RouterController.replace("EmailVerifyOtp", { email: this.email });
      } catch (error) {
        RouterController.goBack();
      }
    }
  }
  async onResendCode() {
    try {
      if (!this.loading) {
        if (!this.emailConnector || !this.email) {
          throw new Error("w3m-email-login-widget: Unable to resend email");
        }
        this.loading = true;
        await this.emailConnector.provider.connectEmail({ email: this.email });
        SnackController.showSuccess("Code email resent");
      }
    } catch (error) {
      SnackController.showError(error);
    } finally {
      this.loading = false;
    }
  }
};
W3mEmailVerifyDeviceView.styles = styles_default16;
__decorate29([
  state()
], W3mEmailVerifyDeviceView.prototype, "loading", void 0);
W3mEmailVerifyDeviceView = __decorate29([
  customElement("w3m-email-verify-device-view")
], W3mEmailVerifyDeviceView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-approve-transaction-view/styles.js
var styles_default17 = css`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-approve-transaction-view/index.js
var __decorate30 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mApproveTransactionView = class W3mApproveTransactionView2 extends LitElement {
  constructor() {
    super();
    this.bodyObserver = void 0;
    this.unsubscribe = [];
    this.iframe = document.getElementById("w3m-iframe");
    this.ready = false;
    this.unsubscribe.push(ModalController.subscribeKey("open", (val) => {
      if (!val) {
        this.onHideIframe();
      }
    }));
  }
  disconnectedCallback() {
    var _a2;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a2 = this.bodyObserver) == null ? void 0 : _a2.unobserve(window.document.body);
  }
  async firstUpdated() {
    const verticalPadding = 10;
    await this.syncTheme();
    this.iframe.style.display = "block";
    const blueprint = this.renderRoot.querySelector("div");
    this.bodyObserver = new ResizeObserver(() => {
      const data3 = blueprint == null ? void 0 : blueprint.getBoundingClientRect();
      const dimensions = data3 ?? { left: 0, top: 0, width: 0, height: 0 };
      this.iframe.style.width = `${dimensions.width}px`;
      this.iframe.style.height = `${dimensions.height - verticalPadding}px`;
      this.iframe.style.left = `${dimensions.left}px`;
      this.iframe.style.top = `${dimensions.top + verticalPadding / 2}px`;
      this.ready = true;
    });
    this.bodyObserver.observe(window.document.body);
  }
  render() {
    if (this.ready) {
      this.onShowIframe();
    }
    return html`<div data-ready=${this.ready}></div>`;
  }
  onShowIframe() {
    const isMobile = window.innerWidth <= 430;
    this.iframe.animate([
      { opacity: 0, transform: isMobile ? "translateY(50px)" : "scale(.95)" },
      { opacity: 1, transform: isMobile ? "translateY(0)" : "scale(1)" }
    ], { duration: 200, easing: "ease", fill: "forwards", delay: 300 });
  }
  async onHideIframe() {
    await this.iframe.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      easing: "ease",
      fill: "forwards"
    }).finished;
    this.iframe.style.display = "none";
  }
  async syncTheme() {
    const emailConnector = ConnectorController.getEmailConnector();
    if (emailConnector) {
      await emailConnector.provider.syncTheme({
        themeVariables: ThemeController.getSnapshot().themeVariables
      });
    }
  }
};
W3mApproveTransactionView.styles = styles_default17;
__decorate30([
  state()
], W3mApproveTransactionView.prototype, "ready", void 0);
W3mApproveTransactionView = __decorate30([
  customElement("w3m-approve-transaction-view")
], W3mApproveTransactionView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-upgrade-wallet-view/index.js
var __decorate31 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpgradeWalletView = class W3mUpgradeWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${ConstantsUtil.SECURE_SITE_DASHBOARD}
          imageSrc=${ConstantsUtil.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `;
  }
};
W3mUpgradeWalletView = __decorate31([
  customElement("w3m-upgrade-wallet-view")
], W3mUpgradeWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-upgrade-to-smart-account-view/index.js
var __decorate32 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpgradeToSmartAccountView = class W3mUpgradeToSmartAccountView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0", "0", "l", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return html` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0", "xxl", "0", "xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="onrampCard"></wui-visual>
        <wui-visual name="onrampCard"></wui-visual>
        <wui-visual name="onrampCard"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return html`<wui-flex .padding=${["0", "2l", "0", "2l"]} gap="s">
      <wui-button variant="accentBg" @click=${RouterController.goBack} size="lg" borderRadius="xs">
        Do it later
      </wui-button>
      <wui-button size="lg" borderRadius="xs"> Continue </wui-button>
    </wui-flex>`;
  }
};
W3mUpgradeToSmartAccountView = __decorate32([
  customElement("w3m-upgrade-to-smart-account-view")
], W3mUpgradeToSmartAccountView);

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/directive-helpers.js
var { _ChildPart: ChildPart } = _$LH;
var ENABLE_SHADYDOM_NOPATCH = true;
var _a, _b;
var wrap = ENABLE_SHADYDOM_NOPATCH && ((_a = window.ShadyDOM) == null ? void 0 : _a.inUse) && ((_b = window.ShadyDOM) == null ? void 0 : _b.noPatch) === true ? window.ShadyDOM.wrap : (node) => node;
var isSingleExpression = (part) => part.strings === void 0;

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/directive.js
var PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
var directive = (c) => (...values) => ({
  // This property needs to remain unminified.
  ["_$litDirective$"]: c,
  values
});
var Directive = class {
  constructor(_partInfo) {
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /** @internal */
  _$initialize(part, parent2, attributeIndex) {
    this.__part = part;
    this._$parent = parent2;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */
  _$resolve(part, props) {
    return this.update(part, props);
  }
  update(_part, props) {
    return this.render(...props);
  }
};

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/async-directive.js
var DEV_MODE = true;
var notifyChildrenConnectedChanged = (parent2, isConnected) => {
  var _a2;
  const children = parent2._$disconnectableChildren;
  if (children === void 0) {
    return false;
  }
  for (const obj of children) {
    (_a2 = obj["_$notifyDirectiveConnectionChanged"]) == null ? void 0 : _a2.call(obj, isConnected, false);
    notifyChildrenConnectedChanged(obj, isConnected);
  }
  return true;
};
var removeDisconnectableFromParent = (obj) => {
  let parent2, children;
  do {
    if ((parent2 = obj._$parent) === void 0) {
      break;
    }
    children = parent2._$disconnectableChildren;
    children.delete(obj);
    obj = parent2;
  } while ((children == null ? void 0 : children.size) === 0);
};
var addDisconnectableToParent = (obj) => {
  for (let parent2; parent2 = obj._$parent; obj = parent2) {
    let children = parent2._$disconnectableChildren;
    if (children === void 0) {
      parent2._$disconnectableChildren = children = /* @__PURE__ */ new Set();
    } else if (children.has(obj)) {
      break;
    }
    children.add(obj);
    installDisconnectAPI(parent2);
  }
};
function reparentDisconnectables(newParent) {
  if (this._$disconnectableChildren !== void 0) {
    removeDisconnectableFromParent(this);
    this._$parent = newParent;
    addDisconnectableToParent(this);
  } else {
    this._$parent = newParent;
  }
}
function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
  const value = this._$committedValue;
  const children = this._$disconnectableChildren;
  if (children === void 0 || children.size === 0) {
    return;
  }
  if (isClearingValue) {
    if (Array.isArray(value)) {
      for (let i = fromPartIndex; i < value.length; i++) {
        notifyChildrenConnectedChanged(value[i], false);
        removeDisconnectableFromParent(value[i]);
      }
    } else if (value != null) {
      notifyChildrenConnectedChanged(value, false);
      removeDisconnectableFromParent(value);
    }
  } else {
    notifyChildrenConnectedChanged(this, isConnected);
  }
}
var installDisconnectAPI = (obj) => {
  if (obj.type == PartType.CHILD) {
    obj._$notifyConnectionChanged ?? (obj._$notifyConnectionChanged = notifyChildPartConnectedChanged);
    obj._$reparentDisconnectables ?? (obj._$reparentDisconnectables = reparentDisconnectables);
  }
};
var AsyncDirective = class extends Directive {
  constructor() {
    super(...arguments);
    this._$disconnectableChildren = void 0;
  }
  /**
   * Initialize the part with internal fields
   * @param part
   * @param parent
   * @param attributeIndex
   */
  _$initialize(part, parent2, attributeIndex) {
    super._$initialize(part, parent2, attributeIndex);
    addDisconnectableToParent(this);
    this.isConnected = part._$isConnected;
  }
  // This property needs to remain unminified.
  /**
   * Called from the core code when a directive is going away from a part (in
   * which case `shouldRemoveFromParent` should be true), and from the
   * `setChildrenConnected` helper function when recursively changing the
   * connection state of a tree (in which case `shouldRemoveFromParent` should
   * be false).
   *
   * @param isConnected
   * @param isClearingDirective - True when the directive itself is being
   *     removed; false when the tree is being disconnected
   * @internal
   */
  ["_$notifyDirectiveConnectionChanged"](isConnected, isClearingDirective = true) {
    var _a2, _b2;
    if (isConnected !== this.isConnected) {
      this.isConnected = isConnected;
      if (isConnected) {
        (_a2 = this.reconnected) == null ? void 0 : _a2.call(this);
      } else {
        (_b2 = this.disconnected) == null ? void 0 : _b2.call(this);
      }
    }
    if (isClearingDirective) {
      notifyChildrenConnectedChanged(this, isConnected);
      removeDisconnectableFromParent(this);
    }
  }
  /**
   * Sets the value of the directive's Part outside the normal `update`/`render`
   * lifecycle of a directive.
   *
   * This method should not be called synchronously from a directive's `update`
   * or `render`.
   *
   * @param directive The directive to update
   * @param value The value to set
   */
  setValue(value) {
    if (isSingleExpression(this.__part)) {
      this.__part._$setValue(value, this);
    } else {
      if (DEV_MODE && this.__attributeIndex === void 0) {
        throw new Error(`Expected this.__attributeIndex to be a number`);
      }
      const newValues = [...this.__part._$committedValue];
      newValues[this.__attributeIndex] = value;
      this.__part._$setValue(newValues, this, 0);
    }
  }
  /**
   * User callbacks for implementing logic to release any resources/subscriptions
   * that may have been retained by this directive. Since directives may also be
   * re-connected, `reconnected` should also be implemented to restore the
   * working state of the directive prior to the next render.
   */
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/directives/ref.js
var createRef = () => new Ref();
var Ref = class {
};
var lastElementForContextAndCallback = /* @__PURE__ */ new WeakMap();
var RefDirective = class extends AsyncDirective {
  render(_ref) {
    return nothing;
  }
  update(part, [ref2]) {
    var _a2;
    const refChanged = ref2 !== this._ref;
    if (refChanged && this._ref !== void 0) {
      this._updateRefValue(void 0);
    }
    if (refChanged || this._lastElementForRef !== this._element) {
      this._ref = ref2;
      this._context = (_a2 = part.options) == null ? void 0 : _a2.host;
      this._updateRefValue(this._element = part.element);
    }
    return nothing;
  }
  _updateRefValue(element) {
    if (typeof this._ref === "function") {
      const context = this._context ?? globalThis;
      let lastElementForCallback = lastElementForContextAndCallback.get(context);
      if (lastElementForCallback === void 0) {
        lastElementForCallback = /* @__PURE__ */ new WeakMap();
        lastElementForContextAndCallback.set(context, lastElementForCallback);
      }
      if (lastElementForCallback.get(this._ref) !== void 0) {
        this._ref.call(this._context, void 0);
      }
      lastElementForCallback.set(this._ref, element);
      if (element !== void 0) {
        this._ref.call(this._context, element);
      }
    } else {
      this._ref.value = element;
    }
  }
  get _lastElementForRef() {
    var _a2, _b2;
    return typeof this._ref === "function" ? (_a2 = lastElementForContextAndCallback.get(this._context ?? globalThis)) == null ? void 0 : _a2.get(this._ref) : (_b2 = this._ref) == null ? void 0 : _b2.value;
  }
  disconnected() {
    if (this._lastElementForRef === this._element) {
      this._updateRefValue(void 0);
    }
  }
  reconnected() {
    this._updateRefValue(this._element);
  }
};
var ref = directive(RefDirective);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-update-email-wallet-view/styles.js
var styles_default18 = css`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-update-email-wallet-view/index.js
var __decorate33 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpdateEmailWalletView = class W3mUpdateEmailWalletView2 extends LitElement {
  constructor() {
    var _a2;
    super(...arguments);
    this.formRef = createRef();
    this.initialEmail = ((_a2 = RouterController.state.data) == null ? void 0 : _a2.email) ?? "";
    this.email = "";
    this.loading = false;
  }
  firstUpdated() {
    var _a2;
    (_a2 = this.formRef.value) == null ? void 0 : _a2.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.onSubmitEmail(event);
      }
    });
  }
  render() {
    const showSubmit = !this.loading && this.email.length > 3 && this.email !== this.initialEmail;
    return html`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ref(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!showSubmit}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `;
  }
  onEmailInputChange(event) {
    this.email = event.detail;
  }
  async onSubmitEmail(event) {
    try {
      if (this.loading) {
        return;
      }
      this.loading = true;
      event.preventDefault();
      const emailConnector = ConnectorController.getEmailConnector();
      if (!emailConnector) {
        throw new Error("w3m-update-email-wallet: Email connector not found");
      }
      await emailConnector.provider.updateEmail({ email: this.email });
      EventsController.sendEvent({ type: "track", event: "EMAIL_EDIT" });
      RouterController.replace("UpdateEmailPrimaryOtp", {
        email: this.initialEmail,
        newEmail: this.email
      });
    } catch (error) {
      SnackController.showError(error);
      this.loading = false;
    }
  }
};
W3mUpdateEmailWalletView.styles = styles_default18;
__decorate33([
  state()
], W3mUpdateEmailWalletView.prototype, "email", void 0);
__decorate33([
  state()
], W3mUpdateEmailWalletView.prototype, "loading", void 0);
W3mUpdateEmailWalletView = __decorate33([
  customElement("w3m-update-email-wallet-view")
], W3mUpdateEmailWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-update-email-primary-otp-view/index.js
var __decorate34 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpdateEmailPrimaryOtpView = class W3mUpdateEmailPrimaryOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    var _a2;
    super();
    this.email = (_a2 = RouterController.state.data) == null ? void 0 : _a2.email;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.emailConnector) {
          await this.emailConnector.provider.updateEmailPrimaryOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          RouterController.replace("UpdateEmailSecondaryOtp", RouterController.state.data);
        }
      } catch (error) {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_FAIL" });
        throw error;
      }
    };
    this.onStartOver = () => {
      RouterController.replace("UpdateEmailWallet", RouterController.state.data);
    };
  }
};
W3mUpdateEmailPrimaryOtpView = __decorate34([
  customElement("w3m-update-email-primary-otp-view")
], W3mUpdateEmailPrimaryOtpView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-update-email-secondary-otp-view/index.js
var __decorate35 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpdateEmailSecondaryOtpView = class W3mUpdateEmailSecondaryOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    var _a2;
    super();
    this.email = (_a2 = RouterController.state.data) == null ? void 0 : _a2.newEmail;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.emailConnector) {
          await this.emailConnector.provider.updateEmailSecondaryOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          RouterController.reset("Account");
        }
      } catch (error) {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_FAIL" });
        throw error;
      }
    };
    this.onStartOver = () => {
      RouterController.replace("UpdateEmailWallet", RouterController.state.data);
    };
  }
};
W3mUpdateEmailSecondaryOtpView = __decorate35([
  customElement("w3m-update-email-secondary-otp-view")
], W3mUpdateEmailSecondaryOtpView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-unsupported-chain-view/styles.js
var styles_default19 = css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-unsupported-chain-view/index.js
var __decorate36 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUnsupportedChainView = class W3mUnsupportedChainView2 extends LitElement {
  constructor() {
    super(...arguments);
    this.disconecting = false;
  }
  render() {
    return html`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m", "xl", "xs", "xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  networksTemplate() {
    const { approvedCaipNetworkIds, requestedCaipNetworks } = NetworkController.state;
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    return sortedNetworks.map((network) => html`
        <wui-list-network
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          name=${network.name ?? "Unknown"}
          @click=${() => this.onSwitchNetwork(network)}
        >
        </wui-list-network>
      `);
  }
  async onDisconnect() {
    try {
      this.disconecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({
        type: "track",
        event: "DISCONNECT_SUCCESS"
      });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconecting = false;
    }
  }
  async onSwitchNetwork(network) {
    const { isConnected } = AccountController.state;
    const { approvedCaipNetworkIds, supportsAllNetworks, caipNetwork } = NetworkController.state;
    const { data: data3 } = RouterController.state;
    if (isConnected && (caipNetwork == null ? void 0 : caipNetwork.id) !== network.id) {
      if (approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id)) {
        await NetworkController.switchActiveNetwork(network);
        RouterUtil.navigateAfterNetworkSwitch();
      } else if (supportsAllNetworks) {
        RouterController.push("SwitchNetwork", { ...data3, network });
      }
    } else if (!isConnected) {
      NetworkController.setCaipNetwork(network);
      RouterController.push("Connect");
    }
  }
};
W3mUnsupportedChainView.styles = styles_default19;
__decorate36([
  state()
], W3mUnsupportedChainView.prototype, "disconecting", void 0);
W3mUnsupportedChainView = __decorate36([
  customElement("w3m-unsupported-chain-view")
], W3mUnsupportedChainView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-receive-view/styles.js
var styles_default20 = css`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-receive-view/index.js
var __decorate37 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletReceiveView = class W3mWalletReceiveView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileName = val.profileName;
        } else {
          SnackController.showError("Account not found");
        }
      })
    ], NetworkController.subscribeKey("caipNetwork", (val) => {
      if (val == null ? void 0 : val.id) {
        this.network = val;
      }
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (!this.address) {
      throw new Error("w3m-wallet-receive-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    return html` <wui-flex
      flexDirection="column"
      .padding=${["xl", "l", "l", "l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${UiHelperUtil.getTruncateString({
      string: this.address ?? "",
      charsStart: this.profileName ? 18 : 4,
      charsEnd: this.profileName ? 0 : 4,
      truncate: this.profileName ? "end" : "middle"
    })}
        icon="copy"
        imageSrc=${networkImage ? networkImage : ""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l", "0", "0", "0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${true}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    var _a2;
    const networks = NetworkController.getRequestedCaipNetworks();
    const slicedNetworks = (_a2 = networks == null ? void 0 : networks.filter((network) => network == null ? void 0 : network.imageId)) == null ? void 0 : _a2.slice(0, 5);
    const imagesArray = slicedNetworks.map(AssetUtil.getNetworkImage).filter(Boolean);
    return html`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${imagesArray}
    ></wui-compatible-network>`;
  }
  onReceiveClick() {
    RouterController.push("WalletCompatibleNetworks");
  }
  onCopyClick() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mWalletReceiveView.styles = styles_default20;
__decorate37([
  state()
], W3mWalletReceiveView.prototype, "address", void 0);
__decorate37([
  state()
], W3mWalletReceiveView.prototype, "profileName", void 0);
__decorate37([
  state()
], W3mWalletReceiveView.prototype, "network", void 0);
W3mWalletReceiveView = __decorate37([
  customElement("w3m-wallet-receive-view")
], W3mWalletReceiveView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-compatible-networks-view/styles.js
var styles_default21 = css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-compatible-networks-view/index.js
var __decorate38 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletCompatibleNetworksView = class W3mWalletCompatibleNetworksView2 extends LitElement {
  render() {
    return html` <wui-flex
      flexDirection="column"
      .padding=${["xs", "s", "m", "s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    const { approvedCaipNetworkIds, requestedCaipNetworks } = NetworkController.state;
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    return sortedNetworks.map((network) => html`
        <wui-list-network
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          name=${network.name ?? "Unknown"}
          ?transparent=${true}
        >
        </wui-list-network>
      `);
  }
};
W3mWalletCompatibleNetworksView.styles = styles_default21;
W3mWalletCompatibleNetworksView = __decorate38([
  customElement("w3m-wallet-compatible-networks-view")
], W3mWalletCompatibleNetworksView);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-list/styles.js
var styles_default22 = css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/utils/markWalletsAsInstalled.js
function markWalletsAsInstalled(wallets) {
  const { connectors } = ConnectorController.state;
  const installedConnectors = connectors.filter((c) => c.type === "ANNOUNCED").reduce((acum, val) => {
    var _a2;
    if (!((_a2 = val.info) == null ? void 0 : _a2.rdns)) {
      return acum;
    }
    acum[val.info.rdns] = true;
    return acum;
  }, {});
  const walletsWithInstalled = wallets.map((wallet) => ({
    ...wallet,
    installed: Boolean(wallet.rdns) && Boolean(installedConnectors[wallet.rdns ?? ""])
  }));
  const sortedWallets = walletsWithInstalled.sort((a, b) => Number(b.installed) - Number(a.installed));
  return sortedWallets;
}

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-list/index.js
var __decorate39 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGINATOR_ID = "local-paginator";
var W3mAllWalletsList = class W3mAllWalletsList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.initial = !ApiController.state.wallets.length;
    this.wallets = ApiController.state.wallets;
    this.recommended = ApiController.state.recommended;
    this.featured = ApiController.state.featured;
    this.unsubscribe.push(...[
      ApiController.subscribeKey("wallets", (val) => this.wallets = val),
      ApiController.subscribeKey("recommended", (val) => this.recommended = val),
      ApiController.subscribeKey("featured", (val) => this.featured = val)
    ]);
  }
  firstUpdated() {
    this.initialFetch();
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a2;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a2 = this.paginationObserver) == null ? void 0 : _a2.disconnect();
  }
  render() {
    return html`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0", "s", "s", "s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var _a2;
    const gridEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-grid");
    if (this.initial && gridEl) {
      await ApiController.fetchWallets({ page: 1 });
      await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.initial = false;
      gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  shimmerTemplate(items, id) {
    return [...Array(items)].map(() => html`
        <wui-card-select-loader type="wallet" id=${ifDefined(id)}></wui-card-select-loader>
      `);
  }
  walletsTemplate() {
    const wallets = [...this.featured, ...this.recommended, ...this.wallets];
    const walletsWithInstalled = markWalletsAsInstalled(wallets);
    return walletsWithInstalled.map((wallet) => html`
        <wui-card-select
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          type="wallet"
          name=${wallet.name}
          @click=${() => this.onConnectWallet(wallet)}
          .installed=${wallet.installed}
        ></wui-card-select>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets, recommended, featured, count } = ApiController.state;
    const columns = window.innerWidth < 352 ? 3 : 4;
    const currentWallets = wallets.length + recommended.length;
    const minimumRows = Math.ceil(currentWallets / columns);
    let shimmerCount = minimumRows * columns - currentWallets + columns;
    shimmerCount -= wallets.length ? featured.length % columns : 0;
    if (count === 0 && featured.length > 0) {
      return null;
    }
    if (count === 0 || [...featured, ...wallets, ...recommended].length < count) {
      return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
    }
    return null;
  }
  createPaginationObserver() {
    var _a2;
    const loaderEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector(`#${PAGINATOR_ID}`);
    if (loaderEl) {
      this.paginationObserver = new IntersectionObserver(([element]) => {
        if ((element == null ? void 0 : element.isIntersecting) && !this.initial) {
          const { page, count, wallets } = ApiController.state;
          if (wallets.length < count) {
            ApiController.fetchWallets({ page: page + 1 });
          }
        }
      });
      this.paginationObserver.observe(loaderEl);
    }
  }
  onConnectWallet(wallet) {
    const { connectors } = ConnectorController.state;
    const connector = connectors.find(({ explorerId }) => explorerId === wallet.id);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
W3mAllWalletsList.styles = styles_default22;
__decorate39([
  state()
], W3mAllWalletsList.prototype, "initial", void 0);
__decorate39([
  state()
], W3mAllWalletsList.prototype, "wallets", void 0);
__decorate39([
  state()
], W3mAllWalletsList.prototype, "recommended", void 0);
__decorate39([
  state()
], W3mAllWalletsList.prototype, "featured", void 0);
W3mAllWalletsList = __decorate39([
  customElement("w3m-all-wallets-list")
], W3mAllWalletsList);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-search/styles.js
var styles_default23 = css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-search/index.js
var __decorate40 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsSearch = class W3mAllWalletsSearch2 extends LitElement {
  constructor() {
    super(...arguments);
    this.prevQuery = "";
    this.loading = true;
    this.query = "";
  }
  render() {
    this.onSearch();
    return this.loading ? html`<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    if (this.query !== this.prevQuery) {
      this.prevQuery = this.query;
      this.loading = true;
      await ApiController.searchWallet({ search: this.query });
      this.loading = false;
    }
  }
  walletsTemplate() {
    const { search } = ApiController.state;
    const wallets = markWalletsAsInstalled(search);
    if (!search.length) {
      return html`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `;
    }
    return html`
      <wui-grid
        .padding=${["0", "s", "s", "s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${wallets.map((wallet) => html`
            <wui-card-select
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              type="wallet"
              name=${wallet.name}
              @click=${() => this.onConnectWallet(wallet)}
              .installed=${wallet.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `;
  }
  onConnectWallet(wallet) {
    const { connectors } = ConnectorController.state;
    const connector = connectors.find(({ explorerId }) => explorerId === wallet.id);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
W3mAllWalletsSearch.styles = styles_default23;
__decorate40([
  state()
], W3mAllWalletsSearch.prototype, "loading", void 0);
__decorate40([
  property()
], W3mAllWalletsSearch.prototype, "query", void 0);
W3mAllWalletsSearch = __decorate40([
  customElement("w3m-all-wallets-search")
], W3mAllWalletsSearch);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-header/index.js
var __decorate41 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingHeader = class W3mConnectingHeader2 extends LitElement {
  constructor() {
    super();
    this.platformTabs = [];
    this.unsubscribe = [];
    this.platforms = [];
    this.onSelectPlatfrom = void 0;
    this.buffering = false;
    this.unsubscribe.push(ConnectionController.subscribeKey("buffering", (val) => this.buffering = val));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const tabs = this.generateTabs();
    return html`
      <wui-flex justifyContent="center" .padding=${["l", "0", "0", "0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${tabs}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const tabs = this.platforms.map((platform) => {
      if (platform === "browser") {
        return { label: "Browser", icon: "extension", platform: "browser" };
      } else if (platform === "mobile") {
        return { label: "Mobile", icon: "mobile", platform: "mobile" };
      } else if (platform === "qrcode") {
        return { label: "Mobile", icon: "mobile", platform: "qrcode" };
      } else if (platform === "web") {
        return { label: "Webapp", icon: "browser", platform: "web" };
      } else if (platform === "desktop") {
        return { label: "Desktop", icon: "desktop", platform: "desktop" };
      }
      return { label: "Browser", icon: "extension", platform: "unsupported" };
    });
    this.platformTabs = tabs.map(({ platform }) => platform);
    return tabs;
  }
  onTabChange(index) {
    var _a2;
    const tab = this.platformTabs[index];
    if (tab) {
      (_a2 = this.onSelectPlatfrom) == null ? void 0 : _a2.call(this, tab);
    }
  }
};
__decorate41([
  property({ type: Array })
], W3mConnectingHeader.prototype, "platforms", void 0);
__decorate41([
  property()
], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
__decorate41([
  state()
], W3mConnectingHeader.prototype, "buffering", void 0);
W3mConnectingHeader = __decorate41([
  customElement("w3m-connecting-header")
], W3mConnectingHeader);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-browser/index.js
var __decorate42 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcBrowser = class W3mConnectingWcBrowser2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-browser: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  async onConnectProxy() {
    var _a2;
    try {
      this.error = false;
      const { connectors } = ConnectorController.state;
      const announcedConnector = connectors.find((c) => {
        var _a3, _b2;
        return c.type === "ANNOUNCED" && ((_a3 = c.info) == null ? void 0 : _a3.rdns) === ((_b2 = this.wallet) == null ? void 0 : _b2.rdns);
      });
      const injectedConnector = connectors.find((c) => c.type === "INJECTED");
      if (announcedConnector) {
        await ConnectionController.connectExternal(announcedConnector);
      } else if (injectedConnector) {
        await ConnectionController.connectExternal(injectedConnector);
      }
      ModalController.close();
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: { method: "browser", name: ((_a2 = this.wallet) == null ? void 0 : _a2.name) || "Unknown" }
      });
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingWcBrowser = __decorate42([
  customElement("w3m-connecting-wc-browser")
], W3mConnectingWcBrowser);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js
var __decorate43 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcDesktop = class W3mConnectingWcDesktop2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "desktop" }
    });
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.ready = true;
      this.timeout = setTimeout(() => {
        var _a2;
        (_a2 = this.onConnect) == null ? void 0 : _a2.call(this);
      }, 200);
    }
  }
  onConnectProxy() {
    var _a2;
    if (((_a2 = this.wallet) == null ? void 0 : _a2.desktop_link) && this.uri) {
      try {
        this.error = false;
        const { desktop_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(desktop_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcDesktop = __decorate43([
  customElement("w3m-connecting-wc-desktop")
], W3mConnectingWcDesktop);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js
var __decorate44 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcMobile = class W3mConnectingWcMobile2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    document.addEventListener("visibilitychange", this.onBuffering.bind(this));
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "mobile" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("visibilitychange", this.onBuffering.bind(this));
  }
  onRenderProxy() {
    var _a2;
    if (!this.ready && this.uri) {
      this.ready = true;
      (_a2 = this.onConnect) == null ? void 0 : _a2.call(this);
    }
  }
  onConnectProxy() {
    var _a2;
    if (((_a2 = this.wallet) == null ? void 0 : _a2.mobile_link) && this.uri) {
      try {
        this.error = false;
        const { mobile_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(mobile_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_self");
      } catch {
        this.error = true;
      }
    }
  }
  onBuffering() {
    const isIos = CoreHelperUtil.isIos();
    if ((document == null ? void 0 : document.visibilityState) === "visible" && !this.error && isIos) {
      ConnectionController.setBuffering(true);
      setTimeout(() => {
        ConnectionController.setBuffering(false);
      }, 5e3);
    }
  }
};
W3mConnectingWcMobile = __decorate44([
  customElement("w3m-connecting-wc-mobile")
], W3mConnectingWcMobile);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js
var styles_default24 = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js
var __decorate45 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcQrcode = class W3mConnectingWcQrcode2 extends W3mConnectingWidget {
  constructor() {
    var _a2;
    super();
    this.forceUpdate = () => {
      this.requestUpdate();
    };
    window.addEventListener("resize", this.forceUpdate);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: ((_a2 = this.wallet) == null ? void 0 : _a2.name) ?? "WalletConnect", platform: "qrcode" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    this.onRenderProxy();
    return html`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.timeout = setTimeout(() => {
        this.ready = true;
      }, 200);
    }
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) {
      return null;
    }
    const size = this.getBoundingClientRect().width - 40;
    const alt = this.wallet ? this.wallet.name : void 0;
    ConnectionController.setWcLinking(void 0);
    ConnectionController.setRecentWallet(this.wallet);
    return html` <wui-qr-code
      size=${size}
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${ifDefined(AssetUtil.getWalletImage(this.wallet))}
      alt=${ifDefined(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const inactive = !this.uri || !this.ready;
    return html`<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
  }
};
W3mConnectingWcQrcode.styles = styles_default24;
W3mConnectingWcQrcode = __decorate45([
  customElement("w3m-connecting-wc-qrcode")
], W3mConnectingWcQrcode);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js
var __decorate46 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ifDefined(AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
W3mConnectingWcUnsupported = __decorate46([
  customElement("w3m-connecting-wc-unsupported")
], W3mConnectingWcUnsupported);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-web/index.js
var __decorate47 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcWeb = class W3mConnectingWcWeb2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-web: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.secondaryBtnLabel = "Open";
    this.secondaryLabel = "Open and continue in a new browser tab";
    this.secondaryBtnIcon = "externalLink";
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "web" }
    });
  }
  onConnectProxy() {
    var _a2;
    if (((_a2 = this.wallet) == null ? void 0 : _a2.webapp_link) && this.uri) {
      try {
        this.error = false;
        const { webapp_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatUniversalUrl(webapp_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcWeb = __decorate47([
  customElement("w3m-connecting-wc-web")
], W3mConnectingWcWeb);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-header/styles.js
var styles_default25 = css`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-header/index.js
var __decorate48 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function headings() {
  var _a2, _b2, _c, _d, _e, _f, _g;
  const connectorName = (_b2 = (_a2 = RouterController.state.data) == null ? void 0 : _a2.connector) == null ? void 0 : _b2.name;
  const walletName = (_d = (_c = RouterController.state.data) == null ? void 0 : _c.wallet) == null ? void 0 : _d.name;
  const networkName = (_f = (_e = RouterController.state.data) == null ? void 0 : _e.network) == null ? void 0 : _f.name;
  const name = walletName ?? connectorName;
  const connectors = ConnectorController.getConnectors();
  const isEmail = connectors.length === 1 && ((_g = connectors[0]) == null ? void 0 : _g.id) === "w3m-email";
  return {
    Connect: `Connect ${isEmail ? "Email" : ""} Wallet`,
    Account: void 0,
    AccountSettings: void 0,
    ConnectingExternal: name ?? "Connect Wallet",
    ConnectingWalletConnect: name ?? "WalletConnect",
    ConnectingSiwe: "Sign In",
    Networks: "Choose Network",
    SwitchNetwork: networkName ?? "Switch Network",
    AllWallets: "All Wallets",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a wallet?",
    GetWallet: "Get a wallet",
    Downloads: name ? `Get ${name}` : "Downloads",
    EmailVerifyOtp: "Confirm Email",
    EmailVerifyDevice: "Register Device",
    ApproveTransaction: "Approve Transaction",
    Transactions: "Activity",
    UpgradeEmailWallet: "Upgrade your Wallet",
    UpgradeToSmartAccount: void 0,
    UpdateEmailWallet: "Edit Email",
    UpdateEmailPrimaryOtp: "Confirm Current Email",
    UpdateEmailSecondaryOtp: "Confirm New Email",
    UnsupportedChain: "Switch Network",
    OnRampProviders: "Choose Provider",
    OnRampActivity: "Activity",
    WhatIsABuy: "What is Buy?",
    BuyInProgress: "Buy",
    OnRampTokenSelect: "Select Token",
    OnRampFiatSelect: "Select Currency",
    WalletReceive: "Receive",
    WalletCompatibleNetworks: "Compatible Networks"
  };
}
var W3mHeader = class W3mHeader2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.heading = headings()[RouterController.state.view];
    this.buffering = false;
    this.showBack = false;
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => {
      this.onViewChange(val);
      this.onHistoryChange();
    }), ConnectionController.subscribeKey("buffering", (val) => this.buffering = val));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `;
  }
  onWalletHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" });
    RouterController.push("WhatIsAWallet");
  }
  async onClose() {
    if (OptionsController.state.isSiweEnabled) {
      const { SIWEController } = await import("./exports-Q62SY5QM.js");
      if (SIWEController.state.status !== "success") {
        await ConnectionController.disconnect();
      }
    }
    ModalController.close();
  }
  titleTemplate() {
    return html`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`;
  }
  dynamicButtonTemplate() {
    const { view } = RouterController.state;
    const isConnectHelp = view === "Connect";
    const isApproveTransaction = view === "ApproveTransaction";
    const isUpgradeToSmartAccounts = view === "UpgradeToSmartAccount";
    const shouldHideBack = isApproveTransaction || isUpgradeToSmartAccounts;
    if (this.showBack && !shouldHideBack) {
      return html`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`;
    }
    return html`<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
  }
  separatorTemplate() {
    if (!this.heading) {
      return null;
    }
    return html`<wui-separator></wui-separator>`;
  }
  getPadding() {
    if (this.heading) {
      return ["l", "2l", "l", "2l"];
    }
    return ["l", "2l", "0", "2l"];
  }
  async onViewChange(view) {
    var _a2;
    const headingEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-text");
    if (headingEl) {
      const preset = headings()[view];
      await headingEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.heading = preset;
      headingEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onHistoryChange() {
    var _a2;
    const { history } = RouterController.state;
    const buttonEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("#dynamic");
    if (history.length > 1 && !this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = true;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    } else if (history.length <= 1 && this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = false;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onGoBack() {
    if (RouterController.state.view === "ConnectingSiwe") {
      RouterController.push("Connect");
    } else {
      RouterController.goBack();
    }
  }
};
W3mHeader.styles = [styles_default25];
__decorate48([
  state()
], W3mHeader.prototype, "heading", void 0);
__decorate48([
  state()
], W3mHeader.prototype, "buffering", void 0);
__decorate48([
  state()
], W3mHeader.prototype, "showBack", void 0);
W3mHeader = __decorate48([
  customElement("w3m-header")
], W3mHeader);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-help-widget/index.js
var __decorate49 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mHelpWidget = class W3mHelpWidget2 extends LitElement {
  constructor() {
    super(...arguments);
    this.data = [];
  }
  render() {
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((item) => html`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${item.images.map((image) => html`<wui-visual name=${image}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${item.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${item.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `;
  }
};
__decorate49([
  property({ type: Array })
], W3mHelpWidget.prototype, "data", void 0);
W3mHelpWidget = __decorate49([
  customElement("w3m-help-widget")
], W3mHelpWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-swap-input/styles.js
var styles_default26 = css`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-swap-input/index.js
var __decorate50 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mInputCurrency = class W3mInputCurrency2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.unsubscribe = [];
    this.type = "Token";
    this.value = 0;
    this.currencies = [];
    this.selectedCurrency = (_a2 = this.currencies) == null ? void 0 : _a2[0];
    this.currencyImages = AssetController.state.currencyImages;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(OnRampController.subscribeKey("purchaseCurrency", (val) => {
      if (!val || this.type === "Fiat") {
        return;
      }
      this.selectedCurrency = this.formatPurchaseCurrency(val);
    }), OnRampController.subscribeKey("paymentCurrency", (val) => {
      if (!val || this.type === "Token") {
        return;
      }
      this.selectedCurrency = this.formatPaymentCurrency(val);
    }), OnRampController.subscribe((val) => {
      if (this.type === "Fiat") {
        this.currencies = val.purchaseCurrencies.map(this.formatPurchaseCurrency);
      } else {
        this.currencies = val.paymentCurrencies.map(this.formatPaymentCurrency);
      }
    }), AssetController.subscribe((val) => {
      this.currencyImages = { ...val.currencyImages };
      this.tokenImages = { ...val.tokenImages };
    }));
  }
  firstUpdated() {
    OnRampController.getAvailableCurrencies();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    const symbol = ((_a2 = this.selectedCurrency) == null ? void 0 : _a2.symbol) || "";
    const image = this.currencyImages[symbol] || this.tokenImages[symbol];
    return html` <wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency ? html` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${() => ModalController.open({ view: `OnRamp${this.type}Select` })}
          >
            <wui-image src=${ifDefined(image)}></wui-image>
            <wui-text color="fg-100"> ${this.selectedCurrency.symbol} </wui-text>
          </wui-flex>` : html`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`;
  }
  formatPaymentCurrency(currency) {
    return {
      name: currency.id,
      symbol: currency.id
    };
  }
  formatPurchaseCurrency(currency) {
    return {
      name: currency.name,
      symbol: currency.symbol
    };
  }
};
W3mInputCurrency.styles = styles_default26;
__decorate50([
  property({ type: String })
], W3mInputCurrency.prototype, "type", void 0);
__decorate50([
  property({ type: Number })
], W3mInputCurrency.prototype, "value", void 0);
__decorate50([
  state()
], W3mInputCurrency.prototype, "currencies", void 0);
__decorate50([
  state()
], W3mInputCurrency.prototype, "selectedCurrency", void 0);
__decorate50([
  state()
], W3mInputCurrency.prototype, "currencyImages", void 0);
__decorate50([
  state()
], W3mInputCurrency.prototype, "tokenImages", void 0);
W3mInputCurrency = __decorate50([
  customElement("w3m-swap-input")
], W3mInputCurrency);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-legal-footer/styles.js
var styles_default27 = css`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-legal-footer/index.js
var __decorate51 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mLegalFooter = class W3mLegalFooter2 extends LitElement {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return html`
      <wui-flex .padding=${["m", "s", "s", "s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    return termsConditionsUrl && privacyPolicyUrl ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl } = OptionsController.state;
    if (!termsConditionsUrl) {
      return null;
    }
    return html`<a href=${termsConditionsUrl}>Terms of Service</a>`;
  }
  privacyTemplate() {
    const { privacyPolicyUrl } = OptionsController.state;
    if (!privacyPolicyUrl) {
      return null;
    }
    return html`<a href=${privacyPolicyUrl}>Privacy Policy</a>`;
  }
};
W3mLegalFooter.styles = [styles_default27];
W3mLegalFooter = __decorate51([
  customElement("w3m-legal-footer")
], W3mLegalFooter);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-mobile-download-links/styles.js
var styles_default28 = css`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-mobile-download-links/index.js
var __decorate52 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mMobileDownloadLinks = class W3mMobileDownloadLinks2 extends LitElement {
  constructor() {
    super(...arguments);
    this.wallet = void 0;
  }
  render() {
    if (!this.wallet) {
      this.style.display = "none";
      return null;
    }
    const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
    const isMobile = CoreHelperUtil.isMobile();
    const isIos = CoreHelperUtil.isIos();
    const isAndroid = CoreHelperUtil.isAndroid();
    const isMultiple = [app_store, play_store, homepage, chrome_store].filter(Boolean).length > 1;
    const shortName = UiHelperUtil.getTruncateString({
      string: name,
      charsStart: 12,
      charsEnd: 0,
      truncate: "end"
    });
    if (isMultiple && !isMobile) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `;
    }
    if (!isMultiple && homepage) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (app_store && isIos) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (play_store && isAndroid) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    this.style.display = "none";
    return null;
  }
  onAppStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mMobileDownloadLinks.styles = [styles_default28];
__decorate52([
  property({ type: Object })
], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = __decorate52([
  customElement("w3m-mobile-download-links")
], W3mMobileDownloadLinks);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-onramp-providers-footer/styles.js
var styles_default29 = css`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-onramp-providers-footer/index.js
var __decorate53 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampProvidersFooter = class W3mOnRampProvidersFooter2 extends LitElement {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return html`
      <wui-flex
        .padding=${["m", "s", "s", "s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to fit your buyer needs, region, and to get you the lowest
          fees
        </wui-text>

        ${this.whatIsBuyTemplate()}
      </wui-flex>
    `;
  }
  whatIsBuyTemplate() {
    return html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      What is Buy
    </wui-link>`;
  }
  onWhatIsBuy() {
    RouterController.push("WhatIsABuy");
  }
};
W3mOnRampProvidersFooter.styles = [styles_default29];
W3mOnRampProvidersFooter = __decorate53([
  customElement("w3m-onramp-providers-footer")
], W3mOnRampProvidersFooter);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-snackbar/styles.js
var styles_default30 = css`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-snackbar/index.js
var __decorate54 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var presets = {
  success: {
    backgroundColor: "success-100",
    iconColor: "success-100",
    icon: "checkmark"
  },
  error: {
    backgroundColor: "error-100",
    iconColor: "error-100",
    icon: "close"
  }
};
var W3mSnackBar = class W3mSnackBar2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.timeout = void 0;
    this.open = SnackController.state.open;
    this.unsubscribe.push(SnackController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen();
    }));
  }
  disconnectedCallback() {
    clearTimeout(this.timeout);
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant } = SnackController.state;
    const preset = presets[variant];
    return html`
      <wui-snackbar
        message=${message}
        backgroundColor=${preset.backgroundColor}
        iconColor=${preset.iconColor}
        icon=${preset.icon}
      ></wui-snackbar>
    `;
  }
  onOpen() {
    clearTimeout(this.timeout);
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
        { opacity: 1, transform: "translateX(-50%) scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.timeout = setTimeout(() => SnackController.hide(), 2500);
    } else {
      this.animate([
        { opacity: 1, transform: "translateX(-50%) scale(1)" },
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
W3mSnackBar.styles = styles_default30;
__decorate54([
  state()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = __decorate54([
  customElement("w3m-snackbar")
], W3mSnackBar);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-email-login-widget/styles.js
var styles_default31 = css`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-email-login-widget/index.js
var __decorate55 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailLoginWidget = class W3mEmailLoginWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.formRef = createRef();
    this.connectors = ConnectorController.state.connectors;
    this.email = "";
    this.loading = false;
    this.error = "";
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  firstUpdated() {
    var _a2;
    (_a2 = this.formRef.value) == null ? void 0 : _a2.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.onSubmitEmail(event);
      }
    });
  }
  render() {
    const multipleConnectors = this.connectors.length > 1;
    const connector = this.connectors.find((c) => c.type === "EMAIL");
    if (!connector) {
      return null;
    }
    return html`
      <form ${ref(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${multipleConnectors ? html`<wui-separator text="or"></wui-separator>` : null}
    `;
  }
  submitButtonTemplate() {
    const showSubmit = !this.loading && this.email.length > 3;
    return showSubmit ? html`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        ` : null;
  }
  loadingTemplate() {
    return this.loading ? html`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>` : null;
  }
  onEmailInputChange(event) {
    this.email = event.detail;
    this.error = "";
  }
  async onSubmitEmail(event) {
    try {
      if (this.loading) {
        return;
      }
      this.loading = true;
      event.preventDefault();
      const emailConnector = ConnectorController.getEmailConnector();
      if (!emailConnector) {
        throw new Error("w3m-email-login-widget: Email connector not found");
      }
      const { action } = await emailConnector.provider.connectEmail({ email: this.email });
      EventsController.sendEvent({ type: "track", event: "EMAIL_SUBMITTED" });
      if (action === "VERIFY_OTP") {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
        RouterController.push("EmailVerifyOtp", { email: this.email });
      } else if (action === "VERIFY_DEVICE") {
        RouterController.push("EmailVerifyDevice", { email: this.email });
      }
    } catch (error) {
      const parsedError = CoreHelperUtil.parseError(error);
      if (parsedError == null ? void 0 : parsedError.includes("Invalid email")) {
        this.error = "Invalid email. Try again.";
      } else {
        SnackController.showError(error);
      }
    } finally {
      this.loading = false;
    }
  }
  onFocusEvent() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_LOGIN_SELECTED" });
  }
};
W3mEmailLoginWidget.styles = styles_default31;
__decorate55([
  state()
], W3mEmailLoginWidget.prototype, "connectors", void 0);
__decorate55([
  state()
], W3mEmailLoginWidget.prototype, "email", void 0);
__decorate55([
  state()
], W3mEmailLoginWidget.prototype, "loading", void 0);
__decorate55([
  state()
], W3mEmailLoginWidget.prototype, "error", void 0);
W3mEmailLoginWidget = __decorate55([
  customElement("w3m-email-login-widget")
], W3mEmailLoginWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-default-widget/styles.js
var styles_default32 = css`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background 0.2s linear;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-default-widget/index.js
var __decorate56 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountDefaultWidget = class W3mAccountDefaultWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.disconnecting = false;
    this.balance = AccountController.state.balance;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.balance = val.balance;
          this.balanceSymbol = val.balanceSymbol;
        } else {
          SnackController.showError("Account not found");
        }
      })
    ], NetworkController.subscribeKey("caipNetwork", (val) => {
      if (val == null ? void 0 : val.id) {
        this.network = val;
      }
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    if (!this.address) {
      throw new Error("w3m-account-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    return html`<wui-flex
        flexDirection="column"
        .padding=${["0", "xl", "m", "xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${ifDefined(this.address)}
          address=${ifDefined(this.address)}
          imageSrc=${ifDefined(this.profileImage === null ? void 0 : this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName ? UiHelperUtil.getTruncateString({
      string: this.profileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.address ? this.address : "",
      charsStart: 4,
      charsEnd: 4,
      truncate: "middle"
    })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${CoreHelperUtil.formatBalance(this.balance, this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0", "s", "s", "s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${networkImage ? "image" : "icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ifDefined(networkImage)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((_a2 = this.network) == null ? void 0 : _a2.name) ?? "Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${true}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${false}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
  }
  onrampTemplate() {
    const { enableOnramp } = OptionsController.state;
    if (!enableOnramp) {
      return null;
    }
    return html`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${true}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `;
  }
  emailCardTemplate() {
    const type = StorageUtil.getConnectedConnector();
    const emailConnector = ConnectorController.getEmailConnector();
    const { origin } = location;
    if (!emailConnector || type !== "EMAIL" || origin.includes(ConstantsUtil.SECURE_SITE)) {
      return null;
    }
    return html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
  }
  handleClickPay() {
    RouterController.push("OnRampProviders");
  }
  explorerBtnTemplate() {
    const { addressExplorerUrl } = AccountController.state;
    if (!addressExplorerUrl) {
      return null;
    }
    return html`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `;
  }
  emailBtnTemplate() {
    const type = StorageUtil.getConnectedConnector();
    const emailConnector = ConnectorController.getEmailConnector();
    if (!emailConnector || type !== "EMAIL") {
      return null;
    }
    const email = emailConnector.provider.getEmail() ?? "";
    return html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${true}
        @click=${() => this.onGoToUpdateEmail(email)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${email}</wui-text>
      </wui-list-item>
    `;
  }
  isAllowedNetworkSwitch() {
    const { requestedCaipNetworks } = NetworkController.state;
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a2;
      return id === ((_a2 = this.network) == null ? void 0 : _a2.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  onCopyAddress() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      RouterController.push("Networks");
    }
  }
  onTransactions() {
    EventsController.sendEvent({ type: "track", event: "CLICK_TRANSACTIONS" });
    RouterController.push("Transactions");
  }
  async onDisconnect() {
    try {
      this.disconnecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_SUCCESS" });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconnecting = false;
    }
  }
  onExplorer() {
    const { addressExplorerUrl } = AccountController.state;
    if (addressExplorerUrl) {
      CoreHelperUtil.openHref(addressExplorerUrl, "_blank");
    }
  }
  onGoToUpgradeView() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" });
    RouterController.push("UpgradeEmailWallet");
  }
  onGoToUpdateEmail(email) {
    RouterController.push("UpdateEmailWallet", { email });
  }
};
W3mAccountDefaultWidget.styles = styles_default32;
__decorate56([
  state()
], W3mAccountDefaultWidget.prototype, "address", void 0);
__decorate56([
  state()
], W3mAccountDefaultWidget.prototype, "profileImage", void 0);
__decorate56([
  state()
], W3mAccountDefaultWidget.prototype, "profileName", void 0);
__decorate56([
  state()
], W3mAccountDefaultWidget.prototype, "network", void 0);
__decorate56([
  state()
], W3mAccountDefaultWidget.prototype, "disconnecting", void 0);
__decorate56([
  state()
], W3mAccountDefaultWidget.prototype, "balance", void 0);
__decorate56([
  state()
], W3mAccountDefaultWidget.prototype, "balanceSymbol", void 0);
W3mAccountDefaultWidget = __decorate56([
  customElement("w3m-account-default-widget")
], W3mAccountDefaultWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-wallet-features-widget/styles.js
var styles_default33 = css`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil3 = {
  ACCOUNT_TABS: [{ label: "Tokens" }, { label: "NFTs" }, { label: "Activity" }]
};

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-wallet-features-widget/index.js
var __decorate57 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountWalletFeaturesWidget = class W3mAccountWalletFeaturesWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.currentTab = AccountController.state.currentTab;
    this.tokenBalance = AccountController.state.tokenBalance;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.currentTab = val.currentTab;
          this.tokenBalance = val.tokenBalance;
        } else {
          ModalController.close();
        }
      })
    ], NetworkController.subscribeKey("caipNetwork", (val) => {
      if (val == null ? void 0 : val.id) {
        this.network = val;
      }
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (!this.address) {
      throw new Error("w3m-account-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    return html`<wui-flex
      flexDirection="column"
      .padding=${["0", "xl", "m", "xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${ifDefined(this.address)}
        networkSrc=${ifDefined(networkImage)}
        icon="chevronBottom"
        avatarSrc=${ifDefined(this.profileImage ? this.profileImage : void 0)}
        ?isprofilename=${Boolean(this.profileName)}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Convert" icon="recycleHorizontal"></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Send" icon="send"></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${ConstantsUtil3.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`;
  }
  listContentTemplate() {
    if (this.currentTab === 0) {
      return html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
    }
    if (this.currentTab === 1) {
      return html`<w3m-account-nfts-widget></w3m-account-nfts-widget>`;
    }
    if (this.currentTab === 2) {
      return html`<w3m-account-activity-widget></w3m-account-activity-widget>`;
    }
    return html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
  }
  tokenBalanceTemplate() {
    var _a2;
    if (this.tokenBalance && ((_a2 = this.tokenBalance) == null ? void 0 : _a2.length) >= 0) {
      const value = CoreHelperUtil.calculateBalance(this.tokenBalance);
      const { dollars = "0", pennies = "00" } = CoreHelperUtil.formatTokenBalance(value);
      return html`<wui-balance dollars=${dollars} pennies=${pennies}></wui-balance>`;
    }
    return html`<wui-balance dollars="0" pennies="00"></wui-balance>`;
  }
  activateAccountTemplate() {
    return html` <wui-promo text="Activate your account"></wui-promo>`;
  }
  onTabChange(index) {
    AccountController.setCurrentTab(index);
  }
  onProfileButtonClick() {
    RouterController.push("AccountSettings");
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
};
W3mAccountWalletFeaturesWidget.styles = styles_default33;
__decorate57([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "address", void 0);
__decorate57([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "profileImage", void 0);
__decorate57([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "profileName", void 0);
__decorate57([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "network", void 0);
__decorate57([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "currentTab", void 0);
__decorate57([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "tokenBalance", void 0);
W3mAccountWalletFeaturesWidget = __decorate57([
  customElement("w3m-account-wallet-features-widget")
], W3mAccountWalletFeaturesWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-activity-widget/styles.js
var styles_default34 = css`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-activity-widget/index.js
var __decorate58 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountActivityWidget = class W3mAccountActivityWidget2 extends LitElement {
  render() {
    return html`<w3m-activity-list page="account"></w3m-activity-list>`;
  }
};
W3mAccountActivityWidget.styles = styles_default34;
W3mAccountActivityWidget = __decorate58([
  customElement("w3m-account-activity-widget")
], W3mAccountActivityWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-nfts-widget/styles.js
var styles_default35 = css`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-nfts-widget/index.js
var __decorate59 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountNftsWidget = class W3mAccountNftsWidget2 extends LitElement {
  render() {
    return html`${this.nftTemplate()}`;
  }
  nftTemplate() {
    return html` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`;
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
};
W3mAccountNftsWidget.styles = styles_default35;
W3mAccountNftsWidget = __decorate59([
  customElement("w3m-account-nfts-widget")
], W3mAccountNftsWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-tokens-widget/styles.js
var styles_default36 = css`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-tokens-widget/index.js
var __decorate60 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountTokensWidget = class W3mAccountTokensWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tokenBalance = AccountController.state.tokenBalance;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        this.tokenBalance = val.tokenBalance;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  firstUpdated() {
    AccountController.fetchTokenBalance();
  }
  render() {
    return html`${this.tokenTemplate()}`;
  }
  tokenTemplate() {
    var _a2;
    if (this.tokenBalance && ((_a2 = this.tokenBalance) == null ? void 0 : _a2.length) > 0) {
      return html`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`;
    }
    return html` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`;
  }
  tokenItemTemplate() {
    var _a2;
    return (_a2 = this.tokenBalance) == null ? void 0 : _a2.map((token) => html`<wui-list-token
          tokenName=${token.name}
          tokenImageUrl=${token.iconUrl}
          tokenAmount=${token.quantity.numeric}
          tokenValue=${token.value}
          tokenCurrency=${token.symbol}
        ></wui-list-token>`);
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
};
W3mAccountTokensWidget.styles = styles_default36;
__decorate60([
  state()
], W3mAccountTokensWidget.prototype, "tokenBalance", void 0);
W3mAccountTokensWidget = __decorate60([
  customElement("w3m-account-tokens-widget")
], W3mAccountTokensWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-activity-list/styles.js
var styles_default37 = css`
  :host {
    height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-activity-list/index.js
var __decorate61 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGINATOR_ID2 = "last-transaction";
var LOADING_ITEM_COUNT2 = 7;
var W3mActivityList = class W3mActivityList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.page = "activity";
    this.address = AccountController.state.address;
    this.transactionsByYear = TransactionsController.state.transactionsByYear;
    this.loading = TransactionsController.state.loading;
    this.empty = TransactionsController.state.empty;
    this.next = TransactionsController.state.next;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.isConnected) {
          if (this.address !== val.address) {
            this.address = val.address;
            TransactionsController.resetTransactions();
            TransactionsController.fetchTransactions(val.address);
          }
        }
      }),
      TransactionsController.subscribe((val) => {
        this.transactionsByYear = val.transactionsByYear;
        this.loading = val.loading;
        this.empty = val.empty;
        this.next = val.next;
      })
    ]);
  }
  firstUpdated() {
    TransactionsController.fetchTransactions(this.address);
    this.createPaginationObserver();
  }
  updated() {
    this.setPaginationObserver();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html` ${this.empty ? null : this.templateTransactionsByYear()}
    ${this.loading ? this.templateLoading() : null}
    ${!this.loading && this.empty ? this.templateEmpty() : null}`;
  }
  templateTransactionsByYear() {
    const sortedYearKeys = Object.keys(this.transactionsByYear).sort().reverse();
    return sortedYearKeys.map((year, index) => {
      const isLastGroup = index === sortedYearKeys.length - 1;
      const yearInt = parseInt(year, 10);
      const sortedMonthIndexes = new Array(12).fill(null).map((_, idx) => idx).reverse();
      return sortedMonthIndexes.map((month) => {
        var _a2;
        const groupTitle = TransactionUtil.getTransactionGroupTitle(yearInt, month);
        const transactions = (_a2 = this.transactionsByYear[yearInt]) == null ? void 0 : _a2[month];
        if (!transactions) {
          return null;
        }
        return html`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions, isLastGroup)}
            </wui-flex>
          </wui-flex>
        `;
      });
    });
  }
  templateRenderTransaction(transaction, isLastTransaction) {
    const { date, descriptions, direction, isAllNFT, images, status, transfers, type } = this.getTransactionListItemProps(transaction);
    const haveMultipleTransfers = (transfers == null ? void 0 : transfers.length) > 1;
    const haveTwoTransfers = (transfers == null ? void 0 : transfers.length) === 2;
    if (haveTwoTransfers && !isAllNFT) {
      return html`
        <wui-transaction-list-item
          date=${date}
          .direction=${direction}
          id=${isLastTransaction && this.next ? PAGINATOR_ID2 : ""}
          status=${status}
          type=${type}
          .images=${images}
          .descriptions=${descriptions}
        ></wui-transaction-list-item>
      `;
    }
    if (haveMultipleTransfers) {
      return transfers.map((transfer, index) => {
        const description = TransactionUtil.getTransferDescription(transfer);
        const isLastTransfer = isLastTransaction && index === transfers.length - 1;
        return html` <wui-transaction-list-item
          date=${date}
          direction=${transfer.direction}
          id=${isLastTransfer && this.next ? PAGINATOR_ID2 : ""}
          status=${status}
          type=${type}
          .onlyDirectionIcon=${true}
          .images=${[images[index]]}
          .descriptions=${[description]}
        ></wui-transaction-list-item>`;
      });
    }
    return html`
      <wui-transaction-list-item
        date=${date}
        .direction=${direction}
        id=${isLastTransaction && this.next ? PAGINATOR_ID2 : ""}
        status=${status}
        type=${type}
        .images=${images}
        .descriptions=${descriptions}
      ></wui-transaction-list-item>
    `;
  }
  templateTransactions(transactions, isLastGroup) {
    return transactions.map((transaction, index) => {
      const isLastTransaction = isLastGroup && index === transactions.length - 1;
      return html`${this.templateRenderTransaction(transaction, isLastTransaction)}`;
    });
  }
  emptyStateActivity() {
    return html`<wui-flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl", "xl", "3xl", "xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${true}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`;
  }
  emptyStateAccount() {
    return html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`;
  }
  templateEmpty() {
    if (this.page === "account") {
      return html`${this.emptyStateAccount()}`;
    }
    return html`${this.emptyStateActivity()}`;
  }
  templateLoading() {
    if (this.page === "activity") {
      return Array(LOADING_ITEM_COUNT2).fill(html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item) => item);
    }
    return null;
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  createPaginationObserver() {
    const { projectId } = OptionsController.state;
    this.paginationObserver = new IntersectionObserver(([element]) => {
      if ((element == null ? void 0 : element.isIntersecting) && !this.loading) {
        TransactionsController.fetchTransactions(this.address);
        EventsController.sendEvent({
          type: "track",
          event: "LOAD_MORE_TRANSACTIONS",
          properties: {
            address: this.address,
            projectId,
            cursor: this.next
          }
        });
      }
    }, {});
    this.setPaginationObserver();
  }
  setPaginationObserver() {
    var _a2, _b2, _c;
    (_a2 = this.paginationObserver) == null ? void 0 : _a2.disconnect();
    const lastItem = (_b2 = this.shadowRoot) == null ? void 0 : _b2.querySelector(`#${PAGINATOR_ID2}`);
    if (lastItem) {
      (_c = this.paginationObserver) == null ? void 0 : _c.observe(lastItem);
    }
  }
  getTransactionListItemProps(transaction) {
    var _a2, _b2, _c, _d, _e;
    const date = DateUtil.formatDate((_a2 = transaction == null ? void 0 : transaction.metadata) == null ? void 0 : _a2.minedAt);
    const descriptions = TransactionUtil.getTransactionDescriptions(transaction);
    const transfers = transaction == null ? void 0 : transaction.transfers;
    const transfer = (_b2 = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _b2[0];
    const isAllNFT = Boolean(transfer) && ((_c = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _c.every((item) => Boolean(item.nft_info)));
    const images = TransactionUtil.getTransactionImages(transfers);
    return {
      date,
      direction: transfer == null ? void 0 : transfer.direction,
      descriptions,
      isAllNFT,
      images,
      status: (_d = transaction.metadata) == null ? void 0 : _d.status,
      transfers,
      type: (_e = transaction.metadata) == null ? void 0 : _e.operationType
    };
  }
};
W3mActivityList.styles = styles_default37;
__decorate61([
  property()
], W3mActivityList.prototype, "page", void 0);
__decorate61([
  state()
], W3mActivityList.prototype, "address", void 0);
__decorate61([
  state()
], W3mActivityList.prototype, "transactionsByYear", void 0);
__decorate61([
  state()
], W3mActivityList.prototype, "loading", void 0);
__decorate61([
  state()
], W3mActivityList.prototype, "empty", void 0);
__decorate61([
  state()
], W3mActivityList.prototype, "next", void 0);
W3mActivityList = __decorate61([
  customElement("w3m-activity-list")
], W3mActivityList);

// node_modules/@web3modal/wagmi/dist/esm/src/utils/helpers.js
function getCaipDefaultChain(chain) {
  if (!chain) {
    return void 0;
  }
  return {
    id: `${ConstantsUtil2.EIP155}:${chain.id}`,
    name: chain.name,
    imageId: PresetsUtil.EIP155NetworkImageIds[chain.id]
  };
}
async function getWalletConnectCaipNetworks(connector) {
  var _a2, _b2, _c, _d;
  if (!connector) {
    throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");
  }
  const provider = await (connector == null ? void 0 : connector.getProvider());
  const ns = (_b2 = (_a2 = provider == null ? void 0 : provider.signer) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces;
  const nsMethods = (_c = ns == null ? void 0 : ns[ConstantsUtil2.EIP155]) == null ? void 0 : _c.methods;
  const nsChains = (_d = ns == null ? void 0 : ns[ConstantsUtil2.EIP155]) == null ? void 0 : _d.chains;
  return {
    supportsAllNetworks: Boolean(nsMethods == null ? void 0 : nsMethods.includes(ConstantsUtil2.ADD_CHAIN_METHOD)),
    approvedCaipNetworkIds: nsChains
  };
}
function getEmailCaipNetworks() {
  return {
    supportsAllNetworks: false,
    approvedCaipNetworkIds: PresetsUtil.WalletConnectRpcChainIds.map((id) => `${ConstantsUtil2.EIP155}:${id}`)
  };
}
function getTransport({ chainId, projectId }) {
  const RPC_URL = CoreHelperUtil.getBlockchainApiUrl();
  if (!PresetsUtil.WalletConnectRpcChainIds.includes(chainId)) {
    return http();
  }
  return http(`${RPC_URL}/v1/?chainId=${ConstantsUtil2.EIP155}:${chainId}&projectId=${projectId}`);
}

export {
  W3mFrameRpcConstants,
  W3mFrameHelpers,
  W3mFrameProvider,
  Web3ModalScaffold,
  getCaipDefaultChain,
  getWalletConnectCaipNetworks,
  getEmailCaipNetworks,
  getTransport
};
/*! Bundled license information:

lit-html/development/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-7BIR7QIQ.js.map
