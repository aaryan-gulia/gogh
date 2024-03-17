import {
  require_events
} from "./chunk-TWKACX2D.js";
import {
  require_eventemitter3
} from "./chunk-YIMMHLSJ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-JUYIN33I.js";

// node_modules/@coinbase/wallet-sdk/dist/assets/wallet-logo.js
var require_wallet_logo = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/assets/wallet-logo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.walletLogo = void 0;
    var walletLogo = (type2, width) => {
      let height;
      switch (type2) {
        case "standard":
          height = width;
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
        case "circle":
          height = width;
          return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
        case "text":
          height = (0.1 * width).toFixed(2);
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogo":
          height = (0.25 * width).toFixed(2);
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        case "textLight":
          height = (0.1 * width).toFixed(2);
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogoLight":
          height = (0.25 * width).toFixed(2);
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        default:
          height = width;
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
      }
    };
    exports.walletLogo = walletLogo;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/constants.js
var require_constants = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LINK_API_URL = void 0;
    exports.LINK_API_URL = "https://www.walletlink.org";
  }
});

// browser-external:buffer
var require_buffer = __commonJS({
  "browser-external:buffer"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_3, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "buffer" has been externalized for browser compatibility. Cannot access "buffer.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/bn.js/lib/bn.js
var require_bn = __commonJS({
  "node_modules/bn.js/lib/bn.js"(exports, module) {
    (function(module2, exports2) {
      "use strict";
      function assert2(val, msg) {
        if (!val)
          throw new Error(msg || "Assertion failed");
      }
      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
      function BN(number2, base, endian) {
        if (BN.isBN(number2)) {
          return number2;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (number2 !== null) {
          if (base === "le" || base === "be") {
            endian = base;
            base = 10;
          }
          this._init(number2 || 0, base || 10, endian || "be");
        }
      }
      if (typeof module2 === "object") {
        module2.exports = BN;
      } else {
        exports2.BN = BN;
      }
      BN.BN = BN;
      BN.wordSize = 26;
      var Buffer2;
      try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
          Buffer2 = window.Buffer;
        } else {
          Buffer2 = require_buffer().Buffer;
        }
      } catch (e3) {
      }
      BN.isBN = function isBN(num) {
        if (num instanceof BN) {
          return true;
        }
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
      };
      BN.max = function max2(left, right) {
        if (left.cmp(right) > 0)
          return left;
        return right;
      };
      BN.min = function min2(left, right) {
        if (left.cmp(right) < 0)
          return left;
        return right;
      };
      BN.prototype._init = function init(number2, base, endian) {
        if (typeof number2 === "number") {
          return this._initNumber(number2, base, endian);
        }
        if (typeof number2 === "object") {
          return this._initArray(number2, base, endian);
        }
        if (base === "hex") {
          base = 16;
        }
        assert2(base === (base | 0) && base >= 2 && base <= 36);
        number2 = number2.toString().replace(/\s+/g, "");
        var start = 0;
        if (number2[0] === "-") {
          start++;
          this.negative = 1;
        }
        if (start < number2.length) {
          if (base === 16) {
            this._parseHex(number2, start, endian);
          } else {
            this._parseBase(number2, base, start);
            if (endian === "le") {
              this._initArray(this.toArray(), base, endian);
            }
          }
        }
      };
      BN.prototype._initNumber = function _initNumber(number2, base, endian) {
        if (number2 < 0) {
          this.negative = 1;
          number2 = -number2;
        }
        if (number2 < 67108864) {
          this.words = [number2 & 67108863];
          this.length = 1;
        } else if (number2 < 4503599627370496) {
          this.words = [
            number2 & 67108863,
            number2 / 67108864 & 67108863
          ];
          this.length = 2;
        } else {
          assert2(number2 < 9007199254740992);
          this.words = [
            number2 & 67108863,
            number2 / 67108864 & 67108863,
            1
          ];
          this.length = 3;
        }
        if (endian !== "le")
          return;
        this._initArray(this.toArray(), base, endian);
      };
      BN.prototype._initArray = function _initArray(number2, base, endian) {
        assert2(typeof number2.length === "number");
        if (number2.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(number2.length / 3);
        this.words = new Array(this.length);
        for (var i3 = 0; i3 < this.length; i3++) {
          this.words[i3] = 0;
        }
        var j3, w3;
        var off = 0;
        if (endian === "be") {
          for (i3 = number2.length - 1, j3 = 0; i3 >= 0; i3 -= 3) {
            w3 = number2[i3] | number2[i3 - 1] << 8 | number2[i3 - 2] << 16;
            this.words[j3] |= w3 << off & 67108863;
            this.words[j3 + 1] = w3 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j3++;
            }
          }
        } else if (endian === "le") {
          for (i3 = 0, j3 = 0; i3 < number2.length; i3 += 3) {
            w3 = number2[i3] | number2[i3 + 1] << 8 | number2[i3 + 2] << 16;
            this.words[j3] |= w3 << off & 67108863;
            this.words[j3 + 1] = w3 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j3++;
            }
          }
        }
        return this._strip();
      };
      function parseHex4Bits(string2, index) {
        var c3 = string2.charCodeAt(index);
        if (c3 >= 48 && c3 <= 57) {
          return c3 - 48;
        } else if (c3 >= 65 && c3 <= 70) {
          return c3 - 55;
        } else if (c3 >= 97 && c3 <= 102) {
          return c3 - 87;
        } else {
          assert2(false, "Invalid character in " + string2);
        }
      }
      function parseHexByte(string2, lowerBound, index) {
        var r4 = parseHex4Bits(string2, index);
        if (index - 1 >= lowerBound) {
          r4 |= parseHex4Bits(string2, index - 1) << 4;
        }
        return r4;
      }
      BN.prototype._parseHex = function _parseHex(number2, start, endian) {
        this.length = Math.ceil((number2.length - start) / 6);
        this.words = new Array(this.length);
        for (var i3 = 0; i3 < this.length; i3++) {
          this.words[i3] = 0;
        }
        var off = 0;
        var j3 = 0;
        var w3;
        if (endian === "be") {
          for (i3 = number2.length - 1; i3 >= start; i3 -= 2) {
            w3 = parseHexByte(number2, start, i3) << off;
            this.words[j3] |= w3 & 67108863;
            if (off >= 18) {
              off -= 18;
              j3 += 1;
              this.words[j3] |= w3 >>> 26;
            } else {
              off += 8;
            }
          }
        } else {
          var parseLength = number2.length - start;
          for (i3 = parseLength % 2 === 0 ? start + 1 : start; i3 < number2.length; i3 += 2) {
            w3 = parseHexByte(number2, start, i3) << off;
            this.words[j3] |= w3 & 67108863;
            if (off >= 18) {
              off -= 18;
              j3 += 1;
              this.words[j3] |= w3 >>> 26;
            } else {
              off += 8;
            }
          }
        }
        this._strip();
      };
      function parseBase(str, start, end, mul) {
        var r4 = 0;
        var b3 = 0;
        var len = Math.min(str.length, end);
        for (var i3 = start; i3 < len; i3++) {
          var c3 = str.charCodeAt(i3) - 48;
          r4 *= mul;
          if (c3 >= 49) {
            b3 = c3 - 49 + 10;
          } else if (c3 >= 17) {
            b3 = c3 - 17 + 10;
          } else {
            b3 = c3;
          }
          assert2(c3 >= 0 && b3 < mul, "Invalid character");
          r4 += b3;
        }
        return r4;
      }
      BN.prototype._parseBase = function _parseBase(number2, base, start) {
        this.words = [0];
        this.length = 1;
        for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
          limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number2.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for (var i3 = start; i3 < end; i3 += limbLen) {
          word = parseBase(number2, i3, i3 + limbLen, base);
          this.imuln(limbPow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        if (mod !== 0) {
          var pow = 1;
          word = parseBase(number2, i3, number2.length, base);
          for (i3 = 0; i3 < mod; i3++) {
            pow *= base;
          }
          this.imuln(pow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        this._strip();
      };
      BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for (var i3 = 0; i3 < this.length; i3++) {
          dest.words[i3] = this.words[i3];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };
      function move(dest, src) {
        dest.words = src.words;
        dest.length = src.length;
        dest.negative = src.negative;
        dest.red = src.red;
      }
      BN.prototype._move = function _move(dest) {
        move(dest, this);
      };
      BN.prototype.clone = function clone() {
        var r4 = new BN(null);
        this.copy(r4);
        return r4;
      };
      BN.prototype._expand = function _expand(size2) {
        while (this.length < size2) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      BN.prototype._strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      BN.prototype._normSign = function _normSign() {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
        try {
          BN.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
        } catch (e3) {
          BN.prototype.inspect = inspect;
        }
      } else {
        BN.prototype.inspect = inspect;
      }
      function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ];
      var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ];
      var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === "hex") {
          out = "";
          var off = 0;
          var carry = 0;
          for (var i3 = 0; i3 < this.length; i3++) {
            var w3 = this.words[i3];
            var word = ((w3 << off | carry) & 16777215).toString(16);
            carry = w3 >>> 24 - off & 16777215;
            off += 2;
            if (off >= 26) {
              off -= 26;
              i3--;
            }
            if (carry !== 0 || i3 !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }
          }
          if (carry !== 0) {
            out = carry.toString(16) + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
          var groupSize = groupSizes[base];
          var groupBase = groupBases[base];
          out = "";
          var c3 = this.clone();
          c3.negative = 0;
          while (!c3.isZero()) {
            var r4 = c3.modrn(groupBase).toString(base);
            c3 = c3.idivn(groupBase);
            if (!c3.isZero()) {
              out = zeros[groupSize - r4.length] + r4 + out;
            } else {
              out = r4 + out;
            }
          }
          if (this.isZero()) {
            out = "0" + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        assert2(false, "Base should be between 2 and 36");
      };
      BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
          ret += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          ret += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          assert2(false, "Number can only safely store up to 53 bits");
        }
        return this.negative !== 0 ? -ret : ret;
      };
      BN.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
      };
      if (Buffer2) {
        BN.prototype.toBuffer = function toBuffer(endian, length) {
          return this.toArrayLike(Buffer2, endian, length);
        };
      }
      BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };
      var allocate = function allocate2(ArrayType, size2) {
        if (ArrayType.allocUnsafe) {
          return ArrayType.allocUnsafe(size2);
        }
        return new ArrayType(size2);
      };
      BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert2(byteLength <= reqLength, "byte array longer than desired length");
        assert2(reqLength > 0, "Requested array length <= 0");
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === "le" ? "LE" : "BE";
        this["_toArrayLike" + postfix](res, byteLength);
        return res;
      };
      BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
        var position = 0;
        var carry = 0;
        for (var i3 = 0, shift = 0; i3 < this.length; i3++) {
          var word = this.words[i3] << shift | carry;
          res[position++] = word & 255;
          if (position < res.length) {
            res[position++] = word >> 8 & 255;
          }
          if (position < res.length) {
            res[position++] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position < res.length) {
              res[position++] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position < res.length) {
          res[position++] = carry;
          while (position < res.length) {
            res[position++] = 0;
          }
        }
      };
      BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
        var position = res.length - 1;
        var carry = 0;
        for (var i3 = 0, shift = 0; i3 < this.length; i3++) {
          var word = this.words[i3] << shift | carry;
          res[position--] = word & 255;
          if (position >= 0) {
            res[position--] = word >> 8 & 255;
          }
          if (position >= 0) {
            res[position--] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position >= 0) {
              res[position--] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position >= 0) {
          res[position--] = carry;
          while (position >= 0) {
            res[position--] = 0;
          }
        }
      };
      if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w3) {
          return 32 - Math.clz32(w3);
        };
      } else {
        BN.prototype._countBits = function _countBits(w3) {
          var t3 = w3;
          var r4 = 0;
          if (t3 >= 4096) {
            r4 += 13;
            t3 >>>= 13;
          }
          if (t3 >= 64) {
            r4 += 7;
            t3 >>>= 7;
          }
          if (t3 >= 8) {
            r4 += 4;
            t3 >>>= 4;
          }
          if (t3 >= 2) {
            r4 += 2;
            t3 >>>= 2;
          }
          return r4 + t3;
        };
      }
      BN.prototype._zeroBits = function _zeroBits(w3) {
        if (w3 === 0)
          return 26;
        var t3 = w3;
        var r4 = 0;
        if ((t3 & 8191) === 0) {
          r4 += 13;
          t3 >>>= 13;
        }
        if ((t3 & 127) === 0) {
          r4 += 7;
          t3 >>>= 7;
        }
        if ((t3 & 15) === 0) {
          r4 += 4;
          t3 >>>= 4;
        }
        if ((t3 & 3) === 0) {
          r4 += 2;
          t3 >>>= 2;
        }
        if ((t3 & 1) === 0) {
          r4++;
        }
        return r4;
      };
      BN.prototype.bitLength = function bitLength() {
        var w3 = this.words[this.length - 1];
        var hi = this._countBits(w3);
        return (this.length - 1) * 26 + hi;
      };
      function toBitArray(num) {
        var w3 = new Array(num.bitLength());
        for (var bit = 0; bit < w3.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w3[bit] = num.words[off] >>> wbit & 1;
        }
        return w3;
      }
      BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero())
          return 0;
        var r4 = 0;
        for (var i3 = 0; i3 < this.length; i3++) {
          var b3 = this._zeroBits(this.words[i3]);
          r4 += b3;
          if (b3 !== 26)
            break;
        }
        return r4;
      };
      BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };
      BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
      };
      BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
      };
      BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      };
      BN.prototype.neg = function neg() {
        return this.clone().ineg();
      };
      BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      BN.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }
        for (var i3 = 0; i3 < num.length; i3++) {
          this.words[i3] = this.words[i3] | num.words[i3];
        }
        return this._strip();
      };
      BN.prototype.ior = function ior(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuor(num);
      };
      BN.prototype.or = function or(num) {
        if (this.length > num.length)
          return this.clone().ior(num);
        return num.clone().ior(this);
      };
      BN.prototype.uor = function uor(num) {
        if (this.length > num.length)
          return this.clone().iuor(num);
        return num.clone().iuor(this);
      };
      BN.prototype.iuand = function iuand(num) {
        var b3;
        if (this.length > num.length) {
          b3 = num;
        } else {
          b3 = this;
        }
        for (var i3 = 0; i3 < b3.length; i3++) {
          this.words[i3] = this.words[i3] & num.words[i3];
        }
        this.length = b3.length;
        return this._strip();
      };
      BN.prototype.iand = function iand(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuand(num);
      };
      BN.prototype.and = function and(num) {
        if (this.length > num.length)
          return this.clone().iand(num);
        return num.clone().iand(this);
      };
      BN.prototype.uand = function uand(num) {
        if (this.length > num.length)
          return this.clone().iuand(num);
        return num.clone().iuand(this);
      };
      BN.prototype.iuxor = function iuxor(num) {
        var a3;
        var b3;
        if (this.length > num.length) {
          a3 = this;
          b3 = num;
        } else {
          a3 = num;
          b3 = this;
        }
        for (var i3 = 0; i3 < b3.length; i3++) {
          this.words[i3] = a3.words[i3] ^ b3.words[i3];
        }
        if (this !== a3) {
          for (; i3 < a3.length; i3++) {
            this.words[i3] = a3.words[i3];
          }
        }
        this.length = a3.length;
        return this._strip();
      };
      BN.prototype.ixor = function ixor(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuxor(num);
      };
      BN.prototype.xor = function xor(num) {
        if (this.length > num.length)
          return this.clone().ixor(num);
        return num.clone().ixor(this);
      };
      BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length)
          return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      };
      BN.prototype.inotn = function inotn(width) {
        assert2(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
          bytesNeeded--;
        }
        for (var i3 = 0; i3 < bytesNeeded; i3++) {
          this.words[i3] = ~this.words[i3] & 67108863;
        }
        if (bitsLeft > 0) {
          this.words[i3] = ~this.words[i3] & 67108863 >> 26 - bitsLeft;
        }
        return this._strip();
      };
      BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      };
      BN.prototype.setn = function setn(bit, val) {
        assert2(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this._strip();
      };
      BN.prototype.iadd = function iadd(num) {
        var r4;
        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r4 = this.isub(num);
          this.negative ^= 1;
          return this._normSign();
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r4 = this.isub(num);
          num.negative = 1;
          return r4._normSign();
        }
        var a3, b3;
        if (this.length > num.length) {
          a3 = this;
          b3 = num;
        } else {
          a3 = num;
          b3 = this;
        }
        var carry = 0;
        for (var i3 = 0; i3 < b3.length; i3++) {
          r4 = (a3.words[i3] | 0) + (b3.words[i3] | 0) + carry;
          this.words[i3] = r4 & 67108863;
          carry = r4 >>> 26;
        }
        for (; carry !== 0 && i3 < a3.length; i3++) {
          r4 = (a3.words[i3] | 0) + carry;
          this.words[i3] = r4 & 67108863;
          carry = r4 >>> 26;
        }
        this.length = a3.length;
        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++;
        } else if (a3 !== this) {
          for (; i3 < a3.length; i3++) {
            this.words[i3] = a3.words[i3];
          }
        }
        return this;
      };
      BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }
        if (this.length > num.length)
          return this.clone().iadd(num);
        return num.clone().iadd(this);
      };
      BN.prototype.isub = function isub(num) {
        if (num.negative !== 0) {
          num.negative = 0;
          var r4 = this.iadd(num);
          num.negative = 1;
          return r4._normSign();
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        }
        var cmp = this.cmp(num);
        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        var a3, b3;
        if (cmp > 0) {
          a3 = this;
          b3 = num;
        } else {
          a3 = num;
          b3 = this;
        }
        var carry = 0;
        for (var i3 = 0; i3 < b3.length; i3++) {
          r4 = (a3.words[i3] | 0) - (b3.words[i3] | 0) + carry;
          carry = r4 >> 26;
          this.words[i3] = r4 & 67108863;
        }
        for (; carry !== 0 && i3 < a3.length; i3++) {
          r4 = (a3.words[i3] | 0) + carry;
          carry = r4 >> 26;
          this.words[i3] = r4 & 67108863;
        }
        if (carry === 0 && i3 < a3.length && a3 !== this) {
          for (; i3 < a3.length; i3++) {
            this.words[i3] = a3.words[i3];
          }
        }
        this.length = Math.max(this.length, i3);
        if (a3 !== this) {
          this.negative = 1;
        }
        return this._strip();
      };
      BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };
      function smallMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        var len = self2.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        var a3 = self2.words[0] | 0;
        var b3 = num.words[0] | 0;
        var r4 = a3 * b3;
        var lo = r4 & 67108863;
        var carry = r4 / 67108864 | 0;
        out.words[0] = lo;
        for (var k3 = 1; k3 < len; k3++) {
          var ncarry = carry >>> 26;
          var rword = carry & 67108863;
          var maxJ = Math.min(k3, num.length - 1);
          for (var j3 = Math.max(0, k3 - self2.length + 1); j3 <= maxJ; j3++) {
            var i3 = k3 - j3 | 0;
            a3 = self2.words[i3] | 0;
            b3 = num.words[j3] | 0;
            r4 = a3 * b3 + rword;
            ncarry += r4 / 67108864 | 0;
            rword = r4 & 67108863;
          }
          out.words[k3] = rword | 0;
          carry = ncarry | 0;
        }
        if (carry !== 0) {
          out.words[k3] = carry | 0;
        } else {
          out.length--;
        }
        return out._strip();
      }
      var comb10MulTo = function comb10MulTo2(self2, num, out) {
        var a3 = self2.words;
        var b3 = num.words;
        var o3 = out.words;
        var c3 = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a3[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a3[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a22 = a3[2] | 0;
        var al2 = a22 & 8191;
        var ah2 = a22 >>> 13;
        var a32 = a3[3] | 0;
        var al3 = a32 & 8191;
        var ah3 = a32 >>> 13;
        var a4 = a3[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a3[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a3[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a3[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a3[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a3[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b3[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b3[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b22 = b3[2] | 0;
        var bl2 = b22 & 8191;
        var bh2 = b22 >>> 13;
        var b32 = b3[3] | 0;
        var bl3 = b32 & 8191;
        var bh3 = b32 >>> 13;
        var b4 = b3[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b3[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b3[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b3[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b3[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b3[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self2.negative ^ num.negative;
        out.length = 19;
        lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w22 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w22 >>> 26) | 0;
        w22 &= 67108863;
        lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c3 + lo | 0) + ((mid & 8191) << 13) | 0;
        c3 = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o3[0] = w0;
        o3[1] = w1;
        o3[2] = w22;
        o3[3] = w3;
        o3[4] = w4;
        o3[5] = w5;
        o3[6] = w6;
        o3[7] = w7;
        o3[8] = w8;
        o3[9] = w9;
        o3[10] = w10;
        o3[11] = w11;
        o3[12] = w12;
        o3[13] = w13;
        o3[14] = w14;
        o3[15] = w15;
        o3[16] = w16;
        o3[17] = w17;
        o3[18] = w18;
        if (c3 !== 0) {
          o3[19] = c3;
          out.length++;
        }
        return out;
      };
      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }
      function bigMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        out.length = self2.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for (var k3 = 0; k3 < out.length - 1; k3++) {
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 67108863;
          var maxJ = Math.min(k3, num.length - 1);
          for (var j3 = Math.max(0, k3 - self2.length + 1); j3 <= maxJ; j3++) {
            var i3 = k3 - j3;
            var a3 = self2.words[i3] | 0;
            var b3 = num.words[j3] | 0;
            var r4 = a3 * b3;
            var lo = r4 & 67108863;
            ncarry = ncarry + (r4 / 67108864 | 0) | 0;
            lo = lo + rword | 0;
            rword = lo & 67108863;
            ncarry = ncarry + (lo >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 67108863;
          }
          out.words[k3] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }
        if (carry !== 0) {
          out.words[k3] = carry;
        } else {
          out.length--;
        }
        return out._strip();
      }
      function jumboMulTo(self2, num, out) {
        return bigMulTo(self2, num, out);
      }
      BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }
        return res;
      };
      function FFTM(x3, y3) {
        this.x = x3;
        this.y = y3;
      }
      FFTM.prototype.makeRBT = function makeRBT(N2) {
        var t3 = new Array(N2);
        var l3 = BN.prototype._countBits(N2) - 1;
        for (var i3 = 0; i3 < N2; i3++) {
          t3[i3] = this.revBin(i3, l3, N2);
        }
        return t3;
      };
      FFTM.prototype.revBin = function revBin(x3, l3, N2) {
        if (x3 === 0 || x3 === N2 - 1)
          return x3;
        var rb = 0;
        for (var i3 = 0; i3 < l3; i3++) {
          rb |= (x3 & 1) << l3 - i3 - 1;
          x3 >>= 1;
        }
        return rb;
      };
      FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N2) {
        for (var i3 = 0; i3 < N2; i3++) {
          rtws[i3] = rws[rbt[i3]];
          itws[i3] = iws[rbt[i3]];
        }
      };
      FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N2, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N2);
        for (var s3 = 1; s3 < N2; s3 <<= 1) {
          var l3 = s3 << 1;
          var rtwdf = Math.cos(2 * Math.PI / l3);
          var itwdf = Math.sin(2 * Math.PI / l3);
          for (var p3 = 0; p3 < N2; p3 += l3) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;
            for (var j3 = 0; j3 < s3; j3++) {
              var re = rtws[p3 + j3];
              var ie = itws[p3 + j3];
              var ro = rtws[p3 + j3 + s3];
              var io = itws[p3 + j3 + s3];
              var rx = rtwdf_ * ro - itwdf_ * io;
              io = rtwdf_ * io + itwdf_ * ro;
              ro = rx;
              rtws[p3 + j3] = re + ro;
              itws[p3 + j3] = ie + io;
              rtws[p3 + j3 + s3] = re - ro;
              itws[p3 + j3 + s3] = ie - io;
              if (j3 !== l3) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      };
      FFTM.prototype.guessLen13b = function guessLen13b(n2, m3) {
        var N2 = Math.max(m3, n2) | 1;
        var odd = N2 & 1;
        var i3 = 0;
        for (N2 = N2 / 2 | 0; N2; N2 = N2 >>> 1) {
          i3++;
        }
        return 1 << i3 + 1 + odd;
      };
      FFTM.prototype.conjugate = function conjugate(rws, iws, N2) {
        if (N2 <= 1)
          return;
        for (var i3 = 0; i3 < N2 / 2; i3++) {
          var t3 = rws[i3];
          rws[i3] = rws[N2 - i3 - 1];
          rws[N2 - i3 - 1] = t3;
          t3 = iws[i3];
          iws[i3] = -iws[N2 - i3 - 1];
          iws[N2 - i3 - 1] = -t3;
        }
      };
      FFTM.prototype.normalize13b = function normalize13b(ws, N2) {
        var carry = 0;
        for (var i3 = 0; i3 < N2 / 2; i3++) {
          var w3 = Math.round(ws[2 * i3 + 1] / N2) * 8192 + Math.round(ws[2 * i3] / N2) + carry;
          ws[i3] = w3 & 67108863;
          if (w3 < 67108864) {
            carry = 0;
          } else {
            carry = w3 / 67108864 | 0;
          }
        }
        return ws;
      };
      FFTM.prototype.convert13b = function convert13b(ws, len, rws, N2) {
        var carry = 0;
        for (var i3 = 0; i3 < len; i3++) {
          carry = carry + (ws[i3] | 0);
          rws[2 * i3] = carry & 8191;
          carry = carry >>> 13;
          rws[2 * i3 + 1] = carry & 8191;
          carry = carry >>> 13;
        }
        for (i3 = 2 * len; i3 < N2; ++i3) {
          rws[i3] = 0;
        }
        assert2(carry === 0);
        assert2((carry & ~8191) === 0);
      };
      FFTM.prototype.stub = function stub(N2) {
        var ph = new Array(N2);
        for (var i3 = 0; i3 < N2; i3++) {
          ph[i3] = 0;
        }
        return ph;
      };
      FFTM.prototype.mulp = function mulp(x3, y3, out) {
        var N2 = 2 * this.guessLen13b(x3.length, y3.length);
        var rbt = this.makeRBT(N2);
        var _3 = this.stub(N2);
        var rws = new Array(N2);
        var rwst = new Array(N2);
        var iwst = new Array(N2);
        var nrws = new Array(N2);
        var nrwst = new Array(N2);
        var niwst = new Array(N2);
        var rmws = out.words;
        rmws.length = N2;
        this.convert13b(x3.words, x3.length, rws, N2);
        this.convert13b(y3.words, y3.length, nrws, N2);
        this.transform(rws, _3, rwst, iwst, N2, rbt);
        this.transform(nrws, _3, nrwst, niwst, N2, rbt);
        for (var i3 = 0; i3 < N2; i3++) {
          var rx = rwst[i3] * nrwst[i3] - iwst[i3] * niwst[i3];
          iwst[i3] = rwst[i3] * niwst[i3] + iwst[i3] * nrwst[i3];
          rwst[i3] = rx;
        }
        this.conjugate(rwst, iwst, N2);
        this.transform(rwst, iwst, rmws, _3, N2, rbt);
        this.conjugate(rmws, _3, N2);
        this.normalize13b(rmws, N2);
        out.negative = x3.negative ^ y3.negative;
        out.length = x3.length + y3.length;
        return out._strip();
      };
      BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      };
      BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      };
      BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };
      BN.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert2(typeof num === "number");
        assert2(num < 67108864);
        var carry = 0;
        for (var i3 = 0; i3 < this.length; i3++) {
          var w3 = (this.words[i3] | 0) * num;
          var lo = (w3 & 67108863) + (carry & 67108863);
          carry >>= 26;
          carry += w3 / 67108864 | 0;
          carry += lo >>> 26;
          this.words[i3] = lo & 67108863;
        }
        if (carry !== 0) {
          this.words[i3] = carry;
          this.length++;
        }
        return isNegNum ? this.ineg() : this;
      };
      BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      };
      BN.prototype.sqr = function sqr() {
        return this.mul(this);
      };
      BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      };
      BN.prototype.pow = function pow(num) {
        var w3 = toBitArray(num);
        if (w3.length === 0)
          return new BN(1);
        var res = this;
        for (var i3 = 0; i3 < w3.length; i3++, res = res.sqr()) {
          if (w3[i3] !== 0)
            break;
        }
        if (++i3 < w3.length) {
          for (var q3 = res.sqr(); i3 < w3.length; i3++, q3 = q3.sqr()) {
            if (w3[i3] === 0)
              continue;
            res = res.mul(q3);
          }
        }
        return res;
      };
      BN.prototype.iushln = function iushln(bits) {
        assert2(typeof bits === "number" && bits >= 0);
        var r4 = bits % 26;
        var s3 = (bits - r4) / 26;
        var carryMask = 67108863 >>> 26 - r4 << 26 - r4;
        var i3;
        if (r4 !== 0) {
          var carry = 0;
          for (i3 = 0; i3 < this.length; i3++) {
            var newCarry = this.words[i3] & carryMask;
            var c3 = (this.words[i3] | 0) - newCarry << r4;
            this.words[i3] = c3 | carry;
            carry = newCarry >>> 26 - r4;
          }
          if (carry) {
            this.words[i3] = carry;
            this.length++;
          }
        }
        if (s3 !== 0) {
          for (i3 = this.length - 1; i3 >= 0; i3--) {
            this.words[i3 + s3] = this.words[i3];
          }
          for (i3 = 0; i3 < s3; i3++) {
            this.words[i3] = 0;
          }
          this.length += s3;
        }
        return this._strip();
      };
      BN.prototype.ishln = function ishln(bits) {
        assert2(this.negative === 0);
        return this.iushln(bits);
      };
      BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert2(typeof bits === "number" && bits >= 0);
        var h3;
        if (hint) {
          h3 = (hint - hint % 26) / 26;
        } else {
          h3 = 0;
        }
        var r4 = bits % 26;
        var s3 = Math.min((bits - r4) / 26, this.length);
        var mask2 = 67108863 ^ 67108863 >>> r4 << r4;
        var maskedWords = extended;
        h3 -= s3;
        h3 = Math.max(0, h3);
        if (maskedWords) {
          for (var i3 = 0; i3 < s3; i3++) {
            maskedWords.words[i3] = this.words[i3];
          }
          maskedWords.length = s3;
        }
        if (s3 === 0) {
        } else if (this.length > s3) {
          this.length -= s3;
          for (i3 = 0; i3 < this.length; i3++) {
            this.words[i3] = this.words[i3 + s3];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var carry = 0;
        for (i3 = this.length - 1; i3 >= 0 && (carry !== 0 || i3 >= h3); i3--) {
          var word = this.words[i3] | 0;
          this.words[i3] = carry << 26 - r4 | word >>> r4;
          carry = word & mask2;
        }
        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this._strip();
      };
      BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        assert2(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      };
      BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };
      BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      };
      BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };
      BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      };
      BN.prototype.testn = function testn(bit) {
        assert2(typeof bit === "number" && bit >= 0);
        var r4 = bit % 26;
        var s3 = (bit - r4) / 26;
        var q3 = 1 << r4;
        if (this.length <= s3)
          return false;
        var w3 = this.words[s3];
        return !!(w3 & q3);
      };
      BN.prototype.imaskn = function imaskn(bits) {
        assert2(typeof bits === "number" && bits >= 0);
        var r4 = bits % 26;
        var s3 = (bits - r4) / 26;
        assert2(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s3) {
          return this;
        }
        if (r4 !== 0) {
          s3++;
        }
        this.length = Math.min(s3, this.length);
        if (r4 !== 0) {
          var mask2 = 67108863 ^ 67108863 >>> r4 << r4;
          this.words[this.length - 1] &= mask2;
        }
        return this._strip();
      };
      BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      };
      BN.prototype.iaddn = function iaddn(num) {
        assert2(typeof num === "number");
        assert2(num < 67108864);
        if (num < 0)
          return this.isubn(-num);
        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) <= num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }
          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        }
        return this._iaddn(num);
      };
      BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        for (var i3 = 0; i3 < this.length && this.words[i3] >= 67108864; i3++) {
          this.words[i3] -= 67108864;
          if (i3 === this.length - 1) {
            this.words[i3 + 1] = 1;
          } else {
            this.words[i3 + 1]++;
          }
        }
        this.length = Math.max(this.length, i3 + 1);
        return this;
      };
      BN.prototype.isubn = function isubn(num) {
        assert2(typeof num === "number");
        assert2(num < 67108864);
        if (num < 0)
          return this.iaddn(-num);
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var i3 = 0; i3 < this.length && this.words[i3] < 0; i3++) {
            this.words[i3] += 67108864;
            this.words[i3 + 1] -= 1;
          }
        }
        return this._strip();
      };
      BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };
      BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };
      BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };
      BN.prototype.abs = function abs() {
        return this.clone().iabs();
      };
      BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i3;
        this._expand(len);
        var w3;
        var carry = 0;
        for (i3 = 0; i3 < num.length; i3++) {
          w3 = (this.words[i3 + shift] | 0) + carry;
          var right = (num.words[i3] | 0) * mul;
          w3 -= right & 67108863;
          carry = (w3 >> 26) - (right / 67108864 | 0);
          this.words[i3 + shift] = w3 & 67108863;
        }
        for (; i3 < this.length - shift; i3++) {
          w3 = (this.words[i3 + shift] | 0) + carry;
          carry = w3 >> 26;
          this.words[i3 + shift] = w3 & 67108863;
        }
        if (carry === 0)
          return this._strip();
        assert2(carry === -1);
        carry = 0;
        for (i3 = 0; i3 < this.length; i3++) {
          w3 = -(this.words[i3] | 0) + carry;
          carry = w3 >> 26;
          this.words[i3] = w3 & 67108863;
        }
        this.negative = 1;
        return this._strip();
      };
      BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a3 = this.clone();
        var b3 = num;
        var bhi = b3.words[b3.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
          b3 = b3.ushln(shift);
          a3.iushln(shift);
          bhi = b3.words[b3.length - 1] | 0;
        }
        var m3 = a3.length - b3.length;
        var q3;
        if (mode !== "mod") {
          q3 = new BN(null);
          q3.length = m3 + 1;
          q3.words = new Array(q3.length);
          for (var i3 = 0; i3 < q3.length; i3++) {
            q3.words[i3] = 0;
          }
        }
        var diff = a3.clone()._ishlnsubmul(b3, 1, m3);
        if (diff.negative === 0) {
          a3 = diff;
          if (q3) {
            q3.words[m3] = 1;
          }
        }
        for (var j3 = m3 - 1; j3 >= 0; j3--) {
          var qj = (a3.words[b3.length + j3] | 0) * 67108864 + (a3.words[b3.length + j3 - 1] | 0);
          qj = Math.min(qj / bhi | 0, 67108863);
          a3._ishlnsubmul(b3, qj, j3);
          while (a3.negative !== 0) {
            qj--;
            a3.negative = 0;
            a3._ishlnsubmul(b3, 1, j3);
            if (!a3.isZero()) {
              a3.negative ^= 1;
            }
          }
          if (q3) {
            q3.words[j3] = qj;
          }
        }
        if (q3) {
          q3._strip();
        }
        a3._strip();
        if (mode !== "div" && shift !== 0) {
          a3.iushrn(shift);
        }
        return {
          div: q3 || null,
          mod: a3
        };
      };
      BN.prototype.divmod = function divmod(num, mode, positive) {
        assert2(!num.isZero());
        if (this.isZero()) {
          return {
            div: new BN(0),
            mod: new BN(0)
          };
        }
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.iadd(num);
            }
          }
          return {
            div,
            mod
          };
        }
        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          return {
            div,
            mod: res.mod
          };
        }
        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.isub(num);
            }
          }
          return {
            div: res.div,
            mod
          };
        }
        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN(0),
            mod: this
          };
        }
        if (num.length === 1) {
          if (mode === "div") {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }
          if (mode === "mod") {
            return {
              div: null,
              mod: new BN(this.modrn(num.words[0]))
            };
          }
          return {
            div: this.divn(num.words[0]),
            mod: new BN(this.modrn(num.words[0]))
          };
        }
        return this._wordDiv(num, mode);
      };
      BN.prototype.div = function div(num) {
        return this.divmod(num, "div", false).div;
      };
      BN.prototype.mod = function mod(num) {
        return this.divmod(num, "mod", false).mod;
      };
      BN.prototype.umod = function umod(num) {
        return this.divmod(num, "mod", true).mod;
      };
      BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        if (dm.mod.isZero())
          return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r22 = num.andln(1);
        var cmp = mod.cmp(half);
        if (cmp < 0 || r22 === 1 && cmp === 0)
          return dm.div;
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };
      BN.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert2(num <= 67108863);
        var p3 = (1 << 26) % num;
        var acc = 0;
        for (var i3 = this.length - 1; i3 >= 0; i3--) {
          acc = (p3 * acc + (this.words[i3] | 0)) % num;
        }
        return isNegNum ? -acc : acc;
      };
      BN.prototype.modn = function modn(num) {
        return this.modrn(num);
      };
      BN.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert2(num <= 67108863);
        var carry = 0;
        for (var i3 = this.length - 1; i3 >= 0; i3--) {
          var w3 = (this.words[i3] | 0) + carry * 67108864;
          this.words[i3] = w3 / num | 0;
          carry = w3 % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
      };
      BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };
      BN.prototype.egcd = function egcd(p3) {
        assert2(p3.negative === 0);
        assert2(!p3.isZero());
        var x3 = this;
        var y3 = p3.clone();
        if (x3.negative !== 0) {
          x3 = x3.umod(p3);
        } else {
          x3 = x3.clone();
        }
        var A3 = new BN(1);
        var B3 = new BN(0);
        var C3 = new BN(0);
        var D3 = new BN(1);
        var g3 = 0;
        while (x3.isEven() && y3.isEven()) {
          x3.iushrn(1);
          y3.iushrn(1);
          ++g3;
        }
        var yp = y3.clone();
        var xp = x3.clone();
        while (!x3.isZero()) {
          for (var i3 = 0, im = 1; (x3.words[0] & im) === 0 && i3 < 26; ++i3, im <<= 1)
            ;
          if (i3 > 0) {
            x3.iushrn(i3);
            while (i3-- > 0) {
              if (A3.isOdd() || B3.isOdd()) {
                A3.iadd(yp);
                B3.isub(xp);
              }
              A3.iushrn(1);
              B3.iushrn(1);
            }
          }
          for (var j3 = 0, jm = 1; (y3.words[0] & jm) === 0 && j3 < 26; ++j3, jm <<= 1)
            ;
          if (j3 > 0) {
            y3.iushrn(j3);
            while (j3-- > 0) {
              if (C3.isOdd() || D3.isOdd()) {
                C3.iadd(yp);
                D3.isub(xp);
              }
              C3.iushrn(1);
              D3.iushrn(1);
            }
          }
          if (x3.cmp(y3) >= 0) {
            x3.isub(y3);
            A3.isub(C3);
            B3.isub(D3);
          } else {
            y3.isub(x3);
            C3.isub(A3);
            D3.isub(B3);
          }
        }
        return {
          a: C3,
          b: D3,
          gcd: y3.iushln(g3)
        };
      };
      BN.prototype._invmp = function _invmp(p3) {
        assert2(p3.negative === 0);
        assert2(!p3.isZero());
        var a3 = this;
        var b3 = p3.clone();
        if (a3.negative !== 0) {
          a3 = a3.umod(p3);
        } else {
          a3 = a3.clone();
        }
        var x1 = new BN(1);
        var x22 = new BN(0);
        var delta = b3.clone();
        while (a3.cmpn(1) > 0 && b3.cmpn(1) > 0) {
          for (var i3 = 0, im = 1; (a3.words[0] & im) === 0 && i3 < 26; ++i3, im <<= 1)
            ;
          if (i3 > 0) {
            a3.iushrn(i3);
            while (i3-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }
              x1.iushrn(1);
            }
          }
          for (var j3 = 0, jm = 1; (b3.words[0] & jm) === 0 && j3 < 26; ++j3, jm <<= 1)
            ;
          if (j3 > 0) {
            b3.iushrn(j3);
            while (j3-- > 0) {
              if (x22.isOdd()) {
                x22.iadd(delta);
              }
              x22.iushrn(1);
            }
          }
          if (a3.cmp(b3) >= 0) {
            a3.isub(b3);
            x1.isub(x22);
          } else {
            b3.isub(a3);
            x22.isub(x1);
          }
        }
        var res;
        if (a3.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x22;
        }
        if (res.cmpn(0) < 0) {
          res.iadd(p3);
        }
        return res;
      };
      BN.prototype.gcd = function gcd(num) {
        if (this.isZero())
          return num.abs();
        if (num.isZero())
          return this.abs();
        var a3 = this.clone();
        var b3 = num.clone();
        a3.negative = 0;
        b3.negative = 0;
        for (var shift = 0; a3.isEven() && b3.isEven(); shift++) {
          a3.iushrn(1);
          b3.iushrn(1);
        }
        do {
          while (a3.isEven()) {
            a3.iushrn(1);
          }
          while (b3.isEven()) {
            b3.iushrn(1);
          }
          var r4 = a3.cmp(b3);
          if (r4 < 0) {
            var t3 = a3;
            a3 = b3;
            b3 = t3;
          } else if (r4 === 0 || b3.cmpn(1) === 0) {
            break;
          }
          a3.isub(b3);
        } while (true);
        return b3.iushln(shift);
      };
      BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };
      BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };
      BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      };
      BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
      };
      BN.prototype.bincn = function bincn(bit) {
        assert2(typeof bit === "number");
        var r4 = bit % 26;
        var s3 = (bit - r4) / 26;
        var q3 = 1 << r4;
        if (this.length <= s3) {
          this._expand(s3 + 1);
          this.words[s3] |= q3;
          return this;
        }
        var carry = q3;
        for (var i3 = s3; carry !== 0 && i3 < this.length; i3++) {
          var w3 = this.words[i3] | 0;
          w3 += carry;
          carry = w3 >>> 26;
          w3 &= 67108863;
          this.words[i3] = w3;
        }
        if (carry !== 0) {
          this.words[i3] = carry;
          this.length++;
        }
        return this;
      };
      BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };
      BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative)
          return -1;
        if (this.negative === 0 && negative)
          return 1;
        this._strip();
        var res;
        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }
          assert2(num <= 67108863, "Number is too big");
          var w3 = this.words[0] | 0;
          res = w3 === num ? 0 : w3 < num ? -1 : 1;
        }
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0)
          return -1;
        if (this.negative === 0 && num.negative !== 0)
          return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN.prototype.ucmp = function ucmp(num) {
        if (this.length > num.length)
          return 1;
        if (this.length < num.length)
          return -1;
        var res = 0;
        for (var i3 = this.length - 1; i3 >= 0; i3--) {
          var a3 = this.words[i3] | 0;
          var b3 = num.words[i3] | 0;
          if (a3 === b3)
            continue;
          if (a3 < b3) {
            res = -1;
          } else if (a3 > b3) {
            res = 1;
          }
          break;
        }
        return res;
      };
      BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };
      BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
      };
      BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };
      BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };
      BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };
      BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
      };
      BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };
      BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };
      BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };
      BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      };
      BN.red = function red(num) {
        return new Red(num);
      };
      BN.prototype.toRed = function toRed(ctx) {
        assert2(!this.red, "Already a number in reduction context");
        assert2(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
      };
      BN.prototype.fromRed = function fromRed() {
        assert2(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };
      BN.prototype.forceRed = function forceRed(ctx) {
        assert2(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
      };
      BN.prototype.redAdd = function redAdd(num) {
        assert2(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
      };
      BN.prototype.redIAdd = function redIAdd(num) {
        assert2(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
      };
      BN.prototype.redSub = function redSub(num) {
        assert2(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
      };
      BN.prototype.redISub = function redISub(num) {
        assert2(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
      };
      BN.prototype.redShl = function redShl(num) {
        assert2(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
      };
      BN.prototype.redMul = function redMul(num) {
        assert2(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
      };
      BN.prototype.redIMul = function redIMul(num) {
        assert2(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
      };
      BN.prototype.redSqr = function redSqr() {
        assert2(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      BN.prototype.redISqr = function redISqr() {
        assert2(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      BN.prototype.redSqrt = function redSqrt() {
        assert2(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      BN.prototype.redInvm = function redInvm() {
        assert2(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      BN.prototype.redNeg = function redNeg() {
        assert2(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      BN.prototype.redPow = function redPow(num) {
        assert2(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
      };
      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function MPrime(name, p3) {
        this.name = name;
        this.p = new BN(p3, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };
      MPrime.prototype.ireduce = function ireduce(num) {
        var r4 = num;
        var rlen;
        do {
          this.split(r4, this.tmp);
          r4 = this.imulK(r4);
          r4 = r4.iadd(this.tmp);
          rlen = r4.bitLength();
        } while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r4.ucmp(this.p);
        if (cmp === 0) {
          r4.words[0] = 0;
          r4.length = 1;
        } else if (cmp > 0) {
          r4.isub(this.p);
        } else {
          if (r4.strip !== void 0) {
            r4.strip();
          } else {
            r4._strip();
          }
        }
        return r4;
      };
      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };
      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };
      function K256() {
        MPrime.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      inherits(K256, MPrime);
      K256.prototype.split = function split(input, output) {
        var mask2 = 4194303;
        var outLen = Math.min(input.length, 9);
        for (var i3 = 0; i3 < outLen; i3++) {
          output.words[i3] = input.words[i3];
        }
        output.length = outLen;
        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        }
        var prev = input.words[9];
        output.words[output.length++] = prev & mask2;
        for (i3 = 10; i3 < input.length; i3++) {
          var next = input.words[i3] | 0;
          input.words[i3 - 10] = (next & mask2) << 4 | prev >>> 22;
          prev = next;
        }
        prev >>>= 22;
        input.words[i3 - 10] = prev;
        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };
      K256.prototype.imulK = function imulK(num) {
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        var lo = 0;
        for (var i3 = 0; i3 < num.length; i3++) {
          var w3 = num.words[i3] | 0;
          lo += w3 * 977;
          num.words[i3] = lo & 67108863;
          lo = w3 * 64 + (lo / 67108864 | 0);
        }
        if (num.words[num.length - 1] === 0) {
          num.length--;
          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }
        return num;
      };
      function P224() {
        MPrime.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      inherits(P224, MPrime);
      function P192() {
        MPrime.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      inherits(P192, MPrime);
      function P25519() {
        MPrime.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      inherits(P25519, MPrime);
      P25519.prototype.imulK = function imulK(num) {
        var carry = 0;
        for (var i3 = 0; i3 < num.length; i3++) {
          var hi = (num.words[i3] | 0) * 19 + carry;
          var lo = hi & 67108863;
          hi >>>= 26;
          num.words[i3] = lo;
          carry = hi;
        }
        if (carry !== 0) {
          num.words[num.length++] = carry;
        }
        return num;
      };
      BN._prime = function prime(name) {
        if (primes[name])
          return primes[name];
        var prime2;
        if (name === "k256") {
          prime2 = new K256();
        } else if (name === "p224") {
          prime2 = new P224();
        } else if (name === "p192") {
          prime2 = new P192();
        } else if (name === "p25519") {
          prime2 = new P25519();
        } else {
          throw new Error("Unknown prime " + name);
        }
        primes[name] = prime2;
        return prime2;
      };
      function Red(m3) {
        if (typeof m3 === "string") {
          var prime = BN._prime(m3);
          this.m = prime.p;
          this.prime = prime;
        } else {
          assert2(m3.gtn(1), "modulus must be greater than 1");
          this.m = m3;
          this.prime = null;
        }
      }
      Red.prototype._verify1 = function _verify1(a3) {
        assert2(a3.negative === 0, "red works only with positives");
        assert2(a3.red, "red works only with red numbers");
      };
      Red.prototype._verify2 = function _verify2(a3, b3) {
        assert2((a3.negative | b3.negative) === 0, "red works only with positives");
        assert2(
          a3.red && a3.red === b3.red,
          "red works only with red numbers"
        );
      };
      Red.prototype.imod = function imod(a3) {
        if (this.prime)
          return this.prime.ireduce(a3)._forceRed(this);
        move(a3, a3.umod(this.m)._forceRed(this));
        return a3;
      };
      Red.prototype.neg = function neg(a3) {
        if (a3.isZero()) {
          return a3.clone();
        }
        return this.m.sub(a3)._forceRed(this);
      };
      Red.prototype.add = function add(a3, b3) {
        this._verify2(a3, b3);
        var res = a3.add(b3);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.iadd = function iadd(a3, b3) {
        this._verify2(a3, b3);
        var res = a3.iadd(b3);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res;
      };
      Red.prototype.sub = function sub(a3, b3) {
        this._verify2(a3, b3);
        var res = a3.sub(b3);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.isub = function isub(a3, b3) {
        this._verify2(a3, b3);
        var res = a3.isub(b3);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res;
      };
      Red.prototype.shl = function shl(a3, num) {
        this._verify1(a3);
        return this.imod(a3.ushln(num));
      };
      Red.prototype.imul = function imul(a3, b3) {
        this._verify2(a3, b3);
        return this.imod(a3.imul(b3));
      };
      Red.prototype.mul = function mul(a3, b3) {
        this._verify2(a3, b3);
        return this.imod(a3.mul(b3));
      };
      Red.prototype.isqr = function isqr(a3) {
        return this.imul(a3, a3.clone());
      };
      Red.prototype.sqr = function sqr(a3) {
        return this.mul(a3, a3);
      };
      Red.prototype.sqrt = function sqrt(a3) {
        if (a3.isZero())
          return a3.clone();
        var mod3 = this.m.andln(3);
        assert2(mod3 % 2 === 1);
        if (mod3 === 3) {
          var pow = this.m.add(new BN(1)).iushrn(2);
          return this.pow(a3, pow);
        }
        var q3 = this.m.subn(1);
        var s3 = 0;
        while (!q3.isZero() && q3.andln(1) === 0) {
          s3++;
          q3.iushrn(1);
        }
        assert2(!q3.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        var lpow = this.m.subn(1).iushrn(1);
        var z3 = this.m.bitLength();
        z3 = new BN(2 * z3 * z3).toRed(this);
        while (this.pow(z3, lpow).cmp(nOne) !== 0) {
          z3.redIAdd(nOne);
        }
        var c3 = this.pow(z3, q3);
        var r4 = this.pow(a3, q3.addn(1).iushrn(1));
        var t3 = this.pow(a3, q3);
        var m3 = s3;
        while (t3.cmp(one) !== 0) {
          var tmp = t3;
          for (var i3 = 0; tmp.cmp(one) !== 0; i3++) {
            tmp = tmp.redSqr();
          }
          assert2(i3 < m3);
          var b3 = this.pow(c3, new BN(1).iushln(m3 - i3 - 1));
          r4 = r4.redMul(b3);
          c3 = b3.redSqr();
          t3 = t3.redMul(c3);
          m3 = i3;
        }
        return r4;
      };
      Red.prototype.invm = function invm(a3) {
        var inv = a3._invmp(this.m);
        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };
      Red.prototype.pow = function pow(a3, num) {
        if (num.isZero())
          return new BN(1).toRed(this);
        if (num.cmpn(1) === 0)
          return a3.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a3;
        for (var i3 = 2; i3 < wnd.length; i3++) {
          wnd[i3] = this.mul(wnd[i3 - 1], a3);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
          start = 26;
        }
        for (i3 = num.length - 1; i3 >= 0; i3--) {
          var word = num.words[i3];
          for (var j3 = start - 1; j3 >= 0; j3--) {
            var bit = word >> j3 & 1;
            if (res !== wnd[0]) {
              res = this.sqr(res);
            }
            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }
            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i3 !== 0 || j3 !== 0))
              continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }
          start = 26;
        }
        return res;
      };
      Red.prototype.convertTo = function convertTo(num) {
        var r4 = num.umod(this.m);
        return r4 === num ? r4.clone() : r4;
      };
      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      };
      BN.mont = function mont(num) {
        return new Mont(num);
      };
      function Mont(m3) {
        Red.call(this, m3);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      inherits(Mont, Red);
      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };
      Mont.prototype.convertFrom = function convertFrom(num) {
        var r4 = this.imod(num.mul(this.rinv));
        r4.red = null;
        return r4;
      };
      Mont.prototype.imul = function imul(a3, b3) {
        if (a3.isZero() || b3.isZero()) {
          a3.words[0] = 0;
          a3.length = 1;
          return a3;
        }
        var t3 = a3.imul(b3);
        var c3 = t3.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u3 = t3.isub(c3).iushrn(this.shift);
        var res = u3;
        if (u3.cmp(this.m) >= 0) {
          res = u3.isub(this.m);
        } else if (u3.cmpn(0) < 0) {
          res = u3.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.mul = function mul(a3, b3) {
        if (a3.isZero() || b3.isZero())
          return new BN(0)._forceRed(this);
        var t3 = a3.mul(b3);
        var c3 = t3.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u3 = t3.isub(c3).iushrn(this.shift);
        var res = u3;
        if (u3.cmp(this.m) >= 0) {
          res = u3.isub(this.m);
        } else if (u3.cmpn(0) < 0) {
          res = u3.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.invm = function invm(a3) {
        var res = this.imod(a3._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })(typeof module === "undefined" || module, exports);
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/constants.js
var require_constants2 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorValues = exports.standardErrorCodes = void 0;
    exports.standardErrorCodes = {
      rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
      },
      provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
        unsupportedChain: 4902
      }
    };
    exports.errorValues = {
      "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
      },
      "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
      },
      "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
      },
      "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
      },
      "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
      },
      "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
      },
      "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
      },
      "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
      },
      "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
      },
      "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
      },
      "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
      },
      "4001": {
        standard: "EIP-1193",
        message: "User rejected the request."
      },
      "4100": {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
      },
      "4200": {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
      },
      "4900": {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
      },
      "4901": {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
      },
      "4902": {
        standard: "EIP-3085",
        message: "Unrecognized chain ID."
      }
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/utils.js
var require_utils = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serialize = exports.getErrorCode = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    var constants_1 = require_constants2();
    var FALLBACK_MESSAGE = "Unspecified error message.";
    exports.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
      if (code && Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(constants_1.errorValues, codeString)) {
          return constants_1.errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
          return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
      }
      return fallbackMessage;
    }
    exports.getMessageFromCode = getMessageFromCode;
    function isValidCode(code) {
      if (!Number.isInteger(code)) {
        return false;
      }
      const codeString = code.toString();
      if (constants_1.errorValues[codeString]) {
        return true;
      }
      if (isJsonRpcServerError(code)) {
        return true;
      }
      return false;
    }
    exports.isValidCode = isValidCode;
    function getErrorCode(error) {
      var _a;
      if (typeof error === "number") {
        return error;
      } else if (isErrorWithCode(error)) {
        return (_a = error.code) !== null && _a !== void 0 ? _a : error.errorCode;
      }
      return void 0;
    }
    exports.getErrorCode = getErrorCode;
    function isErrorWithCode(error) {
      return typeof error === "object" && error !== null && (typeof error.code === "number" || typeof error.errorCode === "number");
    }
    function serialize(error, { shouldIncludeStack = false } = {}) {
      const serialized = {};
      if (error && typeof error === "object" && !Array.isArray(error) && hasKey(error, "code") && isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === "string") {
          serialized.message = _error.message;
          if (hasKey(_error, "data")) {
            serialized.data = _error.data;
          }
        } else {
          serialized.message = getMessageFromCode(serialized.code);
          serialized.data = { originalError: assignOriginalError(error) };
        }
      } else {
        serialized.code = constants_1.standardErrorCodes.rpc.internal;
        serialized.message = hasStringProperty(error, "message") ? error.message : FALLBACK_MESSAGE;
        serialized.data = { originalError: assignOriginalError(error) };
      }
      if (shouldIncludeStack) {
        serialized.stack = hasStringProperty(error, "stack") ? error.stack : void 0;
      }
      return serialized;
    }
    exports.serialize = serialize;
    function isJsonRpcServerError(code) {
      return code >= -32099 && code <= -32e3;
    }
    function assignOriginalError(error) {
      if (error && typeof error === "object" && !Array.isArray(error)) {
        return Object.assign({}, error);
      }
      return error;
    }
    function hasKey(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    function hasStringProperty(obj, prop) {
      return typeof obj === "object" && obj !== null && prop in obj && typeof obj[prop] === "string";
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/errors.js
var require_errors = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.standardErrors = void 0;
    var constants_1 = require_constants2();
    var utils_1 = require_utils();
    exports.standardErrors = {
      rpc: {
        parse: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.parse, arg),
        invalidRequest: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidRequest, arg),
        invalidParams: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidParams, arg),
        methodNotFound: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.methodNotFound, arg),
        internal: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.internal, arg),
        server: (opts) => {
          if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
            throw new Error("Ethereum RPC Server errors must provide single object argument.");
          }
          const { code } = opts;
          if (!Number.isInteger(code) || code > -32005 || code < -32099) {
            throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
          }
          return getEthJsonRpcError(code, opts);
        },
        invalidInput: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidInput, arg),
        resourceNotFound: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.resourceNotFound, arg),
        resourceUnavailable: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.resourceUnavailable, arg),
        transactionRejected: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.transactionRejected, arg),
        methodNotSupported: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.methodNotSupported, arg),
        limitExceeded: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.limitExceeded, arg)
      },
      provider: {
        userRejectedRequest: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.userRejectedRequest, arg);
        },
        unauthorized: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.unauthorized, arg);
        },
        unsupportedMethod: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.unsupportedMethod, arg);
        },
        disconnected: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.disconnected, arg);
        },
        chainDisconnected: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.chainDisconnected, arg);
        },
        unsupportedChain: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.unsupportedChain, arg);
        },
        custom: (opts) => {
          if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
            throw new Error("Ethereum Provider custom errors must provide single object argument.");
          }
          const { code, message, data } = opts;
          if (!message || typeof message !== "string") {
            throw new Error('"message" must be a nonempty string');
          }
          return new EthereumProviderError(code, message, data);
        }
      }
    };
    function getEthJsonRpcError(code, arg) {
      const [message, data] = parseOpts(arg);
      return new EthereumRpcError(code, message || (0, utils_1.getMessageFromCode)(code), data);
    }
    function getEthProviderError(code, arg) {
      const [message, data] = parseOpts(arg);
      return new EthereumProviderError(code, message || (0, utils_1.getMessageFromCode)(code), data);
    }
    function parseOpts(arg) {
      if (arg) {
        if (typeof arg === "string") {
          return [arg];
        } else if (typeof arg === "object" && !Array.isArray(arg)) {
          const { message, data } = arg;
          if (message && typeof message !== "string") {
            throw new Error("Must specify string message.");
          }
          return [message || void 0, data];
        }
      }
      return [];
    }
    var EthereumRpcError = class extends Error {
      constructor(code, message, data) {
        if (!Number.isInteger(code)) {
          throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== "string") {
          throw new Error('"message" must be a nonempty string.');
        }
        super(message);
        this.code = code;
        if (data !== void 0) {
          this.data = data;
        }
      }
    };
    var EthereumProviderError = class extends EthereumRpcError {
      /**
       * Create an Ethereum Provider JSON-RPC error.
       * `code` must be an integer in the 1000 <= 4999 range.
       */
      constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
          throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
      }
    };
    function isValidEthProviderCode(code) {
      return Number.isInteger(code) && code >= 1e3 && code <= 4999;
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/type/Web3Response.js
var require_Web3Response = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/type/Web3Response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isErrorResponse = void 0;
    function isErrorResponse(response) {
      return response.errorMessage !== void 0;
    }
    exports.isErrorResponse = isErrorResponse;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/version.js
var require_version = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LIB_VERSION = void 0;
    exports.LIB_VERSION = "3.9.1";
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/serialize.js
var require_serialize = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/serialize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeError = void 0;
    var Web3Response_1 = require_Web3Response();
    var version_1 = require_version();
    var constants_1 = require_constants2();
    var utils_1 = require_utils();
    function serializeError(error, requestOrMethod) {
      const serialized = (0, utils_1.serialize)(getErrorObject(error), {
        shouldIncludeStack: true
      });
      const docUrl = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
      docUrl.searchParams.set("version", version_1.LIB_VERSION);
      docUrl.searchParams.set("code", serialized.code.toString());
      const method = getMethod(serialized.data, requestOrMethod);
      if (method) {
        docUrl.searchParams.set("method", method);
      }
      docUrl.searchParams.set("message", serialized.message);
      return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
    }
    exports.serializeError = serializeError;
    function getErrorObject(error) {
      if (typeof error === "string") {
        return {
          message: error,
          code: constants_1.standardErrorCodes.rpc.internal
        };
      } else if ((0, Web3Response_1.isErrorResponse)(error)) {
        return Object.assign(Object.assign({}, error), { message: error.errorMessage, code: error.errorCode, data: { method: error.method } });
      }
      return error;
    }
    function getMethod(serializedData, request) {
      const methodInData = serializedData === null || serializedData === void 0 ? void 0 : serializedData.method;
      if (methodInData) {
        return methodInData;
      }
      if (request === void 0) {
        return void 0;
      } else if (typeof request === "string") {
        return request;
      } else if (!Array.isArray(request)) {
        return request.method;
      } else if (request.length > 0) {
        return request[0].method;
      }
      return void 0;
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/index.js
var require_error = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.standardErrors = exports.standardErrorCodes = exports.serializeError = exports.getMessageFromCode = exports.getErrorCode = void 0;
    var constants_1 = require_constants2();
    Object.defineProperty(exports, "standardErrorCodes", { enumerable: true, get: function() {
      return constants_1.standardErrorCodes;
    } });
    var errors_1 = require_errors();
    Object.defineProperty(exports, "standardErrors", { enumerable: true, get: function() {
      return errors_1.standardErrors;
    } });
    var serialize_1 = require_serialize();
    Object.defineProperty(exports, "serializeError", { enumerable: true, get: function() {
      return serialize_1.serializeError;
    } });
    var utils_1 = require_utils();
    Object.defineProperty(exports, "getErrorCode", { enumerable: true, get: function() {
      return utils_1.getErrorCode;
    } });
    Object.defineProperty(exports, "getMessageFromCode", { enumerable: true, get: function() {
      return utils_1.getMessageFromCode;
    } });
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/type.js
var require_type = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProviderType = exports.RegExpString = exports.IntNumber = exports.BigIntString = exports.AddressString = exports.HexString = exports.OpaqueType = void 0;
    function OpaqueType() {
      return (value) => value;
    }
    exports.OpaqueType = OpaqueType;
    exports.HexString = OpaqueType();
    exports.AddressString = OpaqueType();
    exports.BigIntString = OpaqueType();
    function IntNumber(num) {
      return Math.floor(num);
    }
    exports.IntNumber = IntNumber;
    exports.RegExpString = OpaqueType();
    var ProviderType;
    (function(ProviderType2) {
      ProviderType2["CoinbaseWallet"] = "CoinbaseWallet";
      ProviderType2["MetaMask"] = "MetaMask";
      ProviderType2["Unselected"] = "";
    })(ProviderType || (exports.ProviderType = ProviderType = {}));
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/util.js
var require_util = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/util.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isMobileWeb = exports.getLocation = exports.isInIFrame = exports.createQrUrl = exports.getFavicon = exports.range = exports.isBigNumber = exports.ensureParsedJSONObject = exports.ensureBN = exports.ensureRegExpString = exports.ensureIntNumber = exports.ensureBuffer = exports.ensureAddressString = exports.ensureEvenLengthHexString = exports.ensureHexString = exports.isHexString = exports.prepend0x = exports.strip0x = exports.has0xPrefix = exports.hexStringFromIntNumber = exports.intNumberFromHexString = exports.bigIntStringFromBN = exports.hexStringFromBuffer = exports.hexStringToUint8Array = exports.uint8ArrayToHex = exports.randomBytesHex = void 0;
    var bn_js_1 = __importDefault2(require_bn());
    var error_1 = require_error();
    var type_1 = require_type();
    var INT_STRING_REGEX = /^[0-9]*$/;
    var HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
    function randomBytesHex(length) {
      return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
    }
    exports.randomBytesHex = randomBytesHex;
    function uint8ArrayToHex(value) {
      return [...value].map((b3) => b3.toString(16).padStart(2, "0")).join("");
    }
    exports.uint8ArrayToHex = uint8ArrayToHex;
    function hexStringToUint8Array(hexString) {
      return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
    }
    exports.hexStringToUint8Array = hexStringToUint8Array;
    function hexStringFromBuffer(buf, includePrefix = false) {
      const hex = buf.toString("hex");
      return (0, type_1.HexString)(includePrefix ? `0x${hex}` : hex);
    }
    exports.hexStringFromBuffer = hexStringFromBuffer;
    function bigIntStringFromBN(bn) {
      return (0, type_1.BigIntString)(bn.toString(10));
    }
    exports.bigIntStringFromBN = bigIntStringFromBN;
    function intNumberFromHexString(hex) {
      return (0, type_1.IntNumber)(new bn_js_1.default(ensureEvenLengthHexString(hex, false), 16).toNumber());
    }
    exports.intNumberFromHexString = intNumberFromHexString;
    function hexStringFromIntNumber(num) {
      return (0, type_1.HexString)(`0x${new bn_js_1.default(num).toString(16)}`);
    }
    exports.hexStringFromIntNumber = hexStringFromIntNumber;
    function has0xPrefix(str) {
      return str.startsWith("0x") || str.startsWith("0X");
    }
    exports.has0xPrefix = has0xPrefix;
    function strip0x(hex) {
      if (has0xPrefix(hex)) {
        return hex.slice(2);
      }
      return hex;
    }
    exports.strip0x = strip0x;
    function prepend0x(hex) {
      if (has0xPrefix(hex)) {
        return `0x${hex.slice(2)}`;
      }
      return `0x${hex}`;
    }
    exports.prepend0x = prepend0x;
    function isHexString(hex) {
      if (typeof hex !== "string") {
        return false;
      }
      const s3 = strip0x(hex).toLowerCase();
      return HEXADECIMAL_STRING_REGEX.test(s3);
    }
    exports.isHexString = isHexString;
    function ensureHexString(hex, includePrefix = false) {
      if (typeof hex === "string") {
        const s3 = strip0x(hex).toLowerCase();
        if (HEXADECIMAL_STRING_REGEX.test(s3)) {
          return (0, type_1.HexString)(includePrefix ? `0x${s3}` : s3);
        }
      }
      throw error_1.standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
    }
    exports.ensureHexString = ensureHexString;
    function ensureEvenLengthHexString(hex, includePrefix = false) {
      let h3 = ensureHexString(hex, false);
      if (h3.length % 2 === 1) {
        h3 = (0, type_1.HexString)(`0${h3}`);
      }
      return includePrefix ? (0, type_1.HexString)(`0x${h3}`) : h3;
    }
    exports.ensureEvenLengthHexString = ensureEvenLengthHexString;
    function ensureAddressString(str) {
      if (typeof str === "string") {
        const s3 = strip0x(str).toLowerCase();
        if (isHexString(s3) && s3.length === 40) {
          return (0, type_1.AddressString)(prepend0x(s3));
        }
      }
      throw error_1.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
    }
    exports.ensureAddressString = ensureAddressString;
    function ensureBuffer(str) {
      if (Buffer.isBuffer(str)) {
        return str;
      }
      if (typeof str === "string") {
        if (isHexString(str)) {
          const s3 = ensureEvenLengthHexString(str, false);
          return Buffer.from(s3, "hex");
        }
        return Buffer.from(str, "utf8");
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
    }
    exports.ensureBuffer = ensureBuffer;
    function ensureIntNumber(num) {
      if (typeof num === "number" && Number.isInteger(num)) {
        return (0, type_1.IntNumber)(num);
      }
      if (typeof num === "string") {
        if (INT_STRING_REGEX.test(num)) {
          return (0, type_1.IntNumber)(Number(num));
        }
        if (isHexString(num)) {
          return (0, type_1.IntNumber)(new bn_js_1.default(ensureEvenLengthHexString(num, false), 16).toNumber());
        }
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
    }
    exports.ensureIntNumber = ensureIntNumber;
    function ensureRegExpString(regExp) {
      if (regExp instanceof RegExp) {
        return (0, type_1.RegExpString)(regExp.toString());
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(regExp)}`);
    }
    exports.ensureRegExpString = ensureRegExpString;
    function ensureBN(val) {
      if (val !== null && (bn_js_1.default.isBN(val) || isBigNumber(val))) {
        return new bn_js_1.default(val.toString(10), 10);
      }
      if (typeof val === "number") {
        return new bn_js_1.default(ensureIntNumber(val));
      }
      if (typeof val === "string") {
        if (INT_STRING_REGEX.test(val)) {
          return new bn_js_1.default(val, 10);
        }
        if (isHexString(val)) {
          return new bn_js_1.default(ensureEvenLengthHexString(val, false), 16);
        }
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
    }
    exports.ensureBN = ensureBN;
    function ensureParsedJSONObject(val) {
      if (typeof val === "string") {
        return JSON.parse(val);
      }
      if (typeof val === "object") {
        return val;
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
    }
    exports.ensureParsedJSONObject = ensureParsedJSONObject;
    function isBigNumber(val) {
      if (val == null || typeof val.constructor !== "function") {
        return false;
      }
      const { constructor } = val;
      return typeof constructor.config === "function" && typeof constructor.EUCLID === "number";
    }
    exports.isBigNumber = isBigNumber;
    function range(start, stop) {
      return Array.from({ length: stop - start }, (_3, i3) => start + i3);
    }
    exports.range = range;
    function getFavicon() {
      const el = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
      const { protocol, host } = document.location;
      const href = el ? el.getAttribute("href") : null;
      if (!href || href.startsWith("javascript:") || href.startsWith("vbscript:")) {
        return null;
      }
      if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("data:")) {
        return href;
      }
      if (href.startsWith("//")) {
        return protocol + href;
      }
      return `${protocol}//${host}${href}`;
    }
    exports.getFavicon = getFavicon;
    function createQrUrl(sessionId, sessionSecret, serverUrl, isParentConnection, version, chainId) {
      const sessionIdKey = isParentConnection ? "parent-id" : "id";
      const query = new URLSearchParams({
        [sessionIdKey]: sessionId,
        secret: sessionSecret,
        server: serverUrl,
        v: version,
        chainId: chainId.toString()
      }).toString();
      const qrUrl = `${serverUrl}/#/link?${query}`;
      return qrUrl;
    }
    exports.createQrUrl = createQrUrl;
    function isInIFrame() {
      try {
        return window.frameElement !== null;
      } catch (e3) {
        return false;
      }
    }
    exports.isInIFrame = isInIFrame;
    function getLocation() {
      try {
        if (isInIFrame() && window.top) {
          return window.top.location;
        }
        return window.location;
      } catch (e3) {
        return window.location;
      }
    }
    exports.getLocation = getLocation;
    function isMobileWeb() {
      var _a;
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent);
    }
    exports.isMobileWeb = isMobileWeb;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/lib/ScopedLocalStorage.js
var require_ScopedLocalStorage = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/lib/ScopedLocalStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopedLocalStorage = void 0;
    var ScopedLocalStorage = class {
      // eslint-disable-next-line no-useless-constructor
      constructor(scope) {
        this.scope = scope;
      }
      setItem(key, value) {
        localStorage.setItem(this.scopedKey(key), value);
      }
      getItem(key) {
        return localStorage.getItem(this.scopedKey(key));
      }
      removeItem(key) {
        localStorage.removeItem(this.scopedKey(key));
      }
      clear() {
        const prefix = this.scopedKey("");
        const keysToRemove = [];
        for (let i3 = 0; i3 < localStorage.length; i3++) {
          const key = localStorage.key(i3);
          if (typeof key === "string" && key.startsWith(prefix)) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach((key) => localStorage.removeItem(key));
      }
      scopedKey(key) {
        return `${this.scope}:${key}`;
      }
    };
    exports.ScopedLocalStorage = ScopedLocalStorage;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/provider/DiagnosticLogger.js
var require_DiagnosticLogger = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/provider/DiagnosticLogger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EVENTS = void 0;
    exports.EVENTS = {
      STARTED_CONNECTING: "walletlink_sdk.started.connecting",
      CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
      DISCONNECTED: "walletlink_sdk.disconnected",
      METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
      LINKED: "walletlink_sdk.linked",
      FAILURE: "walletlink_sdk.generic_failure",
      SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
      ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
      SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
      UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
      SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
      GENERAL_ERROR: "walletlink_sdk.general_error",
      WEB3_REQUEST: "walletlink_sdk.web3.request",
      WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
      WEB3_RESPONSE: "walletlink_sdk.web3.response",
      METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
      UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/RelayAbstract.js
var require_RelayAbstract = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/RelayAbstract.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RelayAbstract = exports.APP_VERSION_KEY = exports.LOCAL_STORAGE_ADDRESSES_KEY = exports.WALLET_USER_NAME_KEY = void 0;
    var error_1 = require_error();
    exports.WALLET_USER_NAME_KEY = "walletUsername";
    exports.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
    exports.APP_VERSION_KEY = "AppVersion";
    var RelayAbstract = class {
      async makeEthereumJSONRPCRequest(request, jsonRpcUrl) {
        if (!jsonRpcUrl)
          throw new Error("Error: No jsonRpcUrl provided");
        return window.fetch(jsonRpcUrl, {
          method: "POST",
          body: JSON.stringify(request),
          mode: "cors",
          headers: { "Content-Type": "application/json" }
        }).then((res) => res.json()).then((json) => {
          if (!json) {
            throw error_1.standardErrors.rpc.parse({});
          }
          const response = json;
          const { error } = response;
          if (error) {
            throw (0, error_1.serializeError)(error, request.method);
          }
          return response;
        });
      }
    };
    exports.RelayAbstract = RelayAbstract;
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i3 = 0, len = code.length; i3 < len; ++i3) {
      lookup[i3] = code[i3];
      revLookup[code.charCodeAt(i3)] = i3;
    }
    var i3;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i4;
      for (i4 = 0; i4 < len2; i4 += 4) {
        tmp = revLookup[b64.charCodeAt(i4)] << 18 | revLookup[b64.charCodeAt(i4 + 1)] << 12 | revLookup[b64.charCodeAt(i4 + 2)] << 6 | revLookup[b64.charCodeAt(i4 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i4)] << 2 | revLookup[b64.charCodeAt(i4 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i4)] << 10 | revLookup[b64.charCodeAt(i4 + 1)] << 4 | revLookup[b64.charCodeAt(i4 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i4 = start; i4 < end; i4 += 3) {
        tmp = (uint8[i4] << 16 & 16711680) + (uint8[i4 + 1] << 8 & 65280) + (uint8[i4 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i4 = 0, len22 = len2 - extraBytes; i4 < len22; i4 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i4, i4 + maxChunkLength > len22 ? len22 : i4 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e3, m3;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i3 = isLE ? nBytes - 1 : 0;
      var d3 = isLE ? -1 : 1;
      var s3 = buffer[offset + i3];
      i3 += d3;
      e3 = s3 & (1 << -nBits) - 1;
      s3 >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e3 = e3 * 256 + buffer[offset + i3], i3 += d3, nBits -= 8) {
      }
      m3 = e3 & (1 << -nBits) - 1;
      e3 >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m3 = m3 * 256 + buffer[offset + i3], i3 += d3, nBits -= 8) {
      }
      if (e3 === 0) {
        e3 = 1 - eBias;
      } else if (e3 === eMax) {
        return m3 ? NaN : (s3 ? -1 : 1) * Infinity;
      } else {
        m3 = m3 + Math.pow(2, mLen);
        e3 = e3 - eBias;
      }
      return (s3 ? -1 : 1) * m3 * Math.pow(2, e3 - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e3, m3, c3;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i3 = isLE ? 0 : nBytes - 1;
      var d3 = isLE ? 1 : -1;
      var s3 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m3 = isNaN(value) ? 1 : 0;
        e3 = eMax;
      } else {
        e3 = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c3 = Math.pow(2, -e3)) < 1) {
          e3--;
          c3 *= 2;
        }
        if (e3 + eBias >= 1) {
          value += rt / c3;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c3 >= 2) {
          e3++;
          c3 /= 2;
        }
        if (e3 + eBias >= eMax) {
          m3 = 0;
          e3 = eMax;
        } else if (e3 + eBias >= 1) {
          m3 = (value * c3 - 1) * Math.pow(2, mLen);
          e3 = e3 + eBias;
        } else {
          m3 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e3 = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i3] = m3 & 255, i3 += d3, m3 /= 256, mLen -= 8) {
      }
      e3 = e3 << mLen | m3;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i3] = e3 & 255, i3 += d3, e3 /= 256, eLen -= 8) {
      }
      buffer[offset + i3 - d3] |= s3 * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer2 = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e3) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      const b3 = fromObject(value);
      if (b3)
        return b3;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size2) {
      if (typeof size2 !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size2 < 0) {
        throw new RangeError('The value "' + size2 + '" is invalid for option "size"');
      }
    }
    function alloc(size2, fill, encoding) {
      assertSize(size2);
      if (size2 <= 0) {
        return createBuffer(size2);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size2).fill(fill, encoding) : createBuffer(size2).fill(fill);
      }
      return createBuffer(size2);
    }
    Buffer2.alloc = function(size2, fill, encoding) {
      return alloc(size2, fill, encoding);
    };
    function allocUnsafe(size2) {
      assertSize(size2);
      return createBuffer(size2 < 0 ? 0 : checked(size2) | 0);
    }
    Buffer2.allocUnsafe = function(size2) {
      return allocUnsafe(size2);
    };
    Buffer2.allocUnsafeSlow = function(size2) {
      return allocUnsafe(size2);
    };
    function fromString(string2, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string2, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string2, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array2) {
      const length = array2.length < 0 ? 0 : checked(array2.length) | 0;
      const buf = createBuffer(length);
      for (let i3 = 0; i3 < length; i3 += 1) {
        buf[i3] = array2[i3] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array2, byteOffset, length) {
      if (byteOffset < 0 || array2.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array2.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array2);
      } else if (length === void 0) {
        buf = new Uint8Array(array2, byteOffset);
      } else {
        buf = new Uint8Array(array2, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b3) {
      return b3 != null && b3._isBuffer === true && b3 !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a3, b3) {
      if (isInstance(a3, Uint8Array))
        a3 = Buffer2.from(a3, a3.offset, a3.byteLength);
      if (isInstance(b3, Uint8Array))
        b3 = Buffer2.from(b3, b3.offset, b3.byteLength);
      if (!Buffer2.isBuffer(a3) || !Buffer2.isBuffer(b3)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a3 === b3)
        return 0;
      let x3 = a3.length;
      let y3 = b3.length;
      for (let i3 = 0, len = Math.min(x3, y3); i3 < len; ++i3) {
        if (a3[i3] !== b3[i3]) {
          x3 = a3[i3];
          y3 = b3[i3];
          break;
        }
      }
      if (x3 < y3)
        return -1;
      if (y3 < x3)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      let i3;
      if (length === void 0) {
        length = 0;
        for (i3 = 0; i3 < list.length; ++i3) {
          length += list[i3].length;
        }
      }
      const buffer = Buffer2.allocUnsafe(length);
      let pos = 0;
      for (i3 = 0; i3 < list.length; ++i3) {
        let buf = list[i3];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer2.isBuffer(buf))
              buf = Buffer2.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string2, encoding) {
      if (Buffer2.isBuffer(string2)) {
        return string2.length;
      }
      if (ArrayBuffer.isView(string2) || isInstance(string2, ArrayBuffer)) {
        return string2.byteLength;
      }
      if (typeof string2 !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string2
        );
      }
      const len = string2.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string2).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string2).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string2).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b3, n2, m3) {
      const i3 = b3[n2];
      b3[n2] = b3[m3];
      b3[m3] = i3;
    }
    Buffer2.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i3 = 0; i3 < len; i3 += 2) {
        swap(this, i3, i3 + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i3 = 0; i3 < len; i3 += 4) {
        swap(this, i3, i3 + 3);
        swap(this, i3 + 1, i3 + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i3 = 0; i3 < len; i3 += 8) {
        swap(this, i3, i3 + 7);
        swap(this, i3 + 1, i3 + 6);
        swap(this, i3 + 2, i3 + 5);
        swap(this, i3 + 3, i3 + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b3) {
      if (!Buffer2.isBuffer(b3))
        throw new TypeError("Argument must be a Buffer");
      if (this === b3)
        return true;
      return Buffer2.compare(this, b3) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      let str = "";
      const max2 = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max2).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max2)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x3 = thisEnd - thisStart;
      let y3 = end - start;
      const len = Math.min(x3, y3);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i3 = 0; i3 < len; ++i3) {
        if (thisCopy[i3] !== targetCopy[i3]) {
          x3 = thisCopy[i3];
          y3 = targetCopy[i3];
          break;
        }
      }
      if (x3 < y3)
        return -1;
      if (y3 < x3)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i4) {
        if (indexSize === 1) {
          return buf[i4];
        } else {
          return buf.readUInt16BE(i4 * indexSize);
        }
      }
      let i3;
      if (dir) {
        let foundIndex = -1;
        for (i3 = byteOffset; i3 < arrLength; i3++) {
          if (read(arr, i3) === read(val, foundIndex === -1 ? 0 : i3 - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i3;
            if (i3 - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i3 -= i3 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i3 = byteOffset; i3 >= 0; i3--) {
          let found = true;
          for (let j3 = 0; j3 < valLength; j3++) {
            if (read(arr, i3 + j3) !== read(val, j3)) {
              found = false;
              break;
            }
          }
          if (found)
            return i3;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string2, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string2.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i3;
      for (i3 = 0; i3 < length; ++i3) {
        const parsed = parseInt(string2.substr(i3 * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i3;
        buf[offset + i3] = parsed;
      }
      return i3;
    }
    function utf8Write(buf, string2, offset, length) {
      return blitBuffer(utf8ToBytes(string2, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string2, offset, length) {
      return blitBuffer(asciiToBytes(string2), buf, offset, length);
    }
    function base64Write(buf, string2, offset, length) {
      return blitBuffer(base64ToBytes(string2), buf, offset, length);
    }
    function ucs2Write(buf, string2, offset, length) {
      return blitBuffer(utf16leToBytes(string2, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string2, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string2.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string2, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string2, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string2, offset, length);
          case "base64":
            return base64Write(this, string2, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string2, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i3 = start;
      while (i3 < end) {
        const firstByte = buf[i3];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i3 + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i3 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i3 + 1];
              thirdByte = buf[i3 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i3 + 1];
              thirdByte = buf[i3 + 2];
              fourthByte = buf[i3 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i3 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i3 = 0;
      while (i3 < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i3, i3 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i3 = start; i3 < end; ++i3) {
        ret += String.fromCharCode(buf[i3] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i3 = start; i3 < end; ++i3) {
        ret += String.fromCharCode(buf[i3]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      let out = "";
      for (let i3 = start; i3 < end; ++i3) {
        out += hexSliceLookupTable[buf[i3]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i3 = 0; i3 < bytes.length - 1; i3 += 2) {
        res += String.fromCharCode(bytes[i3] + bytes[i3 + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i3 = 0;
      while (++i3 < byteLength2 && (mul *= 256)) {
        val += this[offset + i3] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i3 = 0;
      while (++i3 < byteLength2 && (mul *= 256)) {
        val += this[offset + i3] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let i3 = byteLength2;
      let mul = 1;
      let val = this[offset + --i3];
      while (i3 > 0 && (mul *= 256)) {
        val += this[offset + --i3] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max2, min2) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max2 || value < min2)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i3 = 0;
      this[offset] = value & 255;
      while (++i3 < byteLength2 && (mul *= 256)) {
        this[offset + i3] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i3 = byteLength2 - 1;
      let mul = 1;
      this[offset + i3] = value & 255;
      while (--i3 >= 0 && (mul *= 256)) {
        this[offset + i3] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min2, max2) {
      checkIntBI(value, min2, max2, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min2, max2) {
      checkIntBI(value, min2, max2, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i3 = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i3 < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i3 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i3] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i3 = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i3] = value & 255;
      while (--i3 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i3 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i3] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max2, min2) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i3;
      if (typeof val === "number") {
        for (i3 = start; i3 < end; ++i3) {
          this[i3] = val;
        }
      } else {
        const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i3 = 0; i3 < end - start; ++i3) {
          this[i3 + start] = bytes[i3 % len];
        }
      }
      return this;
    };
    var errors = {};
    function E2(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E2(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E2(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E2(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i3 = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i3 >= start + 4; i3 -= 3) {
        res = `_${val.slice(i3 - 3, i3)}${res}`;
      }
      return `${val.slice(0, i3)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min2, max2, buf, offset, byteLength2) {
      if (value > max2 || value < min2) {
        const n2 = typeof min2 === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min2 === 0 || min2 === BigInt(0)) {
            range = `>= 0${n2} and < 2${n2} ** ${(byteLength2 + 1) * 8}${n2}`;
          } else {
            range = `>= -(2${n2} ** ${(byteLength2 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n2}`;
          }
        } else {
          range = `>= ${min2}${n2} and <= ${max2}${n2}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type2) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type2);
        throw new errors.ERR_OUT_OF_RANGE(type2 || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        type2 || "offset",
        `>= ${type2 ? 1 : 0} and <= ${length}`,
        value
      );
    }
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string2, units) {
      units = units || Infinity;
      let codePoint;
      const length = string2.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i3 = 0; i3 < length; ++i3) {
        codePoint = string2.charCodeAt(i3);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i3 + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i3 = 0; i3 < str.length; ++i3) {
        byteArray.push(str.charCodeAt(i3) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c3, hi, lo;
      const byteArray = [];
      for (let i3 = 0; i3 < str.length; ++i3) {
        if ((units -= 2) < 0)
          break;
        c3 = str.charCodeAt(i3);
        hi = c3 >> 8;
        lo = c3 % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i3;
      for (i3 = 0; i3 < length; ++i3) {
        if (i3 + offset >= dst.length || i3 >= src.length)
          break;
        dst[i3 + offset] = src[i3];
      }
      return i3;
    }
    function isInstance(obj, type2) {
      return obj instanceof type2 || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type2.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i3 = 0; i3 < 16; ++i3) {
        const i16 = i3 * 16;
        for (let j3 = 0; j3 < 16; ++j3) {
          table[i16 + j3] = alphabet[i3] + alphabet[j3];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = require_buffer2();
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size2, fill, encoding) {
      if (typeof size2 !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size2);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size2) {
      if (typeof size2 !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size2);
    };
    SafeBuffer.allocUnsafeSlow = function(size2) {
      if (typeof size2 !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size2);
    };
  }
});

// node_modules/sha.js/hash.js
var require_hash = __commonJS({
  "node_modules/sha.js/hash.js"(exports, module) {
    var Buffer2 = require_safe_buffer().Buffer;
    function Hash(blockSize, finalSize) {
      this._block = Buffer2.alloc(blockSize);
      this._finalSize = finalSize;
      this._blockSize = blockSize;
      this._len = 0;
    }
    Hash.prototype.update = function(data, enc) {
      if (typeof data === "string") {
        enc = enc || "utf8";
        data = Buffer2.from(data, enc);
      }
      var block = this._block;
      var blockSize = this._blockSize;
      var length = data.length;
      var accum = this._len;
      for (var offset = 0; offset < length; ) {
        var assigned = accum % blockSize;
        var remainder = Math.min(length - offset, blockSize - assigned);
        for (var i3 = 0; i3 < remainder; i3++) {
          block[assigned + i3] = data[offset + i3];
        }
        accum += remainder;
        offset += remainder;
        if (accum % blockSize === 0) {
          this._update(block);
        }
      }
      this._len += length;
      return this;
    };
    Hash.prototype.digest = function(enc) {
      var rem = this._len % this._blockSize;
      this._block[rem] = 128;
      this._block.fill(0, rem + 1);
      if (rem >= this._finalSize) {
        this._update(this._block);
        this._block.fill(0);
      }
      var bits = this._len * 8;
      if (bits <= 4294967295) {
        this._block.writeUInt32BE(bits, this._blockSize - 4);
      } else {
        var lowBits = (bits & 4294967295) >>> 0;
        var highBits = (bits - lowBits) / 4294967296;
        this._block.writeUInt32BE(highBits, this._blockSize - 8);
        this._block.writeUInt32BE(lowBits, this._blockSize - 4);
      }
      this._update(this._block);
      var hash = this._hash();
      return enc ? hash.toString(enc) : hash;
    };
    Hash.prototype._update = function() {
      throw new Error("_update must be implemented by subclass");
    };
    module.exports = Hash;
  }
});

// node_modules/sha.js/sha.js
var require_sha = __commonJS({
  "node_modules/sha.js/sha.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K = [
      1518500249,
      1859775393,
      2400959708 | 0,
      3395469782 | 0
    ];
    var W = new Array(80);
    function Sha() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha, Hash);
    Sha.prototype.init = function() {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    function rotl5(num) {
      return num << 5 | num >>> 27;
    }
    function rotl30(num) {
      return num << 30 | num >>> 2;
    }
    function ft(s3, b3, c3, d3) {
      if (s3 === 0)
        return b3 & c3 | ~b3 & d3;
      if (s3 === 2)
        return b3 & c3 | b3 & d3 | c3 & d3;
      return b3 ^ c3 ^ d3;
    }
    Sha.prototype._update = function(M2) {
      var W2 = this._w;
      var a3 = this._a | 0;
      var b3 = this._b | 0;
      var c3 = this._c | 0;
      var d3 = this._d | 0;
      var e3 = this._e | 0;
      for (var i3 = 0; i3 < 16; ++i3)
        W2[i3] = M2.readInt32BE(i3 * 4);
      for (; i3 < 80; ++i3)
        W2[i3] = W2[i3 - 3] ^ W2[i3 - 8] ^ W2[i3 - 14] ^ W2[i3 - 16];
      for (var j3 = 0; j3 < 80; ++j3) {
        var s3 = ~~(j3 / 20);
        var t3 = rotl5(a3) + ft(s3, b3, c3, d3) + e3 + W2[j3] + K[s3] | 0;
        e3 = d3;
        d3 = c3;
        c3 = rotl30(b3);
        b3 = a3;
        a3 = t3;
      }
      this._a = a3 + this._a | 0;
      this._b = b3 + this._b | 0;
      this._c = c3 + this._c | 0;
      this._d = d3 + this._d | 0;
      this._e = e3 + this._e | 0;
    };
    Sha.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(20);
      H2.writeInt32BE(this._a | 0, 0);
      H2.writeInt32BE(this._b | 0, 4);
      H2.writeInt32BE(this._c | 0, 8);
      H2.writeInt32BE(this._d | 0, 12);
      H2.writeInt32BE(this._e | 0, 16);
      return H2;
    };
    module.exports = Sha;
  }
});

// node_modules/sha.js/sha1.js
var require_sha1 = __commonJS({
  "node_modules/sha.js/sha1.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K = [
      1518500249,
      1859775393,
      2400959708 | 0,
      3395469782 | 0
    ];
    var W = new Array(80);
    function Sha1() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha1, Hash);
    Sha1.prototype.init = function() {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    function rotl1(num) {
      return num << 1 | num >>> 31;
    }
    function rotl5(num) {
      return num << 5 | num >>> 27;
    }
    function rotl30(num) {
      return num << 30 | num >>> 2;
    }
    function ft(s3, b3, c3, d3) {
      if (s3 === 0)
        return b3 & c3 | ~b3 & d3;
      if (s3 === 2)
        return b3 & c3 | b3 & d3 | c3 & d3;
      return b3 ^ c3 ^ d3;
    }
    Sha1.prototype._update = function(M2) {
      var W2 = this._w;
      var a3 = this._a | 0;
      var b3 = this._b | 0;
      var c3 = this._c | 0;
      var d3 = this._d | 0;
      var e3 = this._e | 0;
      for (var i3 = 0; i3 < 16; ++i3)
        W2[i3] = M2.readInt32BE(i3 * 4);
      for (; i3 < 80; ++i3)
        W2[i3] = rotl1(W2[i3 - 3] ^ W2[i3 - 8] ^ W2[i3 - 14] ^ W2[i3 - 16]);
      for (var j3 = 0; j3 < 80; ++j3) {
        var s3 = ~~(j3 / 20);
        var t3 = rotl5(a3) + ft(s3, b3, c3, d3) + e3 + W2[j3] + K[s3] | 0;
        e3 = d3;
        d3 = c3;
        c3 = rotl30(b3);
        b3 = a3;
        a3 = t3;
      }
      this._a = a3 + this._a | 0;
      this._b = b3 + this._b | 0;
      this._c = c3 + this._c | 0;
      this._d = d3 + this._d | 0;
      this._e = e3 + this._e | 0;
    };
    Sha1.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(20);
      H2.writeInt32BE(this._a | 0, 0);
      H2.writeInt32BE(this._b | 0, 4);
      H2.writeInt32BE(this._c | 0, 8);
      H2.writeInt32BE(this._d | 0, 12);
      H2.writeInt32BE(this._e | 0, 16);
      return H2;
    };
    module.exports = Sha1;
  }
});

// node_modules/sha.js/sha256.js
var require_sha256 = __commonJS({
  "node_modules/sha.js/sha256.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ];
    var W = new Array(64);
    function Sha256() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha256, Hash);
    Sha256.prototype.init = function() {
      this._a = 1779033703;
      this._b = 3144134277;
      this._c = 1013904242;
      this._d = 2773480762;
      this._e = 1359893119;
      this._f = 2600822924;
      this._g = 528734635;
      this._h = 1541459225;
      return this;
    };
    function ch(x3, y3, z3) {
      return z3 ^ x3 & (y3 ^ z3);
    }
    function maj(x3, y3, z3) {
      return x3 & y3 | z3 & (x3 | y3);
    }
    function sigma0(x3) {
      return (x3 >>> 2 | x3 << 30) ^ (x3 >>> 13 | x3 << 19) ^ (x3 >>> 22 | x3 << 10);
    }
    function sigma1(x3) {
      return (x3 >>> 6 | x3 << 26) ^ (x3 >>> 11 | x3 << 21) ^ (x3 >>> 25 | x3 << 7);
    }
    function gamma0(x3) {
      return (x3 >>> 7 | x3 << 25) ^ (x3 >>> 18 | x3 << 14) ^ x3 >>> 3;
    }
    function gamma1(x3) {
      return (x3 >>> 17 | x3 << 15) ^ (x3 >>> 19 | x3 << 13) ^ x3 >>> 10;
    }
    Sha256.prototype._update = function(M2) {
      var W2 = this._w;
      var a3 = this._a | 0;
      var b3 = this._b | 0;
      var c3 = this._c | 0;
      var d3 = this._d | 0;
      var e3 = this._e | 0;
      var f3 = this._f | 0;
      var g3 = this._g | 0;
      var h3 = this._h | 0;
      for (var i3 = 0; i3 < 16; ++i3)
        W2[i3] = M2.readInt32BE(i3 * 4);
      for (; i3 < 64; ++i3)
        W2[i3] = gamma1(W2[i3 - 2]) + W2[i3 - 7] + gamma0(W2[i3 - 15]) + W2[i3 - 16] | 0;
      for (var j3 = 0; j3 < 64; ++j3) {
        var T1 = h3 + sigma1(e3) + ch(e3, f3, g3) + K[j3] + W2[j3] | 0;
        var T22 = sigma0(a3) + maj(a3, b3, c3) | 0;
        h3 = g3;
        g3 = f3;
        f3 = e3;
        e3 = d3 + T1 | 0;
        d3 = c3;
        c3 = b3;
        b3 = a3;
        a3 = T1 + T22 | 0;
      }
      this._a = a3 + this._a | 0;
      this._b = b3 + this._b | 0;
      this._c = c3 + this._c | 0;
      this._d = d3 + this._d | 0;
      this._e = e3 + this._e | 0;
      this._f = f3 + this._f | 0;
      this._g = g3 + this._g | 0;
      this._h = h3 + this._h | 0;
    };
    Sha256.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(32);
      H2.writeInt32BE(this._a, 0);
      H2.writeInt32BE(this._b, 4);
      H2.writeInt32BE(this._c, 8);
      H2.writeInt32BE(this._d, 12);
      H2.writeInt32BE(this._e, 16);
      H2.writeInt32BE(this._f, 20);
      H2.writeInt32BE(this._g, 24);
      H2.writeInt32BE(this._h, 28);
      return H2;
    };
    module.exports = Sha256;
  }
});

// node_modules/sha.js/sha224.js
var require_sha224 = __commonJS({
  "node_modules/sha.js/sha224.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Sha256 = require_sha256();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var W = new Array(64);
    function Sha224() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha224, Sha256);
    Sha224.prototype.init = function() {
      this._a = 3238371032;
      this._b = 914150663;
      this._c = 812702999;
      this._d = 4144912697;
      this._e = 4290775857;
      this._f = 1750603025;
      this._g = 1694076839;
      this._h = 3204075428;
      return this;
    };
    Sha224.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(28);
      H2.writeInt32BE(this._a, 0);
      H2.writeInt32BE(this._b, 4);
      H2.writeInt32BE(this._c, 8);
      H2.writeInt32BE(this._d, 12);
      H2.writeInt32BE(this._e, 16);
      H2.writeInt32BE(this._f, 20);
      H2.writeInt32BE(this._g, 24);
      return H2;
    };
    module.exports = Sha224;
  }
});

// node_modules/sha.js/sha512.js
var require_sha512 = __commonJS({
  "node_modules/sha.js/sha512.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ];
    var W = new Array(160);
    function Sha512() {
      this.init();
      this._w = W;
      Hash.call(this, 128, 112);
    }
    inherits(Sha512, Hash);
    Sha512.prototype.init = function() {
      this._ah = 1779033703;
      this._bh = 3144134277;
      this._ch = 1013904242;
      this._dh = 2773480762;
      this._eh = 1359893119;
      this._fh = 2600822924;
      this._gh = 528734635;
      this._hh = 1541459225;
      this._al = 4089235720;
      this._bl = 2227873595;
      this._cl = 4271175723;
      this._dl = 1595750129;
      this._el = 2917565137;
      this._fl = 725511199;
      this._gl = 4215389547;
      this._hl = 327033209;
      return this;
    };
    function Ch(x3, y3, z3) {
      return z3 ^ x3 & (y3 ^ z3);
    }
    function maj(x3, y3, z3) {
      return x3 & y3 | z3 & (x3 | y3);
    }
    function sigma0(x3, xl) {
      return (x3 >>> 28 | xl << 4) ^ (xl >>> 2 | x3 << 30) ^ (xl >>> 7 | x3 << 25);
    }
    function sigma1(x3, xl) {
      return (x3 >>> 14 | xl << 18) ^ (x3 >>> 18 | xl << 14) ^ (xl >>> 9 | x3 << 23);
    }
    function Gamma0(x3, xl) {
      return (x3 >>> 1 | xl << 31) ^ (x3 >>> 8 | xl << 24) ^ x3 >>> 7;
    }
    function Gamma0l(x3, xl) {
      return (x3 >>> 1 | xl << 31) ^ (x3 >>> 8 | xl << 24) ^ (x3 >>> 7 | xl << 25);
    }
    function Gamma1(x3, xl) {
      return (x3 >>> 19 | xl << 13) ^ (xl >>> 29 | x3 << 3) ^ x3 >>> 6;
    }
    function Gamma1l(x3, xl) {
      return (x3 >>> 19 | xl << 13) ^ (xl >>> 29 | x3 << 3) ^ (x3 >>> 6 | xl << 26);
    }
    function getCarry(a3, b3) {
      return a3 >>> 0 < b3 >>> 0 ? 1 : 0;
    }
    Sha512.prototype._update = function(M2) {
      var W2 = this._w;
      var ah = this._ah | 0;
      var bh = this._bh | 0;
      var ch = this._ch | 0;
      var dh = this._dh | 0;
      var eh = this._eh | 0;
      var fh = this._fh | 0;
      var gh = this._gh | 0;
      var hh = this._hh | 0;
      var al = this._al | 0;
      var bl = this._bl | 0;
      var cl = this._cl | 0;
      var dl = this._dl | 0;
      var el = this._el | 0;
      var fl = this._fl | 0;
      var gl = this._gl | 0;
      var hl = this._hl | 0;
      for (var i3 = 0; i3 < 32; i3 += 2) {
        W2[i3] = M2.readInt32BE(i3 * 4);
        W2[i3 + 1] = M2.readInt32BE(i3 * 4 + 4);
      }
      for (; i3 < 160; i3 += 2) {
        var xh = W2[i3 - 15 * 2];
        var xl = W2[i3 - 15 * 2 + 1];
        var gamma0 = Gamma0(xh, xl);
        var gamma0l = Gamma0l(xl, xh);
        xh = W2[i3 - 2 * 2];
        xl = W2[i3 - 2 * 2 + 1];
        var gamma1 = Gamma1(xh, xl);
        var gamma1l = Gamma1l(xl, xh);
        var Wi7h = W2[i3 - 7 * 2];
        var Wi7l = W2[i3 - 7 * 2 + 1];
        var Wi16h = W2[i3 - 16 * 2];
        var Wi16l = W2[i3 - 16 * 2 + 1];
        var Wil = gamma0l + Wi7l | 0;
        var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
        Wil = Wil + gamma1l | 0;
        Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
        Wil = Wil + Wi16l | 0;
        Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
        W2[i3] = Wih;
        W2[i3 + 1] = Wil;
      }
      for (var j3 = 0; j3 < 160; j3 += 2) {
        Wih = W2[j3];
        Wil = W2[j3 + 1];
        var majh = maj(ah, bh, ch);
        var majl = maj(al, bl, cl);
        var sigma0h = sigma0(ah, al);
        var sigma0l = sigma0(al, ah);
        var sigma1h = sigma1(eh, el);
        var sigma1l = sigma1(el, eh);
        var Kih = K[j3];
        var Kil = K[j3 + 1];
        var chh = Ch(eh, fh, gh);
        var chl = Ch(el, fl, gl);
        var t1l = hl + sigma1l | 0;
        var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
        t1l = t1l + chl | 0;
        t1h = t1h + chh + getCarry(t1l, chl) | 0;
        t1l = t1l + Kil | 0;
        t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
        t1l = t1l + Wil | 0;
        t1h = t1h + Wih + getCarry(t1l, Wil) | 0;
        var t2l = sigma0l + majl | 0;
        var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        el = dl + t1l | 0;
        eh = dh + t1h + getCarry(el, dl) | 0;
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        al = t1l + t2l | 0;
        ah = t1h + t2h + getCarry(al, t1l) | 0;
      }
      this._al = this._al + al | 0;
      this._bl = this._bl + bl | 0;
      this._cl = this._cl + cl | 0;
      this._dl = this._dl + dl | 0;
      this._el = this._el + el | 0;
      this._fl = this._fl + fl | 0;
      this._gl = this._gl + gl | 0;
      this._hl = this._hl + hl | 0;
      this._ah = this._ah + ah + getCarry(this._al, al) | 0;
      this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
      this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
      this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
      this._eh = this._eh + eh + getCarry(this._el, el) | 0;
      this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
      this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
      this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
    };
    Sha512.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(64);
      function writeInt64BE(h3, l3, offset) {
        H2.writeInt32BE(h3, offset);
        H2.writeInt32BE(l3, offset + 4);
      }
      writeInt64BE(this._ah, this._al, 0);
      writeInt64BE(this._bh, this._bl, 8);
      writeInt64BE(this._ch, this._cl, 16);
      writeInt64BE(this._dh, this._dl, 24);
      writeInt64BE(this._eh, this._el, 32);
      writeInt64BE(this._fh, this._fl, 40);
      writeInt64BE(this._gh, this._gl, 48);
      writeInt64BE(this._hh, this._hl, 56);
      return H2;
    };
    module.exports = Sha512;
  }
});

// node_modules/sha.js/sha384.js
var require_sha384 = __commonJS({
  "node_modules/sha.js/sha384.js"(exports, module) {
    var inherits = require_inherits_browser();
    var SHA512 = require_sha512();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var W = new Array(160);
    function Sha384() {
      this.init();
      this._w = W;
      Hash.call(this, 128, 112);
    }
    inherits(Sha384, SHA512);
    Sha384.prototype.init = function() {
      this._ah = 3418070365;
      this._bh = 1654270250;
      this._ch = 2438529370;
      this._dh = 355462360;
      this._eh = 1731405415;
      this._fh = 2394180231;
      this._gh = 3675008525;
      this._hh = 1203062813;
      this._al = 3238371032;
      this._bl = 914150663;
      this._cl = 812702999;
      this._dl = 4144912697;
      this._el = 4290775857;
      this._fl = 1750603025;
      this._gl = 1694076839;
      this._hl = 3204075428;
      return this;
    };
    Sha384.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(48);
      function writeInt64BE(h3, l3, offset) {
        H2.writeInt32BE(h3, offset);
        H2.writeInt32BE(l3, offset + 4);
      }
      writeInt64BE(this._ah, this._al, 0);
      writeInt64BE(this._bh, this._bl, 8);
      writeInt64BE(this._ch, this._cl, 16);
      writeInt64BE(this._dh, this._dl, 24);
      writeInt64BE(this._eh, this._el, 32);
      writeInt64BE(this._fh, this._fl, 40);
      return H2;
    };
    module.exports = Sha384;
  }
});

// node_modules/sha.js/index.js
var require_sha2 = __commonJS({
  "node_modules/sha.js/index.js"(exports, module) {
    var exports = module.exports = function SHA(algorithm) {
      algorithm = algorithm.toLowerCase();
      var Algorithm = exports[algorithm];
      if (!Algorithm)
        throw new Error(algorithm + " is not supported (we accept pull requests)");
      return new Algorithm();
    };
    exports.sha = require_sha();
    exports.sha1 = require_sha1();
    exports.sha224 = require_sha224();
    exports.sha256 = require_sha256();
    exports.sha384 = require_sha384();
    exports.sha512 = require_sha512();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/Session.js
var require_Session = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/Session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Session = void 0;
    var sha_js_1 = require_sha2();
    var util_1 = require_util();
    var STORAGE_KEY_SESSION_ID = "session:id";
    var STORAGE_KEY_SESSION_SECRET = "session:secret";
    var STORAGE_KEY_SESSION_LINKED = "session:linked";
    var Session = class _Session {
      constructor(storage, id, secret, linked) {
        this._storage = storage;
        this._id = id || (0, util_1.randomBytesHex)(16);
        this._secret = secret || (0, util_1.randomBytesHex)(32);
        this._key = new sha_js_1.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex");
        this._linked = !!linked;
      }
      static load(storage) {
        const id = storage.getItem(STORAGE_KEY_SESSION_ID);
        const linked = storage.getItem(STORAGE_KEY_SESSION_LINKED);
        const secret = storage.getItem(STORAGE_KEY_SESSION_SECRET);
        if (id && secret) {
          return new _Session(storage, id, secret, linked === "1");
        }
        return null;
      }
      /**
       * Takes in a session ID and returns the sha256 hash of it.
       * @param sessionId session ID
       */
      static hash(sessionId) {
        return new sha_js_1.sha256().update(sessionId).digest("hex");
      }
      get id() {
        return this._id;
      }
      get secret() {
        return this._secret;
      }
      get key() {
        return this._key;
      }
      get linked() {
        return this._linked;
      }
      set linked(val) {
        this._linked = val;
        this.persistLinked();
      }
      save() {
        this._storage.setItem(STORAGE_KEY_SESSION_ID, this._id);
        this._storage.setItem(STORAGE_KEY_SESSION_SECRET, this._secret);
        this.persistLinked();
        return this;
      }
      persistLinked() {
        this._storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
      }
    };
    exports.Session = Session;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/lib/Cipher.js
var require_Cipher = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/lib/Cipher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cipher = void 0;
    var util_1 = require_util();
    var Cipher = class {
      // @param secret hex representation of 32-byte secret
      constructor(secret) {
        this.secret = secret;
      }
      /**
       *
       * @param plainText string to be encrypted
       * returns hex string representation of bytes in the order: initialization vector (iv),
       * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
       * encrypted plainText.
       */
      async encrypt(plainText) {
        const secret = this.secret;
        if (secret.length !== 64)
          throw Error(`secret must be 256 bits`);
        const ivBytes = crypto.getRandomValues(new Uint8Array(12));
        const secretKey = await crypto.subtle.importKey("raw", (0, util_1.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
        const enc = new TextEncoder();
        const encryptedResult = await window.crypto.subtle.encrypt({
          name: "AES-GCM",
          iv: ivBytes
        }, secretKey, enc.encode(plainText));
        const tagLength = 16;
        const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
        const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
        const authTagBytes = new Uint8Array(authTag);
        const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
        const concatted = new Uint8Array([...ivBytes, ...authTagBytes, ...encryptedPlaintextBytes]);
        return (0, util_1.uint8ArrayToHex)(concatted);
      }
      /**
       *
       * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
       * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
       */
      async decrypt(cipherText) {
        const secret = this.secret;
        if (secret.length !== 64)
          throw Error(`secret must be 256 bits`);
        return new Promise((resolve, reject) => {
          void async function() {
            const secretKey = await crypto.subtle.importKey("raw", (0, util_1.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
            const encrypted = (0, util_1.hexStringToUint8Array)(cipherText);
            const ivBytes = encrypted.slice(0, 12);
            const authTagBytes = encrypted.slice(12, 28);
            const encryptedPlaintextBytes = encrypted.slice(28);
            const concattedBytes = new Uint8Array([...encryptedPlaintextBytes, ...authTagBytes]);
            const algo = {
              name: "AES-GCM",
              iv: new Uint8Array(ivBytes)
            };
            try {
              const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
              const decoder = new TextDecoder();
              resolve(decoder.decode(decrypted));
            } catch (err) {
              reject(err);
            }
          }();
        });
      }
    };
    exports.Cipher = Cipher;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/connection/WalletLinkHTTP.js
var require_WalletLinkHTTP = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/connection/WalletLinkHTTP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkHTTP = void 0;
    var WalletLinkHTTP = class {
      constructor(linkAPIUrl, sessionId, sessionKey) {
        this.linkAPIUrl = linkAPIUrl;
        this.sessionId = sessionId;
        const credentials = `${sessionId}:${sessionKey}`;
        this.auth = `Basic ${btoa(credentials)}`;
      }
      // mark unseen events as seen
      async markUnseenEventsAsSeen(events) {
        return Promise.all(events.map((e3) => fetch(`${this.linkAPIUrl}/events/${e3.eventId}/seen`, {
          method: "POST",
          headers: {
            Authorization: this.auth
          }
        }))).catch((error) => console.error("Unabled to mark event as failed:", error));
      }
      async fetchUnseenEvents() {
        var _a;
        const response = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
          headers: {
            Authorization: this.auth
          }
        });
        if (response.ok) {
          const { events, error } = await response.json();
          if (error) {
            throw new Error(`Check unseen events failed: ${error}`);
          }
          const responseEvents = (_a = events === null || events === void 0 ? void 0 : events.filter((e3) => e3.event === "Web3Response").map((e3) => ({
            type: "Event",
            sessionId: this.sessionId,
            eventId: e3.id,
            event: e3.event,
            data: e3.data
          }))) !== null && _a !== void 0 ? _a : [];
          this.markUnseenEventsAsSeen(responseEvents);
          return responseEvents;
        }
        throw new Error(`Check unseen events failed: ${response.status}`);
      }
    };
    exports.WalletLinkHTTP = WalletLinkHTTP;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/connection/WalletLinkWebSocket.js
var require_WalletLinkWebSocket = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/connection/WalletLinkWebSocket.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkWebSocket = exports.ConnectionState = void 0;
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["DISCONNECTED"] = 0] = "DISCONNECTED";
      ConnectionState2[ConnectionState2["CONNECTING"] = 1] = "CONNECTING";
      ConnectionState2[ConnectionState2["CONNECTED"] = 2] = "CONNECTED";
    })(ConnectionState || (exports.ConnectionState = ConnectionState = {}));
    var WalletLinkWebSocket = class {
      setConnectionStateListener(listener) {
        this.connectionStateListener = listener;
      }
      setIncomingDataListener(listener) {
        this.incomingDataListener = listener;
      }
      /**
       * Constructor
       * @param url WebSocket server URL
       * @param [WebSocketClass] Custom WebSocket implementation
       */
      constructor(url, WebSocketClass = WebSocket) {
        this.WebSocketClass = WebSocketClass;
        this.webSocket = null;
        this.pendingData = [];
        this.url = url.replace(/^http/, "ws");
      }
      /**
       * Make a websocket connection
       * @returns a Promise that resolves when connected
       */
      async connect() {
        if (this.webSocket) {
          throw new Error("webSocket object is not null");
        }
        return new Promise((resolve, reject) => {
          var _a;
          let webSocket;
          try {
            this.webSocket = webSocket = new this.WebSocketClass(this.url);
          } catch (err) {
            reject(err);
            return;
          }
          (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.CONNECTING);
          webSocket.onclose = (evt) => {
            var _a2;
            this.clearWebSocket();
            reject(new Error(`websocket error ${evt.code}: ${evt.reason}`));
            (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.DISCONNECTED);
          };
          webSocket.onopen = (_3) => {
            var _a2;
            resolve();
            (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.CONNECTED);
            if (this.pendingData.length > 0) {
              const pending = [...this.pendingData];
              pending.forEach((data) => this.sendData(data));
              this.pendingData = [];
            }
          };
          webSocket.onmessage = (evt) => {
            var _a2, _b;
            if (evt.data === "h") {
              (_a2 = this.incomingDataListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, {
                type: "Heartbeat"
              });
            } else {
              try {
                const message = JSON.parse(evt.data);
                (_b = this.incomingDataListener) === null || _b === void 0 ? void 0 : _b.call(this, message);
              } catch (_c) {
              }
            }
          };
        });
      }
      /**
       * Disconnect from server
       */
      disconnect() {
        var _a;
        const { webSocket } = this;
        if (!webSocket) {
          return;
        }
        this.clearWebSocket();
        (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.DISCONNECTED);
        this.connectionStateListener = void 0;
        this.incomingDataListener = void 0;
        try {
          webSocket.close();
        } catch (_b) {
        }
      }
      /**
       * Send data to server
       * @param data text to send
       */
      sendData(data) {
        const { webSocket } = this;
        if (!webSocket) {
          this.pendingData.push(data);
          this.connect();
          return;
        }
        webSocket.send(data);
      }
      clearWebSocket() {
        const { webSocket } = this;
        if (!webSocket) {
          return;
        }
        this.webSocket = null;
        webSocket.onclose = null;
        webSocket.onerror = null;
        webSocket.onmessage = null;
        webSocket.onopen = null;
      }
    };
    exports.WalletLinkWebSocket = WalletLinkWebSocket;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/connection/WalletLinkConnection.js
var require_WalletLinkConnection = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/connection/WalletLinkConnection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkConnection = void 0;
    var type_1 = require_type();
    var Cipher_1 = require_Cipher();
    var DiagnosticLogger_1 = require_DiagnosticLogger();
    var RelayAbstract_1 = require_RelayAbstract();
    var Session_1 = require_Session();
    var WalletLinkHTTP_1 = require_WalletLinkHTTP();
    var WalletLinkWebSocket_1 = require_WalletLinkWebSocket();
    var HEARTBEAT_INTERVAL = 1e4;
    var REQUEST_TIMEOUT = 6e4;
    var WalletLinkConnection = class {
      /**
       * Constructor
       * @param session Session
       * @param linkAPIUrl Coinbase Wallet link server URL
       * @param listener WalletLinkConnectionUpdateListener
       * @param [WebSocketClass] Custom WebSocket implementation
       */
      constructor({ session, linkAPIUrl, listener, diagnostic, WebSocketClass = WebSocket }) {
        this.destroyed = false;
        this.lastHeartbeatResponse = 0;
        this.nextReqId = (0, type_1.IntNumber)(1);
        this._connected = false;
        this._linked = false;
        this.shouldFetchUnseenEventsOnConnect = false;
        this.requestResolutions = /* @__PURE__ */ new Map();
        this.handleSessionMetadataUpdated = (metadata) => {
          if (!metadata)
            return;
          const handlers = /* @__PURE__ */ new Map([
            ["__destroyed", this.handleDestroyed],
            ["EthereumAddress", this.handleAccountUpdated],
            ["WalletUsername", this.handleWalletUsernameUpdated],
            ["AppVersion", this.handleAppVersionUpdated],
            [
              "ChainId",
              (v3) => metadata.JsonRpcUrl && this.handleChainUpdated(v3, metadata.JsonRpcUrl)
            ]
          ]);
          handlers.forEach((handler, key) => {
            const value = metadata[key];
            if (value === void 0)
              return;
            handler(value);
          });
        };
        this.handleDestroyed = (__destroyed) => {
          var _a, _b;
          if (__destroyed !== "1")
            return;
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.resetAndReload();
          (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.METADATA_DESTROYED, {
            alreadyDestroyed: this.isDestroyed,
            sessionIdHash: Session_1.Session.hash(this.session.id)
          });
        };
        this.handleAccountUpdated = async (encryptedEthereumAddress) => {
          var _a, _b;
          try {
            const address = await this.cipher.decrypt(encryptedEthereumAddress);
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.accountUpdated(address);
          } catch (_c) {
            (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: "selectedAddress"
            });
          }
        };
        this.handleMetadataUpdated = async (key, encryptedMetadataValue) => {
          var _a, _b;
          try {
            const decryptedValue = await this.cipher.decrypt(encryptedMetadataValue);
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.metadataUpdated(key, decryptedValue);
          } catch (_c) {
            (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: key
            });
          }
        };
        this.handleWalletUsernameUpdated = async (walletUsername) => {
          this.handleMetadataUpdated(RelayAbstract_1.WALLET_USER_NAME_KEY, walletUsername);
        };
        this.handleAppVersionUpdated = async (appVersion) => {
          this.handleMetadataUpdated(RelayAbstract_1.APP_VERSION_KEY, appVersion);
        };
        this.handleChainUpdated = async (encryptedChainId, encryptedJsonRpcUrl) => {
          var _a, _b;
          try {
            const chainId = await this.cipher.decrypt(encryptedChainId);
            const jsonRpcUrl = await this.cipher.decrypt(encryptedJsonRpcUrl);
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.chainUpdated(chainId, jsonRpcUrl);
          } catch (_c) {
            (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: "chainId|jsonRpcUrl"
            });
          }
        };
        this.session = session;
        this.cipher = new Cipher_1.Cipher(session.secret);
        this.diagnostic = diagnostic;
        this.listener = listener;
        const ws = new WalletLinkWebSocket_1.WalletLinkWebSocket(`${linkAPIUrl}/rpc`, WebSocketClass);
        ws.setConnectionStateListener(async (state) => {
          var _a;
          (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.CONNECTED_STATE_CHANGE, {
            state,
            sessionIdHash: Session_1.Session.hash(session.id)
          });
          let connected = false;
          switch (state) {
            case WalletLinkWebSocket_1.ConnectionState.DISCONNECTED:
              if (!this.destroyed) {
                const connect = async () => {
                  await new Promise((resolve) => setTimeout(resolve, 5e3));
                  if (!this.destroyed) {
                    ws.connect().catch(() => {
                      connect();
                    });
                  }
                };
                connect();
              }
              break;
            case WalletLinkWebSocket_1.ConnectionState.CONNECTED:
              try {
                await this.authenticate();
                this.sendIsLinked();
                this.sendGetSessionConfig();
                connected = true;
              } catch (_b) {
              }
              this.updateLastHeartbeat();
              setInterval(() => {
                this.heartbeat();
              }, HEARTBEAT_INTERVAL);
              if (this.shouldFetchUnseenEventsOnConnect) {
                this.fetchUnseenEventsAPI();
              }
              break;
            case WalletLinkWebSocket_1.ConnectionState.CONNECTING:
              break;
          }
          if (this.connected !== connected) {
            this.connected = connected;
          }
        });
        ws.setIncomingDataListener((m3) => {
          var _a, _b, _c;
          switch (m3.type) {
            case "Heartbeat":
              this.updateLastHeartbeat();
              return;
            case "IsLinkedOK":
            case "Linked": {
              const linked = m3.type === "IsLinkedOK" ? m3.linked : void 0;
              (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.LINKED, {
                sessionIdHash: Session_1.Session.hash(session.id),
                linked,
                type: m3.type,
                onlineGuests: m3.onlineGuests
              });
              this.linked = linked || m3.onlineGuests > 0;
              break;
            }
            case "GetSessionConfigOK":
            case "SessionConfigUpdated": {
              (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.SESSION_CONFIG_RECEIVED, {
                sessionIdHash: Session_1.Session.hash(session.id),
                metadata_keys: m3 && m3.metadata ? Object.keys(m3.metadata) : void 0
              });
              this.handleSessionMetadataUpdated(m3.metadata);
              break;
            }
            case "Event": {
              this.handleIncomingEvent(m3);
              break;
            }
          }
          if (m3.id !== void 0) {
            (_c = this.requestResolutions.get(m3.id)) === null || _c === void 0 ? void 0 : _c(m3);
          }
        });
        this.ws = ws;
        this.http = new WalletLinkHTTP_1.WalletLinkHTTP(linkAPIUrl, session.id, session.key);
      }
      /**
       * Make a connection to the server
       */
      connect() {
        var _a;
        if (this.destroyed) {
          throw new Error("instance is destroyed");
        }
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.STARTED_CONNECTING, {
          sessionIdHash: Session_1.Session.hash(this.session.id)
        });
        this.ws.connect();
      }
      /**
       * Terminate connection, and mark as destroyed. To reconnect, create a new
       * instance of WalletSDKConnection
       */
      destroy() {
        var _a;
        this.destroyed = true;
        this.ws.disconnect();
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.DISCONNECTED, {
          sessionIdHash: Session_1.Session.hash(this.session.id)
        });
        this.listener = void 0;
      }
      get isDestroyed() {
        return this.destroyed;
      }
      get connected() {
        return this._connected;
      }
      set connected(connected) {
        var _a, _b;
        this._connected = connected;
        if (connected)
          (_a = this.onceConnected) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.listener) === null || _b === void 0 ? void 0 : _b.connectedUpdated(connected);
      }
      setOnceConnected(callback) {
        return new Promise((resolve) => {
          if (this.connected) {
            callback().then(resolve);
          } else {
            this.onceConnected = () => {
              callback().then(resolve);
              this.onceConnected = void 0;
            };
          }
        });
      }
      get linked() {
        return this._linked;
      }
      set linked(linked) {
        var _a, _b;
        this._linked = linked;
        if (linked)
          (_a = this.onceLinked) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.listener) === null || _b === void 0 ? void 0 : _b.linkedUpdated(linked);
      }
      setOnceLinked(callback) {
        return new Promise((resolve) => {
          if (this.linked) {
            callback().then(resolve);
          } else {
            this.onceLinked = () => {
              callback().then(resolve);
              this.onceLinked = void 0;
            };
          }
        });
      }
      async handleIncomingEvent(m3) {
        var _a, _b;
        if (m3.type !== "Event" || m3.event !== "Web3Response") {
          return;
        }
        try {
          const decryptedData = await this.cipher.decrypt(m3.data);
          const message = JSON.parse(decryptedData);
          if (message.type !== "WEB3_RESPONSE")
            return;
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.handleWeb3ResponseMessage(message);
        } catch (_c) {
          (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "incomingEvent"
          });
        }
      }
      async checkUnseenEvents() {
        if (!this.connected) {
          this.shouldFetchUnseenEventsOnConnect = true;
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 250));
        try {
          await this.fetchUnseenEventsAPI();
        } catch (e3) {
          console.error("Unable to check for unseen events", e3);
        }
      }
      async fetchUnseenEventsAPI() {
        this.shouldFetchUnseenEventsOnConnect = false;
        const responseEvents = await this.http.fetchUnseenEvents();
        responseEvents.forEach((e3) => this.handleIncomingEvent(e3));
      }
      /**
       * Set session metadata in SessionConfig object
       * @param key
       * @param value
       * @returns a Promise that completes when successful
       */
      async setSessionMetadata(key, value) {
        const message = {
          type: "SetSessionConfig",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id,
          metadata: { [key]: value }
        };
        return this.setOnceConnected(async () => {
          const res = await this.makeRequest(message);
          if (res.type === "Fail") {
            throw new Error(res.error || "failed to set session metadata");
          }
        });
      }
      /**
       * Publish an event and emit event ID when successful
       * @param event event name
       * @param unencryptedData unencrypted event data
       * @param callWebhook whether the webhook should be invoked
       * @returns a Promise that emits event ID when successful
       */
      async publishEvent(event, unencryptedData, callWebhook = false) {
        const data = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), { origin: location.origin, relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk" })));
        const message = {
          type: "PublishEvent",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id,
          event,
          data,
          callWebhook
        };
        return this.setOnceLinked(async () => {
          const res = await this.makeRequest(message);
          if (res.type === "Fail") {
            throw new Error(res.error || "failed to publish event");
          }
          return res.eventId;
        });
      }
      sendData(message) {
        this.ws.sendData(JSON.stringify(message));
      }
      updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now();
      }
      heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
          this.ws.disconnect();
          return;
        }
        try {
          this.ws.sendData("h");
        } catch (_a) {
        }
      }
      async makeRequest(message, timeout = REQUEST_TIMEOUT) {
        const reqId = message.id;
        this.sendData(message);
        let timeoutId;
        return Promise.race([
          new Promise((_3, reject) => {
            timeoutId = window.setTimeout(() => {
              reject(new Error(`request ${reqId} timed out`));
            }, timeout);
          }),
          new Promise((resolve) => {
            this.requestResolutions.set(reqId, (m3) => {
              clearTimeout(timeoutId);
              resolve(m3);
              this.requestResolutions.delete(reqId);
            });
          })
        ]);
      }
      async authenticate() {
        const m3 = {
          type: "HostSession",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id,
          sessionKey: this.session.key
        };
        const res = await this.makeRequest(m3);
        if (res.type === "Fail") {
          throw new Error(res.error || "failed to authentcate");
        }
      }
      sendIsLinked() {
        const m3 = {
          type: "IsLinked",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id
        };
        this.sendData(m3);
      }
      sendGetSessionConfig() {
        const m3 = {
          type: "GetSessionConfig",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id
        };
        this.sendData(m3);
      }
    };
    exports.WalletLinkConnection = WalletLinkConnection;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/lib/cssReset-css.js
var require_cssReset_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/lib/cssReset-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/lib/cssReset.js
var require_cssReset = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/lib/cssReset.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.injectCssReset = void 0;
    var cssReset_css_1 = __importDefault2(require_cssReset_css());
    function injectCssReset() {
      const styleEl = document.createElement("style");
      styleEl.type = "text/css";
      styleEl.appendChild(document.createTextNode(cssReset_css_1.default));
      document.documentElement.appendChild(styleEl);
    }
    exports.injectCssReset = injectCssReset;
  }
});

// node_modules/preact/dist/preact.module.js
var preact_module_exports = {};
__export(preact_module_exports, {
  Component: () => b,
  Fragment: () => g,
  cloneElement: () => F,
  createContext: () => G,
  createElement: () => y,
  createRef: () => _,
  h: () => y,
  hydrate: () => E,
  isValidElement: () => t,
  options: () => l,
  render: () => B,
  toChildArray: () => H
});
function v(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function p(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function y(l3, u3, t3) {
  var i3, o3, r4, f3 = {};
  for (r4 in u3)
    "key" == r4 ? i3 = u3[r4] : "ref" == r4 ? o3 = u3[r4] : f3[r4] = u3[r4];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
    for (r4 in l3.defaultProps)
      void 0 === f3[r4] && (f3[r4] = l3.defaultProps[r4]);
  return d(l3, f3, i3, o3, null);
}
function d(n2, t3, i3, o3, r4) {
  var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r4 ? ++u : r4, __i: -1, __u: 0 };
  return null == r4 && null != l.vnode && l.vnode(f3), f3;
}
function _() {
  return { current: null };
}
function g(n2) {
  return n2.children;
}
function b(n2, l3) {
  this.props = n2, this.context = l3;
}
function m(n2, l3) {
  if (null == l3)
    return n2.__ ? m(n2.__, n2.__i + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? m(n2) : null;
}
function w(n2, u3, t3) {
  var i3, o3 = n2.__v, r4 = o3.__e, f3 = n2.__P;
  if (f3)
    return (i3 = v({}, o3)).__v = o3.__v + 1, l.vnode && l.vnode(i3), M(f3, i3, o3, n2.__n, void 0 !== f3.ownerSVGElement, 32 & o3.__u ? [r4] : null, u3, null == r4 ? m(o3) : r4, !!(32 & o3.__u), t3), i3.__v = o3.__v, i3.__.__k[i3.__i] = i3, i3.__d = void 0, i3.__e != r4 && k(i3), i3;
}
function k(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return k(n2);
  }
}
function x(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !C.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(C);
}
function C() {
  var n2, u3, t3, o3 = [], r4 = [];
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (t3 = i.length, u3 = w(n2, o3, r4) || u3, 0 === t3 || i.length > t3 ? (j(o3, u3, r4), r4.length = o3.length = 0, u3 = void 0, i.sort(f)) : u3 && l.__c && l.__c(u3, s));
  u3 && j(o3, u3, r4), C.__r = 0;
}
function P(n2, l3, u3, t3, i3, o3, r4, f3, e3, a3, h3) {
  var v3, p3, y3, d3, _3, g3 = t3 && t3.__k || s, b3 = l3.length;
  for (u3.__d = e3, S(u3, l3, g3), e3 = u3.__d, v3 = 0; v3 < b3; v3++)
    null != (y3 = u3.__k[v3]) && "boolean" != typeof y3 && "function" != typeof y3 && (p3 = -1 === y3.__i ? c : g3[y3.__i] || c, y3.__i = v3, M(n2, y3, p3, i3, o3, r4, f3, e3, a3, h3), d3 = y3.__e, y3.ref && p3.ref != y3.ref && (p3.ref && N(p3.ref, null, y3), h3.push(y3.ref, y3.__c || d3, y3)), null == _3 && null != d3 && (_3 = d3), 65536 & y3.__u || p3.__k === y3.__k ? e3 = $(y3, e3, n2) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
  u3.__d = e3, u3.__e = _3;
}
function S(n2, l3, u3) {
  var t3, i3, o3, r4, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
  for (n2.__k = [], t3 = 0; t3 < e3; t3++)
    r4 = t3 + a3, null != (i3 = n2.__k[t3] = null == (i3 = l3[t3]) || "boolean" == typeof i3 || "function" == typeof i3 ? null : "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? d(null, i3, null, null, null) : h(i3) ? d(g, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? d(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) ? (i3.__ = n2, i3.__b = n2.__b + 1, f3 = I(i3, u3, r4, s3), i3.__i = f3, o3 = null, -1 !== f3 && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r4 && (f3 === r4 + 1 ? a3++ : f3 > r4 ? s3 > e3 - r4 ? a3 += f3 - r4 : a3-- : f3 < r4 ? f3 == r4 - 1 && (a3 = f3 - r4) : a3 = 0, f3 !== t3 + a3 && (i3.__u |= 65536))) : (o3 = u3[r4]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = m(o3)), O(o3, o3, false), u3[r4] = null, s3--);
  if (s3)
    for (t3 = 0; t3 < c3; t3++)
      null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = m(o3)), O(o3, o3));
}
function $(n2, l3, u3) {
  var t3, i3;
  if ("function" == typeof n2.type) {
    for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++)
      t3[i3] && (t3[i3].__ = n2, l3 = $(t3[i3], l3, u3));
    return l3;
  }
  n2.__e != l3 && (u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 === l3.nodeType);
  return l3;
}
function H(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (h(n2) ? n2.some(function(n3) {
    H(n3, l3);
  }) : l3.push(n2)), l3;
}
function I(n2, l3, u3, t3) {
  var i3 = n2.key, o3 = n2.type, r4 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
  if (null === e3 || e3 && i3 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
    return u3;
  if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
    for (; r4 >= 0 || f3 < l3.length; ) {
      if (r4 >= 0) {
        if ((e3 = l3[r4]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
          return r4;
        r4--;
      }
      if (f3 < l3.length) {
        if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
          return f3;
        f3++;
      }
    }
  return -1;
}
function T(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
}
function A(n2, l3, u3, t3, i3) {
  var o3;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
          for (l3 in t3)
            u3 && l3 in u3 || T(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            t3 && u3[l3] === t3[l3] || T(n2.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = Date.now(), n2.addEventListener(l3, o3 ? L : D, o3)) : n2.removeEventListener(l3, o3 ? L : D, o3);
    else {
      if (i3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && "role" !== l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
    }
}
function D(n2) {
  if (this.l) {
    var u3 = this.l[n2.type + false];
    if (n2.t) {
      if (n2.t <= u3.u)
        return;
    } else
      n2.t = Date.now();
    return u3(l.event ? l.event(n2) : n2);
  }
}
function L(n2) {
  if (this.l)
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function M(n2, u3, t3, i3, o3, r4, f3, e3, c3, s3) {
  var a3, p3, y3, d3, _3, m3, w3, k3, x3, C3, S2, $2, H2, I2, T3, A3 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), r4 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
  n:
    if ("function" == typeof A3)
      try {
        if (k3 = u3.props, x3 = (a3 = A3.contextType) && i3[a3.__c], C3 = a3 ? x3 ? x3.props.value : a3.__ : i3, t3.__c ? w3 = (p3 = u3.__c = t3.__c).__ = p3.__E : ("prototype" in A3 && A3.prototype.render ? u3.__c = p3 = new A3(k3, C3) : (u3.__c = p3 = new b(k3, C3), p3.constructor = A3, p3.render = q), x3 && x3.sub(p3), p3.props = k3, p3.state || (p3.state = {}), p3.context = C3, p3.__n = i3, y3 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != A3.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = v({}, p3.__s)), v(p3.__s, A3.getDerivedStateFromProps(k3, p3.__s))), d3 = p3.props, _3 = p3.state, p3.__v = u3, y3)
          null == A3.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
        else {
          if (null == A3.getDerivedStateFromProps && k3 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(k3, C3), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(k3, p3.__s, C3) || u3.__v === t3.__v)) {
            for (u3.__v !== t3.__v && (p3.props = k3, p3.state = p3.__s, p3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), S2 = 0; S2 < p3._sb.length; S2++)
              p3.__h.push(p3._sb[S2]);
            p3._sb = [], p3.__h.length && f3.push(p3);
            break n;
          }
          null != p3.componentWillUpdate && p3.componentWillUpdate(k3, p3.__s, C3), null != p3.componentDidUpdate && p3.__h.push(function() {
            p3.componentDidUpdate(d3, _3, m3);
          });
        }
        if (p3.context = C3, p3.props = k3, p3.__P = n2, p3.__e = false, $2 = l.__r, H2 = 0, "prototype" in A3 && A3.prototype.render) {
          for (p3.state = p3.__s, p3.__d = false, $2 && $2(u3), a3 = p3.render(p3.props, p3.state, p3.context), I2 = 0; I2 < p3._sb.length; I2++)
            p3.__h.push(p3._sb[I2]);
          p3._sb = [];
        } else
          do {
            p3.__d = false, $2 && $2(u3), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
          } while (p3.__d && ++H2 < 25);
        p3.state = p3.__s, null != p3.getChildContext && (i3 = v(v({}, i3), p3.getChildContext())), y3 || null == p3.getSnapshotBeforeUpdate || (m3 = p3.getSnapshotBeforeUpdate(d3, _3)), P(n2, h(T3 = null != a3 && a3.type === g && null == a3.key ? a3.props.children : a3) ? T3 : [T3], u3, t3, i3, o3, r4, f3, e3, c3, s3), p3.base = u3.__e, u3.__u &= -161, p3.__h.length && f3.push(p3), w3 && (p3.__E = p3.__ = null);
      } catch (n3) {
        u3.__v = null, c3 || null != r4 ? (u3.__e = e3, u3.__u |= c3 ? 160 : 32, r4[r4.indexOf(e3)] = null) : (u3.__e = t3.__e, u3.__k = t3.__k), l.__e(n3, u3, t3);
      }
    else
      null == r4 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i3, o3, r4, f3, c3, s3);
  (a3 = l.diffed) && a3(u3);
}
function j(n2, u3, t3) {
  for (var i3 = 0; i3 < t3.length; i3++)
    N(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function z(l3, u3, t3, i3, o3, r4, f3, e3, s3) {
  var a3, v3, y3, d3, _3, g3, b3, w3 = t3.props, k3 = u3.props, x3 = u3.type;
  if ("svg" === x3 && (o3 = true), null != r4) {
    for (a3 = 0; a3 < r4.length; a3++)
      if ((_3 = r4[a3]) && "setAttribute" in _3 == !!x3 && (x3 ? _3.localName === x3 : 3 === _3.nodeType)) {
        l3 = _3, r4[a3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === x3)
      return document.createTextNode(k3);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", x3) : document.createElement(x3, k3.is && k3), r4 = null, e3 = false;
  }
  if (null === x3)
    w3 === k3 || e3 && l3.data === k3 || (l3.data = k3);
  else {
    if (r4 = r4 && n.call(l3.childNodes), w3 = t3.props || c, !e3 && null != r4)
      for (w3 = {}, a3 = 0; a3 < l3.attributes.length; a3++)
        w3[(_3 = l3.attributes[a3]).name] = _3.value;
    for (a3 in w3)
      _3 = w3[a3], "children" == a3 || ("dangerouslySetInnerHTML" == a3 ? y3 = _3 : "key" === a3 || a3 in k3 || A(l3, a3, null, _3, o3));
    for (a3 in k3)
      _3 = k3[a3], "children" == a3 ? d3 = _3 : "dangerouslySetInnerHTML" == a3 ? v3 = _3 : "value" == a3 ? g3 = _3 : "checked" == a3 ? b3 = _3 : "key" === a3 || e3 && "function" != typeof _3 || w3[a3] === _3 || A(l3, a3, _3, w3[a3], o3);
    if (v3)
      e3 || y3 && (v3.__html === y3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3.__html), u3.__k = [];
    else if (y3 && (l3.innerHTML = ""), P(l3, h(d3) ? d3 : [d3], u3, t3, i3, o3 && "foreignObject" !== x3, r4, f3, r4 ? r4[0] : t3.__k && m(t3, 0), e3, s3), null != r4)
      for (a3 = r4.length; a3--; )
        null != r4[a3] && p(r4[a3]);
    e3 || (a3 = "value", void 0 !== g3 && (g3 !== l3[a3] || "progress" === x3 && !g3 || "option" === x3 && g3 !== w3[a3]) && A(l3, a3, g3, w3[a3], false), a3 = "checked", void 0 !== b3 && b3 !== l3[a3] && A(l3, a3, b3, w3[a3], false));
  }
  return l3;
}
function N(n2, u3, t3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function O(n2, u3, t3) {
  var i3, o3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    i3.base = i3.__P = null, n2.__c = void 0;
  }
  if (i3 = n2.__k)
    for (o3 = 0; o3 < i3.length; o3++)
      i3[o3] && O(i3[o3], u3, t3 || "function" != typeof n2.type);
  t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function B(u3, t3, i3) {
  var o3, r4, f3, e3;
  l.__ && l.__(u3, t3), r4 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], M(t3, u3 = (!o3 && i3 || t3).__k = y(g, null, [u3]), r4 || c, c, void 0 !== t3.ownerSVGElement, !o3 && i3 ? [i3] : r4 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r4 ? r4.__e : t3.firstChild, o3, e3), u3.__d = void 0, j(f3, u3, e3);
}
function E(n2, l3) {
  B(n2, l3, E);
}
function F(l3, u3, t3) {
  var i3, o3, r4, f3, e3 = v({}, l3.props);
  for (r4 in l3.type && l3.type.defaultProps && (f3 = l3.type.defaultProps), u3)
    "key" == r4 ? i3 = u3[r4] : "ref" == r4 ? o3 = u3[r4] : e3[r4] = void 0 === u3[r4] && void 0 !== f3 ? f3[r4] : u3[r4];
  return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), d(l3.type, e3, i3 || l3.key, o3 || l3.ref, null);
}
function G(n2, l3) {
  var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
    return n3.children(l4);
  }, Provider: function(n3) {
    var u4, t3;
    return this.getChildContext || (u4 = [], (t3 = {})[l3] = this, this.getChildContext = function() {
      return t3;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.some(function(n5) {
        n5.__e = true, x(n5);
      });
    }, this.sub = function(n4) {
      u4.push(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
var n, l, u, t, i, o, r, f, e, c, s, a, h;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    c = {};
    s = [];
    a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    h = Array.isArray;
    n = s.slice, l = { __e: function(n2, l3, u3, t3) {
      for (var i3, o3, r4; l3 = l3.__; )
        if ((i3 = l3.__c) && !i3.__)
          try {
            if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r4 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r4 = i3.__d), r4)
              return i3.__E = i3;
          } catch (l4) {
            n2 = l4;
          }
      throw n2;
    } }, u = 0, t = function(n2) {
      return null != n2 && null == n2.constructor;
    }, b.prototype.setState = function(n2, l3) {
      var u3;
      u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u3), this.props)), n2 && v(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), x(this));
    }, b.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), x(this));
    }, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
      return n2.__v.__b - l3.__v.__b;
    }, C.__r = 0, e = 0;
  }
});

// node_modules/clsx/dist/clsx.m.js
var clsx_m_exports = {};
__export(clsx_m_exports, {
  clsx: () => clsx,
  default: () => clsx_m_default
});
function r2(e3) {
  var t3, f3, n2 = "";
  if ("string" == typeof e3 || "number" == typeof e3)
    n2 += e3;
  else if ("object" == typeof e3)
    if (Array.isArray(e3))
      for (t3 = 0; t3 < e3.length; t3++)
        e3[t3] && (f3 = r2(e3[t3])) && (n2 && (n2 += " "), n2 += f3);
    else
      for (t3 in e3)
        e3[t3] && (n2 && (n2 += " "), n2 += t3);
  return n2;
}
function clsx() {
  for (var e3, t3, f3 = 0, n2 = ""; f3 < arguments.length; )
    (e3 = arguments[f3++]) && (t3 = r2(e3)) && (n2 && (n2 += " "), n2 += t3);
  return n2;
}
var clsx_m_default;
var init_clsx_m = __esm({
  "node_modules/clsx/dist/clsx.m.js"() {
    clsx_m_default = clsx;
  }
});

// node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_exports = {};
__export(hooks_module_exports, {
  useCallback: () => x2,
  useContext: () => P2,
  useDebugValue: () => V,
  useEffect: () => _2,
  useErrorBoundary: () => b2,
  useId: () => g2,
  useImperativeHandle: () => T2,
  useLayoutEffect: () => A2,
  useMemo: () => q2,
  useReducer: () => y2,
  useRef: () => F2,
  useState: () => p2
});
function h2(n2, t3) {
  e2.__h && e2.__h(r3, n2, o2 || t3), o2 = 0;
  var u3 = r3.__H || (r3.__H = { __: [], __h: [] });
  return n2 >= u3.__.length && u3.__.push({ __V: c2 }), u3.__[n2];
}
function p2(n2) {
  return o2 = 1, y2(D2, n2);
}
function y2(n2, u3, i3) {
  var o3 = h2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r4 = o3.t(t3, n3);
    t3 !== r4 && (o3.__N = [r4, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r3, !r3.u)) {
    var f3 = function(n3, t3, r4) {
      if (!o3.__c.__H)
        return true;
      var u4 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !c3 || c3.call(this, n3, t3, r4);
      var i4 = false;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r4));
    };
    r3.u = true;
    var c3 = r3.shouldComponentUpdate, e3 = r3.componentWillUpdate;
    r3.componentWillUpdate = function(n3, t3, r4) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n3, t3, r4), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r4);
    }, r3.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function _2(n2, u3) {
  var i3 = h2(t2++, 3);
  !e2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r3.__H.__h.push(i3));
}
function A2(n2, u3) {
  var i3 = h2(t2++, 4);
  !e2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r3.__h.push(i3));
}
function F2(n2) {
  return o2 = 5, q2(function() {
    return { current: n2 };
  }, []);
}
function T2(n2, t3, r4) {
  o2 = 6, A2(function() {
    return "function" == typeof n2 ? (n2(t3()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t3(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r4 ? r4 : r4.concat(n2));
}
function q2(n2, r4) {
  var u3 = h2(t2++, 7);
  return C2(u3.__H, r4) ? (u3.__V = n2(), u3.i = r4, u3.__h = n2, u3.__V) : u3.__;
}
function x2(n2, t3) {
  return o2 = 8, q2(function() {
    return n2;
  }, t3);
}
function P2(n2) {
  var u3 = r3.context[n2.__c], i3 = h2(t2++, 9);
  return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r3)), u3.props.value) : n2.__;
}
function V(n2, t3) {
  e2.useDebugValue && e2.useDebugValue(t3 ? t3(n2) : n2);
}
function b2(n2) {
  var u3 = h2(t2++, 10), i3 = p2();
  return u3.__ = n2, r3.componentDidCatch || (r3.componentDidCatch = function(n3, t3) {
    u3.__ && u3.__(n3, t3), i3[1](n3);
  }), [i3[0], function() {
    i3[1](void 0);
  }];
}
function g2() {
  var n2 = h2(t2++, 11);
  if (!n2.__) {
    for (var u3 = r3.__v; null !== u3 && !u3.__m && null !== u3.__; )
      u3 = u3.__;
    var i3 = u3.__m || (u3.__m = [0, 0]);
    n2.__ = "P" + i3[0] + "-" + i3[1]++;
  }
  return n2.__;
}
function j2() {
  for (var n2; n2 = f2.shift(); )
    if (n2.__P && n2.__H)
      try {
        n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
      } catch (t3) {
        n2.__H.__h = [], e2.__e(t3, n2.__v);
      }
}
function w2(n2) {
  var t3, r4 = function() {
    clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r4, 100);
  k2 && (t3 = requestAnimationFrame(r4));
}
function z2(n2) {
  var t3 = r3, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r3 = t3;
}
function B2(n2) {
  var t3 = r3;
  n2.__c = n2.__(), r3 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r4) {
    return t4 !== n2[r4];
  });
}
function D2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}
var t2, r3, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, s2, d2, k2;
var init_hooks_module = __esm({
  "node_modules/preact/hooks/dist/hooks.module.js"() {
    init_preact_module();
    o2 = 0;
    f2 = [];
    c2 = [];
    e2 = l;
    a2 = e2.__b;
    v2 = e2.__r;
    l2 = e2.diffed;
    m2 = e2.__c;
    s2 = e2.unmount;
    d2 = e2.__;
    e2.__b = function(n2) {
      r3 = null, a2 && a2(n2);
    }, e2.__ = function(n2, t3) {
      n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), d2 && d2(n2, t3);
    }, e2.__r = function(n2) {
      v2 && v2(n2), t2 = 0;
      var i3 = (r3 = n2.__c).__H;
      i3 && (u2 === r3 ? (i3.__h = [], r3.__h = [], i3.__.forEach(function(n3) {
        n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
      })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r3;
    }, e2.diffed = function(n2) {
      l2 && l2(n2);
      var t3 = n2.__c;
      t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === e2.requestAnimationFrame || ((i2 = e2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
        n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
      })), u2 = r3 = null;
    }, e2.__c = function(n2, t3) {
      t3.some(function(n3) {
        try {
          n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
            return !n4.__ || B2(n4);
          });
        } catch (r4) {
          t3.some(function(n4) {
            n4.__h && (n4.__h = []);
          }), t3 = [], e2.__e(r4, n3.__v);
        }
      }), m2 && m2(n2, t3);
    }, e2.unmount = function(n2) {
      s2 && s2(n2);
      var t3, r4 = n2.__c;
      r4 && r4.__H && (r4.__H.__.forEach(function(n3) {
        try {
          z2(n3);
        } catch (n4) {
          t3 = n4;
        }
      }), r4.__H = void 0, t3 && e2.__e(t3, r4.__v));
    };
    k2 = "function" == typeof requestAnimationFrame;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/CloseIcon.js
var require_CloseIcon = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/CloseIcon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloseIcon = void 0;
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    function CloseIcon(props) {
      return (0, preact_1.h)(
        "svg",
        Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1.h)("path", { d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z" })
      );
    }
    exports.CloseIcon = CloseIcon;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/CoinbaseWalletRound.js
var require_CoinbaseWalletRound = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/CoinbaseWalletRound.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoinbaseWalletRound = void 0;
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    function CoinbaseWalletRound(props) {
      return (0, preact_1.h)(
        "svg",
        Object.assign({ width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1.h)("circle", { cx: "14", cy: "14", r: "14", fill: "#0052FF" }),
        (0, preact_1.h)("path", { d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z", fill: "white" }),
        (0, preact_1.h)("path", { d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z", fill: "#0052FF" })
      );
    }
    exports.CoinbaseWalletRound = CoinbaseWalletRound;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/QRCodeIcon.js
var require_QRCodeIcon = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/QRCodeIcon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QRCodeIcon = void 0;
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    function QRCodeIcon(props) {
      return (0, preact_1.h)(
        "svg",
        Object.assign({ width: "18", height: "18", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1.h)("path", { d: "M3 3V8.99939L5 8.99996V5H9V3H3Z" }),
        (0, preact_1.h)("path", { d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z" }),
        (0, preact_1.h)("path", { d: "M21 9H19V5H15.0006L15 3H21V9Z" }),
        (0, preact_1.h)("path", { d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z" })
      );
    }
    exports.QRCodeIcon = QRCodeIcon;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/qrcode-svg/index.js
var require_qrcode_svg = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/qrcode-svg/index.js"(exports, module) {
    function QR8bitByte(data) {
      this.mode = QRMode.MODE_8BIT_BYTE;
      this.data = data;
      this.parsedData = [];
      for (var i4 = 0, l3 = this.data.length; i4 < l3; i4++) {
        var byteArray = [];
        var code = this.data.charCodeAt(i4);
        if (code > 65536) {
          byteArray[0] = 240 | (code & 1835008) >>> 18;
          byteArray[1] = 128 | (code & 258048) >>> 12;
          byteArray[2] = 128 | (code & 4032) >>> 6;
          byteArray[3] = 128 | code & 63;
        } else if (code > 2048) {
          byteArray[0] = 224 | (code & 61440) >>> 12;
          byteArray[1] = 128 | (code & 4032) >>> 6;
          byteArray[2] = 128 | code & 63;
        } else if (code > 128) {
          byteArray[0] = 192 | (code & 1984) >>> 6;
          byteArray[1] = 128 | code & 63;
        } else {
          byteArray[0] = code;
        }
        this.parsedData.push(byteArray);
      }
      this.parsedData = Array.prototype.concat.apply([], this.parsedData);
      if (this.parsedData.length != this.data.length) {
        this.parsedData.unshift(191);
        this.parsedData.unshift(187);
        this.parsedData.unshift(239);
      }
    }
    QR8bitByte.prototype = {
      getLength: function(buffer) {
        return this.parsedData.length;
      },
      write: function(buffer) {
        for (var i4 = 0, l3 = this.parsedData.length; i4 < l3; i4++) {
          buffer.put(this.parsedData[i4], 8);
        }
      }
    };
    function QRCodeModel(typeNumber, errorCorrectLevel) {
      this.typeNumber = typeNumber;
      this.errorCorrectLevel = errorCorrectLevel;
      this.modules = null;
      this.moduleCount = 0;
      this.dataCache = null;
      this.dataList = [];
    }
    QRCodeModel.prototype = { addData: function(data) {
      var newData = new QR8bitByte(data);
      this.dataList.push(newData);
      this.dataCache = null;
    }, isDark: function(row, col) {
      if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
        throw new Error(row + "," + col);
      }
      return this.modules[row][col];
    }, getModuleCount: function() {
      return this.moduleCount;
    }, make: function() {
      this.makeImpl(false, this.getBestMaskPattern());
    }, makeImpl: function(test, maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);
        for (var col = 0; col < this.moduleCount; col++) {
          this.modules[row][col] = null;
        }
      }
      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(test, maskPattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(test);
      }
      if (this.dataCache == null) {
        this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
      }
      this.mapData(this.dataCache, maskPattern);
    }, setupPositionProbePattern: function(row, col) {
      for (var r4 = -1; r4 <= 7; r4++) {
        if (row + r4 <= -1 || this.moduleCount <= row + r4)
          continue;
        for (var c3 = -1; c3 <= 7; c3++) {
          if (col + c3 <= -1 || this.moduleCount <= col + c3)
            continue;
          if (0 <= r4 && r4 <= 6 && (c3 == 0 || c3 == 6) || 0 <= c3 && c3 <= 6 && (r4 == 0 || r4 == 6) || 2 <= r4 && r4 <= 4 && 2 <= c3 && c3 <= 4) {
            this.modules[row + r4][col + c3] = true;
          } else {
            this.modules[row + r4][col + c3] = false;
          }
        }
      }
    }, getBestMaskPattern: function() {
      var minLostPoint = 0;
      var pattern2 = 0;
      for (var i4 = 0; i4 < 8; i4++) {
        this.makeImpl(true, i4);
        var lostPoint = QRUtil.getLostPoint(this);
        if (i4 == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern2 = i4;
        }
      }
      return pattern2;
    }, createMovieClip: function(target_mc, instance_name, depth) {
      var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
      var cs = 1;
      this.make();
      for (var row = 0; row < this.modules.length; row++) {
        var y3 = row * cs;
        for (var col = 0; col < this.modules[row].length; col++) {
          var x3 = col * cs;
          var dark = this.modules[row][col];
          if (dark) {
            qr_mc.beginFill(0, 100);
            qr_mc.moveTo(x3, y3);
            qr_mc.lineTo(x3 + cs, y3);
            qr_mc.lineTo(x3 + cs, y3 + cs);
            qr_mc.lineTo(x3, y3 + cs);
            qr_mc.endFill();
          }
        }
      }
      return qr_mc;
    }, setupTimingPattern: function() {
      for (var r4 = 8; r4 < this.moduleCount - 8; r4++) {
        if (this.modules[r4][6] != null) {
          continue;
        }
        this.modules[r4][6] = r4 % 2 == 0;
      }
      for (var c3 = 8; c3 < this.moduleCount - 8; c3++) {
        if (this.modules[6][c3] != null) {
          continue;
        }
        this.modules[6][c3] = c3 % 2 == 0;
      }
    }, setupPositionAdjustPattern: function() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);
      for (var i4 = 0; i4 < pos.length; i4++) {
        for (var j3 = 0; j3 < pos.length; j3++) {
          var row = pos[i4];
          var col = pos[j3];
          if (this.modules[row][col] != null) {
            continue;
          }
          for (var r4 = -2; r4 <= 2; r4++) {
            for (var c3 = -2; c3 <= 2; c3++) {
              if (r4 == -2 || r4 == 2 || c3 == -2 || c3 == 2 || r4 == 0 && c3 == 0) {
                this.modules[row + r4][col + c3] = true;
              } else {
                this.modules[row + r4][col + c3] = false;
              }
            }
          }
        }
      }
    }, setupTypeNumber: function(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
      for (var i4 = 0; i4 < 18; i4++) {
        var mod = !test && (bits >> i4 & 1) == 1;
        this.modules[Math.floor(i4 / 3)][i4 % 3 + this.moduleCount - 8 - 3] = mod;
      }
      for (var i4 = 0; i4 < 18; i4++) {
        var mod = !test && (bits >> i4 & 1) == 1;
        this.modules[i4 % 3 + this.moduleCount - 8 - 3][Math.floor(i4 / 3)] = mod;
      }
    }, setupTypeInfo: function(test, maskPattern) {
      var data = this.errorCorrectLevel << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);
      for (var i4 = 0; i4 < 15; i4++) {
        var mod = !test && (bits >> i4 & 1) == 1;
        if (i4 < 6) {
          this.modules[i4][8] = mod;
        } else if (i4 < 8) {
          this.modules[i4 + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i4][8] = mod;
        }
      }
      for (var i4 = 0; i4 < 15; i4++) {
        var mod = !test && (bits >> i4 & 1) == 1;
        if (i4 < 8) {
          this.modules[8][this.moduleCount - i4 - 1] = mod;
        } else if (i4 < 9) {
          this.modules[8][15 - i4 - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i4 - 1] = mod;
        }
      }
      this.modules[this.moduleCount - 8][8] = !test;
    }, mapData: function(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6)
          col--;
        while (true) {
          for (var c3 = 0; c3 < 2; c3++) {
            if (this.modules[row][col - c3] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              var mask2 = QRUtil.getMask(maskPattern, row, col - c3);
              if (mask2) {
                dark = !dark;
              }
              this.modules[row][col - c3] = dark;
              bitIndex--;
              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    } };
    QRCodeModel.PAD0 = 236;
    QRCodeModel.PAD1 = 17;
    QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
      var buffer = new QRBitBuffer();
      for (var i4 = 0; i4 < dataList.length; i4++) {
        var data = dataList[i4];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
      }
      var totalDataCount = 0;
      for (var i4 = 0; i4 < rsBlocks.length; i4++) {
        totalDataCount += rsBlocks[i4].dataCount;
      }
      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
      }
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }
      while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeModel.PAD0, 8);
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeModel.PAD1, 8);
      }
      return QRCodeModel.createBytes(buffer, rsBlocks);
    };
    QRCodeModel.createBytes = function(buffer, rsBlocks) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);
      for (var r4 = 0; r4 < rsBlocks.length; r4++) {
        var dcCount = rsBlocks[r4].dataCount;
        var ecCount = rsBlocks[r4].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r4] = new Array(dcCount);
        for (var i4 = 0; i4 < dcdata[r4].length; i4++) {
          dcdata[r4][i4] = 255 & buffer.buffer[i4 + offset];
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r4], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r4] = new Array(rsPoly.getLength() - 1);
        for (var i4 = 0; i4 < ecdata[r4].length; i4++) {
          var modIndex = i4 + modPoly.getLength() - ecdata[r4].length;
          ecdata[r4][i4] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }
      var totalCodeCount = 0;
      for (var i4 = 0; i4 < rsBlocks.length; i4++) {
        totalCodeCount += rsBlocks[i4].totalCount;
      }
      var data = new Array(totalCodeCount);
      var index = 0;
      for (var i4 = 0; i4 < maxDcCount; i4++) {
        for (var r4 = 0; r4 < rsBlocks.length; r4++) {
          if (i4 < dcdata[r4].length) {
            data[index++] = dcdata[r4][i4];
          }
        }
      }
      for (var i4 = 0; i4 < maxEcCount; i4++) {
        for (var r4 = 0; r4 < rsBlocks.length; r4++) {
          if (i4 < ecdata[r4].length) {
            data[index++] = ecdata[r4][i4];
          }
        }
      }
      return data;
    };
    var QRMode = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 };
    var QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };
    var QRMaskPattern = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
    var QRUtil = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, getBCHTypeInfo: function(data) {
      var d3 = data << 10;
      while (QRUtil.getBCHDigit(d3) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d3 ^= QRUtil.G15 << QRUtil.getBCHDigit(d3) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d3) ^ QRUtil.G15_MASK;
    }, getBCHTypeNumber: function(data) {
      var d3 = data << 12;
      while (QRUtil.getBCHDigit(d3) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d3 ^= QRUtil.G18 << QRUtil.getBCHDigit(d3) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d3;
    }, getBCHDigit: function(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    }, getPatternPosition: function(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    }, getMask: function(maskPattern, i4, j3) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i4 + j3) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i4 % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j3 % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i4 + j3) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i4 / 2) + Math.floor(j3 / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i4 * j3 % 2 + i4 * j3 % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i4 * j3 % 2 + i4 * j3 % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i4 * j3 % 3 + (i4 + j3) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }, getErrorCorrectPolynomial: function(errorCorrectLength) {
      var a3 = new QRPolynomial([1], 0);
      for (var i4 = 0; i4 < errorCorrectLength; i4++) {
        a3 = a3.multiply(new QRPolynomial([1, QRMath.gexp(i4)], 0));
      }
      return a3;
    }, getLengthInBits: function(mode, type2) {
      if (1 <= type2 && type2 < 10) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 10;
          case QRMode.MODE_ALPHA_NUM:
            return 9;
          case QRMode.MODE_8BIT_BYTE:
            return 8;
          case QRMode.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + mode);
        }
      } else if (type2 < 27) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 12;
          case QRMode.MODE_ALPHA_NUM:
            return 11;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + mode);
        }
      } else if (type2 < 41) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 14;
          case QRMode.MODE_ALPHA_NUM:
            return 13;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + mode);
        }
      } else {
        throw new Error("type:" + type2);
      }
    }, getLostPoint: function(qrCode) {
      var moduleCount = qrCode.getModuleCount();
      var lostPoint = 0;
      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount; col++) {
          var sameCount = 0;
          var dark = qrCode.isDark(row, col);
          for (var r4 = -1; r4 <= 1; r4++) {
            if (row + r4 < 0 || moduleCount <= row + r4) {
              continue;
            }
            for (var c3 = -1; c3 <= 1; c3++) {
              if (col + c3 < 0 || moduleCount <= col + c3) {
                continue;
              }
              if (r4 == 0 && c3 == 0) {
                continue;
              }
              if (dark == qrCode.isDark(row + r4, col + c3)) {
                sameCount++;
              }
            }
          }
          if (sameCount > 5) {
            lostPoint += 3 + sameCount - 5;
          }
        }
      }
      for (var row = 0; row < moduleCount - 1; row++) {
        for (var col = 0; col < moduleCount - 1; col++) {
          var count = 0;
          if (qrCode.isDark(row, col))
            count++;
          if (qrCode.isDark(row + 1, col))
            count++;
          if (qrCode.isDark(row, col + 1))
            count++;
          if (qrCode.isDark(row + 1, col + 1))
            count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }
      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount - 6; col++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
            lostPoint += 40;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount - 6; row++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
            lostPoint += 40;
          }
        }
      }
      var darkCount = 0;
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount; row++) {
          if (qrCode.isDark(row, col)) {
            darkCount++;
          }
        }
      }
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    } };
    var QRMath = { glog: function(n2) {
      if (n2 < 1) {
        throw new Error("glog(" + n2 + ")");
      }
      return QRMath.LOG_TABLE[n2];
    }, gexp: function(n2) {
      while (n2 < 0) {
        n2 += 255;
      }
      while (n2 >= 256) {
        n2 -= 255;
      }
      return QRMath.EXP_TABLE[n2];
    }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
    for (i3 = 0; i3 < 8; i3++) {
      QRMath.EXP_TABLE[i3] = 1 << i3;
    }
    var i3;
    for (i3 = 8; i3 < 256; i3++) {
      QRMath.EXP_TABLE[i3] = QRMath.EXP_TABLE[i3 - 4] ^ QRMath.EXP_TABLE[i3 - 5] ^ QRMath.EXP_TABLE[i3 - 6] ^ QRMath.EXP_TABLE[i3 - 8];
    }
    var i3;
    for (i3 = 0; i3 < 255; i3++) {
      QRMath.LOG_TABLE[QRMath.EXP_TABLE[i3]] = i3;
    }
    var i3;
    function QRPolynomial(num, shift) {
      if (num.length == void 0) {
        throw new Error(num.length + "/" + shift);
      }
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset++;
      }
      this.num = new Array(num.length - offset + shift);
      for (var i4 = 0; i4 < num.length - offset; i4++) {
        this.num[i4] = num[i4 + offset];
      }
    }
    QRPolynomial.prototype = { get: function(index) {
      return this.num[index];
    }, getLength: function() {
      return this.num.length;
    }, multiply: function(e3) {
      var num = new Array(this.getLength() + e3.getLength() - 1);
      for (var i4 = 0; i4 < this.getLength(); i4++) {
        for (var j3 = 0; j3 < e3.getLength(); j3++) {
          num[i4 + j3] ^= QRMath.gexp(QRMath.glog(this.get(i4)) + QRMath.glog(e3.get(j3)));
        }
      }
      return new QRPolynomial(num, 0);
    }, mod: function(e3) {
      if (this.getLength() - e3.getLength() < 0) {
        return this;
      }
      var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e3.get(0));
      var num = new Array(this.getLength());
      for (var i4 = 0; i4 < this.getLength(); i4++) {
        num[i4] = this.get(i4);
      }
      for (var i4 = 0; i4 < e3.getLength(); i4++) {
        num[i4] ^= QRMath.gexp(QRMath.glog(e3.get(i4)) + ratio);
      }
      return new QRPolynomial(num, 0).mod(e3);
    } };
    function QRRSBlock(totalCount, dataCount) {
      this.totalCount = totalCount;
      this.dataCount = dataCount;
    }
    QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
    QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
      var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
      if (rsBlock == void 0) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
      }
      var length = rsBlock.length / 3;
      var list = [];
      for (var i4 = 0; i4 < length; i4++) {
        var count = rsBlock[i4 * 3 + 0];
        var totalCount = rsBlock[i4 * 3 + 1];
        var dataCount = rsBlock[i4 * 3 + 2];
        for (var j3 = 0; j3 < count; j3++) {
          list.push(new QRRSBlock(totalCount, dataCount));
        }
      }
      return list;
    };
    QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
      switch (errorCorrectLevel) {
        case QRErrorCorrectLevel.L:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    function QRBitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    QRBitBuffer.prototype = { get: function(index) {
      var bufIndex = Math.floor(index / 8);
      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    }, put: function(num, length) {
      for (var i4 = 0; i4 < length; i4++) {
        this.putBit((num >>> length - i4 - 1 & 1) == 1);
      }
    }, getLengthInBits: function() {
      return this.length;
    }, putBit: function(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 128 >>> this.length % 8;
      }
      this.length++;
    } };
    var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
    function QRCode(options) {
      var instance2 = this;
      this.options = {
        padding: 4,
        width: 256,
        height: 256,
        typeNumber: 4,
        color: "#000000",
        background: "#ffffff",
        ecl: "M",
        image: {
          svg: "",
          width: 0,
          height: 0
        }
      };
      if (typeof options === "string") {
        options = {
          content: options
        };
      }
      if (options) {
        for (var i4 in options) {
          this.options[i4] = options[i4];
        }
      }
      if (typeof this.options.content !== "string") {
        throw new Error("Expected 'content' as string!");
      }
      if (this.options.content.length === 0) {
        throw new Error("Expected 'content' to be non-empty!");
      }
      if (!(this.options.padding >= 0)) {
        throw new Error("Expected 'padding' value to be non-negative!");
      }
      if (!(this.options.width > 0) || !(this.options.height > 0)) {
        throw new Error("Expected 'width' or 'height' value to be higher than zero!");
      }
      function _getErrorCorrectLevel(ecl2) {
        switch (ecl2) {
          case "L":
            return QRErrorCorrectLevel.L;
          case "M":
            return QRErrorCorrectLevel.M;
          case "Q":
            return QRErrorCorrectLevel.Q;
          case "H":
            return QRErrorCorrectLevel.H;
          default:
            throw new Error("Unknwon error correction level: " + ecl2);
        }
      }
      function _getTypeNumber(content2, ecl2) {
        var length = _getUTF8Length(content2);
        var type3 = 1;
        var limit = 0;
        for (var i5 = 0, len = QRCodeLimitLength.length; i5 <= len; i5++) {
          var table = QRCodeLimitLength[i5];
          if (!table) {
            throw new Error("Content too long: expected " + limit + " but got " + length);
          }
          switch (ecl2) {
            case "L":
              limit = table[0];
              break;
            case "M":
              limit = table[1];
              break;
            case "Q":
              limit = table[2];
              break;
            case "H":
              limit = table[3];
              break;
            default:
              throw new Error("Unknwon error correction level: " + ecl2);
          }
          if (length <= limit) {
            break;
          }
          type3++;
        }
        if (type3 > QRCodeLimitLength.length) {
          throw new Error("Content too long");
        }
        return type3;
      }
      function _getUTF8Length(content2) {
        var result = encodeURI(content2).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return result.length + (result.length != content2 ? 3 : 0);
      }
      var content = this.options.content;
      var type2 = _getTypeNumber(content, this.options.ecl);
      var ecl = _getErrorCorrectLevel(this.options.ecl);
      this.qrcode = new QRCodeModel(type2, ecl);
      this.qrcode.addData(content);
      this.qrcode.make();
    }
    QRCode.prototype.svg = function(opt) {
      var options = this.options || {};
      var modules = this.qrcode.modules;
      if (typeof opt == "undefined") {
        opt = { container: options.container || "svg" };
      }
      var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;
      var indent = pretty ? "  " : "";
      var EOL = pretty ? "\r\n" : "";
      var width = options.width;
      var height = options.height;
      var length = modules.length;
      var xsize = width / (length + 2 * options.padding);
      var ysize = height / (length + 2 * options.padding);
      var join = typeof options.join != "undefined" ? !!options.join : false;
      var swap = typeof options.swap != "undefined" ? !!options.swap : false;
      var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true;
      var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
      var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + " v" + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : "";
      var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL;
      var modrect = "";
      var pathdata = "";
      for (var y3 = 0; y3 < length; y3++) {
        for (var x3 = 0; x3 < length; x3++) {
          var module2 = modules[x3][y3];
          if (module2) {
            var px = x3 * xsize + options.padding * xsize;
            var py = y3 * ysize + options.padding * ysize;
            if (swap) {
              var t3 = px;
              px = py;
              py = t3;
            }
            if (join) {
              var w3 = xsize + px;
              var h3 = ysize + py;
              px = Number.isInteger(px) ? Number(px) : px.toFixed(2);
              py = Number.isInteger(py) ? Number(py) : py.toFixed(2);
              w3 = Number.isInteger(w3) ? Number(w3) : w3.toFixed(2);
              h3 = Number.isInteger(h3) ? Number(h3) : h3.toFixed(2);
              pathdata += "M" + px + "," + py + " V" + h3 + " H" + w3 + " V" + py + " H" + px + " Z ";
            } else if (predefined) {
              modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
            } else {
              modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
            }
          }
        }
      }
      if (join) {
        modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
      }
      let imgSvg = "";
      if (this.options.image !== void 0 && this.options.image.svg) {
        const imgWidth = width * this.options.image.width / 100;
        const imgHeight = height * this.options.image.height / 100;
        const imgX = width / 2 - imgWidth / 2;
        const imgY = height / 2 - imgHeight / 2;
        imgSvg += `<svg x="${imgX}" y="${imgY}" width="${imgWidth}" height="${imgHeight}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`;
        imgSvg += this.options.image.svg + EOL;
        imgSvg += "</svg>";
      }
      var svg = "";
      switch (opt.container) {
        case "svg":
          if (xmlDeclaration) {
            svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
          }
          svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
          svg += defs + bgrect + modrect;
          svg += imgSvg;
          svg += "</svg>";
          break;
        case "svg-viewbox":
          if (xmlDeclaration) {
            svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
          }
          svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + " " + height + '">' + EOL;
          svg += defs + bgrect + modrect;
          svg += imgSvg;
          svg += "</svg>";
          break;
        case "g":
          svg += '<g width="' + width + '" height="' + height + '">' + EOL;
          svg += defs + bgrect + modrect;
          svg += imgSvg;
          svg += "</g>";
          break;
        default:
          svg += (defs + bgrect + modrect + imgSvg).replace(/^\s+/, "");
          break;
      }
      return svg;
    };
    module.exports = QRCode;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/QRCode.js
var require_QRCode = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/QRCode.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QRCode = void 0;
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var hooks_1 = (init_hooks_module(), __toCommonJS(hooks_module_exports));
    var qrcode_svg_1 = __importDefault2(require_qrcode_svg());
    var QRCode = (props) => {
      const [svg, setSvg] = (0, hooks_1.useState)("");
      (0, hooks_1.useEffect)(() => {
        var _a, _b;
        const qrcode = new qrcode_svg_1.default({
          content: props.content,
          background: props.bgColor || "#ffffff",
          color: props.fgColor || "#000000",
          container: "svg",
          ecl: "M",
          width: (_a = props.width) !== null && _a !== void 0 ? _a : 256,
          height: (_b = props.height) !== null && _b !== void 0 ? _b : 256,
          padding: 0,
          image: props.image
        });
        const base64 = Buffer.from(qrcode.svg(), "utf8").toString("base64");
        setSvg(`data:image/svg+xml;base64,${base64}`);
      }, [props.bgColor, props.content, props.fgColor, props.height, props.image, props.width]);
      return svg ? (0, preact_1.h)("img", { src: svg, alt: "QR Code" }) : null;
    };
    exports.QRCode = QRCode;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Spinner/Spinner-css.js
var require_Spinner_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Spinner/Spinner-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Spinner/Spinner.js
var require_Spinner = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Spinner/Spinner.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Spinner = void 0;
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var Spinner_css_1 = __importDefault2(require_Spinner_css());
    var Spinner = (props) => {
      var _a;
      const size2 = (_a = props.size) !== null && _a !== void 0 ? _a : 64;
      const color = props.color || "#000";
      return (0, preact_1.h)(
        "div",
        { class: "-cbwsdk-spinner" },
        (0, preact_1.h)("style", null, Spinner_css_1.default),
        (0, preact_1.h)(
          "svg",
          { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", style: { width: size2, height: size2 } },
          (0, preact_1.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: color } })
        )
      );
    };
    exports.Spinner = Spinner;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/ConnectContent/ConnectContent-css.js
var require_ConnectContent_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/ConnectContent/ConnectContent-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/ConnectContent/ConnectContent.js
var require_ConnectContent = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/ConnectContent/ConnectContent.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoinbaseWalletSteps = exports.ConnectContent = void 0;
    var clsx_1 = __importDefault2((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var util_1 = require_util();
    var version_1 = require_version();
    var CloseIcon_1 = require_CloseIcon();
    var CoinbaseWalletRound_1 = require_CoinbaseWalletRound();
    var QRCodeIcon_1 = require_QRCodeIcon();
    var QRCode_1 = require_QRCode();
    var Spinner_1 = require_Spinner();
    var ConnectContent_css_1 = __importDefault2(require_ConnectContent_css());
    var wallet = {
      title: "Coinbase Wallet app",
      description: "Connect with your self-custody wallet",
      steps: CoinbaseWalletSteps
    };
    var makeIconColor = (theme) => {
      return theme === "light" ? "#FFFFFF" : "#0A0B0D";
    };
    function ConnectContent(props) {
      const { theme } = props;
      const qrUrl = (0, util_1.createQrUrl)(props.sessionId, props.sessionSecret, props.linkAPIUrl, props.isParentConnection, props.version, props.chainId);
      const WalletSteps = wallet.steps;
      return (0, preact_1.h)(
        "div",
        { "data-testid": "connect-content", className: (0, clsx_1.default)("-cbwsdk-connect-content", theme) },
        (0, preact_1.h)("style", null, ConnectContent_css_1.default),
        (0, preact_1.h)(
          "div",
          { className: "-cbwsdk-connect-content-header" },
          (0, preact_1.h)("h2", { className: (0, clsx_1.default)("-cbwsdk-connect-content-heading", theme) }, "Scan to connect with our mobile app"),
          props.onCancel && (0, preact_1.h)(
            "button",
            { type: "button", className: "-cbwsdk-cancel-button", onClick: props.onCancel },
            (0, preact_1.h)(CloseIcon_1.CloseIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })
          )
        ),
        (0, preact_1.h)(
          "div",
          { className: "-cbwsdk-connect-content-layout" },
          (0, preact_1.h)(
            "div",
            { className: "-cbwsdk-connect-content-column-left" },
            (0, preact_1.h)(ConnectItem, { title: wallet.title, description: wallet.description, theme })
          ),
          (0, preact_1.h)(
            "div",
            { className: "-cbwsdk-connect-content-column-right" },
            (0, preact_1.h)(
              "div",
              { className: "-cbwsdk-connect-content-qr-wrapper" },
              (0, preact_1.h)(QRCode_1.QRCode, { content: qrUrl, width: 200, height: 200, fgColor: "#000", bgColor: "transparent" }),
              (0, preact_1.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: version_1.LIB_VERSION }),
              (0, preact_1.h)("input", { type: "hidden", value: qrUrl })
            ),
            (0, preact_1.h)(WalletSteps, { theme }),
            !props.isConnected && (0, preact_1.h)(
              "div",
              { "data-testid": "connecting-spinner", className: (0, clsx_1.default)("-cbwsdk-connect-content-qr-connecting", theme) },
              (0, preact_1.h)(Spinner_1.Spinner, { size: 36, color: theme === "dark" ? "#FFF" : "#000" }),
              (0, preact_1.h)("p", null, "Connecting...")
            )
          )
        )
      );
    }
    exports.ConnectContent = ConnectContent;
    function ConnectItem({ title, description, theme }) {
      return (0, preact_1.h)(
        "div",
        { className: (0, clsx_1.default)("-cbwsdk-connect-item", theme) },
        (0, preact_1.h)(
          "div",
          null,
          (0, preact_1.h)(CoinbaseWalletRound_1.CoinbaseWalletRound, null)
        ),
        (0, preact_1.h)(
          "div",
          { className: "-cbwsdk-connect-item-copy-wrapper" },
          (0, preact_1.h)("h3", { className: "-cbwsdk-connect-item-title" }, title),
          (0, preact_1.h)("p", { className: "-cbwsdk-connect-item-description" }, description)
        )
      );
    }
    function CoinbaseWalletSteps({ theme }) {
      return (0, preact_1.h)(
        "ol",
        { className: "-cbwsdk-wallet-steps" },
        (0, preact_1.h)(
          "li",
          { className: (0, clsx_1.default)("-cbwsdk-wallet-steps-item", theme) },
          (0, preact_1.h)("div", { className: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")
        ),
        (0, preact_1.h)(
          "li",
          { className: (0, clsx_1.default)("-cbwsdk-wallet-steps-item", theme) },
          (0, preact_1.h)(
            "div",
            { className: "-cbwsdk-wallet-steps-item-wrapper" },
            (0, preact_1.h)(
              "span",
              null,
              "Tap ",
              (0, preact_1.h)("strong", null, "Scan"),
              " "
            ),
            (0, preact_1.h)(
              "span",
              { className: (0, clsx_1.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
              (0, preact_1.h)(QRCodeIcon_1.QRCodeIcon, { fill: makeIconColor(theme) })
            )
          )
        )
      );
    }
    exports.CoinbaseWalletSteps = CoinbaseWalletSteps;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/ArrowLeftIcon.js
var require_ArrowLeftIcon = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/ArrowLeftIcon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArrowLeftIcon = void 0;
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    function ArrowLeftIcon(props) {
      return (0, preact_1.h)(
        "svg",
        Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1.h)("path", { d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z" })
      );
    }
    exports.ArrowLeftIcon = ArrowLeftIcon;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/LaptopIcon.js
var require_LaptopIcon = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/LaptopIcon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LaptopIcon = void 0;
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    function LaptopIcon(props) {
      return (0, preact_1.h)(
        "svg",
        Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1.h)("path", { d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z" }),
        (0, preact_1.h)("path", { d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z" })
      );
    }
    exports.LaptopIcon = LaptopIcon;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/SafeIcon.js
var require_SafeIcon = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/icons/SafeIcon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SafeIcon = void 0;
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    function SafeIcon(props) {
      return (0, preact_1.h)(
        "svg",
        Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
        (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z" })
      );
    }
    exports.SafeIcon = SafeIcon;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/TryExtensionContent/TryExtensionContent-css.js
var require_TryExtensionContent_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/TryExtensionContent/TryExtensionContent-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/TryExtensionContent/TryExtensionContent.js
var require_TryExtensionContent = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/TryExtensionContent/TryExtensionContent.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TryExtensionContent = void 0;
    var clsx_1 = __importDefault2((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var hooks_1 = (init_hooks_module(), __toCommonJS(hooks_module_exports));
    var ArrowLeftIcon_1 = require_ArrowLeftIcon();
    var LaptopIcon_1 = require_LaptopIcon();
    var SafeIcon_1 = require_SafeIcon();
    var TryExtensionContent_css_1 = __importDefault2(require_TryExtensionContent_css());
    function TryExtensionContent({ theme }) {
      const [clicked, setClicked] = (0, hooks_1.useState)(false);
      const handleInstallClick = (0, hooks_1.useCallback)(() => {
        window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
      }, []);
      const handleClick = (0, hooks_1.useCallback)(() => {
        if (clicked) {
          window.location.reload();
        } else {
          handleInstallClick();
          setClicked(true);
        }
      }, [handleInstallClick, clicked]);
      return (0, preact_1.h)(
        "div",
        { class: (0, clsx_1.default)("-cbwsdk-try-extension", theme) },
        (0, preact_1.h)("style", null, TryExtensionContent_css_1.default),
        (0, preact_1.h)(
          "div",
          { class: "-cbwsdk-try-extension-column-half" },
          (0, preact_1.h)("h3", { class: (0, clsx_1.default)("-cbwsdk-try-extension-heading", theme) }, "Or try the Coinbase Wallet browser extension"),
          (0, preact_1.h)(
            "div",
            { class: "-cbwsdk-try-extension-cta-wrapper" },
            (0, preact_1.h)("button", { class: (0, clsx_1.default)("-cbwsdk-try-extension-cta", theme), onClick: handleClick }, clicked ? "Refresh" : "Install"),
            (0, preact_1.h)("div", null, !clicked && (0, preact_1.h)(ArrowLeftIcon_1.ArrowLeftIcon, { class: "-cbwsdk-try-extension-cta-icon", fill: theme === "light" ? "#0052FF" : "#588AF5" }))
          )
        ),
        (0, preact_1.h)(
          "div",
          { class: "-cbwsdk-try-extension-column-half" },
          (0, preact_1.h)(
            "ul",
            { class: "-cbwsdk-try-extension-list" },
            (0, preact_1.h)(
              "li",
              { class: "-cbwsdk-try-extension-list-item" },
              (0, preact_1.h)(
                "div",
                { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
                (0, preact_1.h)(
                  "span",
                  { class: (0, clsx_1.default)("-cbwsdk-try-extension-list-item-icon", theme) },
                  (0, preact_1.h)(LaptopIcon_1.LaptopIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })
                )
              ),
              (0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-try-extension-list-item-copy", theme) }, "Connect with dapps with just one click on your desktop browser")
            ),
            (0, preact_1.h)(
              "li",
              { class: "-cbwsdk-try-extension-list-item" },
              (0, preact_1.h)(
                "div",
                { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
                (0, preact_1.h)(
                  "span",
                  { class: (0, clsx_1.default)("-cbwsdk-try-extension-list-item-icon", theme) },
                  (0, preact_1.h)(SafeIcon_1.SafeIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })
                )
              ),
              (0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-try-extension-list-item-copy", theme) }, "Add an additional layer of security by using a supported Ledger hardware wallet")
            )
          )
        )
      );
    }
    exports.TryExtensionContent = TryExtensionContent;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/ConnectDialog/ConnectDialog-css.js
var require_ConnectDialog_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/ConnectDialog/ConnectDialog-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/ConnectDialog/ConnectDialog.js
var require_ConnectDialog = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/ConnectDialog/ConnectDialog.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectDialog = void 0;
    var clsx_1 = __importDefault2((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var hooks_1 = (init_hooks_module(), __toCommonJS(hooks_module_exports));
    var ConnectContent_1 = require_ConnectContent();
    var TryExtensionContent_1 = require_TryExtensionContent();
    var ConnectDialog_css_1 = __importDefault2(require_ConnectDialog_css());
    var ConnectDialog = (props) => {
      const { isOpen, darkMode } = props;
      const [containerHidden, setContainerHidden] = (0, hooks_1.useState)(!isOpen);
      const [dialogHidden, setDialogHidden] = (0, hooks_1.useState)(!isOpen);
      (0, hooks_1.useEffect)(() => {
        const timers = [
          window.setTimeout(() => {
            setDialogHidden(!isOpen);
          }, 10)
        ];
        if (isOpen) {
          setContainerHidden(false);
        } else {
          timers.push(window.setTimeout(() => {
            setContainerHidden(true);
          }, 360));
        }
        return () => {
          timers.forEach(window.clearTimeout);
        };
      }, [isOpen]);
      const theme = darkMode ? "dark" : "light";
      return (0, preact_1.h)(
        "div",
        { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-container", containerHidden && "-cbwsdk-connect-dialog-container-hidden") },
        (0, preact_1.h)("style", null, ConnectDialog_css_1.default),
        (0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-backdrop", theme, dialogHidden && "-cbwsdk-connect-dialog-backdrop-hidden") }),
        (0, preact_1.h)(
          "div",
          { class: "-cbwsdk-connect-dialog" },
          (0, preact_1.h)(
            "div",
            { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-box", dialogHidden && "-cbwsdk-connect-dialog-box-hidden") },
            !props.connectDisabled ? (0, preact_1.h)(ConnectContent_1.ConnectContent, { theme, version: props.version, sessionId: props.sessionId, sessionSecret: props.sessionSecret, linkAPIUrl: props.linkAPIUrl, isConnected: props.isConnected, isParentConnection: props.isParentConnection, chainId: props.chainId, onCancel: props.onCancel }) : null,
            (0, preact_1.h)(TryExtensionContent_1.TryExtensionContent, { theme })
          )
        )
      );
    };
    exports.ConnectDialog = ConnectDialog;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/LinkFlow/LinkFlow.js
var require_LinkFlow = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/LinkFlow/LinkFlow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkFlow = void 0;
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var ConnectDialog_1 = require_ConnectDialog();
    var LinkFlow = class {
      constructor(options) {
        this.connected = false;
        this.chainId = 1;
        this.isOpen = false;
        this.onCancel = null;
        this.root = null;
        this.connectDisabled = false;
        this.darkMode = options.darkMode;
        this.version = options.version;
        this.sessionId = options.sessionId;
        this.sessionSecret = options.sessionSecret;
        this.linkAPIUrl = options.linkAPIUrl;
        this.isParentConnection = options.isParentConnection;
      }
      attach(el) {
        this.root = document.createElement("div");
        this.root.className = "-cbwsdk-link-flow-root";
        el.appendChild(this.root);
        this.render();
      }
      setConnected(v3) {
        if (this.connected !== v3) {
          this.connected = v3;
          this.render();
        }
      }
      setChainId(chainId) {
        if (this.chainId !== chainId) {
          this.chainId = chainId;
          this.render();
        }
      }
      detach() {
        var _a;
        if (!this.root) {
          return;
        }
        (0, preact_1.render)(null, this.root);
        (_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.root);
      }
      setConnectDisabled(connectDisabled) {
        this.connectDisabled = connectDisabled;
      }
      open(options) {
        this.isOpen = true;
        this.onCancel = options.onCancel;
        this.render();
      }
      close() {
        this.isOpen = false;
        this.onCancel = null;
        this.render();
      }
      render() {
        if (!this.root) {
          return;
        }
        (0, preact_1.render)((0, preact_1.h)(ConnectDialog_1.ConnectDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, linkAPIUrl: this.linkAPIUrl, isOpen: this.isOpen, isConnected: this.connected, isParentConnection: this.isParentConnection, chainId: this.chainId, onCancel: this.onCancel, connectDisabled: this.connectDisabled }), this.root);
      }
    };
    exports.LinkFlow = LinkFlow;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Snackbar/Snackbar-css.js
var require_Snackbar_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Snackbar/Snackbar-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Snackbar/Snackbar.js
var require_Snackbar = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Snackbar/Snackbar.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SnackbarInstance = exports.SnackbarContainer = exports.Snackbar = void 0;
    var clsx_1 = __importDefault2((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var hooks_1 = (init_hooks_module(), __toCommonJS(hooks_module_exports));
    var Snackbar_css_1 = __importDefault2(require_Snackbar_css());
    var cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
    var gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
    var Snackbar = class {
      constructor(options) {
        this.items = /* @__PURE__ */ new Map();
        this.nextItemKey = 0;
        this.root = null;
        this.darkMode = options.darkMode;
      }
      attach(el) {
        this.root = document.createElement("div");
        this.root.className = "-cbwsdk-snackbar-root";
        el.appendChild(this.root);
        this.render();
      }
      presentItem(itemProps) {
        const key = this.nextItemKey++;
        this.items.set(key, itemProps);
        this.render();
        return () => {
          this.items.delete(key);
          this.render();
        };
      }
      clear() {
        this.items.clear();
        this.render();
      }
      render() {
        if (!this.root) {
          return;
        }
        (0, preact_1.render)((0, preact_1.h)(
          "div",
          null,
          (0, preact_1.h)(exports.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => (0, preact_1.h)(exports.SnackbarInstance, Object.assign({}, itemProps, { key }))))
        ), this.root);
      }
    };
    exports.Snackbar = Snackbar;
    var SnackbarContainer = (props) => (0, preact_1.h)(
      "div",
      { class: (0, clsx_1.default)("-cbwsdk-snackbar-container") },
      (0, preact_1.h)("style", null, Snackbar_css_1.default),
      (0, preact_1.h)("div", { class: "-cbwsdk-snackbar" }, props.children)
    );
    exports.SnackbarContainer = SnackbarContainer;
    var SnackbarInstance = ({ autoExpand, message, menuItems }) => {
      const [hidden, setHidden] = (0, hooks_1.useState)(true);
      const [expanded, setExpanded] = (0, hooks_1.useState)(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
      (0, hooks_1.useEffect)(() => {
        const timers = [
          window.setTimeout(() => {
            setHidden(false);
          }, 1),
          window.setTimeout(() => {
            setExpanded(true);
          }, 1e4)
        ];
        return () => {
          timers.forEach(window.clearTimeout);
        };
      });
      const toggleExpanded = () => {
        setExpanded(!expanded);
      };
      return (0, preact_1.h)(
        "div",
        { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance", hidden && "-cbwsdk-snackbar-instance-hidden", expanded && "-cbwsdk-snackbar-instance-expanded") },
        (0, preact_1.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
          (0, preact_1.h)("img", { src: cblogo, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
          " ",
          (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
          (0, preact_1.h)(
            "div",
            { class: "-gear-container" },
            !expanded && (0, preact_1.h)(
              "svg",
              { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
              (0, preact_1.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
            ),
            (0, preact_1.h)("img", { src: gearIcon, class: "-gear-icon", title: "Expand" })
          )
        ),
        menuItems && menuItems.length > 0 && (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i3) => (0, preact_1.h)(
          "div",
          { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance-menu-item", action.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: action.onClick, key: i3 },
          (0, preact_1.h)(
            "svg",
            { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, preact_1.h)("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })
          ),
          (0, preact_1.h)("span", { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance-menu-item-info", action.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, action.info)
        )))
      );
    };
    exports.SnackbarInstance = SnackbarInstance;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/WalletLinkRelayUI.js
var require_WalletLinkRelayUI = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/WalletLinkRelayUI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkRelayUI = void 0;
    var cssReset_1 = require_cssReset();
    var LinkFlow_1 = require_LinkFlow();
    var Snackbar_1 = require_Snackbar();
    var WalletLinkRelayUI = class {
      constructor(options) {
        this.standalone = null;
        this.attached = false;
        this.snackbar = new Snackbar_1.Snackbar({
          darkMode: options.darkMode
        });
        this.linkFlow = new LinkFlow_1.LinkFlow({
          darkMode: options.darkMode,
          version: options.version,
          sessionId: options.session.id,
          sessionSecret: options.session.secret,
          linkAPIUrl: options.linkAPIUrl,
          isParentConnection: false
        });
      }
      attach() {
        if (this.attached) {
          throw new Error("Coinbase Wallet SDK UI is already attached");
        }
        const el = document.documentElement;
        const container = document.createElement("div");
        container.className = "-cbwsdk-css-reset";
        el.appendChild(container);
        this.linkFlow.attach(container);
        this.snackbar.attach(container);
        this.attached = true;
        (0, cssReset_1.injectCssReset)();
      }
      setConnected(connected) {
        this.linkFlow.setConnected(connected);
      }
      setChainId(chainId) {
        this.linkFlow.setChainId(chainId);
      }
      setConnectDisabled(connectDisabled) {
        this.linkFlow.setConnectDisabled(connectDisabled);
      }
      /* istanbul ignore next */
      addEthereumChain() {
      }
      // no-op
      /* istanbul ignore next */
      watchAsset() {
      }
      // no-op
      /* istanbul ignore next */
      switchEthereumChain() {
      }
      // no-op
      requestEthereumAccounts(options) {
        this.linkFlow.open({ onCancel: options.onCancel });
      }
      hideRequestEthereumAccounts() {
        this.linkFlow.close();
      }
      /* istanbul ignore next */
      signEthereumMessage() {
      }
      // no-op
      /* istanbul ignore next */
      signEthereumTransaction() {
      }
      // no-op
      /* istanbul ignore next */
      submitEthereumTransaction() {
      }
      // no-op
      /* istanbul ignore next */
      ethereumAddressFromSignedMessage() {
      }
      // no-op
      showConnecting(options) {
        let snackbarProps;
        if (options.isUnlinkedErrorState) {
          snackbarProps = {
            autoExpand: true,
            message: "Connection lost",
            menuItems: [
              {
                isRed: false,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: options.onResetConnection
              }
            ]
          };
        } else {
          snackbarProps = {
            message: "Confirm on phone",
            menuItems: [
              {
                isRed: true,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: options.onCancel
              },
              {
                isRed: false,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: options.onResetConnection
              }
            ]
          };
        }
        return this.snackbar.presentItem(snackbarProps);
      }
      /* istanbul ignore next */
      reloadUI() {
        document.location.reload();
      }
      /* istanbul ignore next */
      inlineAccountsResponse() {
        return false;
      }
      /* istanbul ignore next */
      inlineAddEthereumChain() {
        return false;
      }
      /* istanbul ignore next */
      inlineWatchAsset() {
        return false;
      }
      /* istanbul ignore next */
      inlineSwitchEthereumChain() {
        return false;
      }
      /* istanbul ignore next */
      setStandalone(status) {
        this.standalone = status;
      }
      /* istanbul ignore next */
      isStandalone() {
        var _a;
        return (_a = this.standalone) !== null && _a !== void 0 ? _a : false;
      }
    };
    exports.WalletLinkRelayUI = WalletLinkRelayUI;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/WalletLinkRelay.js
var require_WalletLinkRelay = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/WalletLinkRelay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkRelay = void 0;
    var error_1 = require_error();
    var type_1 = require_type();
    var util_1 = require_util();
    var DiagnosticLogger_1 = require_DiagnosticLogger();
    var RelayAbstract_1 = require_RelayAbstract();
    var Session_1 = require_Session();
    var WalletLinkConnection_1 = require_WalletLinkConnection();
    var Web3Response_1 = require_Web3Response();
    var WalletLinkRelayUI_1 = require_WalletLinkRelayUI();
    var WalletLinkRelay = class _WalletLinkRelay extends RelayAbstract_1.RelayAbstract {
      constructor(options) {
        var _a;
        super();
        this.accountsCallback = null;
        this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" };
        this.chainCallback = null;
        this.dappDefaultChain = 1;
        this.appName = "";
        this.appLogoUrl = null;
        this.linkedUpdated = (linked) => {
          var _a2;
          this.isLinked = linked;
          const cachedAddresses = this.storage.getItem(RelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY);
          if (linked) {
            this.session.linked = linked;
          }
          this.isUnlinkedErrorState = false;
          if (cachedAddresses) {
            const addresses = cachedAddresses.split(" ");
            const wasConnectedViaStandalone = this.storage.getItem("IsStandaloneSigning") === "true";
            if (addresses[0] !== "" && !linked && this.session.linked && !wasConnectedViaStandalone) {
              this.isUnlinkedErrorState = true;
              const sessionIdHash = this.getSessionIdHash();
              (_a2 = this.diagnostic) === null || _a2 === void 0 ? void 0 : _a2.log(DiagnosticLogger_1.EVENTS.UNLINKED_ERROR_STATE, {
                sessionIdHash
              });
            }
          }
        };
        this.metadataUpdated = (key, value) => {
          this.storage.setItem(key, value);
        };
        this.chainUpdated = (chainId, jsonRpcUrl) => {
          if (this.chainCallbackParams.chainId === chainId && this.chainCallbackParams.jsonRpcUrl === jsonRpcUrl) {
            return;
          }
          this.chainCallbackParams = {
            chainId,
            jsonRpcUrl
          };
          if (this.chainCallback) {
            this.chainCallback(chainId, jsonRpcUrl);
          }
        };
        this.accountUpdated = (selectedAddress) => {
          if (this.accountsCallback) {
            this.accountsCallback([selectedAddress]);
          }
          if (_WalletLinkRelay.accountRequestCallbackIds.size > 0) {
            Array.from(_WalletLinkRelay.accountRequestCallbackIds.values()).forEach((id) => {
              const message = {
                type: "WEB3_RESPONSE",
                id,
                response: {
                  method: "requestEthereumAccounts",
                  result: [selectedAddress]
                }
              };
              this.invokeCallback(Object.assign(Object.assign({}, message), { id }));
            });
            _WalletLinkRelay.accountRequestCallbackIds.clear();
          }
        };
        this.connectedUpdated = (connected) => {
          this.ui.setConnected(connected);
        };
        this.resetAndReload = this.resetAndReload.bind(this);
        this.linkAPIUrl = options.linkAPIUrl;
        this.storage = options.storage;
        this.options = options;
        const { session, ui, connection } = this.subscribe();
        this._session = session;
        this.connection = connection;
        this.relayEventManager = options.relayEventManager;
        this.diagnostic = options.diagnosticLogger;
        this._reloadOnDisconnect = (_a = options.reloadOnDisconnect) !== null && _a !== void 0 ? _a : true;
        this.ui = ui;
      }
      subscribe() {
        const session = Session_1.Session.load(this.storage) || new Session_1.Session(this.storage).save();
        const { linkAPIUrl, diagnostic } = this;
        const connection = new WalletLinkConnection_1.WalletLinkConnection({
          session,
          linkAPIUrl,
          diagnostic,
          listener: this
        });
        const { version, darkMode } = this.options;
        const ui = this.options.uiConstructor({
          linkAPIUrl,
          version,
          darkMode,
          session
        });
        connection.connect();
        return { session, ui, connection };
      }
      attachUI() {
        this.ui.attach();
      }
      resetAndReload() {
        Promise.race([
          this.connection.setSessionMetadata("__destroyed", "1"),
          new Promise((resolve) => setTimeout(() => resolve(null), 1e3))
        ]).then(() => {
          var _a, _b;
          const isStandalone = this.ui.isStandalone();
          (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.SESSION_STATE_CHANGE, {
            method: "relay::resetAndReload",
            sessionMetadataChange: "__destroyed, 1",
            sessionIdHash: this.getSessionIdHash()
          });
          this.connection.destroy();
          const storedSession = Session_1.Session.load(this.storage);
          if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
            this.storage.clear();
          } else if (storedSession) {
            (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.SKIPPED_CLEARING_SESSION, {
              sessionIdHash: this.getSessionIdHash(),
              storedSessionIdHash: Session_1.Session.hash(storedSession.id)
            });
          }
          if (this._reloadOnDisconnect) {
            this.ui.reloadUI();
            return;
          }
          if (this.accountsCallback) {
            this.accountsCallback([], true);
          }
          const { session, ui, connection } = this.subscribe();
          this._session = session;
          this.connection = connection;
          this.ui = ui;
          if (isStandalone && this.ui.setStandalone)
            this.ui.setStandalone(true);
          this.attachUI();
        }).catch((err) => {
          var _a;
          (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.FAILURE, {
            method: "relay::resetAndReload",
            message: `failed to reset and reload with ${err}`,
            sessionIdHash: this.getSessionIdHash()
          });
        });
      }
      setAppInfo(appName, appLogoUrl) {
        this.appName = appName;
        this.appLogoUrl = appLogoUrl;
      }
      getStorageItem(key) {
        return this.storage.getItem(key);
      }
      get session() {
        return this._session;
      }
      setStorageItem(key, value) {
        this.storage.setItem(key, value);
      }
      signEthereumMessage(message, address, addPrefix, typedDataJson) {
        return this.sendRequest({
          method: "signEthereumMessage",
          params: {
            message: (0, util_1.hexStringFromBuffer)(message, true),
            address,
            addPrefix,
            typedDataJson: typedDataJson || null
          }
        });
      }
      ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        return this.sendRequest({
          method: "ethereumAddressFromSignedMessage",
          params: {
            message: (0, util_1.hexStringFromBuffer)(message, true),
            signature: (0, util_1.hexStringFromBuffer)(signature, true),
            addPrefix
          }
        });
      }
      signEthereumTransaction(params) {
        return this.sendRequest({
          method: "signEthereumTransaction",
          params: {
            fromAddress: params.fromAddress,
            toAddress: params.toAddress,
            weiValue: (0, util_1.bigIntStringFromBN)(params.weiValue),
            data: (0, util_1.hexStringFromBuffer)(params.data, true),
            nonce: params.nonce,
            gasPriceInWei: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
            maxFeePerGas: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
            maxPriorityFeePerGas: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
            gasLimit: params.gasLimit ? (0, util_1.bigIntStringFromBN)(params.gasLimit) : null,
            chainId: params.chainId,
            shouldSubmit: false
          }
        });
      }
      signAndSubmitEthereumTransaction(params) {
        return this.sendRequest({
          method: "signEthereumTransaction",
          params: {
            fromAddress: params.fromAddress,
            toAddress: params.toAddress,
            weiValue: (0, util_1.bigIntStringFromBN)(params.weiValue),
            data: (0, util_1.hexStringFromBuffer)(params.data, true),
            nonce: params.nonce,
            gasPriceInWei: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
            maxFeePerGas: params.maxFeePerGas ? (0, util_1.bigIntStringFromBN)(params.maxFeePerGas) : null,
            maxPriorityFeePerGas: params.maxPriorityFeePerGas ? (0, util_1.bigIntStringFromBN)(params.maxPriorityFeePerGas) : null,
            gasLimit: params.gasLimit ? (0, util_1.bigIntStringFromBN)(params.gasLimit) : null,
            chainId: params.chainId,
            shouldSubmit: true
          }
        });
      }
      submitEthereumTransaction(signedTransaction, chainId) {
        return this.sendRequest({
          method: "submitEthereumTransaction",
          params: {
            signedTransaction: (0, util_1.hexStringFromBuffer)(signedTransaction, true),
            chainId
          }
        });
      }
      scanQRCode(regExp) {
        return this.sendRequest({
          method: "scanQRCode",
          params: {
            regExp
          }
        });
      }
      getQRCodeUrl() {
        return (0, util_1.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, false, this.options.version, this.dappDefaultChain);
      }
      genericRequest(data, action) {
        return this.sendRequest({
          method: "generic",
          params: {
            action,
            data
          }
        });
      }
      sendGenericMessage(request) {
        return this.sendRequest(request);
      }
      sendRequest(request) {
        let hideSnackbarItem = null;
        const id = (0, util_1.randomBytesHex)(8);
        const cancel = (error) => {
          this.publishWeb3RequestCanceledEvent(id);
          this.handleErrorResponse(id, request.method, error);
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        const promise = new Promise((resolve, reject) => {
          if (!this.ui.isStandalone()) {
            hideSnackbarItem = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: cancel,
              onResetConnection: this.resetAndReload
              // eslint-disable-line @typescript-eslint/unbound-method
            });
          }
          this.relayEventManager.callbacks.set(id, (response) => {
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
            if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          if (this.ui.isStandalone()) {
            this.sendRequestStandalone(id, request);
          } else {
            this.publishWeb3RequestEvent(id, request);
          }
        });
        return { promise, cancel };
      }
      setConnectDisabled(disabled) {
        this.ui.setConnectDisabled(disabled);
      }
      setAccountsCallback(accountsCallback) {
        this.accountsCallback = accountsCallback;
      }
      setChainCallback(chainCallback) {
        this.chainCallback = chainCallback;
      }
      setDappDefaultChainCallback(chainId) {
        this.dappDefaultChain = chainId;
        if (this.ui instanceof WalletLinkRelayUI_1.WalletLinkRelayUI) {
          this.ui.setChainId(chainId);
        }
      }
      publishWeb3RequestEvent(id, request) {
        var _a;
        const message = { type: "WEB3_REQUEST", id, request };
        const storedSession = Session_1.Session.load(this.storage);
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.WEB3_REQUEST, {
          eventId: message.id,
          method: `relay::${request.method}`,
          sessionIdHash: this.getSessionIdHash(),
          storedSessionIdHash: storedSession ? Session_1.Session.hash(storedSession.id) : "",
          isSessionMismatched: ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) !== this._session.id).toString()
        });
        this.publishEvent("Web3Request", message, true).then((_3) => {
          var _a2;
          (_a2 = this.diagnostic) === null || _a2 === void 0 ? void 0 : _a2.log(DiagnosticLogger_1.EVENTS.WEB3_REQUEST_PUBLISHED, {
            eventId: message.id,
            method: `relay::${request.method}`,
            sessionIdHash: this.getSessionIdHash(),
            storedSessionIdHash: storedSession ? Session_1.Session.hash(storedSession.id) : "",
            isSessionMismatched: ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) !== this._session.id).toString()
          });
        }).catch((err) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: message.id,
            response: {
              method: request.method,
              errorMessage: err.message
            }
          });
        });
      }
      publishWeb3RequestCanceledEvent(id) {
        const message = {
          type: "WEB3_REQUEST_CANCELED",
          id
        };
        this.publishEvent("Web3RequestCanceled", message, false).then();
      }
      publishEvent(event, message, callWebhook) {
        return this.connection.publishEvent(event, message, callWebhook);
      }
      handleWeb3ResponseMessage(message) {
        var _a;
        const { response } = message;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.WEB3_RESPONSE, {
          eventId: message.id,
          method: `relay::${response.method}`,
          sessionIdHash: this.getSessionIdHash()
        });
        if (response.method === "requestEthereumAccounts") {
          _WalletLinkRelay.accountRequestCallbackIds.forEach((id) => this.invokeCallback(Object.assign(Object.assign({}, message), { id })));
          _WalletLinkRelay.accountRequestCallbackIds.clear();
          return;
        }
        this.invokeCallback(message);
      }
      handleErrorResponse(id, method, error, errorCode) {
        var _a;
        const errorMessage = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : (0, error_1.getMessageFromCode)(errorCode);
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id,
          response: {
            method,
            errorMessage,
            errorCode
          }
        });
      }
      invokeCallback(message) {
        const callback = this.relayEventManager.callbacks.get(message.id);
        if (callback) {
          callback(message.response);
          this.relayEventManager.callbacks.delete(message.id);
        }
      }
      requestEthereumAccounts() {
        const request = {
          method: "requestEthereumAccounts",
          params: {
            appName: this.appName,
            appLogoUrl: this.appLogoUrl || null
          }
        };
        const hideSnackbarItem = null;
        const id = (0, util_1.randomBytesHex)(8);
        const cancel = (error) => {
          this.publishWeb3RequestCanceledEvent(id);
          this.handleErrorResponse(id, request.method, error);
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        const promise = new Promise((resolve, reject) => {
          this.relayEventManager.callbacks.set(id, (response) => {
            this.ui.hideRequestEthereumAccounts();
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
            if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          if (this.ui.inlineAccountsResponse()) {
            const onAccounts = (accounts) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id,
                response: { method: "requestEthereumAccounts", result: accounts }
              });
            };
            this.ui.requestEthereumAccounts({
              onCancel: cancel,
              onAccounts
            });
          } else {
            const err = error_1.standardErrors.provider.userRejectedRequest("User denied account authorization");
            this.ui.requestEthereumAccounts({
              onCancel: () => cancel(err)
            });
          }
          _WalletLinkRelay.accountRequestCallbackIds.add(id);
          if (!this.ui.inlineAccountsResponse() && !this.ui.isStandalone()) {
            this.publishWeb3RequestEvent(id, request);
          }
        });
        return { promise, cancel };
      }
      selectProvider(providerOptions) {
        const request = {
          method: "selectProvider",
          params: {
            providerOptions
          }
        };
        const id = (0, util_1.randomBytesHex)(8);
        const cancel = (error) => {
          this.publishWeb3RequestCanceledEvent(id);
          this.handleErrorResponse(id, request.method, error);
        };
        const promise = new Promise((resolve, reject) => {
          this.relayEventManager.callbacks.set(id, (response) => {
            if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          const _cancel = (_error) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id,
              response: { method: "selectProvider", result: type_1.ProviderType.Unselected }
            });
          };
          const approve = (selectedProviderKey) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id,
              response: { method: "selectProvider", result: selectedProviderKey }
            });
          };
          if (this.ui.selectProvider)
            this.ui.selectProvider({
              onApprove: approve,
              onCancel: _cancel,
              providerOptions
            });
        });
        return { cancel, promise };
      }
      watchAsset(type2, address, symbol, decimals, image, chainId) {
        const request = {
          method: "watchAsset",
          params: {
            type: type2,
            options: {
              address,
              symbol,
              decimals,
              image
            },
            chainId
          }
        };
        let hideSnackbarItem = null;
        const id = (0, util_1.randomBytesHex)(8);
        const cancel = (error) => {
          this.publishWeb3RequestCanceledEvent(id);
          this.handleErrorResponse(id, request.method, error);
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        if (!this.ui.inlineWatchAsset()) {
          hideSnackbarItem = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: cancel,
            onResetConnection: this.resetAndReload
            // eslint-disable-line @typescript-eslint/unbound-method
          });
        }
        const promise = new Promise((resolve, reject) => {
          this.relayEventManager.callbacks.set(id, (response) => {
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
            if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          const _cancel = (_error) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id,
              response: {
                method: "watchAsset",
                result: false
              }
            });
          };
          const approve = () => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id,
              response: {
                method: "watchAsset",
                result: true
              }
            });
          };
          if (this.ui.inlineWatchAsset()) {
            this.ui.watchAsset({
              onApprove: approve,
              onCancel: _cancel,
              type: type2,
              address,
              symbol,
              decimals,
              image,
              chainId
            });
          }
          if (!this.ui.inlineWatchAsset() && !this.ui.isStandalone()) {
            this.publishWeb3RequestEvent(id, request);
          }
        });
        return { cancel, promise };
      }
      addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
        const request = {
          method: "addEthereumChain",
          params: {
            chainId,
            rpcUrls,
            blockExplorerUrls,
            chainName,
            iconUrls,
            nativeCurrency
          }
        };
        let hideSnackbarItem = null;
        const id = (0, util_1.randomBytesHex)(8);
        const cancel = (error) => {
          this.publishWeb3RequestCanceledEvent(id);
          this.handleErrorResponse(id, request.method, error);
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        if (!this.ui.inlineAddEthereumChain(chainId)) {
          hideSnackbarItem = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: cancel,
            onResetConnection: this.resetAndReload
            // eslint-disable-line @typescript-eslint/unbound-method
          });
        }
        const promise = new Promise((resolve, reject) => {
          this.relayEventManager.callbacks.set(id, (response) => {
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
            if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          const _cancel = (_error) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id,
              response: {
                method: "addEthereumChain",
                result: {
                  isApproved: false,
                  rpcUrl: ""
                }
              }
            });
          };
          const approve = (rpcUrl) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id,
              response: {
                method: "addEthereumChain",
                result: {
                  isApproved: true,
                  rpcUrl
                }
              }
            });
          };
          if (this.ui.inlineAddEthereumChain(chainId)) {
            this.ui.addEthereumChain({
              onCancel: _cancel,
              onApprove: approve,
              chainId: request.params.chainId,
              rpcUrls: request.params.rpcUrls,
              blockExplorerUrls: request.params.blockExplorerUrls,
              chainName: request.params.chainName,
              iconUrls: request.params.iconUrls,
              nativeCurrency: request.params.nativeCurrency
            });
          }
          if (!this.ui.inlineAddEthereumChain(chainId) && !this.ui.isStandalone()) {
            this.publishWeb3RequestEvent(id, request);
          }
        });
        return { promise, cancel };
      }
      switchEthereumChain(chainId, address) {
        const request = {
          method: "switchEthereumChain",
          params: Object.assign({ chainId }, { address })
        };
        const id = (0, util_1.randomBytesHex)(8);
        const cancel = (error) => {
          this.publishWeb3RequestCanceledEvent(id);
          this.handleErrorResponse(id, request.method, error);
        };
        const promise = new Promise((resolve, reject) => {
          this.relayEventManager.callbacks.set(id, (response) => {
            if ((0, Web3Response_1.isErrorResponse)(response) && response.errorCode) {
              return reject(error_1.standardErrors.provider.custom({
                code: response.errorCode,
                message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`
              }));
            } else if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          const _cancel = (error) => {
            var _a;
            if (error) {
              const errorCode = (_a = (0, error_1.getErrorCode)(error)) !== null && _a !== void 0 ? _a : error_1.standardErrorCodes.provider.unsupportedChain;
              this.handleErrorResponse(id, "switchEthereumChain", error instanceof Error ? error : error_1.standardErrors.provider.unsupportedChain(chainId), errorCode);
            } else {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id,
                response: {
                  method: "switchEthereumChain",
                  result: {
                    isApproved: false,
                    rpcUrl: ""
                  }
                }
              });
            }
          };
          const approve = (rpcUrl) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id,
              response: {
                method: "switchEthereumChain",
                result: {
                  isApproved: true,
                  rpcUrl
                }
              }
            });
          };
          this.ui.switchEthereumChain({
            onCancel: _cancel,
            onApprove: approve,
            chainId: request.params.chainId,
            address: request.params.address
          });
          if (!this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone()) {
            this.publishWeb3RequestEvent(id, request);
          }
        });
        return { promise, cancel };
      }
      inlineAddEthereumChain(chainId) {
        return this.ui.inlineAddEthereumChain(chainId);
      }
      getSessionIdHash() {
        return Session_1.Session.hash(this._session.id);
      }
      sendRequestStandalone(id, request) {
        const _cancel = (error) => {
          this.handleErrorResponse(id, request.method, error);
        };
        const onSuccess = (response) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id,
            response
          });
        };
        switch (request.method) {
          case "signEthereumMessage":
            this.ui.signEthereumMessage({
              request,
              onSuccess,
              onCancel: _cancel
            });
            break;
          case "signEthereumTransaction":
            this.ui.signEthereumTransaction({
              request,
              onSuccess,
              onCancel: _cancel
            });
            break;
          case "submitEthereumTransaction":
            this.ui.submitEthereumTransaction({
              request,
              onSuccess,
              onCancel: _cancel
            });
            break;
          case "ethereumAddressFromSignedMessage":
            this.ui.ethereumAddressFromSignedMessage({
              request,
              onSuccess
            });
            break;
          default:
            _cancel();
            break;
        }
      }
    };
    exports.WalletLinkRelay = WalletLinkRelay;
    WalletLinkRelay.accountRequestCallbackIds = /* @__PURE__ */ new Set();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Snackbar/index.js
var require_Snackbar2 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/Snackbar/index.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      var desc = Object.getOwnPropertyDescriptor(m3, k3);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k3];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o3[k22] = m3[k3];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3))
          __createBinding2(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(require_Snackbar(), exports);
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/RedirectDialog/RedirectDialog-css.js
var require_RedirectDialog_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/RedirectDialog/RedirectDialog-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/RedirectDialog/RedirectDialog.js
var require_RedirectDialog = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/walletlink/ui/components/RedirectDialog/RedirectDialog.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RedirectDialog = void 0;
    var clsx_1 = __importDefault2((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var cssReset_1 = require_cssReset();
    var Snackbar_1 = require_Snackbar2();
    var RedirectDialog_css_1 = __importDefault2(require_RedirectDialog_css());
    var RedirectDialog = class {
      constructor() {
        this.root = null;
      }
      attach() {
        const el = document.documentElement;
        this.root = document.createElement("div");
        this.root.className = "-cbwsdk-css-reset";
        el.appendChild(this.root);
        (0, cssReset_1.injectCssReset)();
      }
      present(props) {
        this.render(props);
      }
      clear() {
        this.render(null);
      }
      render(props) {
        if (!this.root)
          return;
        (0, preact_1.render)(null, this.root);
        if (!props)
          return;
        (0, preact_1.render)((0, preact_1.h)(RedirectDialogContent, Object.assign({}, props, { onDismiss: () => {
          this.clear();
        } })), this.root);
      }
    };
    exports.RedirectDialog = RedirectDialog;
    var RedirectDialogContent = ({ title, buttonText, darkMode, onButtonClick, onDismiss }) => {
      const theme = darkMode ? "dark" : "light";
      return (0, preact_1.h)(
        Snackbar_1.SnackbarContainer,
        { darkMode },
        (0, preact_1.h)(
          "div",
          { class: "-cbwsdk-redirect-dialog" },
          (0, preact_1.h)("style", null, RedirectDialog_css_1.default),
          (0, preact_1.h)("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: onDismiss }),
          (0, preact_1.h)(
            "div",
            { class: (0, clsx_1.default)("-cbwsdk-redirect-dialog-box", theme) },
            (0, preact_1.h)("p", null, title),
            (0, preact_1.h)("button", { onClick: onButtonClick }, buttonText)
          )
        )
      );
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/mobile/MobileRelayUI.js
var require_MobileRelayUI = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/mobile/MobileRelayUI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MobileRelayUI = void 0;
    var RedirectDialog_1 = require_RedirectDialog();
    var MobileRelayUI = class {
      constructor(options) {
        this.attached = false;
        this.darkMode = false;
        this.openedWindow = null;
        this.redirectDialog = new RedirectDialog_1.RedirectDialog();
        this.darkMode = options.darkMode;
      }
      attach() {
        if (this.attached) {
          throw new Error("Coinbase Wallet SDK UI is already attached");
        }
        this.redirectDialog.attach();
        this.attached = true;
      }
      setConnected(_connected) {
      }
      // no-op
      closeOpenedWindow() {
        var _a;
        (_a = this.openedWindow) === null || _a === void 0 ? void 0 : _a.close();
        this.openedWindow = null;
      }
      redirectToCoinbaseWallet(walletLinkUrl) {
        const url = new URL("https://go.cb-w.com/walletlink");
        url.searchParams.append("redirect_url", window.location.href);
        if (walletLinkUrl) {
          url.searchParams.append("wl_url", walletLinkUrl);
        }
        this.openedWindow = window.open(url.href, "cbw-opener");
        if (this.openedWindow) {
          setTimeout(() => this.closeOpenedWindow(), 5e3);
        }
      }
      openCoinbaseWalletDeeplink(walletLinkUrl) {
        this.redirectDialog.present({
          title: "Redirecting to Coinbase Wallet...",
          buttonText: "Open",
          darkMode: this.darkMode,
          onButtonClick: () => {
            this.redirectToCoinbaseWallet(walletLinkUrl);
          }
        });
        setTimeout(() => {
          this.redirectToCoinbaseWallet(walletLinkUrl);
        }, 99);
      }
      showConnecting(_options) {
        return () => {
          this.closeOpenedWindow();
          this.redirectDialog.clear();
        };
      }
      hideRequestEthereumAccounts() {
        this.closeOpenedWindow();
        this.redirectDialog.clear();
      }
      // -- Methods below are not needed for mobile
      requestEthereumAccounts() {
      }
      // no-op
      addEthereumChain() {
      }
      // no-op
      watchAsset() {
      }
      // no-op
      selectProvider() {
      }
      // no-op
      switchEthereumChain() {
      }
      // no-op
      signEthereumMessage() {
      }
      // no-op
      signEthereumTransaction() {
      }
      // no-op
      submitEthereumTransaction() {
      }
      // no-op
      ethereumAddressFromSignedMessage() {
      }
      // no-op
      reloadUI() {
      }
      // no-op
      setStandalone() {
      }
      // no-op
      setConnectDisabled() {
      }
      // no-op
      inlineAccountsResponse() {
        return false;
      }
      inlineAddEthereumChain() {
        return false;
      }
      inlineWatchAsset() {
        return false;
      }
      inlineSwitchEthereumChain() {
        return false;
      }
      isStandalone() {
        return false;
      }
    };
    exports.MobileRelayUI = MobileRelayUI;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/mobile/MobileRelay.js
var require_MobileRelay = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/mobile/MobileRelay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MobileRelay = void 0;
    var util_1 = require_util();
    var WalletLinkRelay_1 = require_WalletLinkRelay();
    var MobileRelayUI_1 = require_MobileRelayUI();
    var MobileRelay = class extends WalletLinkRelay_1.WalletLinkRelay {
      constructor(options) {
        var _a;
        super(options);
        this._enableMobileWalletLink = (_a = options.enableMobileWalletLink) !== null && _a !== void 0 ? _a : false;
      }
      // override
      requestEthereumAccounts() {
        if (this._enableMobileWalletLink) {
          return super.requestEthereumAccounts();
        }
        return {
          promise: new Promise(() => {
            const location2 = (0, util_1.getLocation)();
            location2.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(location2.href)}`;
          }),
          cancel: () => {
          }
        };
      }
      // override
      publishWeb3RequestEvent(id, request) {
        super.publishWeb3RequestEvent(id, request);
        if (!(this._enableMobileWalletLink && this.ui instanceof MobileRelayUI_1.MobileRelayUI))
          return;
        let navigatedToCBW = false;
        switch (request.method) {
          case "requestEthereumAccounts":
          case "connectAndSignIn":
            navigatedToCBW = true;
            this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
            break;
          case "switchEthereumChain":
            return;
          default:
            navigatedToCBW = true;
            this.ui.openCoinbaseWalletDeeplink();
            break;
        }
        if (navigatedToCBW) {
          window.addEventListener("blur", () => {
            window.addEventListener("focus", () => {
              this.connection.checkUnseenEvents();
            }, { once: true });
          }, { once: true });
        }
      }
      // override
      handleWeb3ResponseMessage(message) {
        super.handleWeb3ResponseMessage(message);
        if (this._enableMobileWalletLink && this.ui instanceof MobileRelayUI_1.MobileRelayUI) {
          this.ui.closeOpenedWindow();
        }
      }
      connectAndSignIn(params) {
        if (!this._enableMobileWalletLink) {
          throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
        }
        return this.sendRequest({
          method: "connectAndSignIn",
          params: {
            appName: this.appName,
            appLogoUrl: this.appLogoUrl,
            domain: window.location.hostname,
            aud: window.location.href,
            version: "1",
            type: "eip4361",
            nonce: params.nonce,
            iat: (/* @__PURE__ */ new Date()).toISOString(),
            chainId: `eip155:${this.dappDefaultChain}`,
            statement: params.statement,
            resources: params.resources
          }
        });
      }
    };
    exports.MobileRelay = MobileRelay;
  }
});

// node_modules/readable-stream/lib/internal/streams/stream-browser.js
var require_stream_browser = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream-browser.js"(exports, module) {
    module.exports = require_events().EventEmitter;
  }
});

// browser-external:util
var require_util2 = __commonJS({
  "browser-external:util"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_3, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "util" has been externalized for browser compatibility. Cannot access "util.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports, module) {
    "use strict";
    function ownKeys(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = null != arguments[i3] ? arguments[i3] : {};
        i3 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i3 = 0; i3 < props.length; i3++) {
        var descriptor = props[i3];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var _require = require_buffer2();
    var Buffer2 = _require.Buffer;
    var _require2 = require_util2();
    var inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src, target, offset) {
      Buffer2.prototype.copy.call(src, target, offset);
    }
    module.exports = function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      _createClass(BufferList, [{
        key: "push",
        value: function push(v3) {
          var entry = {
            data: v3,
            next: null
          };
          if (this.length > 0)
            this.tail.next = entry;
          else
            this.head = entry;
          this.tail = entry;
          ++this.length;
        }
      }, {
        key: "unshift",
        value: function unshift(v3) {
          var entry = {
            data: v3,
            next: this.head
          };
          if (this.length === 0)
            this.tail = entry;
          this.head = entry;
          ++this.length;
        }
      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0)
            return;
          var ret = this.head.data;
          if (this.length === 1)
            this.head = this.tail = null;
          else
            this.head = this.head.next;
          --this.length;
          return ret;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.head = this.tail = null;
          this.length = 0;
        }
      }, {
        key: "join",
        value: function join(s3) {
          if (this.length === 0)
            return "";
          var p3 = this.head;
          var ret = "" + p3.data;
          while (p3 = p3.next)
            ret += s3 + p3.data;
          return ret;
        }
      }, {
        key: "concat",
        value: function concat(n2) {
          if (this.length === 0)
            return Buffer2.alloc(0);
          var ret = Buffer2.allocUnsafe(n2 >>> 0);
          var p3 = this.head;
          var i3 = 0;
          while (p3) {
            copyBuffer(p3.data, ret, i3);
            i3 += p3.data.length;
            p3 = p3.next;
          }
          return ret;
        }
        // Consumes a specified amount of bytes or characters from the buffered data.
      }, {
        key: "consume",
        value: function consume(n2, hasStrings) {
          var ret;
          if (n2 < this.head.data.length) {
            ret = this.head.data.slice(0, n2);
            this.head.data = this.head.data.slice(n2);
          } else if (n2 === this.head.data.length) {
            ret = this.shift();
          } else {
            ret = hasStrings ? this._getString(n2) : this._getBuffer(n2);
          }
          return ret;
        }
      }, {
        key: "first",
        value: function first() {
          return this.head.data;
        }
        // Consumes a specified amount of characters from the buffered data.
      }, {
        key: "_getString",
        value: function _getString(n2) {
          var p3 = this.head;
          var c3 = 1;
          var ret = p3.data;
          n2 -= ret.length;
          while (p3 = p3.next) {
            var str = p3.data;
            var nb = n2 > str.length ? str.length : n2;
            if (nb === str.length)
              ret += str;
            else
              ret += str.slice(0, n2);
            n2 -= nb;
            if (n2 === 0) {
              if (nb === str.length) {
                ++c3;
                if (p3.next)
                  this.head = p3.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p3;
                p3.data = str.slice(nb);
              }
              break;
            }
            ++c3;
          }
          this.length -= c3;
          return ret;
        }
        // Consumes a specified amount of bytes from the buffered data.
      }, {
        key: "_getBuffer",
        value: function _getBuffer(n2) {
          var ret = Buffer2.allocUnsafe(n2);
          var p3 = this.head;
          var c3 = 1;
          p3.data.copy(ret);
          n2 -= p3.data.length;
          while (p3 = p3.next) {
            var buf = p3.data;
            var nb = n2 > buf.length ? buf.length : n2;
            buf.copy(ret, ret.length - n2, 0, nb);
            n2 -= nb;
            if (n2 === 0) {
              if (nb === buf.length) {
                ++c3;
                if (p3.next)
                  this.head = p3.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p3;
                p3.data = buf.slice(nb);
              }
              break;
            }
            ++c3;
          }
          this.length -= c3;
          return ret;
        }
        // Make sure the linked list only shows the minimal necessary information.
      }, {
        key: custom,
        value: function value(_3, options) {
          return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
            // Only inspect one level.
            depth: 0,
            // It should not recurse.
            customInspect: false
          }));
        }
      }]);
      return BufferList;
    }();
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
    "use strict";
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            process.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          process.nextTick(emitCloseNT, _this);
          cb(err2);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    function emitErrorAndCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose)
        return;
      if (self2._readableState && !self2._readableState.emitClose)
        return;
      self2.emit("close");
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy)
        stream.destroy(err);
      else
        stream.emit("error", err);
    }
    module.exports = {
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// node_modules/readable-stream/errors-browser.js
var require_errors_browser = __commonJS({
  "node_modules/readable-stream/errors-browser.js"(exports, module) {
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      var NodeError = function(_Base) {
        _inheritsLoose(NodeError2, _Base);
        function NodeError2(arg1, arg2, arg3) {
          return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError2;
      }(Base);
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i3) {
          return String(i3);
        });
        if (len > 2) {
          return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        } else if (len === 2) {
          return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        } else {
          return "of ".concat(thing, " ").concat(expected[0]);
        }
      } else {
        return "of ".concat(thing, " ").concat(String(expected));
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      var determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      var msg;
      if (endsWith(name, " argument")) {
        msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      } else {
        var type2 = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type2, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      }
      msg += ". Received type ".concat(typeof actual);
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    module.exports.codes = codes;
  }
});

// node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/state.js"(exports, module) {
    "use strict";
    var ERR_INVALID_OPT_VALUE = require_errors_browser().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state.objectMode ? 16 : 16 * 1024;
    }
    module.exports = {
      getHighWaterMark
    };
  }
});

// node_modules/util-deprecate/browser.js
var require_browser = __commonJS({
  "node_modules/util-deprecate/browser.js"(exports, module) {
    module.exports = deprecate;
    function deprecate(fn, msg) {
      if (config("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated2() {
        if (!warned) {
          if (config("throwDeprecation")) {
            throw new Error(msg);
          } else if (config("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated2;
    }
    function config(name) {
      try {
        if (!global.localStorage)
          return false;
      } catch (_3) {
        return false;
      }
      var val = global.localStorage[name];
      if (null == val)
        return false;
      return String(val).toLowerCase() === "true";
    }
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
    "use strict";
    module.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var Duplex;
    Writable.WritableState = WritableState;
    var internalUtil = {
      deprecate: require_browser()
    };
    var Stream = require_stream_browser();
    var Buffer2 = require_buffer2().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors_browser().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    require_inherits_browser()(Writable, Stream);
    function nop() {
    }
    function WritableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_3) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object2) {
          if (realHasInstance.call(this, object2))
            return true;
          if (this !== Writable)
            return false;
          return object2 && object2._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object2) {
        return object2 instanceof this;
      };
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      var isDuplex = this instanceof Duplex;
      if (!isDuplex && !realHasInstance.call(Writable, this))
        return new Writable(options);
      this._writableState = new WritableState(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er);
      process.nextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
      }
      if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
      }
      return true;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ending)
        writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed)
        state.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        process.nextTick(cb, er);
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      if (typeof cb !== "function")
        throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l3 = state.bufferedRequestCount;
        var buffer = new Array(l3);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending)
        endWritable(this, state, cb);
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
          state.pendingcb++;
          state.finalCalled = true;
          process.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
          if (state.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          process.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set2(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      cb(err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
    "use strict";
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj)
        keys2.push(key);
      return keys2;
    };
    module.exports = Duplex;
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    require_inherits_browser()(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v3 = 0; v3 < keys.length; v3++) {
        method = keys[v3];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v3;
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false)
          this.readable = false;
        if (options.writable === false)
          this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend);
        }
      }
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function onend() {
      if (this._writableState.ended)
        return;
      process.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set2(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r4;
      var i3;
      if (this.lastNeed) {
        r4 = this.fillLast(buf);
        if (r4 === void 0)
          return "";
        i3 = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i3 = 0;
      }
      if (i3 < buf.length)
        return r4 ? r4 + this.text(buf, i3) : this.text(buf, i3);
      return r4 || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i3) {
      var j3 = buf.length - 1;
      if (j3 < i3)
        return 0;
      var nb = utf8CheckByte(buf[j3]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j3 < i3 || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j3]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j3 < i3 || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j3]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p3) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "�";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "�";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "�";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p3 = this.lastTotal - this.lastNeed;
      var r4 = utf8CheckExtraBytes(this, buf, p3);
      if (r4 !== void 0)
        return r4;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p3, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p3, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i3) {
      var total = utf8CheckIncomplete(this, buf, i3);
      if (!this.lastNeed)
        return buf.toString("utf8", i3);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i3, end);
    }
    function utf8End(buf) {
      var r4 = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r4 + "�";
      return r4;
    }
    function utf16Text(buf, i3) {
      if ((buf.length - i3) % 2 === 0) {
        var r4 = buf.toString("utf16le", i3);
        if (r4) {
          var c3 = r4.charCodeAt(r4.length - 1);
          if (c3 >= 55296 && c3 <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r4.slice(0, -1);
          }
        }
        return r4;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i3, buf.length - 1);
    }
    function utf16End(buf) {
      var r4 = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r4 + this.lastChar.toString("utf16le", 0, end);
      }
      return r4;
    }
    function base64Text(buf, i3) {
      var n2 = (buf.length - i3) % 3;
      if (n2 === 0)
        return buf.toString("base64", i3);
      this.lastNeed = 3 - n2;
      this.lastTotal = 3;
      if (n2 === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i3, buf.length - n2);
    }
    function base64End(buf) {
      var r4 = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r4 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r4;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports, module) {
    "use strict";
    var ERR_STREAM_PREMATURE_CLOSE = require_errors_browser().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    function noop() {
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function eos(stream, opts, callback) {
      if (typeof opts === "function")
        return eos(stream, null, opts);
      if (!opts)
        opts = {};
      callback = once(callback || noop);
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable)
          onfinish();
      };
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable)
          callback.call(stream);
      };
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable)
          callback.call(stream);
      };
      var onerror = function onerror2(err) {
        callback.call(stream, err);
      };
      var onclose = function onclose2() {
        var err;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      };
      var onrequest = function onrequest2() {
        stream.req.on("finish", onfinish);
      };
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req)
          onrequest();
        else
          stream.on("request", onrequest);
      } else if (writable && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false)
        stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req)
          stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    module.exports = eos;
  }
});

// node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports, module) {
    "use strict";
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var finished = require_end_of_stream();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve];
      if (resolve !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      process.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve, reject);
        }, reject);
      };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve, reject) {
            process.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
      var _this2 = this;
      return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(createIterResult(void 0, true));
        });
      });
    }), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve;
            iterator[kLastReject] = reject;
          }
        },
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on("readable", onReadable.bind(null, iterator));
      return iterator;
    };
    module.exports = createReadableStreamAsyncIterator;
  }
});

// node_modules/readable-stream/lib/internal/streams/from-browser.js
var require_from_browser = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/from-browser.js"(exports, module) {
    module.exports = function() {
      throw new Error("Readable.from is not available in the browser");
    };
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
    "use strict";
    module.exports = Readable;
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require_events().EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type2) {
      return emitter.listeners(type2).length;
    };
    var Stream = require_stream_browser();
    var Buffer2 = require_buffer2().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = require_util2();
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function debug2() {
      };
    }
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors_browser().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from;
    require_inherits_browser()(Readable, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable))
        return new Readable(options);
      var isDuplex = this instanceof Duplex;
      this._readableState = new ReadableState(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set2(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      debug("readableAddChunk", chunk);
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid(state, chunk);
        if (er) {
          errorOrDestroy(stream, er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted)
              errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else
              addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state.destroyed) {
            return false;
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false);
              else
                maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
          maybeReadMore(stream, state);
        }
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if (state.needReadable)
          emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
      }
      return er;
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = require_string_decoder().StringDecoder;
      var decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p3 = this._readableState.buffer.head;
      var content = "";
      while (p3 !== null) {
        content += decoder.write(p3.data);
        p3 = p3.next;
      }
      this._readableState.buffer.clear();
      if (content !== "")
        this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n2) {
      if (n2 >= MAX_HWM) {
        n2 = MAX_HWM;
      } else {
        n2--;
        n2 |= n2 >>> 1;
        n2 |= n2 >>> 2;
        n2 |= n2 >>> 4;
        n2 |= n2 >>> 8;
        n2 |= n2 >>> 16;
        n2++;
      }
      return n2;
    }
    function howMuchToRead(n2, state) {
      if (n2 <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n2 !== n2) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n2 > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n2);
      if (n2 <= state.length)
        return n2;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable.prototype.read = function(n2) {
      debug("read", n2);
      n2 = parseInt(n2, 10);
      var state = this._readableState;
      var nOrig = n2;
      if (n2 !== 0)
        state.emittedReadable = false;
      if (n2 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n2 = howMuchToRead(n2, state);
      if (n2 === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n2 < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n2 = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n2 > 0)
        ret = fromList(n2, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n2 = 0;
      } else {
        state.length -= n2;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n2 && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      debug("onEofChunk");
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        if (!state.emittedReadable) {
          state.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      debug("emitReadable", state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
      }
    }
    function emitReadable_(stream) {
      var state = stream._readableState;
      debug("emitReadable_", state.destroyed, state.length, state.ended);
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n2) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted)
        process.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          errorOrDestroy(dest, er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i3 = 0; i3 < len; i3++)
          dests[i3].emit("unpipe", this, {
            hasUnpiped: false
          });
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1)
        return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      var state = this._readableState;
      if (ev === "data") {
        state.readableListening = this.listenerCount("readable") > 0;
        if (state.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug("on readable", state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            process.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.removeListener = function(ev, fn) {
      var res = Stream.prototype.removeListener.call(this, ev, fn);
      if (ev === "readable") {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable.prototype.removeAllListeners = function(ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self2) {
      var state = self2._readableState;
      state.readableListening = self2.listenerCount("readable") > 0;
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true;
      } else if (self2.listenerCount("data") > 0) {
        self2.resume();
      }
    }
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state.paused = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      debug("resume", state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null)
        ;
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i3 in stream) {
        if (this[i3] === void 0 && typeof stream[i3] === "function") {
          this[i3] = /* @__PURE__ */ function methodWrap(method) {
            return function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            };
          }(i3);
        }
      }
      for (var n2 = 0; n2 < kProxyEvents.length; n2++) {
        stream.on(kProxyEvents[n2], this.emit.bind(this, kProxyEvents[n2]));
      }
      this._read = function(n3) {
        debug("wrapped _read", n3);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable.prototype, "readableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable.prototype, "readableFlowing", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.flowing;
      },
      set: function set2(state) {
        if (this._readableState) {
          this._readableState.flowing = state;
        }
      }
    });
    Readable._fromList = fromList;
    Object.defineProperty(Readable.prototype, "readableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.length;
      }
    });
    function fromList(n2, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n2 || n2 >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.first();
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n2, state.decoder);
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      debug("endReadable", state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      debug("endReadableNT", state.endEmitted, state.length);
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream.destroy();
          }
        }
      }
    }
    if (typeof Symbol === "function") {
      Readable.from = function(iterable, opts) {
        if (from === void 0) {
          from = require_from_browser();
        }
        return from(Readable, iterable, opts);
      };
    }
    function indexOf(xs, x3) {
      for (var i3 = 0, l3 = xs.length; i3 < l3; i3++) {
        if (xs[i3] === x3)
          return i3;
      }
      return -1;
    }
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
    "use strict";
    module.exports = Transform;
    var _require$codes = require_errors_browser().codes;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    require_inherits_browser()(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (cb === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function")
          this._transform = options.transform;
        if (typeof options.flush === "function")
          this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n2) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
      });
    };
    function done(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length)
        throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming)
        throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
    "use strict";
    module.exports = PassThrough;
    var Transform = require_stream_transform();
    require_inherits_browser()(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough))
        return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports, module) {
    "use strict";
    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    var _require$codes = require_errors_browser().codes;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop(err) {
      if (err)
        throw err;
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0)
        eos = require_end_of_stream();
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err) {
        if (err)
          return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed)
          return;
        if (destroyed)
          return;
        destroyed = true;
        if (isRequest(stream))
          return stream.abort();
        if (typeof stream.destroy === "function")
          return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    function call(fn) {
      fn();
    }
    function pipe(from, to) {
      return from.pipe(to);
    }
    function popCallback(streams) {
      if (!streams.length)
        return noop;
      if (typeof streams[streams.length - 1] !== "function")
        return noop;
      return streams.pop();
    }
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0]))
        streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error;
      var destroys = streams.map(function(stream, i3) {
        var reading = i3 < streams.length - 1;
        var writing = i3 > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error)
            error = err;
          if (err)
            destroys.forEach(call);
          if (reading)
            return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    module.exports = pipeline;
  }
});

// node_modules/readable-stream/readable-browser.js
var require_readable_browser = __commonJS({
  "node_modules/readable-stream/readable-browser.js"(exports, module) {
    exports = module.exports = require_stream_readable();
    exports.Stream = exports;
    exports.Readable = exports;
    exports.Writable = require_stream_writable();
    exports.Duplex = require_stream_duplex();
    exports.Transform = require_stream_transform();
    exports.PassThrough = require_stream_passthrough();
    exports.finished = require_end_of_stream();
    exports.pipeline = require_pipeline();
  }
});

// node_modules/keccak/lib/api/keccak.js
var require_keccak = __commonJS({
  "node_modules/keccak/lib/api/keccak.js"(exports, module) {
    var { Transform } = require_readable_browser();
    module.exports = (KeccakState) => class Keccak extends Transform {
      constructor(rate, capacity, delimitedSuffix, hashBitLength, options) {
        super(options);
        this._rate = rate;
        this._capacity = capacity;
        this._delimitedSuffix = delimitedSuffix;
        this._hashBitLength = hashBitLength;
        this._options = options;
        this._state = new KeccakState();
        this._state.initialize(rate, capacity);
        this._finalized = false;
      }
      _transform(chunk, encoding, callback) {
        let error = null;
        try {
          this.update(chunk, encoding);
        } catch (err) {
          error = err;
        }
        callback(error);
      }
      _flush(callback) {
        let error = null;
        try {
          this.push(this.digest());
        } catch (err) {
          error = err;
        }
        callback(error);
      }
      update(data, encoding) {
        if (!Buffer.isBuffer(data) && typeof data !== "string")
          throw new TypeError("Data must be a string or a buffer");
        if (this._finalized)
          throw new Error("Digest already called");
        if (!Buffer.isBuffer(data))
          data = Buffer.from(data, encoding);
        this._state.absorb(data);
        return this;
      }
      digest(encoding) {
        if (this._finalized)
          throw new Error("Digest already called");
        this._finalized = true;
        if (this._delimitedSuffix)
          this._state.absorbLastFewBits(this._delimitedSuffix);
        let digest = this._state.squeeze(this._hashBitLength / 8);
        if (encoding !== void 0)
          digest = digest.toString(encoding);
        this._resetState();
        return digest;
      }
      // remove result from memory
      _resetState() {
        this._state.initialize(this._rate, this._capacity);
        return this;
      }
      // because sometimes we need hash right now and little later
      _clone() {
        const clone = new Keccak(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
        this._state.copy(clone._state);
        clone._finalized = this._finalized;
        return clone;
      }
    };
  }
});

// node_modules/keccak/lib/api/shake.js
var require_shake = __commonJS({
  "node_modules/keccak/lib/api/shake.js"(exports, module) {
    var { Transform } = require_readable_browser();
    module.exports = (KeccakState) => class Shake extends Transform {
      constructor(rate, capacity, delimitedSuffix, options) {
        super(options);
        this._rate = rate;
        this._capacity = capacity;
        this._delimitedSuffix = delimitedSuffix;
        this._options = options;
        this._state = new KeccakState();
        this._state.initialize(rate, capacity);
        this._finalized = false;
      }
      _transform(chunk, encoding, callback) {
        let error = null;
        try {
          this.update(chunk, encoding);
        } catch (err) {
          error = err;
        }
        callback(error);
      }
      _flush() {
      }
      _read(size2) {
        this.push(this.squeeze(size2));
      }
      update(data, encoding) {
        if (!Buffer.isBuffer(data) && typeof data !== "string")
          throw new TypeError("Data must be a string or a buffer");
        if (this._finalized)
          throw new Error("Squeeze already called");
        if (!Buffer.isBuffer(data))
          data = Buffer.from(data, encoding);
        this._state.absorb(data);
        return this;
      }
      squeeze(dataByteLength, encoding) {
        if (!this._finalized) {
          this._finalized = true;
          this._state.absorbLastFewBits(this._delimitedSuffix);
        }
        let data = this._state.squeeze(dataByteLength);
        if (encoding !== void 0)
          data = data.toString(encoding);
        return data;
      }
      _resetState() {
        this._state.initialize(this._rate, this._capacity);
        return this;
      }
      _clone() {
        const clone = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options);
        this._state.copy(clone._state);
        clone._finalized = this._finalized;
        return clone;
      }
    };
  }
});

// node_modules/keccak/lib/api/index.js
var require_api = __commonJS({
  "node_modules/keccak/lib/api/index.js"(exports, module) {
    var createKeccak = require_keccak();
    var createShake = require_shake();
    module.exports = function(KeccakState) {
      const Keccak = createKeccak(KeccakState);
      const Shake = createShake(KeccakState);
      return function(algorithm, options) {
        const hash = typeof algorithm === "string" ? algorithm.toLowerCase() : algorithm;
        switch (hash) {
          case "keccak224":
            return new Keccak(1152, 448, null, 224, options);
          case "keccak256":
            return new Keccak(1088, 512, null, 256, options);
          case "keccak384":
            return new Keccak(832, 768, null, 384, options);
          case "keccak512":
            return new Keccak(576, 1024, null, 512, options);
          case "sha3-224":
            return new Keccak(1152, 448, 6, 224, options);
          case "sha3-256":
            return new Keccak(1088, 512, 6, 256, options);
          case "sha3-384":
            return new Keccak(832, 768, 6, 384, options);
          case "sha3-512":
            return new Keccak(576, 1024, 6, 512, options);
          case "shake128":
            return new Shake(1344, 256, 31, options);
          case "shake256":
            return new Shake(1088, 512, 31, options);
          default:
            throw new Error("Invald algorithm: " + algorithm);
        }
      };
    };
  }
});

// node_modules/keccak/lib/keccak-state-unroll.js
var require_keccak_state_unroll = __commonJS({
  "node_modules/keccak/lib/keccak-state-unroll.js"(exports) {
    var P1600_ROUND_CONSTANTS = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
    exports.p1600 = function(s3) {
      for (let round = 0; round < 24; ++round) {
        const lo0 = s3[0] ^ s3[10] ^ s3[20] ^ s3[30] ^ s3[40];
        const hi0 = s3[1] ^ s3[11] ^ s3[21] ^ s3[31] ^ s3[41];
        const lo1 = s3[2] ^ s3[12] ^ s3[22] ^ s3[32] ^ s3[42];
        const hi1 = s3[3] ^ s3[13] ^ s3[23] ^ s3[33] ^ s3[43];
        const lo2 = s3[4] ^ s3[14] ^ s3[24] ^ s3[34] ^ s3[44];
        const hi2 = s3[5] ^ s3[15] ^ s3[25] ^ s3[35] ^ s3[45];
        const lo3 = s3[6] ^ s3[16] ^ s3[26] ^ s3[36] ^ s3[46];
        const hi3 = s3[7] ^ s3[17] ^ s3[27] ^ s3[37] ^ s3[47];
        const lo4 = s3[8] ^ s3[18] ^ s3[28] ^ s3[38] ^ s3[48];
        const hi4 = s3[9] ^ s3[19] ^ s3[29] ^ s3[39] ^ s3[49];
        let lo = lo4 ^ (lo1 << 1 | hi1 >>> 31);
        let hi = hi4 ^ (hi1 << 1 | lo1 >>> 31);
        const t1slo0 = s3[0] ^ lo;
        const t1shi0 = s3[1] ^ hi;
        const t1slo5 = s3[10] ^ lo;
        const t1shi5 = s3[11] ^ hi;
        const t1slo10 = s3[20] ^ lo;
        const t1shi10 = s3[21] ^ hi;
        const t1slo15 = s3[30] ^ lo;
        const t1shi15 = s3[31] ^ hi;
        const t1slo20 = s3[40] ^ lo;
        const t1shi20 = s3[41] ^ hi;
        lo = lo0 ^ (lo2 << 1 | hi2 >>> 31);
        hi = hi0 ^ (hi2 << 1 | lo2 >>> 31);
        const t1slo1 = s3[2] ^ lo;
        const t1shi1 = s3[3] ^ hi;
        const t1slo6 = s3[12] ^ lo;
        const t1shi6 = s3[13] ^ hi;
        const t1slo11 = s3[22] ^ lo;
        const t1shi11 = s3[23] ^ hi;
        const t1slo16 = s3[32] ^ lo;
        const t1shi16 = s3[33] ^ hi;
        const t1slo21 = s3[42] ^ lo;
        const t1shi21 = s3[43] ^ hi;
        lo = lo1 ^ (lo3 << 1 | hi3 >>> 31);
        hi = hi1 ^ (hi3 << 1 | lo3 >>> 31);
        const t1slo2 = s3[4] ^ lo;
        const t1shi2 = s3[5] ^ hi;
        const t1slo7 = s3[14] ^ lo;
        const t1shi7 = s3[15] ^ hi;
        const t1slo12 = s3[24] ^ lo;
        const t1shi12 = s3[25] ^ hi;
        const t1slo17 = s3[34] ^ lo;
        const t1shi17 = s3[35] ^ hi;
        const t1slo22 = s3[44] ^ lo;
        const t1shi22 = s3[45] ^ hi;
        lo = lo2 ^ (lo4 << 1 | hi4 >>> 31);
        hi = hi2 ^ (hi4 << 1 | lo4 >>> 31);
        const t1slo3 = s3[6] ^ lo;
        const t1shi3 = s3[7] ^ hi;
        const t1slo8 = s3[16] ^ lo;
        const t1shi8 = s3[17] ^ hi;
        const t1slo13 = s3[26] ^ lo;
        const t1shi13 = s3[27] ^ hi;
        const t1slo18 = s3[36] ^ lo;
        const t1shi18 = s3[37] ^ hi;
        const t1slo23 = s3[46] ^ lo;
        const t1shi23 = s3[47] ^ hi;
        lo = lo3 ^ (lo0 << 1 | hi0 >>> 31);
        hi = hi3 ^ (hi0 << 1 | lo0 >>> 31);
        const t1slo4 = s3[8] ^ lo;
        const t1shi4 = s3[9] ^ hi;
        const t1slo9 = s3[18] ^ lo;
        const t1shi9 = s3[19] ^ hi;
        const t1slo14 = s3[28] ^ lo;
        const t1shi14 = s3[29] ^ hi;
        const t1slo19 = s3[38] ^ lo;
        const t1shi19 = s3[39] ^ hi;
        const t1slo24 = s3[48] ^ lo;
        const t1shi24 = s3[49] ^ hi;
        const t2slo0 = t1slo0;
        const t2shi0 = t1shi0;
        const t2slo16 = t1shi5 << 4 | t1slo5 >>> 28;
        const t2shi16 = t1slo5 << 4 | t1shi5 >>> 28;
        const t2slo7 = t1slo10 << 3 | t1shi10 >>> 29;
        const t2shi7 = t1shi10 << 3 | t1slo10 >>> 29;
        const t2slo23 = t1shi15 << 9 | t1slo15 >>> 23;
        const t2shi23 = t1slo15 << 9 | t1shi15 >>> 23;
        const t2slo14 = t1slo20 << 18 | t1shi20 >>> 14;
        const t2shi14 = t1shi20 << 18 | t1slo20 >>> 14;
        const t2slo10 = t1slo1 << 1 | t1shi1 >>> 31;
        const t2shi10 = t1shi1 << 1 | t1slo1 >>> 31;
        const t2slo1 = t1shi6 << 12 | t1slo6 >>> 20;
        const t2shi1 = t1slo6 << 12 | t1shi6 >>> 20;
        const t2slo17 = t1slo11 << 10 | t1shi11 >>> 22;
        const t2shi17 = t1shi11 << 10 | t1slo11 >>> 22;
        const t2slo8 = t1shi16 << 13 | t1slo16 >>> 19;
        const t2shi8 = t1slo16 << 13 | t1shi16 >>> 19;
        const t2slo24 = t1slo21 << 2 | t1shi21 >>> 30;
        const t2shi24 = t1shi21 << 2 | t1slo21 >>> 30;
        const t2slo20 = t1shi2 << 30 | t1slo2 >>> 2;
        const t2shi20 = t1slo2 << 30 | t1shi2 >>> 2;
        const t2slo11 = t1slo7 << 6 | t1shi7 >>> 26;
        const t2shi11 = t1shi7 << 6 | t1slo7 >>> 26;
        const t2slo2 = t1shi12 << 11 | t1slo12 >>> 21;
        const t2shi2 = t1slo12 << 11 | t1shi12 >>> 21;
        const t2slo18 = t1slo17 << 15 | t1shi17 >>> 17;
        const t2shi18 = t1shi17 << 15 | t1slo17 >>> 17;
        const t2slo9 = t1shi22 << 29 | t1slo22 >>> 3;
        const t2shi9 = t1slo22 << 29 | t1shi22 >>> 3;
        const t2slo5 = t1slo3 << 28 | t1shi3 >>> 4;
        const t2shi5 = t1shi3 << 28 | t1slo3 >>> 4;
        const t2slo21 = t1shi8 << 23 | t1slo8 >>> 9;
        const t2shi21 = t1slo8 << 23 | t1shi8 >>> 9;
        const t2slo12 = t1slo13 << 25 | t1shi13 >>> 7;
        const t2shi12 = t1shi13 << 25 | t1slo13 >>> 7;
        const t2slo3 = t1slo18 << 21 | t1shi18 >>> 11;
        const t2shi3 = t1shi18 << 21 | t1slo18 >>> 11;
        const t2slo19 = t1shi23 << 24 | t1slo23 >>> 8;
        const t2shi19 = t1slo23 << 24 | t1shi23 >>> 8;
        const t2slo15 = t1slo4 << 27 | t1shi4 >>> 5;
        const t2shi15 = t1shi4 << 27 | t1slo4 >>> 5;
        const t2slo6 = t1slo9 << 20 | t1shi9 >>> 12;
        const t2shi6 = t1shi9 << 20 | t1slo9 >>> 12;
        const t2slo22 = t1shi14 << 7 | t1slo14 >>> 25;
        const t2shi22 = t1slo14 << 7 | t1shi14 >>> 25;
        const t2slo13 = t1slo19 << 8 | t1shi19 >>> 24;
        const t2shi13 = t1shi19 << 8 | t1slo19 >>> 24;
        const t2slo4 = t1slo24 << 14 | t1shi24 >>> 18;
        const t2shi4 = t1shi24 << 14 | t1slo24 >>> 18;
        s3[0] = t2slo0 ^ ~t2slo1 & t2slo2;
        s3[1] = t2shi0 ^ ~t2shi1 & t2shi2;
        s3[10] = t2slo5 ^ ~t2slo6 & t2slo7;
        s3[11] = t2shi5 ^ ~t2shi6 & t2shi7;
        s3[20] = t2slo10 ^ ~t2slo11 & t2slo12;
        s3[21] = t2shi10 ^ ~t2shi11 & t2shi12;
        s3[30] = t2slo15 ^ ~t2slo16 & t2slo17;
        s3[31] = t2shi15 ^ ~t2shi16 & t2shi17;
        s3[40] = t2slo20 ^ ~t2slo21 & t2slo22;
        s3[41] = t2shi20 ^ ~t2shi21 & t2shi22;
        s3[2] = t2slo1 ^ ~t2slo2 & t2slo3;
        s3[3] = t2shi1 ^ ~t2shi2 & t2shi3;
        s3[12] = t2slo6 ^ ~t2slo7 & t2slo8;
        s3[13] = t2shi6 ^ ~t2shi7 & t2shi8;
        s3[22] = t2slo11 ^ ~t2slo12 & t2slo13;
        s3[23] = t2shi11 ^ ~t2shi12 & t2shi13;
        s3[32] = t2slo16 ^ ~t2slo17 & t2slo18;
        s3[33] = t2shi16 ^ ~t2shi17 & t2shi18;
        s3[42] = t2slo21 ^ ~t2slo22 & t2slo23;
        s3[43] = t2shi21 ^ ~t2shi22 & t2shi23;
        s3[4] = t2slo2 ^ ~t2slo3 & t2slo4;
        s3[5] = t2shi2 ^ ~t2shi3 & t2shi4;
        s3[14] = t2slo7 ^ ~t2slo8 & t2slo9;
        s3[15] = t2shi7 ^ ~t2shi8 & t2shi9;
        s3[24] = t2slo12 ^ ~t2slo13 & t2slo14;
        s3[25] = t2shi12 ^ ~t2shi13 & t2shi14;
        s3[34] = t2slo17 ^ ~t2slo18 & t2slo19;
        s3[35] = t2shi17 ^ ~t2shi18 & t2shi19;
        s3[44] = t2slo22 ^ ~t2slo23 & t2slo24;
        s3[45] = t2shi22 ^ ~t2shi23 & t2shi24;
        s3[6] = t2slo3 ^ ~t2slo4 & t2slo0;
        s3[7] = t2shi3 ^ ~t2shi4 & t2shi0;
        s3[16] = t2slo8 ^ ~t2slo9 & t2slo5;
        s3[17] = t2shi8 ^ ~t2shi9 & t2shi5;
        s3[26] = t2slo13 ^ ~t2slo14 & t2slo10;
        s3[27] = t2shi13 ^ ~t2shi14 & t2shi10;
        s3[36] = t2slo18 ^ ~t2slo19 & t2slo15;
        s3[37] = t2shi18 ^ ~t2shi19 & t2shi15;
        s3[46] = t2slo23 ^ ~t2slo24 & t2slo20;
        s3[47] = t2shi23 ^ ~t2shi24 & t2shi20;
        s3[8] = t2slo4 ^ ~t2slo0 & t2slo1;
        s3[9] = t2shi4 ^ ~t2shi0 & t2shi1;
        s3[18] = t2slo9 ^ ~t2slo5 & t2slo6;
        s3[19] = t2shi9 ^ ~t2shi5 & t2shi6;
        s3[28] = t2slo14 ^ ~t2slo10 & t2slo11;
        s3[29] = t2shi14 ^ ~t2shi10 & t2shi11;
        s3[38] = t2slo19 ^ ~t2slo15 & t2slo16;
        s3[39] = t2shi19 ^ ~t2shi15 & t2shi16;
        s3[48] = t2slo24 ^ ~t2slo20 & t2slo21;
        s3[49] = t2shi24 ^ ~t2shi20 & t2shi21;
        s3[0] ^= P1600_ROUND_CONSTANTS[round * 2];
        s3[1] ^= P1600_ROUND_CONSTANTS[round * 2 + 1];
      }
    };
  }
});

// node_modules/keccak/lib/keccak.js
var require_keccak2 = __commonJS({
  "node_modules/keccak/lib/keccak.js"(exports, module) {
    var keccakState = require_keccak_state_unroll();
    function Keccak() {
      this.state = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ];
      this.blockSize = null;
      this.count = 0;
      this.squeezing = false;
    }
    Keccak.prototype.initialize = function(rate, capacity) {
      for (let i3 = 0; i3 < 50; ++i3)
        this.state[i3] = 0;
      this.blockSize = rate / 8;
      this.count = 0;
      this.squeezing = false;
    };
    Keccak.prototype.absorb = function(data) {
      for (let i3 = 0; i3 < data.length; ++i3) {
        this.state[~~(this.count / 4)] ^= data[i3] << 8 * (this.count % 4);
        this.count += 1;
        if (this.count === this.blockSize) {
          keccakState.p1600(this.state);
          this.count = 0;
        }
      }
    };
    Keccak.prototype.absorbLastFewBits = function(bits) {
      this.state[~~(this.count / 4)] ^= bits << 8 * (this.count % 4);
      if ((bits & 128) !== 0 && this.count === this.blockSize - 1)
        keccakState.p1600(this.state);
      this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4);
      keccakState.p1600(this.state);
      this.count = 0;
      this.squeezing = true;
    };
    Keccak.prototype.squeeze = function(length) {
      if (!this.squeezing)
        this.absorbLastFewBits(1);
      const output = Buffer.alloc(length);
      for (let i3 = 0; i3 < length; ++i3) {
        output[i3] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255;
        this.count += 1;
        if (this.count === this.blockSize) {
          keccakState.p1600(this.state);
          this.count = 0;
        }
      }
      return output;
    };
    Keccak.prototype.copy = function(dest) {
      for (let i3 = 0; i3 < 50; ++i3)
        dest.state[i3] = this.state[i3];
      dest.blockSize = this.blockSize;
      dest.count = this.count;
      dest.squeezing = this.squeezing;
    };
    module.exports = Keccak;
  }
});

// node_modules/keccak/js.js
var require_js = __commonJS({
  "node_modules/keccak/js.js"(exports, module) {
    module.exports = require_api()(require_keccak2());
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/util.js
var require_util3 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/util.js"(exports, module) {
    var createKeccakHash = require_js();
    var BN = require_bn();
    function zeros(bytes) {
      return Buffer.allocUnsafe(bytes).fill(0);
    }
    function setLength(msg, length, right) {
      const buf = zeros(length);
      msg = toBuffer(msg);
      if (right) {
        if (msg.length < length) {
          msg.copy(buf);
          return buf;
        }
        return msg.slice(0, length);
      } else {
        if (msg.length < length) {
          msg.copy(buf, length - msg.length);
          return buf;
        }
        return msg.slice(-length);
      }
    }
    function setLengthRight(msg, length) {
      return setLength(msg, length, true);
    }
    function toBuffer(v3) {
      if (!Buffer.isBuffer(v3)) {
        if (Array.isArray(v3)) {
          v3 = Buffer.from(v3);
        } else if (typeof v3 === "string") {
          if (isHexString(v3)) {
            v3 = Buffer.from(padToEven(stripHexPrefix(v3)), "hex");
          } else {
            v3 = Buffer.from(v3);
          }
        } else if (typeof v3 === "number") {
          v3 = intToBuffer(v3);
        } else if (v3 === null || v3 === void 0) {
          v3 = Buffer.allocUnsafe(0);
        } else if (BN.isBN(v3)) {
          v3 = v3.toArrayLike(Buffer);
        } else if (v3.toArray) {
          v3 = Buffer.from(v3.toArray());
        } else {
          throw new Error("invalid type");
        }
      }
      return v3;
    }
    function bufferToHex(buf) {
      buf = toBuffer(buf);
      return "0x" + buf.toString("hex");
    }
    function keccak(a3, bits) {
      a3 = toBuffer(a3);
      if (!bits)
        bits = 256;
      return createKeccakHash("keccak" + bits).update(a3).digest();
    }
    function padToEven(str) {
      return str.length % 2 ? "0" + str : str;
    }
    function isHexString(str) {
      return typeof str === "string" && str.match(/^0x[0-9A-Fa-f]*$/);
    }
    function stripHexPrefix(str) {
      if (typeof str === "string" && str.startsWith("0x")) {
        return str.slice(2);
      }
      return str;
    }
    module.exports = {
      zeros,
      setLength,
      setLengthRight,
      isHexString,
      stripHexPrefix,
      toBuffer,
      bufferToHex,
      keccak
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/abi.js
var require_abi = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/abi.js"(exports, module) {
    var util = require_util3();
    var BN = require_bn();
    function elementaryName(name) {
      if (name.startsWith("int[")) {
        return "int256" + name.slice(3);
      } else if (name === "int") {
        return "int256";
      } else if (name.startsWith("uint[")) {
        return "uint256" + name.slice(4);
      } else if (name === "uint") {
        return "uint256";
      } else if (name.startsWith("fixed[")) {
        return "fixed128x128" + name.slice(5);
      } else if (name === "fixed") {
        return "fixed128x128";
      } else if (name.startsWith("ufixed[")) {
        return "ufixed128x128" + name.slice(6);
      } else if (name === "ufixed") {
        return "ufixed128x128";
      }
      return name;
    }
    function parseTypeN(type2) {
      return parseInt(/^\D+(\d+)$/.exec(type2)[1], 10);
    }
    function parseTypeNxM(type2) {
      var tmp = /^\D+(\d+)x(\d+)$/.exec(type2);
      return [parseInt(tmp[1], 10), parseInt(tmp[2], 10)];
    }
    function parseTypeArray(type2) {
      var tmp = type2.match(/(.*)\[(.*?)\]$/);
      if (tmp) {
        return tmp[2] === "" ? "dynamic" : parseInt(tmp[2], 10);
      }
      return null;
    }
    function parseNumber(arg) {
      var type2 = typeof arg;
      if (type2 === "string") {
        if (util.isHexString(arg)) {
          return new BN(util.stripHexPrefix(arg), 16);
        } else {
          return new BN(arg, 10);
        }
      } else if (type2 === "number") {
        return new BN(arg);
      } else if (arg.toArray) {
        return arg;
      } else {
        throw new Error("Argument is not a number");
      }
    }
    function encodeSingle(type2, arg) {
      var size2, num, ret, i3;
      if (type2 === "address") {
        return encodeSingle("uint160", parseNumber(arg));
      } else if (type2 === "bool") {
        return encodeSingle("uint8", arg ? 1 : 0);
      } else if (type2 === "string") {
        return encodeSingle("bytes", new Buffer(arg, "utf8"));
      } else if (isArray(type2)) {
        if (typeof arg.length === "undefined") {
          throw new Error("Not an array?");
        }
        size2 = parseTypeArray(type2);
        if (size2 !== "dynamic" && size2 !== 0 && arg.length > size2) {
          throw new Error("Elements exceed array size: " + size2);
        }
        ret = [];
        type2 = type2.slice(0, type2.lastIndexOf("["));
        if (typeof arg === "string") {
          arg = JSON.parse(arg);
        }
        for (i3 in arg) {
          ret.push(encodeSingle(type2, arg[i3]));
        }
        if (size2 === "dynamic") {
          var length = encodeSingle("uint256", arg.length);
          ret.unshift(length);
        }
        return Buffer.concat(ret);
      } else if (type2 === "bytes") {
        arg = new Buffer(arg);
        ret = Buffer.concat([encodeSingle("uint256", arg.length), arg]);
        if (arg.length % 32 !== 0) {
          ret = Buffer.concat([ret, util.zeros(32 - arg.length % 32)]);
        }
        return ret;
      } else if (type2.startsWith("bytes")) {
        size2 = parseTypeN(type2);
        if (size2 < 1 || size2 > 32) {
          throw new Error("Invalid bytes<N> width: " + size2);
        }
        return util.setLengthRight(arg, 32);
      } else if (type2.startsWith("uint")) {
        size2 = parseTypeN(type2);
        if (size2 % 8 || size2 < 8 || size2 > 256) {
          throw new Error("Invalid uint<N> width: " + size2);
        }
        num = parseNumber(arg);
        if (num.bitLength() > size2) {
          throw new Error("Supplied uint exceeds width: " + size2 + " vs " + num.bitLength());
        }
        if (num < 0) {
          throw new Error("Supplied uint is negative");
        }
        return num.toArrayLike(Buffer, "be", 32);
      } else if (type2.startsWith("int")) {
        size2 = parseTypeN(type2);
        if (size2 % 8 || size2 < 8 || size2 > 256) {
          throw new Error("Invalid int<N> width: " + size2);
        }
        num = parseNumber(arg);
        if (num.bitLength() > size2) {
          throw new Error("Supplied int exceeds width: " + size2 + " vs " + num.bitLength());
        }
        return num.toTwos(256).toArrayLike(Buffer, "be", 32);
      } else if (type2.startsWith("ufixed")) {
        size2 = parseTypeNxM(type2);
        num = parseNumber(arg);
        if (num < 0) {
          throw new Error("Supplied ufixed is negative");
        }
        return encodeSingle("uint256", num.mul(new BN(2).pow(new BN(size2[1]))));
      } else if (type2.startsWith("fixed")) {
        size2 = parseTypeNxM(type2);
        return encodeSingle("int256", parseNumber(arg).mul(new BN(2).pow(new BN(size2[1]))));
      }
      throw new Error("Unsupported or invalid type: " + type2);
    }
    function isDynamic(type2) {
      return type2 === "string" || type2 === "bytes" || parseTypeArray(type2) === "dynamic";
    }
    function isArray(type2) {
      return type2.lastIndexOf("]") === type2.length - 1;
    }
    function rawEncode(types, values) {
      var output = [];
      var data = [];
      var headLength = 32 * types.length;
      for (var i3 in types) {
        var type2 = elementaryName(types[i3]);
        var value = values[i3];
        var cur = encodeSingle(type2, value);
        if (isDynamic(type2)) {
          output.push(encodeSingle("uint256", headLength));
          data.push(cur);
          headLength += cur.length;
        } else {
          output.push(cur);
        }
      }
      return Buffer.concat(output.concat(data));
    }
    function solidityPack(types, values) {
      if (types.length !== values.length) {
        throw new Error("Number of types are not matching the values");
      }
      var size2, num;
      var ret = [];
      for (var i3 = 0; i3 < types.length; i3++) {
        var type2 = elementaryName(types[i3]);
        var value = values[i3];
        if (type2 === "bytes") {
          ret.push(value);
        } else if (type2 === "string") {
          ret.push(new Buffer(value, "utf8"));
        } else if (type2 === "bool") {
          ret.push(new Buffer(value ? "01" : "00", "hex"));
        } else if (type2 === "address") {
          ret.push(util.setLength(value, 20));
        } else if (type2.startsWith("bytes")) {
          size2 = parseTypeN(type2);
          if (size2 < 1 || size2 > 32) {
            throw new Error("Invalid bytes<N> width: " + size2);
          }
          ret.push(util.setLengthRight(value, size2));
        } else if (type2.startsWith("uint")) {
          size2 = parseTypeN(type2);
          if (size2 % 8 || size2 < 8 || size2 > 256) {
            throw new Error("Invalid uint<N> width: " + size2);
          }
          num = parseNumber(value);
          if (num.bitLength() > size2) {
            throw new Error("Supplied uint exceeds width: " + size2 + " vs " + num.bitLength());
          }
          ret.push(num.toArrayLike(Buffer, "be", size2 / 8));
        } else if (type2.startsWith("int")) {
          size2 = parseTypeN(type2);
          if (size2 % 8 || size2 < 8 || size2 > 256) {
            throw new Error("Invalid int<N> width: " + size2);
          }
          num = parseNumber(value);
          if (num.bitLength() > size2) {
            throw new Error("Supplied int exceeds width: " + size2 + " vs " + num.bitLength());
          }
          ret.push(num.toTwos(size2).toArrayLike(Buffer, "be", size2 / 8));
        } else {
          throw new Error("Unsupported or invalid type: " + type2);
        }
      }
      return Buffer.concat(ret);
    }
    function soliditySHA3(types, values) {
      return util.keccak(solidityPack(types, values));
    }
    module.exports = {
      rawEncode,
      solidityPack,
      soliditySHA3
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/index.js
var require_eth_eip712_util = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/index.js"(exports, module) {
    var util = require_util3();
    var abi = require_abi();
    var TYPED_MESSAGE_SCHEMA = {
      type: "object",
      properties: {
        types: {
          type: "object",
          additionalProperties: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                type: { type: "string" }
              },
              required: ["name", "type"]
            }
          }
        },
        primaryType: { type: "string" },
        domain: { type: "object" },
        message: { type: "object" }
      },
      required: ["types", "primaryType", "domain", "message"]
    };
    var TypedDataUtils = {
      /**
       * Encodes an object by encoding and concatenating each of its members
       *
       * @param {string} primaryType - Root type
       * @param {Object} data - Object to encode
       * @param {Object} types - Type definitions
       * @returns {string} - Encoded representation of an object
       */
      encodeData(primaryType, data, types, useV4 = true) {
        const encodedTypes = ["bytes32"];
        const encodedValues = [this.hashType(primaryType, types)];
        if (useV4) {
          const encodeField = (name, type2, value) => {
            if (types[type2] !== void 0) {
              return ["bytes32", value == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : util.keccak(this.encodeData(type2, value, types, useV4))];
            }
            if (value === void 0)
              throw new Error(`missing value for field ${name} of type ${type2}`);
            if (type2 === "bytes") {
              return ["bytes32", util.keccak(value)];
            }
            if (type2 === "string") {
              if (typeof value === "string") {
                value = Buffer.from(value, "utf8");
              }
              return ["bytes32", util.keccak(value)];
            }
            if (type2.lastIndexOf("]") === type2.length - 1) {
              const parsedType = type2.slice(0, type2.lastIndexOf("["));
              const typeValuePairs = value.map((item) => encodeField(name, parsedType, item));
              return ["bytes32", util.keccak(abi.rawEncode(
                typeValuePairs.map(([type3]) => type3),
                typeValuePairs.map(([, value2]) => value2)
              ))];
            }
            return [type2, value];
          };
          for (const field of types[primaryType]) {
            const [type2, value] = encodeField(field.name, field.type, data[field.name]);
            encodedTypes.push(type2);
            encodedValues.push(value);
          }
        } else {
          for (const field of types[primaryType]) {
            let value = data[field.name];
            if (value !== void 0) {
              if (field.type === "bytes") {
                encodedTypes.push("bytes32");
                value = util.keccak(value);
                encodedValues.push(value);
              } else if (field.type === "string") {
                encodedTypes.push("bytes32");
                if (typeof value === "string") {
                  value = Buffer.from(value, "utf8");
                }
                value = util.keccak(value);
                encodedValues.push(value);
              } else if (types[field.type] !== void 0) {
                encodedTypes.push("bytes32");
                value = util.keccak(this.encodeData(field.type, value, types, useV4));
                encodedValues.push(value);
              } else if (field.type.lastIndexOf("]") === field.type.length - 1) {
                throw new Error("Arrays currently unimplemented in encodeData");
              } else {
                encodedTypes.push(field.type);
                encodedValues.push(value);
              }
            }
          }
        }
        return abi.rawEncode(encodedTypes, encodedValues);
      },
      /**
       * Encodes the type of an object by encoding a comma delimited list of its members
       *
       * @param {string} primaryType - Root type to encode
       * @param {Object} types - Type definitions
       * @returns {string} - Encoded representation of the type of an object
       */
      encodeType(primaryType, types) {
        let result = "";
        let deps = this.findTypeDependencies(primaryType, types).filter((dep) => dep !== primaryType);
        deps = [primaryType].concat(deps.sort());
        for (const type2 of deps) {
          const children = types[type2];
          if (!children) {
            throw new Error("No type definition specified: " + type2);
          }
          result += type2 + "(" + types[type2].map(({ name, type: type3 }) => type3 + " " + name).join(",") + ")";
        }
        return result;
      },
      /**
       * Finds all types within a type defintion object
       *
       * @param {string} primaryType - Root type
       * @param {Object} types - Type definitions
       * @param {Array} results - current set of accumulated types
       * @returns {Array} - Set of all types found in the type definition
       */
      findTypeDependencies(primaryType, types, results = []) {
        primaryType = primaryType.match(/^\w*/)[0];
        if (results.includes(primaryType) || types[primaryType] === void 0) {
          return results;
        }
        results.push(primaryType);
        for (const field of types[primaryType]) {
          for (const dep of this.findTypeDependencies(field.type, types, results)) {
            !results.includes(dep) && results.push(dep);
          }
        }
        return results;
      },
      /**
       * Hashes an object
       *
       * @param {string} primaryType - Root type
       * @param {Object} data - Object to hash
       * @param {Object} types - Type definitions
       * @returns {Buffer} - Hash of an object
       */
      hashStruct(primaryType, data, types, useV4 = true) {
        return util.keccak(this.encodeData(primaryType, data, types, useV4));
      },
      /**
       * Hashes the type of an object
       *
       * @param {string} primaryType - Root type to hash
       * @param {Object} types - Type definitions
       * @returns {string} - Hash of an object
       */
      hashType(primaryType, types) {
        return util.keccak(this.encodeType(primaryType, types));
      },
      /**
       * Removes properties from a message object that are not defined per EIP-712
       *
       * @param {Object} data - typed message object
       * @returns {Object} - typed message object with only allowed fields
       */
      sanitizeData(data) {
        const sanitizedData = {};
        for (const key in TYPED_MESSAGE_SCHEMA.properties) {
          data[key] && (sanitizedData[key] = data[key]);
        }
        if (sanitizedData.types) {
          sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
        }
        return sanitizedData;
      },
      /**
       * Returns the hash of a typed message as per EIP-712 for signing
       *
       * @param {Object} typedData - Types message data to sign
       * @returns {string} - sha3 hash for signing
       */
      hash(typedData, useV4 = true) {
        const sanitizedData = this.sanitizeData(typedData);
        const parts = [Buffer.from("1901", "hex")];
        parts.push(this.hashStruct("EIP712Domain", sanitizedData.domain, sanitizedData.types, useV4));
        if (sanitizedData.primaryType !== "EIP712Domain") {
          parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
        }
        return util.keccak(Buffer.concat(parts));
      }
    };
    module.exports = {
      TYPED_MESSAGE_SCHEMA,
      TypedDataUtils,
      hashForSignTypedDataLegacy: function(msgParams) {
        return typedSignatureHashLegacy(msgParams.data);
      },
      hashForSignTypedData_v3: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data, false);
      },
      hashForSignTypedData_v4: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data);
      }
    };
    function typedSignatureHashLegacy(typedData) {
      const error = new Error("Expect argument to be non-empty array");
      if (typeof typedData !== "object" || !typedData.length)
        throw error;
      const data = typedData.map(function(e3) {
        return e3.type === "bytes" ? util.toBuffer(e3.value) : e3.value;
      });
      const types = typedData.map(function(e3) {
        return e3.type;
      });
      const schema = typedData.map(function(e3) {
        if (!e3.name)
          throw error;
        return e3.type + " " + e3.name;
      });
      return abi.soliditySHA3(
        ["bytes32", "bytes32"],
        [
          abi.soliditySHA3(new Array(typedData.length).fill("string"), schema),
          abi.soliditySHA3(types, data)
        ]
      );
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/provider/FilterPolyfill.js
var require_FilterPolyfill = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/provider/FilterPolyfill.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filterFromParam = exports.FilterPolyfill = void 0;
    var type_1 = require_type();
    var util_1 = require_util();
    var TIMEOUT = 5 * 60 * 1e3;
    var JSONRPC_TEMPLATE = {
      jsonrpc: "2.0",
      id: 0
    };
    var FilterPolyfill = class {
      constructor(provider) {
        this.logFilters = /* @__PURE__ */ new Map();
        this.blockFilters = /* @__PURE__ */ new Set();
        this.pendingTransactionFilters = /* @__PURE__ */ new Set();
        this.cursors = /* @__PURE__ */ new Map();
        this.timeouts = /* @__PURE__ */ new Map();
        this.nextFilterId = (0, type_1.IntNumber)(1);
        this.REQUEST_THROTTLE_INTERVAL = 1e3;
        this.lastFetchTimestamp = /* @__PURE__ */ new Date(0);
        this.resolvers = [];
        this.provider = provider;
      }
      async newFilter(param) {
        const filter = filterFromParam(param);
        const id = this.makeFilterId();
        const cursor = await this.setInitialCursorPosition(id, filter.fromBlock);
        console.info(`Installing new log filter(${id}):`, filter, "initial cursor position:", cursor);
        this.logFilters.set(id, filter);
        this.setFilterTimeout(id);
        return (0, util_1.hexStringFromIntNumber)(id);
      }
      async newBlockFilter() {
        const id = this.makeFilterId();
        const cursor = await this.setInitialCursorPosition(id, "latest");
        console.info(`Installing new block filter (${id}) with initial cursor position:`, cursor);
        this.blockFilters.add(id);
        this.setFilterTimeout(id);
        return (0, util_1.hexStringFromIntNumber)(id);
      }
      async newPendingTransactionFilter() {
        const id = this.makeFilterId();
        const cursor = await this.setInitialCursorPosition(id, "latest");
        console.info(`Installing new block filter (${id}) with initial cursor position:`, cursor);
        this.pendingTransactionFilters.add(id);
        this.setFilterTimeout(id);
        return (0, util_1.hexStringFromIntNumber)(id);
      }
      uninstallFilter(filterId) {
        const id = (0, util_1.intNumberFromHexString)(filterId);
        console.info(`Uninstalling filter (${id})`);
        this.deleteFilter(id);
        return true;
      }
      getFilterChanges(filterId) {
        const id = (0, util_1.intNumberFromHexString)(filterId);
        if (this.timeouts.has(id)) {
          this.setFilterTimeout(id);
        }
        if (this.logFilters.has(id)) {
          return this.getLogFilterChanges(id);
        } else if (this.blockFilters.has(id)) {
          return this.getBlockFilterChanges(id);
        } else if (this.pendingTransactionFilters.has(id)) {
          return this.getPendingTransactionFilterChanges(id);
        }
        return Promise.resolve(filterNotFoundError());
      }
      async getFilterLogs(filterId) {
        const id = (0, util_1.intNumberFromHexString)(filterId);
        const filter = this.logFilters.get(id);
        if (!filter) {
          return filterNotFoundError();
        }
        return this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getLogs", params: [paramFromFilter(filter)] }));
      }
      makeFilterId() {
        return (0, type_1.IntNumber)(++this.nextFilterId);
      }
      sendAsyncPromise(request) {
        return new Promise((resolve, reject) => {
          this.provider.sendAsync(request, (err, response) => {
            if (err) {
              return reject(err);
            }
            if (Array.isArray(response) || response == null) {
              return reject(new Error(`unexpected response received: ${JSON.stringify(response)}`));
            }
            resolve(response);
          });
        });
      }
      deleteFilter(id) {
        console.info(`Deleting filter (${id})`);
        this.logFilters.delete(id);
        this.blockFilters.delete(id);
        this.pendingTransactionFilters.delete(id);
        this.cursors.delete(id);
        this.timeouts.delete(id);
      }
      async getLogFilterChanges(id) {
        const filter = this.logFilters.get(id);
        const cursorPosition = this.cursors.get(id);
        if (!cursorPosition || !filter) {
          return filterNotFoundError();
        }
        const currentBlockHeight = await this.getCurrentBlockHeight();
        const toBlock = filter.toBlock === "latest" ? currentBlockHeight : filter.toBlock;
        if (cursorPosition > currentBlockHeight) {
          return emptyResult();
        }
        if (cursorPosition > Number(filter.toBlock)) {
          return emptyResult();
        }
        console.info(`Fetching logs from ${cursorPosition} to ${toBlock} for filter ${id}`);
        const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getLogs", params: [
          paramFromFilter(Object.assign(Object.assign({}, filter), { fromBlock: cursorPosition, toBlock }))
        ] }));
        if (Array.isArray(response.result)) {
          const blocks = response.result.map((log) => (0, util_1.intNumberFromHexString)(log.blockNumber || "0x0"));
          const highestBlock = Math.max(...blocks);
          if (highestBlock && highestBlock > cursorPosition) {
            const newCursorPosition = (0, type_1.IntNumber)(highestBlock + 1);
            console.info(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
            this.cursors.set(id, newCursorPosition);
          }
        }
        return response;
      }
      async getBlockFilterChanges(id) {
        const cursorPosition = this.cursors.get(id);
        if (!cursorPosition) {
          return filterNotFoundError();
        }
        const currentBlockHeight = await this.getCurrentBlockHeight();
        if (cursorPosition > currentBlockHeight) {
          return emptyResult();
        }
        console.info(`Fetching blocks from ${cursorPosition} to ${currentBlockHeight} for filter (${id})`);
        const blocks = (await Promise.all(
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          (0, util_1.range)(cursorPosition, currentBlockHeight + 1).map((i3) => this.getBlockHashByNumber((0, type_1.IntNumber)(i3)))
        )).filter((hash) => !!hash);
        const newCursorPosition = (0, type_1.IntNumber)(cursorPosition + blocks.length);
        console.info(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
        this.cursors.set(id, newCursorPosition);
        return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { result: blocks });
      }
      async getPendingTransactionFilterChanges(_id) {
        return Promise.resolve(emptyResult());
      }
      async setInitialCursorPosition(id, startBlock) {
        const currentBlockHeight = await this.getCurrentBlockHeight();
        const initialCursorPosition = typeof startBlock === "number" && startBlock > currentBlockHeight ? startBlock : currentBlockHeight;
        this.cursors.set(id, initialCursorPosition);
        return initialCursorPosition;
      }
      setFilterTimeout(id) {
        const existing = this.timeouts.get(id);
        if (existing) {
          window.clearTimeout(existing);
        }
        const timeout = window.setTimeout(() => {
          console.info(`Filter (${id}) timed out`);
          this.deleteFilter(id);
        }, TIMEOUT);
        this.timeouts.set(id, timeout);
      }
      // throttle eth_blockNumber requests
      async getCurrentBlockHeight() {
        const now = /* @__PURE__ */ new Date();
        if (now.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
          this.lastFetchTimestamp = now;
          const height = await this._getCurrentBlockHeight();
          this.currentBlockHeight = height;
          this.resolvers.forEach((resolve) => resolve(height));
          this.resolvers = [];
        }
        if (!this.currentBlockHeight) {
          return new Promise((resolve) => this.resolvers.push(resolve));
        }
        return this.currentBlockHeight;
      }
      async _getCurrentBlockHeight() {
        const { result } = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_blockNumber", params: [] }));
        return (0, util_1.intNumberFromHexString)((0, util_1.ensureHexString)(result));
      }
      async getBlockHashByNumber(blockNumber) {
        const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getBlockByNumber", params: [(0, util_1.hexStringFromIntNumber)(blockNumber), false] }));
        if (response.result && typeof response.result.hash === "string") {
          return (0, util_1.ensureHexString)(response.result.hash);
        }
        return null;
      }
    };
    exports.FilterPolyfill = FilterPolyfill;
    function filterFromParam(param) {
      return {
        fromBlock: intBlockHeightFromHexBlockHeight(param.fromBlock),
        toBlock: intBlockHeightFromHexBlockHeight(param.toBlock),
        addresses: param.address === void 0 ? null : Array.isArray(param.address) ? param.address : [param.address],
        topics: param.topics || []
      };
    }
    exports.filterFromParam = filterFromParam;
    function paramFromFilter(filter) {
      const param = {
        fromBlock: hexBlockHeightFromIntBlockHeight(filter.fromBlock),
        toBlock: hexBlockHeightFromIntBlockHeight(filter.toBlock),
        topics: filter.topics
      };
      if (filter.addresses !== null) {
        param.address = filter.addresses;
      }
      return param;
    }
    function intBlockHeightFromHexBlockHeight(value) {
      if (value === void 0 || value === "latest" || value === "pending") {
        return "latest";
      } else if (value === "earliest") {
        return (0, type_1.IntNumber)(0);
      } else if ((0, util_1.isHexString)(value)) {
        return (0, util_1.intNumberFromHexString)(value);
      }
      throw new Error(`Invalid block option: ${String(value)}`);
    }
    function hexBlockHeightFromIntBlockHeight(value) {
      if (value === "latest") {
        return value;
      }
      return (0, util_1.hexStringFromIntNumber)(value);
    }
    function filterNotFoundError() {
      return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { error: { code: -32e3, message: "filter not found" } });
    }
    function emptyResult() {
      return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { result: [] });
    }
  }
});

// node_modules/json-rpc-random-id/index.js
var require_json_rpc_random_id = __commonJS({
  "node_modules/json-rpc-random-id/index.js"(exports, module) {
    module.exports = IdIterator;
    function IdIterator(opts) {
      opts = opts || {};
      var max2 = opts.max || Number.MAX_SAFE_INTEGER;
      var idCounter = typeof opts.start !== "undefined" ? opts.start : Math.floor(Math.random() * max2);
      return function createRandomId() {
        idCounter = idCounter % max2;
        return idCounter++;
      };
    }
  }
});

// node_modules/eth-block-tracker/node_modules/pify/index.js
var require_pify = __commonJS({
  "node_modules/eth-block-tracker/node_modules/pify/index.js"(exports, module) {
    "use strict";
    var processFn = (fn, opts) => function() {
      const P3 = opts.promiseModule;
      const args = new Array(arguments.length);
      for (let i3 = 0; i3 < arguments.length; i3++) {
        args[i3] = arguments[i3];
      }
      return new P3((resolve, reject) => {
        if (opts.errorFirst) {
          args.push(function(err, result) {
            if (opts.multiArgs) {
              const results = new Array(arguments.length - 1);
              for (let i3 = 1; i3 < arguments.length; i3++) {
                results[i3 - 1] = arguments[i3];
              }
              if (err) {
                results.unshift(err);
                reject(results);
              } else {
                resolve(results);
              }
            } else if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        } else {
          args.push(function(result) {
            if (opts.multiArgs) {
              const results = new Array(arguments.length - 1);
              for (let i3 = 0; i3 < arguments.length; i3++) {
                results[i3] = arguments[i3];
              }
              resolve(results);
            } else {
              resolve(result);
            }
          });
        }
        fn.apply(this, args);
      });
    };
    module.exports = (obj, opts) => {
      opts = Object.assign({
        exclude: [/.+(Sync|Stream)$/],
        errorFirst: true,
        promiseModule: Promise
      }, opts);
      const filter = (key) => {
        const match = (pattern2) => typeof pattern2 === "string" ? key === pattern2 : pattern2.test(key);
        return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
      };
      let ret;
      if (typeof obj === "function") {
        ret = function() {
          if (opts.excludeMain) {
            return obj.apply(this, arguments);
          }
          return processFn(obj, opts).apply(this, arguments);
        };
      } else {
        ret = Object.create(Object.getPrototypeOf(obj));
      }
      for (const key in obj) {
        const x3 = obj[key];
        ret[key] = typeof x3 === "function" && filter(key) ? processFn(x3, opts) : x3;
      }
      return ret;
    };
  }
});

// node_modules/@metamask/safe-event-emitter/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@metamask/safe-event-emitter/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require_events();
    function safeApply(handler, context, args) {
      try {
        Reflect.apply(handler, context, args);
      } catch (err) {
        setTimeout(() => {
          throw err;
        });
      }
    }
    function arrayClone(arr) {
      const n2 = arr.length;
      const copy = new Array(n2);
      for (let i3 = 0; i3 < n2; i3 += 1) {
        copy[i3] = arr[i3];
      }
      return copy;
    }
    var SafeEventEmitter = class extends events_1.EventEmitter {
      emit(type2, ...args) {
        let doError = type2 === "error";
        const events = this._events;
        if (events !== void 0) {
          doError = doError && events.error === void 0;
        } else if (!doError) {
          return false;
        }
        if (doError) {
          let er;
          if (args.length > 0) {
            [er] = args;
          }
          if (er instanceof Error) {
            throw er;
          }
          const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ""}`);
          err.context = er;
          throw err;
        }
        const handler = events[type2];
        if (handler === void 0) {
          return false;
        }
        if (typeof handler === "function") {
          safeApply(handler, this, args);
        } else {
          const len = handler.length;
          const listeners = arrayClone(handler);
          for (let i3 = 0; i3 < len; i3 += 1) {
            safeApply(listeners[i3], this, args);
          }
        }
        return true;
      }
    };
    exports.default = SafeEventEmitter;
  }
});

// node_modules/eth-block-tracker/dist/BaseBlockTracker.js
var require_BaseBlockTracker = __commonJS({
  "node_modules/eth-block-tracker/dist/BaseBlockTracker.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseBlockTracker = void 0;
    var safe_event_emitter_1 = __importDefault2(require_cjs());
    var sec = 1e3;
    var calculateSum = (accumulator, currentValue) => accumulator + currentValue;
    var blockTrackerEvents = ["sync", "latest"];
    var BaseBlockTracker = class extends safe_event_emitter_1.default {
      constructor(opts) {
        super();
        this._blockResetDuration = opts.blockResetDuration || 20 * sec;
        this._usePastBlocks = opts.usePastBlocks || false;
        this._currentBlock = null;
        this._isRunning = false;
        this._onNewListener = this._onNewListener.bind(this);
        this._onRemoveListener = this._onRemoveListener.bind(this);
        this._resetCurrentBlock = this._resetCurrentBlock.bind(this);
        this._setupInternalEvents();
      }
      async destroy() {
        this._cancelBlockResetTimeout();
        await this._maybeEnd();
        super.removeAllListeners();
      }
      isRunning() {
        return this._isRunning;
      }
      getCurrentBlock() {
        return this._currentBlock;
      }
      async getLatestBlock() {
        if (this._currentBlock) {
          return this._currentBlock;
        }
        const latestBlock = await new Promise((resolve) => this.once("latest", resolve));
        return latestBlock;
      }
      // dont allow module consumer to remove our internal event listeners
      removeAllListeners(eventName) {
        if (eventName) {
          super.removeAllListeners(eventName);
        } else {
          super.removeAllListeners();
        }
        this._setupInternalEvents();
        this._onRemoveListener();
        return this;
      }
      _setupInternalEvents() {
        this.removeListener("newListener", this._onNewListener);
        this.removeListener("removeListener", this._onRemoveListener);
        this.on("newListener", this._onNewListener);
        this.on("removeListener", this._onRemoveListener);
      }
      _onNewListener(eventName) {
        if (blockTrackerEvents.includes(eventName)) {
          this._maybeStart();
        }
      }
      _onRemoveListener() {
        if (this._getBlockTrackerEventCount() > 0) {
          return;
        }
        this._maybeEnd();
      }
      async _maybeStart() {
        if (this._isRunning) {
          return;
        }
        this._isRunning = true;
        this._cancelBlockResetTimeout();
        await this._start();
        this.emit("_started");
      }
      async _maybeEnd() {
        if (!this._isRunning) {
          return;
        }
        this._isRunning = false;
        this._setupBlockResetTimeout();
        await this._end();
        this.emit("_ended");
      }
      _getBlockTrackerEventCount() {
        return blockTrackerEvents.map((eventName) => this.listenerCount(eventName)).reduce(calculateSum);
      }
      _shouldUseNewBlock(newBlock) {
        const currentBlock = this._currentBlock;
        if (!currentBlock) {
          return true;
        }
        const newBlockInt = hexToInt(newBlock);
        const currentBlockInt = hexToInt(currentBlock);
        return this._usePastBlocks && newBlockInt < currentBlockInt || newBlockInt > currentBlockInt;
      }
      _newPotentialLatest(newBlock) {
        if (!this._shouldUseNewBlock(newBlock)) {
          return;
        }
        this._setCurrentBlock(newBlock);
      }
      _setCurrentBlock(newBlock) {
        const oldBlock = this._currentBlock;
        this._currentBlock = newBlock;
        this.emit("latest", newBlock);
        this.emit("sync", { oldBlock, newBlock });
      }
      _setupBlockResetTimeout() {
        this._cancelBlockResetTimeout();
        this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration);
        if (this._blockResetTimeout.unref) {
          this._blockResetTimeout.unref();
        }
      }
      _cancelBlockResetTimeout() {
        if (this._blockResetTimeout) {
          clearTimeout(this._blockResetTimeout);
        }
      }
      _resetCurrentBlock() {
        this._currentBlock = null;
      }
    };
    exports.BaseBlockTracker = BaseBlockTracker;
    function hexToInt(hexInt) {
      return Number.parseInt(hexInt, 16);
    }
  }
});

// node_modules/superstruct/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  Struct: () => Struct,
  StructError: () => StructError,
  any: () => any,
  array: () => array,
  assert: () => assert,
  assign: () => assign,
  bigint: () => bigint,
  boolean: () => boolean,
  coerce: () => coerce,
  create: () => create,
  date: () => date,
  defaulted: () => defaulted,
  define: () => define,
  deprecated: () => deprecated,
  dynamic: () => dynamic,
  empty: () => empty,
  enums: () => enums,
  func: () => func,
  instance: () => instance,
  integer: () => integer,
  intersection: () => intersection,
  is: () => is,
  lazy: () => lazy,
  literal: () => literal,
  map: () => map,
  mask: () => mask,
  max: () => max,
  min: () => min,
  never: () => never,
  nonempty: () => nonempty,
  nullable: () => nullable,
  number: () => number,
  object: () => object,
  omit: () => omit,
  optional: () => optional,
  partial: () => partial,
  pattern: () => pattern,
  pick: () => pick,
  record: () => record,
  refine: () => refine,
  regexp: () => regexp,
  set: () => set,
  size: () => size,
  string: () => string,
  struct: () => struct,
  trimmed: () => trimmed,
  tuple: () => tuple,
  type: () => type,
  union: () => union,
  unknown: () => unknown,
  validate: () => validate
});
function isIterable(x3) {
  return isObject(x3) && typeof x3[Symbol.iterator] === "function";
}
function isObject(x3) {
  return typeof x3 === "object" && x3 != null;
}
function isPlainObject(x3) {
  if (Object.prototype.toString.call(x3) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(x3);
  return prototype === null || prototype === Object.prototype;
}
function print(value) {
  if (typeof value === "symbol") {
    return value.toString();
  }
  return typeof value === "string" ? JSON.stringify(value) : `${value}`;
}
function shiftIterator(input) {
  const { done, value } = input.next();
  return done ? void 0 : value;
}
function toFailure(result, context, struct2, value) {
  if (result === true) {
    return;
  } else if (result === false) {
    result = {};
  } else if (typeof result === "string") {
    result = { message: result };
  }
  const { path, branch } = context;
  const { type: type2 } = struct2;
  const { refinement, message = `Expected a value of type \`${type2}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${print(value)}\`` } = result;
  return {
    value,
    type: type2,
    refinement,
    key: path[path.length - 1],
    path,
    branch,
    ...result,
    message
  };
}
function* toFailures(result, context, struct2, value) {
  if (!isIterable(result)) {
    result = [result];
  }
  for (const r4 of result) {
    const failure = toFailure(r4, context, struct2, value);
    if (failure) {
      yield failure;
    }
  }
}
function* run(value, struct2, options = {}) {
  const { path = [], branch = [value], coerce: coerce2 = false, mask: mask2 = false } = options;
  const ctx = { path, branch };
  if (coerce2) {
    value = struct2.coercer(value, ctx);
    if (mask2 && struct2.type !== "type" && isObject(struct2.schema) && isObject(value) && !Array.isArray(value)) {
      for (const key in value) {
        if (struct2.schema[key] === void 0) {
          delete value[key];
        }
      }
    }
  }
  let status = "valid";
  for (const failure of struct2.validator(value, ctx)) {
    failure.explanation = options.message;
    status = "not_valid";
    yield [failure, void 0];
  }
  for (let [k3, v3, s3] of struct2.entries(value, ctx)) {
    const ts = run(v3, s3, {
      path: k3 === void 0 ? path : [...path, k3],
      branch: k3 === void 0 ? branch : [...branch, v3],
      coerce: coerce2,
      mask: mask2,
      message: options.message
    });
    for (const t3 of ts) {
      if (t3[0]) {
        status = t3[0].refinement != null ? "not_refined" : "not_valid";
        yield [t3[0], void 0];
      } else if (coerce2) {
        v3 = t3[1];
        if (k3 === void 0) {
          value = v3;
        } else if (value instanceof Map) {
          value.set(k3, v3);
        } else if (value instanceof Set) {
          value.add(v3);
        } else if (isObject(value)) {
          if (v3 !== void 0 || k3 in value)
            value[k3] = v3;
        }
      }
    }
  }
  if (status !== "not_valid") {
    for (const failure of struct2.refiner(value, ctx)) {
      failure.explanation = options.message;
      status = "not_refined";
      yield [failure, void 0];
    }
  }
  if (status === "valid") {
    yield [void 0, value];
  }
}
function assert(value, struct2, message) {
  const result = validate(value, struct2, { message });
  if (result[0]) {
    throw result[0];
  }
}
function create(value, struct2, message) {
  const result = validate(value, struct2, { coerce: true, message });
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function mask(value, struct2, message) {
  const result = validate(value, struct2, { coerce: true, mask: true, message });
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function is(value, struct2) {
  const result = validate(value, struct2);
  return !result[0];
}
function validate(value, struct2, options = {}) {
  const tuples = run(value, struct2, options);
  const tuple2 = shiftIterator(tuples);
  if (tuple2[0]) {
    const error = new StructError(tuple2[0], function* () {
      for (const t3 of tuples) {
        if (t3[0]) {
          yield t3[0];
        }
      }
    });
    return [error, void 0];
  } else {
    const v3 = tuple2[1];
    return [void 0, v3];
  }
}
function assign(...Structs) {
  const isType = Structs[0].type === "type";
  const schemas = Structs.map((s3) => s3.schema);
  const schema = Object.assign({}, ...schemas);
  return isType ? type(schema) : object(schema);
}
function define(name, validator) {
  return new Struct({ type: name, schema: null, validator });
}
function deprecated(struct2, log) {
  return new Struct({
    ...struct2,
    refiner: (value, ctx) => value === void 0 || struct2.refiner(value, ctx),
    validator(value, ctx) {
      if (value === void 0) {
        return true;
      } else {
        log(value, ctx);
        return struct2.validator(value, ctx);
      }
    }
  });
}
function dynamic(fn) {
  return new Struct({
    type: "dynamic",
    schema: null,
    *entries(value, ctx) {
      const struct2 = fn(value, ctx);
      yield* struct2.entries(value, ctx);
    },
    validator(value, ctx) {
      const struct2 = fn(value, ctx);
      return struct2.validator(value, ctx);
    },
    coercer(value, ctx) {
      const struct2 = fn(value, ctx);
      return struct2.coercer(value, ctx);
    },
    refiner(value, ctx) {
      const struct2 = fn(value, ctx);
      return struct2.refiner(value, ctx);
    }
  });
}
function lazy(fn) {
  let struct2;
  return new Struct({
    type: "lazy",
    schema: null,
    *entries(value, ctx) {
      struct2 ?? (struct2 = fn());
      yield* struct2.entries(value, ctx);
    },
    validator(value, ctx) {
      struct2 ?? (struct2 = fn());
      return struct2.validator(value, ctx);
    },
    coercer(value, ctx) {
      struct2 ?? (struct2 = fn());
      return struct2.coercer(value, ctx);
    },
    refiner(value, ctx) {
      struct2 ?? (struct2 = fn());
      return struct2.refiner(value, ctx);
    }
  });
}
function omit(struct2, keys) {
  const { schema } = struct2;
  const subschema = { ...schema };
  for (const key of keys) {
    delete subschema[key];
  }
  switch (struct2.type) {
    case "type":
      return type(subschema);
    default:
      return object(subschema);
  }
}
function partial(struct2) {
  const isStruct = struct2 instanceof Struct;
  const schema = isStruct ? { ...struct2.schema } : { ...struct2 };
  for (const key in schema) {
    schema[key] = optional(schema[key]);
  }
  if (isStruct && struct2.type === "type") {
    return type(schema);
  }
  return object(schema);
}
function pick(struct2, keys) {
  const { schema } = struct2;
  const subschema = {};
  for (const key of keys) {
    subschema[key] = schema[key];
  }
  switch (struct2.type) {
    case "type":
      return type(subschema);
    default:
      return object(subschema);
  }
}
function struct(name, validator) {
  console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`.");
  return define(name, validator);
}
function any() {
  return define("any", () => true);
}
function array(Element) {
  return new Struct({
    type: "array",
    schema: Element,
    *entries(value) {
      if (Element && Array.isArray(value)) {
        for (const [i3, v3] of value.entries()) {
          yield [i3, v3, Element];
        }
      }
    },
    coercer(value) {
      return Array.isArray(value) ? value.slice() : value;
    },
    validator(value) {
      return Array.isArray(value) || `Expected an array value, but received: ${print(value)}`;
    }
  });
}
function bigint() {
  return define("bigint", (value) => {
    return typeof value === "bigint";
  });
}
function boolean() {
  return define("boolean", (value) => {
    return typeof value === "boolean";
  });
}
function date() {
  return define("date", (value) => {
    return value instanceof Date && !isNaN(value.getTime()) || `Expected a valid \`Date\` object, but received: ${print(value)}`;
  });
}
function enums(values) {
  const schema = {};
  const description = values.map((v3) => print(v3)).join();
  for (const key of values) {
    schema[key] = key;
  }
  return new Struct({
    type: "enums",
    schema,
    validator(value) {
      return values.includes(value) || `Expected one of \`${description}\`, but received: ${print(value)}`;
    }
  });
}
function func() {
  return define("func", (value) => {
    return typeof value === "function" || `Expected a function, but received: ${print(value)}`;
  });
}
function instance(Class) {
  return define("instance", (value) => {
    return value instanceof Class || `Expected a \`${Class.name}\` instance, but received: ${print(value)}`;
  });
}
function integer() {
  return define("integer", (value) => {
    return typeof value === "number" && !isNaN(value) && Number.isInteger(value) || `Expected an integer, but received: ${print(value)}`;
  });
}
function intersection(Structs) {
  return new Struct({
    type: "intersection",
    schema: null,
    *entries(value, ctx) {
      for (const S2 of Structs) {
        yield* S2.entries(value, ctx);
      }
    },
    *validator(value, ctx) {
      for (const S2 of Structs) {
        yield* S2.validator(value, ctx);
      }
    },
    *refiner(value, ctx) {
      for (const S2 of Structs) {
        yield* S2.refiner(value, ctx);
      }
    }
  });
}
function literal(constant) {
  const description = print(constant);
  const t3 = typeof constant;
  return new Struct({
    type: "literal",
    schema: t3 === "string" || t3 === "number" || t3 === "boolean" ? constant : null,
    validator(value) {
      return value === constant || `Expected the literal \`${description}\`, but received: ${print(value)}`;
    }
  });
}
function map(Key, Value) {
  return new Struct({
    type: "map",
    schema: null,
    *entries(value) {
      if (Key && Value && value instanceof Map) {
        for (const [k3, v3] of value.entries()) {
          yield [k3, k3, Key];
          yield [k3, v3, Value];
        }
      }
    },
    coercer(value) {
      return value instanceof Map ? new Map(value) : value;
    },
    validator(value) {
      return value instanceof Map || `Expected a \`Map\` object, but received: ${print(value)}`;
    }
  });
}
function never() {
  return define("never", () => false);
}
function nullable(struct2) {
  return new Struct({
    ...struct2,
    validator: (value, ctx) => value === null || struct2.validator(value, ctx),
    refiner: (value, ctx) => value === null || struct2.refiner(value, ctx)
  });
}
function number() {
  return define("number", (value) => {
    return typeof value === "number" && !isNaN(value) || `Expected a number, but received: ${print(value)}`;
  });
}
function object(schema) {
  const knowns = schema ? Object.keys(schema) : [];
  const Never = never();
  return new Struct({
    type: "object",
    schema: schema ? schema : null,
    *entries(value) {
      if (schema && isObject(value)) {
        const unknowns = new Set(Object.keys(value));
        for (const key of knowns) {
          unknowns.delete(key);
          yield [key, value[key], schema[key]];
        }
        for (const key of unknowns) {
          yield [key, value[key], Never];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    },
    coercer(value) {
      return isObject(value) ? { ...value } : value;
    }
  });
}
function optional(struct2) {
  return new Struct({
    ...struct2,
    validator: (value, ctx) => value === void 0 || struct2.validator(value, ctx),
    refiner: (value, ctx) => value === void 0 || struct2.refiner(value, ctx)
  });
}
function record(Key, Value) {
  return new Struct({
    type: "record",
    schema: null,
    *entries(value) {
      if (isObject(value)) {
        for (const k3 in value) {
          const v3 = value[k3];
          yield [k3, k3, Key];
          yield [k3, v3, Value];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    }
  });
}
function regexp() {
  return define("regexp", (value) => {
    return value instanceof RegExp;
  });
}
function set(Element) {
  return new Struct({
    type: "set",
    schema: null,
    *entries(value) {
      if (Element && value instanceof Set) {
        for (const v3 of value) {
          yield [v3, v3, Element];
        }
      }
    },
    coercer(value) {
      return value instanceof Set ? new Set(value) : value;
    },
    validator(value) {
      return value instanceof Set || `Expected a \`Set\` object, but received: ${print(value)}`;
    }
  });
}
function string() {
  return define("string", (value) => {
    return typeof value === "string" || `Expected a string, but received: ${print(value)}`;
  });
}
function tuple(Structs) {
  const Never = never();
  return new Struct({
    type: "tuple",
    schema: null,
    *entries(value) {
      if (Array.isArray(value)) {
        const length = Math.max(Structs.length, value.length);
        for (let i3 = 0; i3 < length; i3++) {
          yield [i3, value[i3], Structs[i3] || Never];
        }
      }
    },
    validator(value) {
      return Array.isArray(value) || `Expected an array, but received: ${print(value)}`;
    }
  });
}
function type(schema) {
  const keys = Object.keys(schema);
  return new Struct({
    type: "type",
    schema,
    *entries(value) {
      if (isObject(value)) {
        for (const k3 of keys) {
          yield [k3, value[k3], schema[k3]];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    },
    coercer(value) {
      return isObject(value) ? { ...value } : value;
    }
  });
}
function union(Structs) {
  const description = Structs.map((s3) => s3.type).join(" | ");
  return new Struct({
    type: "union",
    schema: null,
    coercer(value) {
      for (const S2 of Structs) {
        const [error, coerced] = S2.validate(value, { coerce: true });
        if (!error) {
          return coerced;
        }
      }
      return value;
    },
    validator(value, ctx) {
      const failures = [];
      for (const S2 of Structs) {
        const [...tuples] = run(value, S2, ctx);
        const [first] = tuples;
        if (!first[0]) {
          return [];
        } else {
          for (const [failure] of tuples) {
            if (failure) {
              failures.push(failure);
            }
          }
        }
      }
      return [
        `Expected the value to satisfy a union of \`${description}\`, but received: ${print(value)}`,
        ...failures
      ];
    }
  });
}
function unknown() {
  return define("unknown", () => true);
}
function coerce(struct2, condition, coercer) {
  return new Struct({
    ...struct2,
    coercer: (value, ctx) => {
      return is(value, condition) ? struct2.coercer(coercer(value, ctx), ctx) : struct2.coercer(value, ctx);
    }
  });
}
function defaulted(struct2, fallback, options = {}) {
  return coerce(struct2, unknown(), (x3) => {
    const f3 = typeof fallback === "function" ? fallback() : fallback;
    if (x3 === void 0) {
      return f3;
    }
    if (!options.strict && isPlainObject(x3) && isPlainObject(f3)) {
      const ret = { ...x3 };
      let changed = false;
      for (const key in f3) {
        if (ret[key] === void 0) {
          ret[key] = f3[key];
          changed = true;
        }
      }
      if (changed) {
        return ret;
      }
    }
    return x3;
  });
}
function trimmed(struct2) {
  return coerce(struct2, string(), (x3) => x3.trim());
}
function empty(struct2) {
  return refine(struct2, "empty", (value) => {
    const size2 = getSize(value);
    return size2 === 0 || `Expected an empty ${struct2.type} but received one with a size of \`${size2}\``;
  });
}
function getSize(value) {
  if (value instanceof Map || value instanceof Set) {
    return value.size;
  } else {
    return value.length;
  }
}
function max(struct2, threshold, options = {}) {
  const { exclusive } = options;
  return refine(struct2, "max", (value) => {
    return exclusive ? value < threshold : value <= threshold || `Expected a ${struct2.type} less than ${exclusive ? "" : "or equal to "}${threshold} but received \`${value}\``;
  });
}
function min(struct2, threshold, options = {}) {
  const { exclusive } = options;
  return refine(struct2, "min", (value) => {
    return exclusive ? value > threshold : value >= threshold || `Expected a ${struct2.type} greater than ${exclusive ? "" : "or equal to "}${threshold} but received \`${value}\``;
  });
}
function nonempty(struct2) {
  return refine(struct2, "nonempty", (value) => {
    const size2 = getSize(value);
    return size2 > 0 || `Expected a nonempty ${struct2.type} but received an empty one`;
  });
}
function pattern(struct2, regexp2) {
  return refine(struct2, "pattern", (value) => {
    return regexp2.test(value) || `Expected a ${struct2.type} matching \`/${regexp2.source}/\` but received "${value}"`;
  });
}
function size(struct2, min2, max2 = min2) {
  const expected = `Expected a ${struct2.type}`;
  const of = min2 === max2 ? `of \`${min2}\`` : `between \`${min2}\` and \`${max2}\``;
  return refine(struct2, "size", (value) => {
    if (typeof value === "number" || value instanceof Date) {
      return min2 <= value && value <= max2 || `${expected} ${of} but received \`${value}\``;
    } else if (value instanceof Map || value instanceof Set) {
      const { size: size2 } = value;
      return min2 <= size2 && size2 <= max2 || `${expected} with a size ${of} but received one with a size of \`${size2}\``;
    } else {
      const { length } = value;
      return min2 <= length && length <= max2 || `${expected} with a length ${of} but received one with a length of \`${length}\``;
    }
  });
}
function refine(struct2, name, refiner) {
  return new Struct({
    ...struct2,
    *refiner(value, ctx) {
      yield* struct2.refiner(value, ctx);
      const result = refiner(value, ctx);
      const failures = toFailures(result, ctx, struct2, value);
      for (const failure of failures) {
        yield { ...failure, refinement: name };
      }
    }
  });
}
var StructError, Struct;
var init_dist = __esm({
  "node_modules/superstruct/dist/index.mjs"() {
    StructError = class extends TypeError {
      constructor(failure, failures) {
        let cached;
        const { message, explanation, ...rest } = failure;
        const { path } = failure;
        const msg = path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;
        super(explanation ?? msg);
        if (explanation != null)
          this.cause = msg;
        Object.assign(this, rest);
        this.name = this.constructor.name;
        this.failures = () => {
          return cached ?? (cached = [failure, ...failures()]);
        };
      }
    };
    Struct = class {
      constructor(props) {
        const { type: type2, schema, validator, refiner, coercer = (value) => value, entries = function* () {
        } } = props;
        this.type = type2;
        this.schema = schema;
        this.entries = entries;
        this.coercer = coercer;
        if (validator) {
          this.validator = (value, context) => {
            const result = validator(value, context);
            return toFailures(result, context, this, value);
          };
        } else {
          this.validator = () => [];
        }
        if (refiner) {
          this.refiner = (value, context) => {
            const result = refiner(value, context);
            return toFailures(result, context, this, value);
          };
        } else {
          this.refiner = () => [];
        }
      }
      /**
       * Assert that a value passes the struct's validation, throwing if it doesn't.
       */
      assert(value, message) {
        return assert(value, this, message);
      }
      /**
       * Create a value with the struct's coercion logic, then validate it.
       */
      create(value, message) {
        return create(value, this, message);
      }
      /**
       * Check if a value passes the struct's validation.
       */
      is(value) {
        return is(value, this);
      }
      /**
       * Mask a value, coercing and validating it, but returning only the subset of
       * properties defined by the struct's schema.
       */
      mask(value, message) {
        return mask(value, this, message);
      }
      /**
       * Validate a value with the struct's validation logic, returning a tuple
       * representing the result.
       *
       * You may optionally pass `true` for the `withCoercion` argument to coerce
       * the value before attempting to validate it. If you do, the result will
       * contain the coerced result when successful.
       */
      validate(value, options = {}) {
        return validate(value, this, options);
      }
    };
  }
});

// node_modules/@metamask/utils/dist/assert.js
var require_assert = __commonJS({
  "node_modules/@metamask/utils/dist/assert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assertExhaustive = exports.assertStruct = exports.assert = exports.AssertionError = void 0;
    var superstruct_1 = (init_dist(), __toCommonJS(dist_exports));
    function isErrorWithMessage(error) {
      return typeof error === "object" && error !== null && "message" in error;
    }
    function isConstructable(fn) {
      var _a, _b;
      return Boolean(typeof ((_b = (_a = fn === null || fn === void 0 ? void 0 : fn.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === "string");
    }
    function getErrorMessage(error) {
      const message = isErrorWithMessage(error) ? error.message : String(error);
      if (message.endsWith(".")) {
        return message.slice(0, -1);
      }
      return message;
    }
    function getError(ErrorWrapper, message) {
      if (isConstructable(ErrorWrapper)) {
        return new ErrorWrapper({
          message
        });
      }
      return ErrorWrapper({
        message
      });
    }
    var AssertionError = class extends Error {
      constructor(options) {
        super(options.message);
        this.code = "ERR_ASSERTION";
      }
    };
    exports.AssertionError = AssertionError;
    function assert2(value, message = "Assertion failed.", ErrorWrapper = AssertionError) {
      if (!value) {
        if (message instanceof Error) {
          throw message;
        }
        throw getError(ErrorWrapper, message);
      }
    }
    exports.assert = assert2;
    function assertStruct(value, struct2, errorPrefix = "Assertion failed", ErrorWrapper = AssertionError) {
      try {
        (0, superstruct_1.assert)(value, struct2);
      } catch (error) {
        throw getError(ErrorWrapper, `${errorPrefix}: ${getErrorMessage(error)}.`);
      }
    }
    exports.assertStruct = assertStruct;
    function assertExhaustive(_object) {
      throw new Error("Invalid branch reached. Should be detected during compilation.");
    }
    exports.assertExhaustive = assertExhaustive;
  }
});

// node_modules/@metamask/utils/dist/base64.js
var require_base64 = __commonJS({
  "node_modules/@metamask/utils/dist/base64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.base64 = void 0;
    var superstruct_1 = (init_dist(), __toCommonJS(dist_exports));
    var assert_1 = require_assert();
    var base64 = (struct2, options = {}) => {
      var _a, _b;
      const paddingRequired = (_a = options.paddingRequired) !== null && _a !== void 0 ? _a : false;
      const characterSet = (_b = options.characterSet) !== null && _b !== void 0 ? _b : "base64";
      let letters;
      if (characterSet === "base64") {
        letters = String.raw`[A-Za-z0-9+\/]`;
      } else {
        (0, assert_1.assert)(characterSet === "base64url");
        letters = String.raw`[-_A-Za-z0-9]`;
      }
      let re;
      if (paddingRequired) {
        re = new RegExp(`^(?:${letters}{4})*(?:${letters}{3}=|${letters}{2}==)?$`, "u");
      } else {
        re = new RegExp(`^(?:${letters}{4})*(?:${letters}{2,3}|${letters}{3}=|${letters}{2}==)?$`, "u");
      }
      return (0, superstruct_1.pattern)(struct2, re);
    };
    exports.base64 = base64;
  }
});

// node_modules/@metamask/utils/dist/hex.js
var require_hex = __commonJS({
  "node_modules/@metamask/utils/dist/hex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.remove0x = exports.add0x = exports.assertIsStrictHexString = exports.assertIsHexString = exports.isStrictHexString = exports.isHexString = exports.StrictHexStruct = exports.HexStruct = void 0;
    var superstruct_1 = (init_dist(), __toCommonJS(dist_exports));
    var assert_1 = require_assert();
    exports.HexStruct = (0, superstruct_1.pattern)((0, superstruct_1.string)(), /^(?:0x)?[0-9a-f]+$/iu);
    exports.StrictHexStruct = (0, superstruct_1.pattern)((0, superstruct_1.string)(), /^0x[0-9a-f]+$/iu);
    function isHexString(value) {
      return (0, superstruct_1.is)(value, exports.HexStruct);
    }
    exports.isHexString = isHexString;
    function isStrictHexString(value) {
      return (0, superstruct_1.is)(value, exports.StrictHexStruct);
    }
    exports.isStrictHexString = isStrictHexString;
    function assertIsHexString(value) {
      (0, assert_1.assert)(isHexString(value), "Value must be a hexadecimal string.");
    }
    exports.assertIsHexString = assertIsHexString;
    function assertIsStrictHexString(value) {
      (0, assert_1.assert)(isStrictHexString(value), 'Value must be a hexadecimal string, starting with "0x".');
    }
    exports.assertIsStrictHexString = assertIsStrictHexString;
    function add0x(hexadecimal) {
      if (hexadecimal.startsWith("0x")) {
        return hexadecimal;
      }
      if (hexadecimal.startsWith("0X")) {
        return `0x${hexadecimal.substring(2)}`;
      }
      return `0x${hexadecimal}`;
    }
    exports.add0x = add0x;
    function remove0x(hexadecimal) {
      if (hexadecimal.startsWith("0x") || hexadecimal.startsWith("0X")) {
        return hexadecimal.substring(2);
      }
      return hexadecimal;
    }
    exports.remove0x = remove0x;
  }
});

// node_modules/@metamask/utils/dist/bytes.js
var require_bytes = __commonJS({
  "node_modules/@metamask/utils/dist/bytes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDataView = exports.concatBytes = exports.valueToBytes = exports.stringToBytes = exports.numberToBytes = exports.signedBigIntToBytes = exports.bigIntToBytes = exports.hexToBytes = exports.bytesToString = exports.bytesToNumber = exports.bytesToSignedBigInt = exports.bytesToBigInt = exports.bytesToHex = exports.assertIsBytes = exports.isBytes = void 0;
    var assert_1 = require_assert();
    var hex_1 = require_hex();
    var HEX_MINIMUM_NUMBER_CHARACTER = 48;
    var HEX_MAXIMUM_NUMBER_CHARACTER = 58;
    var HEX_CHARACTER_OFFSET = 87;
    function getPrecomputedHexValuesBuilder() {
      const lookupTable = [];
      return () => {
        if (lookupTable.length === 0) {
          for (let i3 = 0; i3 < 256; i3++) {
            lookupTable.push(i3.toString(16).padStart(2, "0"));
          }
        }
        return lookupTable;
      };
    }
    var getPrecomputedHexValues = getPrecomputedHexValuesBuilder();
    function isBytes(value) {
      return value instanceof Uint8Array;
    }
    exports.isBytes = isBytes;
    function assertIsBytes(value) {
      (0, assert_1.assert)(isBytes(value), "Value must be a Uint8Array.");
    }
    exports.assertIsBytes = assertIsBytes;
    function bytesToHex(bytes) {
      assertIsBytes(bytes);
      if (bytes.length === 0) {
        return "0x";
      }
      const lookupTable = getPrecomputedHexValues();
      const hexadecimal = new Array(bytes.length);
      for (let i3 = 0; i3 < bytes.length; i3++) {
        hexadecimal[i3] = lookupTable[bytes[i3]];
      }
      return (0, hex_1.add0x)(hexadecimal.join(""));
    }
    exports.bytesToHex = bytesToHex;
    function bytesToBigInt(bytes) {
      assertIsBytes(bytes);
      const hexadecimal = bytesToHex(bytes);
      return BigInt(hexadecimal);
    }
    exports.bytesToBigInt = bytesToBigInt;
    function bytesToSignedBigInt(bytes) {
      assertIsBytes(bytes);
      let value = BigInt(0);
      for (const byte of bytes) {
        value = (value << BigInt(8)) + BigInt(byte);
      }
      return BigInt.asIntN(bytes.length * 8, value);
    }
    exports.bytesToSignedBigInt = bytesToSignedBigInt;
    function bytesToNumber(bytes) {
      assertIsBytes(bytes);
      const bigint2 = bytesToBigInt(bytes);
      (0, assert_1.assert)(bigint2 <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead.");
      return Number(bigint2);
    }
    exports.bytesToNumber = bytesToNumber;
    function bytesToString(bytes) {
      assertIsBytes(bytes);
      return new TextDecoder().decode(bytes);
    }
    exports.bytesToString = bytesToString;
    function hexToBytes(value) {
      var _a;
      if (((_a = value === null || value === void 0 ? void 0 : value.toLowerCase) === null || _a === void 0 ? void 0 : _a.call(value)) === "0x") {
        return new Uint8Array();
      }
      (0, hex_1.assertIsHexString)(value);
      const strippedValue = (0, hex_1.remove0x)(value).toLowerCase();
      const normalizedValue = strippedValue.length % 2 === 0 ? strippedValue : `0${strippedValue}`;
      const bytes = new Uint8Array(normalizedValue.length / 2);
      for (let i3 = 0; i3 < bytes.length; i3++) {
        const c1 = normalizedValue.charCodeAt(i3 * 2);
        const c22 = normalizedValue.charCodeAt(i3 * 2 + 1);
        const n1 = c1 - (c1 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
        const n2 = c22 - (c22 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
        bytes[i3] = n1 * 16 + n2;
      }
      return bytes;
    }
    exports.hexToBytes = hexToBytes;
    function bigIntToBytes(value) {
      (0, assert_1.assert)(typeof value === "bigint", "Value must be a bigint.");
      (0, assert_1.assert)(value >= BigInt(0), "Value must be a non-negative bigint.");
      const hexadecimal = value.toString(16);
      return hexToBytes(hexadecimal);
    }
    exports.bigIntToBytes = bigIntToBytes;
    function bigIntFits(value, bytes) {
      (0, assert_1.assert)(bytes > 0);
      const mask2 = value >> BigInt(31);
      return !((~value & mask2) + (value & ~mask2) >> BigInt(bytes * 8 + ~0));
    }
    function signedBigIntToBytes(value, byteLength) {
      (0, assert_1.assert)(typeof value === "bigint", "Value must be a bigint.");
      (0, assert_1.assert)(typeof byteLength === "number", "Byte length must be a number.");
      (0, assert_1.assert)(byteLength > 0, "Byte length must be greater than 0.");
      (0, assert_1.assert)(bigIntFits(value, byteLength), "Byte length is too small to represent the given value.");
      let numberValue = value;
      const bytes = new Uint8Array(byteLength);
      for (let i3 = 0; i3 < bytes.length; i3++) {
        bytes[i3] = Number(BigInt.asUintN(8, numberValue));
        numberValue >>= BigInt(8);
      }
      return bytes.reverse();
    }
    exports.signedBigIntToBytes = signedBigIntToBytes;
    function numberToBytes(value) {
      (0, assert_1.assert)(typeof value === "number", "Value must be a number.");
      (0, assert_1.assert)(value >= 0, "Value must be a non-negative number.");
      (0, assert_1.assert)(Number.isSafeInteger(value), "Value is not a safe integer. Use `bigIntToBytes` instead.");
      const hexadecimal = value.toString(16);
      return hexToBytes(hexadecimal);
    }
    exports.numberToBytes = numberToBytes;
    function stringToBytes(value) {
      (0, assert_1.assert)(typeof value === "string", "Value must be a string.");
      return new TextEncoder().encode(value);
    }
    exports.stringToBytes = stringToBytes;
    function valueToBytes(value) {
      if (typeof value === "bigint") {
        return bigIntToBytes(value);
      }
      if (typeof value === "number") {
        return numberToBytes(value);
      }
      if (typeof value === "string") {
        if (value.startsWith("0x")) {
          return hexToBytes(value);
        }
        return stringToBytes(value);
      }
      if (isBytes(value)) {
        return value;
      }
      throw new TypeError(`Unsupported value type: "${typeof value}".`);
    }
    exports.valueToBytes = valueToBytes;
    function concatBytes(values) {
      const normalizedValues = new Array(values.length);
      let byteLength = 0;
      for (let i3 = 0; i3 < values.length; i3++) {
        const value = valueToBytes(values[i3]);
        normalizedValues[i3] = value;
        byteLength += value.length;
      }
      const bytes = new Uint8Array(byteLength);
      for (let i3 = 0, offset = 0; i3 < normalizedValues.length; i3++) {
        bytes.set(normalizedValues[i3], offset);
        offset += normalizedValues[i3].length;
      }
      return bytes;
    }
    exports.concatBytes = concatBytes;
    function createDataView(bytes) {
      if (typeof Buffer !== "undefined" && bytes instanceof Buffer) {
        const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
        return new DataView(buffer);
      }
      return new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    }
    exports.createDataView = createDataView;
  }
});

// node_modules/@metamask/utils/dist/checksum.js
var require_checksum = __commonJS({
  "node_modules/@metamask/utils/dist/checksum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChecksumStruct = void 0;
    var superstruct_1 = (init_dist(), __toCommonJS(dist_exports));
    var base64_1 = require_base64();
    exports.ChecksumStruct = (0, superstruct_1.size)((0, base64_1.base64)((0, superstruct_1.string)(), { paddingRequired: true }), 44, 44);
  }
});

// node_modules/@metamask/utils/dist/coercers.js
var require_coercers = __commonJS({
  "node_modules/@metamask/utils/dist/coercers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createHex = exports.createBytes = exports.createBigInt = exports.createNumber = void 0;
    var superstruct_1 = (init_dist(), __toCommonJS(dist_exports));
    var assert_1 = require_assert();
    var bytes_1 = require_bytes();
    var hex_1 = require_hex();
    var NumberLikeStruct = (0, superstruct_1.union)([(0, superstruct_1.number)(), (0, superstruct_1.bigint)(), (0, superstruct_1.string)(), hex_1.StrictHexStruct]);
    var NumberCoercer = (0, superstruct_1.coerce)((0, superstruct_1.number)(), NumberLikeStruct, Number);
    var BigIntCoercer = (0, superstruct_1.coerce)((0, superstruct_1.bigint)(), NumberLikeStruct, BigInt);
    var BytesLikeStruct = (0, superstruct_1.union)([hex_1.StrictHexStruct, (0, superstruct_1.instance)(Uint8Array)]);
    var BytesCoercer = (0, superstruct_1.coerce)((0, superstruct_1.instance)(Uint8Array), (0, superstruct_1.union)([hex_1.StrictHexStruct]), bytes_1.hexToBytes);
    var HexCoercer = (0, superstruct_1.coerce)(hex_1.StrictHexStruct, (0, superstruct_1.instance)(Uint8Array), bytes_1.bytesToHex);
    function createNumber(value) {
      try {
        const result = (0, superstruct_1.create)(value, NumberCoercer);
        (0, assert_1.assert)(Number.isFinite(result), `Expected a number-like value, got "${value}".`);
        return result;
      } catch (error) {
        if (error instanceof superstruct_1.StructError) {
          throw new Error(`Expected a number-like value, got "${value}".`);
        }
        throw error;
      }
    }
    exports.createNumber = createNumber;
    function createBigInt(value) {
      try {
        return (0, superstruct_1.create)(value, BigIntCoercer);
      } catch (error) {
        if (error instanceof superstruct_1.StructError) {
          throw new Error(`Expected a number-like value, got "${String(error.value)}".`);
        }
        throw error;
      }
    }
    exports.createBigInt = createBigInt;
    function createBytes(value) {
      if (typeof value === "string" && value.toLowerCase() === "0x") {
        return new Uint8Array();
      }
      try {
        return (0, superstruct_1.create)(value, BytesCoercer);
      } catch (error) {
        if (error instanceof superstruct_1.StructError) {
          throw new Error(`Expected a bytes-like value, got "${String(error.value)}".`);
        }
        throw error;
      }
    }
    exports.createBytes = createBytes;
    function createHex(value) {
      if (value instanceof Uint8Array && value.length === 0 || typeof value === "string" && value.toLowerCase() === "0x") {
        return "0x";
      }
      try {
        return (0, superstruct_1.create)(value, HexCoercer);
      } catch (error) {
        if (error instanceof superstruct_1.StructError) {
          throw new Error(`Expected a bytes-like value, got "${String(error.value)}".`);
        }
        throw error;
      }
    }
    exports.createHex = createHex;
  }
});

// node_modules/@metamask/utils/dist/collections.js
var require_collections = __commonJS({
  "node_modules/@metamask/utils/dist/collections.js"(exports) {
    "use strict";
    var __classPrivateFieldSet2 = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f3) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f3)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet2 = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f3) {
      if (kind === "a" && !f3)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
    };
    var _FrozenMap_map;
    var _FrozenSet_set;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FrozenSet = exports.FrozenMap = void 0;
    var FrozenMap = class {
      constructor(entries) {
        _FrozenMap_map.set(this, void 0);
        __classPrivateFieldSet2(this, _FrozenMap_map, new Map(entries), "f");
        Object.freeze(this);
      }
      get size() {
        return __classPrivateFieldGet2(this, _FrozenMap_map, "f").size;
      }
      [(_FrozenMap_map = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return __classPrivateFieldGet2(this, _FrozenMap_map, "f")[Symbol.iterator]();
      }
      entries() {
        return __classPrivateFieldGet2(this, _FrozenMap_map, "f").entries();
      }
      forEach(callbackfn, thisArg) {
        return __classPrivateFieldGet2(this, _FrozenMap_map, "f").forEach((value, key, _map) => callbackfn.call(thisArg, value, key, this));
      }
      get(key) {
        return __classPrivateFieldGet2(this, _FrozenMap_map, "f").get(key);
      }
      has(key) {
        return __classPrivateFieldGet2(this, _FrozenMap_map, "f").has(key);
      }
      keys() {
        return __classPrivateFieldGet2(this, _FrozenMap_map, "f").keys();
      }
      values() {
        return __classPrivateFieldGet2(this, _FrozenMap_map, "f").values();
      }
      toString() {
        return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([key, value]) => `${String(key)} => ${String(value)}`).join(", ")} ` : ""}}`;
      }
    };
    exports.FrozenMap = FrozenMap;
    var FrozenSet = class {
      constructor(values) {
        _FrozenSet_set.set(this, void 0);
        __classPrivateFieldSet2(this, _FrozenSet_set, new Set(values), "f");
        Object.freeze(this);
      }
      get size() {
        return __classPrivateFieldGet2(this, _FrozenSet_set, "f").size;
      }
      [(_FrozenSet_set = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return __classPrivateFieldGet2(this, _FrozenSet_set, "f")[Symbol.iterator]();
      }
      entries() {
        return __classPrivateFieldGet2(this, _FrozenSet_set, "f").entries();
      }
      forEach(callbackfn, thisArg) {
        return __classPrivateFieldGet2(this, _FrozenSet_set, "f").forEach((value, value2, _set) => callbackfn.call(thisArg, value, value2, this));
      }
      has(value) {
        return __classPrivateFieldGet2(this, _FrozenSet_set, "f").has(value);
      }
      keys() {
        return __classPrivateFieldGet2(this, _FrozenSet_set, "f").keys();
      }
      values() {
        return __classPrivateFieldGet2(this, _FrozenSet_set, "f").values();
      }
      toString() {
        return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((member) => String(member)).join(", ")} ` : ""}}`;
      }
    };
    exports.FrozenSet = FrozenSet;
    Object.freeze(FrozenMap);
    Object.freeze(FrozenMap.prototype);
    Object.freeze(FrozenSet);
    Object.freeze(FrozenSet.prototype);
  }
});

// node_modules/@metamask/utils/dist/encryption-types.js
var require_encryption_types = __commonJS({
  "node_modules/@metamask/utils/dist/encryption-types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@metamask/utils/dist/json.js
var require_json = __commonJS({
  "node_modules/@metamask/utils/dist/json.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getJsonRpcIdValidator = exports.assertIsJsonRpcError = exports.isJsonRpcError = exports.assertIsJsonRpcFailure = exports.isJsonRpcFailure = exports.assertIsJsonRpcSuccess = exports.isJsonRpcSuccess = exports.assertIsJsonRpcResponse = exports.isJsonRpcResponse = exports.assertIsPendingJsonRpcResponse = exports.isPendingJsonRpcResponse = exports.JsonRpcResponseStruct = exports.JsonRpcFailureStruct = exports.JsonRpcSuccessStruct = exports.PendingJsonRpcResponseStruct = exports.assertIsJsonRpcRequest = exports.isJsonRpcRequest = exports.assertIsJsonRpcNotification = exports.isJsonRpcNotification = exports.JsonRpcNotificationStruct = exports.JsonRpcRequestStruct = exports.JsonRpcParamsStruct = exports.JsonRpcErrorStruct = exports.JsonRpcIdStruct = exports.JsonRpcVersionStruct = exports.jsonrpc2 = exports.getJsonSize = exports.isValidJson = exports.JsonStruct = exports.UnsafeJsonStruct = void 0;
    var superstruct_1 = (init_dist(), __toCommonJS(dist_exports));
    var assert_1 = require_assert();
    var finiteNumber = () => (0, superstruct_1.define)("finite number", (value) => {
      return (0, superstruct_1.is)(value, (0, superstruct_1.number)()) && Number.isFinite(value);
    });
    exports.UnsafeJsonStruct = (0, superstruct_1.union)([
      (0, superstruct_1.literal)(null),
      (0, superstruct_1.boolean)(),
      finiteNumber(),
      (0, superstruct_1.string)(),
      (0, superstruct_1.array)((0, superstruct_1.lazy)(() => exports.UnsafeJsonStruct)),
      (0, superstruct_1.record)((0, superstruct_1.string)(), (0, superstruct_1.lazy)(() => exports.UnsafeJsonStruct))
    ]);
    exports.JsonStruct = (0, superstruct_1.define)("Json", (value, context) => {
      function checkStruct(innerValue, struct2) {
        const iterator = struct2.validator(innerValue, context);
        const errors = [...iterator];
        if (errors.length > 0) {
          return errors;
        }
        return true;
      }
      try {
        const unsafeResult = checkStruct(value, exports.UnsafeJsonStruct);
        if (unsafeResult !== true) {
          return unsafeResult;
        }
        return checkStruct(JSON.parse(JSON.stringify(value)), exports.UnsafeJsonStruct);
      } catch (error) {
        if (error instanceof RangeError) {
          return "Circular reference detected";
        }
        return false;
      }
    });
    function isValidJson(value) {
      return (0, superstruct_1.is)(value, exports.JsonStruct);
    }
    exports.isValidJson = isValidJson;
    function getJsonSize(value) {
      (0, assert_1.assertStruct)(value, exports.JsonStruct, "Invalid JSON value");
      const json = JSON.stringify(value);
      return new TextEncoder().encode(json).byteLength;
    }
    exports.getJsonSize = getJsonSize;
    exports.jsonrpc2 = "2.0";
    exports.JsonRpcVersionStruct = (0, superstruct_1.literal)(exports.jsonrpc2);
    exports.JsonRpcIdStruct = (0, superstruct_1.nullable)((0, superstruct_1.union)([(0, superstruct_1.number)(), (0, superstruct_1.string)()]));
    exports.JsonRpcErrorStruct = (0, superstruct_1.object)({
      code: (0, superstruct_1.integer)(),
      message: (0, superstruct_1.string)(),
      data: (0, superstruct_1.optional)(exports.JsonStruct),
      stack: (0, superstruct_1.optional)((0, superstruct_1.string)())
    });
    exports.JsonRpcParamsStruct = (0, superstruct_1.optional)((0, superstruct_1.union)([(0, superstruct_1.record)((0, superstruct_1.string)(), exports.JsonStruct), (0, superstruct_1.array)(exports.JsonStruct)]));
    exports.JsonRpcRequestStruct = (0, superstruct_1.object)({
      id: exports.JsonRpcIdStruct,
      jsonrpc: exports.JsonRpcVersionStruct,
      method: (0, superstruct_1.string)(),
      params: exports.JsonRpcParamsStruct
    });
    exports.JsonRpcNotificationStruct = (0, superstruct_1.omit)(exports.JsonRpcRequestStruct, ["id"]);
    function isJsonRpcNotification(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcNotificationStruct);
    }
    exports.isJsonRpcNotification = isJsonRpcNotification;
    function assertIsJsonRpcNotification(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", ErrorWrapper);
    }
    exports.assertIsJsonRpcNotification = assertIsJsonRpcNotification;
    function isJsonRpcRequest(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcRequestStruct);
    }
    exports.isJsonRpcRequest = isJsonRpcRequest;
    function assertIsJsonRpcRequest(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcRequestStruct, "Invalid JSON-RPC request", ErrorWrapper);
    }
    exports.assertIsJsonRpcRequest = assertIsJsonRpcRequest;
    exports.PendingJsonRpcResponseStruct = (0, superstruct_1.object)({
      id: exports.JsonRpcIdStruct,
      jsonrpc: exports.JsonRpcVersionStruct,
      result: (0, superstruct_1.optional)((0, superstruct_1.unknown)()),
      error: (0, superstruct_1.optional)(exports.JsonRpcErrorStruct)
    });
    exports.JsonRpcSuccessStruct = (0, superstruct_1.object)({
      id: exports.JsonRpcIdStruct,
      jsonrpc: exports.JsonRpcVersionStruct,
      result: exports.JsonStruct
    });
    exports.JsonRpcFailureStruct = (0, superstruct_1.object)({
      id: exports.JsonRpcIdStruct,
      jsonrpc: exports.JsonRpcVersionStruct,
      error: exports.JsonRpcErrorStruct
    });
    exports.JsonRpcResponseStruct = (0, superstruct_1.union)([
      exports.JsonRpcSuccessStruct,
      exports.JsonRpcFailureStruct
    ]);
    function isPendingJsonRpcResponse(response) {
      return (0, superstruct_1.is)(response, exports.PendingJsonRpcResponseStruct);
    }
    exports.isPendingJsonRpcResponse = isPendingJsonRpcResponse;
    function assertIsPendingJsonRpcResponse(response, ErrorWrapper) {
      (0, assert_1.assertStruct)(response, exports.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", ErrorWrapper);
    }
    exports.assertIsPendingJsonRpcResponse = assertIsPendingJsonRpcResponse;
    function isJsonRpcResponse(response) {
      return (0, superstruct_1.is)(response, exports.JsonRpcResponseStruct);
    }
    exports.isJsonRpcResponse = isJsonRpcResponse;
    function assertIsJsonRpcResponse(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcResponseStruct, "Invalid JSON-RPC response", ErrorWrapper);
    }
    exports.assertIsJsonRpcResponse = assertIsJsonRpcResponse;
    function isJsonRpcSuccess(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcSuccessStruct);
    }
    exports.isJsonRpcSuccess = isJsonRpcSuccess;
    function assertIsJsonRpcSuccess(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", ErrorWrapper);
    }
    exports.assertIsJsonRpcSuccess = assertIsJsonRpcSuccess;
    function isJsonRpcFailure(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcFailureStruct);
    }
    exports.isJsonRpcFailure = isJsonRpcFailure;
    function assertIsJsonRpcFailure(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", ErrorWrapper);
    }
    exports.assertIsJsonRpcFailure = assertIsJsonRpcFailure;
    function isJsonRpcError(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcErrorStruct);
    }
    exports.isJsonRpcError = isJsonRpcError;
    function assertIsJsonRpcError(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcErrorStruct, "Invalid JSON-RPC error", ErrorWrapper);
    }
    exports.assertIsJsonRpcError = assertIsJsonRpcError;
    function getJsonRpcIdValidator(options) {
      const { permitEmptyString, permitFractions, permitNull } = Object.assign({ permitEmptyString: true, permitFractions: false, permitNull: true }, options);
      const isValidJsonRpcId = (id) => {
        return Boolean(typeof id === "number" && (permitFractions || Number.isInteger(id)) || typeof id === "string" && (permitEmptyString || id.length > 0) || permitNull && id === null);
      };
      return isValidJsonRpcId;
    }
    exports.getJsonRpcIdValidator = getJsonRpcIdValidator;
  }
});

// node_modules/@metamask/utils/dist/keyring.js
var require_keyring = __commonJS({
  "node_modules/@metamask/utils/dist/keyring.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    var s3 = 1e3;
    var m3 = s3 * 60;
    var h3 = m3 * 60;
    var d3 = h3 * 24;
    var w3 = d3 * 7;
    var y3 = d3 * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type2 = typeof val;
      if (type2 === "string" && val.length > 0) {
        return parse(val);
      } else if (type2 === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n2 = parseFloat(match[1]);
      var type2 = (match[2] || "ms").toLowerCase();
      switch (type2) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n2 * y3;
        case "weeks":
        case "week":
        case "w":
          return n2 * w3;
        case "days":
        case "day":
        case "d":
          return n2 * d3;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n2 * h3;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n2 * m3;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n2 * s3;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n2;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d3) {
        return Math.round(ms / d3) + "d";
      }
      if (msAbs >= h3) {
        return Math.round(ms / h3) + "h";
      }
      if (msAbs >= m3) {
        return Math.round(ms / m3) + "m";
      }
      if (msAbs >= s3) {
        return Math.round(ms / s3) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d3) {
        return plural(ms, msAbs, d3, "day");
      }
      if (msAbs >= h3) {
        return plural(ms, msAbs, h3, "hour");
      }
      if (msAbs >= m3) {
        return plural(ms, msAbs, m3, "minute");
      }
      if (msAbs >= s3) {
        return plural(ms, msAbs, s3, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n2, name) {
      var isPlural = msAbs >= n2 * 1.5;
      return Math.round(ms / n2) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce2;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i3 = 0; i3 < namespace.length; i3++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i3);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v3) => {
            enableOverride = v3;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i3;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i3 = 0; i3 < len; i3++) {
          if (!split[i3]) {
            continue;
          }
          namespaces = split[i3].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i3;
        let len;
        for (i3 = 0, len = createDebug.skips.length; i3 < len; i3++) {
          if (createDebug.skips[i3].test(name)) {
            return false;
          }
        }
        for (i3 = 0, len = createDebug.names.length; i3 < len; i3++) {
          if (createDebug.names[i3].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp2) {
        return regexp2.toString().substring(2, regexp2.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce2(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser2 = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c3 = "color: " + this.color;
      args.splice(1, 0, c3, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c3);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r4;
      try {
        r4 = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r4 && typeof process !== "undefined" && "env" in process) {
        r4 = process.env.DEBUG;
      }
      return r4;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v3) {
      try {
        return JSON.stringify(v3);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/@metamask/utils/dist/logging.js
var require_logging = __commonJS({
  "node_modules/@metamask/utils/dist/logging.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createModuleLogger = exports.createProjectLogger = void 0;
    var debug_1 = __importDefault2(require_browser2());
    var globalLogger = (0, debug_1.default)("metamask");
    function createProjectLogger(projectName) {
      return globalLogger.extend(projectName);
    }
    exports.createProjectLogger = createProjectLogger;
    function createModuleLogger(projectLogger, moduleName) {
      return projectLogger.extend(moduleName);
    }
    exports.createModuleLogger = createModuleLogger;
  }
});

// node_modules/@metamask/utils/dist/misc.js
var require_misc = __commonJS({
  "node_modules/@metamask/utils/dist/misc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateNumberSize = exports.calculateStringSize = exports.isASCII = exports.isPlainObject = exports.ESCAPE_CHARACTERS_REGEXP = exports.JsonSize = exports.hasProperty = exports.isObject = exports.isNullOrUndefined = exports.isNonEmptyArray = void 0;
    function isNonEmptyArray(value) {
      return Array.isArray(value) && value.length > 0;
    }
    exports.isNonEmptyArray = isNonEmptyArray;
    function isNullOrUndefined(value) {
      return value === null || value === void 0;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isObject2(value) {
      return Boolean(value) && typeof value === "object" && !Array.isArray(value);
    }
    exports.isObject = isObject2;
    var hasProperty = (objectToCheck, name) => Object.hasOwnProperty.call(objectToCheck, name);
    exports.hasProperty = hasProperty;
    var JsonSize;
    (function(JsonSize2) {
      JsonSize2[JsonSize2["Null"] = 4] = "Null";
      JsonSize2[JsonSize2["Comma"] = 1] = "Comma";
      JsonSize2[JsonSize2["Wrapper"] = 1] = "Wrapper";
      JsonSize2[JsonSize2["True"] = 4] = "True";
      JsonSize2[JsonSize2["False"] = 5] = "False";
      JsonSize2[JsonSize2["Quote"] = 1] = "Quote";
      JsonSize2[JsonSize2["Colon"] = 1] = "Colon";
      JsonSize2[JsonSize2["Date"] = 24] = "Date";
    })(JsonSize = exports.JsonSize || (exports.JsonSize = {}));
    exports.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
    function isPlainObject2(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      try {
        let proto = value;
        while (Object.getPrototypeOf(proto) !== null) {
          proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(value) === proto;
      } catch (_3) {
        return false;
      }
    }
    exports.isPlainObject = isPlainObject2;
    function isASCII(character) {
      return character.charCodeAt(0) <= 127;
    }
    exports.isASCII = isASCII;
    function calculateStringSize(value) {
      var _a;
      const size2 = value.split("").reduce((total, character) => {
        if (isASCII(character)) {
          return total + 1;
        }
        return total + 2;
      }, 0);
      return size2 + ((_a = value.match(exports.ESCAPE_CHARACTERS_REGEXP)) !== null && _a !== void 0 ? _a : []).length;
    }
    exports.calculateStringSize = calculateStringSize;
    function calculateNumberSize(value) {
      return value.toString().length;
    }
    exports.calculateNumberSize = calculateNumberSize;
  }
});

// node_modules/@metamask/utils/dist/number.js
var require_number = __commonJS({
  "node_modules/@metamask/utils/dist/number.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hexToBigInt = exports.hexToNumber = exports.bigIntToHex = exports.numberToHex = void 0;
    var assert_1 = require_assert();
    var hex_1 = require_hex();
    var numberToHex = (value) => {
      (0, assert_1.assert)(typeof value === "number", "Value must be a number.");
      (0, assert_1.assert)(value >= 0, "Value must be a non-negative number.");
      (0, assert_1.assert)(Number.isSafeInteger(value), "Value is not a safe integer. Use `bigIntToHex` instead.");
      return (0, hex_1.add0x)(value.toString(16));
    };
    exports.numberToHex = numberToHex;
    var bigIntToHex = (value) => {
      (0, assert_1.assert)(typeof value === "bigint", "Value must be a bigint.");
      (0, assert_1.assert)(value >= 0, "Value must be a non-negative bigint.");
      return (0, hex_1.add0x)(value.toString(16));
    };
    exports.bigIntToHex = bigIntToHex;
    var hexToNumber = (value) => {
      (0, hex_1.assertIsHexString)(value);
      const numberValue = parseInt(value, 16);
      (0, assert_1.assert)(Number.isSafeInteger(numberValue), "Value is not a safe integer. Use `hexToBigInt` instead.");
      return numberValue;
    };
    exports.hexToNumber = hexToNumber;
    var hexToBigInt = (value) => {
      (0, hex_1.assertIsHexString)(value);
      return BigInt((0, hex_1.add0x)(value));
    };
    exports.hexToBigInt = hexToBigInt;
  }
});

// node_modules/@metamask/utils/dist/opaque.js
var require_opaque = __commonJS({
  "node_modules/@metamask/utils/dist/opaque.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@metamask/utils/dist/time.js
var require_time = __commonJS({
  "node_modules/@metamask/utils/dist/time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeSince = exports.inMilliseconds = exports.Duration = void 0;
    var Duration;
    (function(Duration2) {
      Duration2[Duration2["Millisecond"] = 1] = "Millisecond";
      Duration2[Duration2["Second"] = 1e3] = "Second";
      Duration2[Duration2["Minute"] = 6e4] = "Minute";
      Duration2[Duration2["Hour"] = 36e5] = "Hour";
      Duration2[Duration2["Day"] = 864e5] = "Day";
      Duration2[Duration2["Week"] = 6048e5] = "Week";
      Duration2[Duration2["Year"] = 31536e6] = "Year";
    })(Duration = exports.Duration || (exports.Duration = {}));
    var isNonNegativeInteger = (number2) => Number.isInteger(number2) && number2 >= 0;
    var assertIsNonNegativeInteger = (number2, name) => {
      if (!isNonNegativeInteger(number2)) {
        throw new Error(`"${name}" must be a non-negative integer. Received: "${number2}".`);
      }
    };
    function inMilliseconds(count, duration) {
      assertIsNonNegativeInteger(count, "count");
      return count * duration;
    }
    exports.inMilliseconds = inMilliseconds;
    function timeSince(timestamp) {
      assertIsNonNegativeInteger(timestamp, "timestamp");
      return Date.now() - timestamp;
    }
    exports.timeSince = timeSince;
  }
});

// node_modules/@metamask/utils/dist/transaction-types.js
var require_transaction_types = __commonJS({
  "node_modules/@metamask/utils/dist/transaction-types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@metamask/utils/node_modules/semver/internal/constants.js
var require_constants3 = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/internal/constants.js"(exports, module) {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/@metamask/utils/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/internal/debug.js"(exports, module) {
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug;
  }
});

// node_modules/@metamask/utils/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/internal/re.js"(exports, module) {
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants3();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t3 = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max2] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max2}}`).split(`${token}+`).join(`${token}{1,${max2}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t3[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t3.NUMERICIDENTIFIER]})\\.(${src[t3.NUMERICIDENTIFIER]})\\.(${src[t3.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t3.NUMERICIDENTIFIERLOOSE]})\\.(${src[t3.NUMERICIDENTIFIERLOOSE]})\\.(${src[t3.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t3.NUMERICIDENTIFIER]}|${src[t3.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t3.NUMERICIDENTIFIERLOOSE]}|${src[t3.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t3.PRERELEASEIDENTIFIER]}(?:\\.${src[t3.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t3.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t3.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t3.BUILDIDENTIFIER]}(?:\\.${src[t3.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t3.MAINVERSION]}${src[t3.PRERELEASE]}?${src[t3.BUILD]}?`);
    createToken("FULL", `^${src[t3.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t3.MAINVERSIONLOOSE]}${src[t3.PRERELEASELOOSE]}?${src[t3.BUILD]}?`);
    createToken("LOOSE", `^${src[t3.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t3.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t3.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t3.XRANGEIDENTIFIER]})(?:\\.(${src[t3.XRANGEIDENTIFIER]})(?:\\.(${src[t3.XRANGEIDENTIFIER]})(?:${src[t3.PRERELEASE]})?${src[t3.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t3.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t3.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t3.XRANGEIDENTIFIERLOOSE]})(?:${src[t3.PRERELEASELOOSE]})?${src[t3.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t3.GTLT]}\\s*${src[t3.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t3.GTLT]}\\s*${src[t3.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t3.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t3.COERCEPLAIN] + `(?:${src[t3.PRERELEASE]})?(?:${src[t3.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t3.COERCE], true);
    createToken("COERCERTLFULL", src[t3.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t3.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t3.LONETILDE]}${src[t3.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t3.LONETILDE]}${src[t3.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t3.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t3.LONECARET]}${src[t3.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t3.LONECARET]}${src[t3.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t3.GTLT]}\\s*(${src[t3.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t3.GTLT]}\\s*(${src[t3.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t3.GTLT]}\\s*(${src[t3.LOOSEPLAIN]}|${src[t3.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t3.XRANGEPLAIN]})\\s+-\\s+(${src[t3.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t3.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t3.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/@metamask/utils/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/internal/parse-options.js"(exports, module) {
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module.exports = parseOptions;
  }
});

// node_modules/@metamask/utils/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/internal/identifiers.js"(exports, module) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a3, b3) => {
      const anum = numeric.test(a3);
      const bnum = numeric.test(b3);
      if (anum && bnum) {
        a3 = +a3;
        b3 = +b3;
      }
      return a3 === b3 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a3 < b3 ? -1 : 1;
    };
    var rcompareIdentifiers = (a3, b3) => compareIdentifiers(b3, a3);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/@metamask/utils/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/classes/semver.js"(exports, module) {
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants3();
    var { safeRe: re, t: t3 } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m3 = version.trim().match(options.loose ? re[t3.LOOSE] : re[t3.FULL]);
        if (!m3) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m3[1];
        this.minor = +m3[2];
        this.patch = +m3[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m3[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m3[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m3[5] ? m3[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i3 = 0;
        do {
          const a3 = this.prerelease[i3];
          const b3 = other.prerelease[i3];
          debug("prerelease compare", i3, a3, b3);
          if (a3 === void 0 && b3 === void 0) {
            return 0;
          } else if (b3 === void 0) {
            return 1;
          } else if (a3 === void 0) {
            return -1;
          } else if (a3 === b3) {
            continue;
          } else {
            return compareIdentifiers(a3, b3);
          }
        } while (++i3);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i3 = 0;
        do {
          const a3 = this.build[i3];
          const b3 = other.build[i3];
          debug("prerelease compare", i3, a3, b3);
          if (a3 === void 0 && b3 === void 0) {
            return 0;
          } else if (b3 === void 0) {
            return 1;
          } else if (a3 === void 0) {
            return -1;
          } else if (a3 === b3) {
            continue;
          } else {
            return compareIdentifiers(a3, b3);
          }
        } while (++i3);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i3 = this.prerelease.length;
              while (--i3 >= 0) {
                if (typeof this.prerelease[i3] === "number") {
                  this.prerelease[i3]++;
                  i3 = -2;
                }
              }
              if (i3 === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/parse.js"(exports, module) {
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/valid.js"(exports, module) {
    var parse = require_parse();
    var valid = (version, options) => {
      const v3 = parse(version, options);
      return v3 ? v3.version : null;
    };
    module.exports = valid;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/clean.js"(exports, module) {
    var parse = require_parse();
    var clean = (version, options) => {
      const s3 = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s3 ? s3.version : null;
    };
    module.exports = clean;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/inc.js"(exports, module) {
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module.exports = inc;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/diff.js"(exports, module) {
    var parse = require_parse();
    var diff = (version1, version2) => {
      const v1 = parse(version1, null, true);
      const v22 = parse(version2, null, true);
      const comparison = v1.compare(v22);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v22;
      const lowVersion = v1Higher ? v22 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (highVersion.patch) {
          return "patch";
        }
        if (highVersion.minor) {
          return "minor";
        }
        return "major";
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v22.major) {
        return prefix + "major";
      }
      if (v1.minor !== v22.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v22.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module.exports = diff;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/major.js"(exports, module) {
    var SemVer = require_semver();
    var major = (a3, loose) => new SemVer(a3, loose).major;
    module.exports = major;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/minor.js"(exports, module) {
    var SemVer = require_semver();
    var minor = (a3, loose) => new SemVer(a3, loose).minor;
    module.exports = minor;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/patch.js"(exports, module) {
    var SemVer = require_semver();
    var patch = (a3, loose) => new SemVer(a3, loose).patch;
    module.exports = patch;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/prerelease.js"(exports, module) {
    var parse = require_parse();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module.exports = prerelease;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/compare.js"(exports, module) {
    var SemVer = require_semver();
    var compare = (a3, b3, loose) => new SemVer(a3, loose).compare(new SemVer(b3, loose));
    module.exports = compare;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/rcompare.js"(exports, module) {
    var compare = require_compare();
    var rcompare = (a3, b3, loose) => compare(b3, a3, loose);
    module.exports = rcompare;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/compare-loose.js"(exports, module) {
    var compare = require_compare();
    var compareLoose = (a3, b3) => compare(a3, b3, true);
    module.exports = compareLoose;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/compare-build.js"(exports, module) {
    var SemVer = require_semver();
    var compareBuild = (a3, b3, loose) => {
      const versionA = new SemVer(a3, loose);
      const versionB = new SemVer(b3, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module.exports = compareBuild;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/sort.js"(exports, module) {
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a3, b3) => compareBuild(a3, b3, loose));
    module.exports = sort;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/rsort.js"(exports, module) {
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a3, b3) => compareBuild(b3, a3, loose));
    module.exports = rsort;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/gt.js"(exports, module) {
    var compare = require_compare();
    var gt = (a3, b3, loose) => compare(a3, b3, loose) > 0;
    module.exports = gt;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/lt.js"(exports, module) {
    var compare = require_compare();
    var lt = (a3, b3, loose) => compare(a3, b3, loose) < 0;
    module.exports = lt;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/eq.js"(exports, module) {
    var compare = require_compare();
    var eq = (a3, b3, loose) => compare(a3, b3, loose) === 0;
    module.exports = eq;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/neq.js"(exports, module) {
    var compare = require_compare();
    var neq = (a3, b3, loose) => compare(a3, b3, loose) !== 0;
    module.exports = neq;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/gte.js"(exports, module) {
    var compare = require_compare();
    var gte = (a3, b3, loose) => compare(a3, b3, loose) >= 0;
    module.exports = gte;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/lte.js"(exports, module) {
    var compare = require_compare();
    var lte = (a3, b3, loose) => compare(a3, b3, loose) <= 0;
    module.exports = lte;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/cmp.js"(exports, module) {
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a3, op, b3, loose) => {
      switch (op) {
        case "===":
          if (typeof a3 === "object") {
            a3 = a3.version;
          }
          if (typeof b3 === "object") {
            b3 = b3.version;
          }
          return a3 === b3;
        case "!==":
          if (typeof a3 === "object") {
            a3 = a3.version;
          }
          if (typeof b3 === "object") {
            b3 = b3.version;
          }
          return a3 !== b3;
        case "":
        case "=":
        case "==":
          return eq(a3, b3, loose);
        case "!=":
          return neq(a3, b3, loose);
        case ">":
          return gt(a3, b3, loose);
        case ">=":
          return gte(a3, b3, loose);
        case "<":
          return lt(a3, b3, loose);
        case "<=":
          return lte(a3, b3, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module.exports = cmp;
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/coerce.js"(exports, module) {
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t: t3 } = require_re();
    var coerce2 = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t3.COERCEFULL] : re[t3.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t3.COERCERTLFULL] : re[t3.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    };
    module.exports = coerce2;
  }
});

// node_modules/@metamask/utils/node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/@metamask/utils/node_modules/yallist/iterator.js"(exports, module) {
    "use strict";
    module.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/@metamask/utils/node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/@metamask/utils/node_modules/yallist/yallist.js"(exports, module) {
    "use strict";
    module.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self2 = this;
      if (!(self2 instanceof Yallist)) {
        self2 = new Yallist();
      }
      self2.tail = null;
      self2.head = null;
      self2.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self2.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i3 = 0, l3 = arguments.length; i3 < l3; i3++) {
          self2.push(arguments[i3]);
        }
      }
      return self2;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i3 = 0, l3 = arguments.length; i3 < l3; i3++) {
        push(this, arguments[i3]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i3 = 0, l3 = arguments.length; i3 < l3; i3++) {
        unshift(this, arguments[i3]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i3 = 0; walker !== null; i3++) {
        fn.call(thisp, walker.value, i3, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i3 = this.length - 1; walker !== null; i3--) {
        fn.call(thisp, walker.value, i3, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n2) {
      for (var i3 = 0, walker = this.head; walker !== null && i3 < n2; i3++) {
        walker = walker.next;
      }
      if (i3 === n2 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n2) {
      for (var i3 = 0, walker = this.tail; walker !== null && i3 < n2; i3++) {
        walker = walker.prev;
      }
      if (i3 === n2 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i3 = 0; walker !== null; i3++) {
        acc = fn(acc, walker.value, i3);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i3 = this.length - 1; walker !== null; i3--) {
        acc = fn(acc, walker.value, i3);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i3 = 0, walker = this.head; walker !== null; i3++) {
        arr[i3] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i3 = 0, walker = this.tail; walker !== null; i3++) {
        arr[i3] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i3 = 0, walker = this.head; walker !== null && i3 < from; i3++) {
        walker = walker.next;
      }
      for (; walker !== null && i3 < to; i3++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i3 = this.length, walker = this.tail; walker !== null && i3 > to; i3--) {
        walker = walker.prev;
      }
      for (; walker !== null && i3 > from; i3--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i3 = 0, walker = this.head; walker !== null && i3 < start; i3++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i3 = 0; walker && i3 < deleteCount; i3++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i3 = 0; i3 < nodes.length; i3++) {
        walker = insert(this, walker, nodes[i3]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p3 = walker.prev;
        walker.prev = walker.next;
        walker.next = p3;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self2, node, value) {
      var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
      if (inserted.next === null) {
        self2.tail = inserted;
      }
      if (inserted.prev === null) {
        self2.head = inserted;
      }
      self2.length++;
      return inserted;
    }
    function push(self2, item) {
      self2.tail = new Node(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    function unshift(self2, item) {
      self2.head = new Node(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/@metamask/utils/node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "node_modules/@metamask/utils/node_modules/lru-cache/index.js"(exports, module) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options) {
        if (typeof options === "number")
          options = { max: options };
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max2 = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      // resize the cache when the max changes.
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      // resize the cache when the lengthCalculator changes.
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k3) => k3.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k3) => k3.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h3) => h3);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key))
          return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get(this, key, true);
      }
      peek(key) {
        return get(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l3 = arr.length - 1; l3 >= 0; l3--) {
          const hit = arr[l3];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    };
    var get = (self2, key, doUse) => {
      const node = self2[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!self2[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self2[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self2[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self2, hit) => {
      if (!hit || !hit.maxAge && !self2[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self2[MAX_AGE] && diff > self2[MAX_AGE];
    };
    var trim = (self2) => {
      if (self2[LENGTH] > self2[MAX]) {
        for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self2, walker);
          walker = prev;
        }
      }
    };
    var del = (self2, node) => {
      if (node) {
        const hit = node.value;
        if (self2[DISPOSE])
          self2[DISPOSE](hit.key, hit.value);
        self2[LENGTH] -= hit.length;
        self2[CACHE].delete(hit.key);
        self2[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self2, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self2, hit)) {
        del(self2, node);
        if (!self2[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self2);
    };
    module.exports = LRUCache;
  }
});

// node_modules/@metamask/utils/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/classes/range.js"(exports, module) {
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().split(/\s+/).join(" ");
        this.set = this.raw.split("||").map((r4) => this.parseRange(r4.trim())).filter((c3) => c3.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c3) => !isNullSet(c3[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c3 of this.set) {
              if (c3.length === 1 && isAny(c3[0])) {
                this.set = [c3];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t3.HYPHENRANGELOOSE] : re[t3.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t3.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t3.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t3.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t3.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i3 = 0; i3 < this.set.length; i3++) {
          if (testSet(this.set[i3], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lru_cache();
    var cache = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t: t3,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants3();
    var isNullSet = (c3) => c3.value === "<0.0.0-0";
    var isAny = (c3) => c3.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c3) => replaceTilde(c3, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r4 = options.loose ? re[t3.TILDELOOSE] : re[t3.TILDE];
      return comp.replace(r4, (_3, M2, m3, p3, pr) => {
        debug("tilde", comp, _3, M2, m3, p3, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m3)) {
          ret = `>=${M2}.0.0 <${+M2 + 1}.0.0-0`;
        } else if (isX(p3)) {
          ret = `>=${M2}.${m3}.0 <${M2}.${+m3 + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M2}.${m3}.${p3}-${pr} <${M2}.${+m3 + 1}.0-0`;
        } else {
          ret = `>=${M2}.${m3}.${p3} <${M2}.${+m3 + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c3) => replaceCaret(c3, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r4 = options.loose ? re[t3.CARETLOOSE] : re[t3.CARET];
      const z3 = options.includePrerelease ? "-0" : "";
      return comp.replace(r4, (_3, M2, m3, p3, pr) => {
        debug("caret", comp, _3, M2, m3, p3, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m3)) {
          ret = `>=${M2}.0.0${z3} <${+M2 + 1}.0.0-0`;
        } else if (isX(p3)) {
          if (M2 === "0") {
            ret = `>=${M2}.${m3}.0${z3} <${M2}.${+m3 + 1}.0-0`;
          } else {
            ret = `>=${M2}.${m3}.0${z3} <${+M2 + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M2 === "0") {
            if (m3 === "0") {
              ret = `>=${M2}.${m3}.${p3}-${pr} <${M2}.${m3}.${+p3 + 1}-0`;
            } else {
              ret = `>=${M2}.${m3}.${p3}-${pr} <${M2}.${+m3 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m3}.${p3}-${pr} <${+M2 + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M2 === "0") {
            if (m3 === "0") {
              ret = `>=${M2}.${m3}.${p3}${z3} <${M2}.${m3}.${+p3 + 1}-0`;
            } else {
              ret = `>=${M2}.${m3}.${p3}${z3} <${M2}.${+m3 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m3}.${p3} <${+M2 + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c3) => replaceXRange(c3, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r4 = options.loose ? re[t3.XRANGELOOSE] : re[t3.XRANGE];
      return comp.replace(r4, (ret, gtlt, M2, m3, p3, pr) => {
        debug("xRange", comp, ret, gtlt, M2, m3, p3, pr);
        const xM = isX(M2);
        const xm = xM || isX(m3);
        const xp = xm || isX(p3);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m3 = 0;
          }
          p3 = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M2 = +M2 + 1;
              m3 = 0;
              p3 = 0;
            } else {
              m3 = +m3 + 1;
              p3 = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M2 = +M2 + 1;
            } else {
              m3 = +m3 + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M2}.${m3}.${p3}${pr}`;
        } else if (xm) {
          ret = `>=${M2}.0.0${pr} <${+M2 + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M2}.${m3}.0${pr} <${M2}.${+m3 + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t3.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t3.GTE0PRE : t3.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set2, version, options) => {
      for (let i3 = 0; i3 < set2.length; i3++) {
        if (!set2[i3].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i3 = 0; i3 < set2.length; i3++) {
          debug(set2[i3].semver);
          if (set2[i3].semver === Comparator.ANY) {
            continue;
          }
          if (set2[i3].semver.prerelease.length > 0) {
            const allowed = set2[i3].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/@metamask/utils/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/classes/comparator.js"(exports, module) {
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r4 = this.options.loose ? re[t3.COMPARATORLOOSE] : re[t3.COMPARATOR];
        const m3 = comp.match(r4);
        if (!m3) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m3[1] !== void 0 ? m3[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m3[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m3[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t: t3 } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/@metamask/utils/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/functions/satisfies.js"(exports, module) {
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module.exports = satisfies;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/to-comparators.js"(exports, module) {
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c3) => c3.value).join(" ").trim().split(" "));
    module.exports = toComparators;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/max-satisfying.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max2 = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v3) => {
        if (rangeObj.test(v3)) {
          if (!max2 || maxSV.compare(v3) === -1) {
            max2 = v3;
            maxSV = new SemVer(max2, options);
          }
        }
      });
      return max2;
    };
    module.exports = maxSatisfying;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/min-satisfying.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min2 = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v3) => {
        if (rangeObj.test(v3)) {
          if (!min2 || minSV.compare(v3) === 1) {
            min2 = v3;
            minSV = new SemVer(min2, options);
          }
        }
      });
      return min2;
    };
    module.exports = minSatisfying;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/min-version.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i3 = 0; i3 < range.set.length; ++i3) {
        const comparators = range.set[i3];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module.exports = minVersion;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/valid.js"(exports, module) {
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module.exports = validRange;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/outside.js"(exports, module) {
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i3 = 0; i3 < range.set.length; ++i3) {
        const comparators = range.set[i3];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module.exports = outside;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/gtr.js"(exports, module) {
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module.exports = gtr;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/ltr.js"(exports, module) {
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module.exports = ltr;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/intersects.js"(exports, module) {
    var Range = require_range();
    var intersects = (r1, r22, options) => {
      r1 = new Range(r1, options);
      r22 = new Range(r22, options);
      return r1.intersects(r22, options);
    };
    module.exports = intersects;
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/simplify.js"(exports, module) {
    var satisfies = require_satisfies();
    var compare = require_compare();
    module.exports = (versions, range, options) => {
      const set2 = [];
      let first = null;
      let prev = null;
      const v3 = versions.sort((a3, b3) => compare(a3, b3, options));
      for (const version of v3) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set2.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set2.push([first, null]);
      }
      const ranges = [];
      for (const [min2, max2] of set2) {
        if (min2 === max2) {
          ranges.push(min2);
        } else if (!max2 && min2 === v3[0]) {
          ranges.push("*");
        } else if (!max2) {
          ranges.push(`>=${min2}`);
        } else if (min2 === v3[0]) {
          ranges.push(`<=${max2}`);
        } else {
          ranges.push(`${min2} - ${max2}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/@metamask/utils/node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/ranges/subset.js"(exports, module) {
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c3 of sub) {
        if (c3.operator === ">" || c3.operator === ">=") {
          gt = higherGT(gt, c3, options);
        } else if (c3.operator === "<" || c3.operator === "<=") {
          lt = lowerLT(lt, c3, options);
        } else {
          eqSet.add(c3.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c3 of dom) {
          if (!satisfies(eq, String(c3), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c3 of dom) {
        hasDomGT = hasDomGT || c3.operator === ">" || c3.operator === ">=";
        hasDomLT = hasDomLT || c3.operator === "<" || c3.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c3.semver.prerelease && c3.semver.prerelease.length && c3.semver.major === needDomGTPre.major && c3.semver.minor === needDomGTPre.minor && c3.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c3.operator === ">" || c3.operator === ">=") {
            higher = higherGT(gt, c3, options);
            if (higher === c3 && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c3), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c3.semver.prerelease && c3.semver.prerelease.length && c3.semver.major === needDomLTPre.major && c3.semver.minor === needDomLTPre.minor && c3.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c3.operator === "<" || c3.operator === "<=") {
            lower = lowerLT(lt, c3, options);
            if (lower === c3 && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c3), options)) {
            return false;
          }
        }
        if (!c3.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a3, b3, options) => {
      if (!a3) {
        return b3;
      }
      const comp = compare(a3.semver, b3.semver, options);
      return comp > 0 ? a3 : comp < 0 ? b3 : b3.operator === ">" && a3.operator === ">=" ? b3 : a3;
    };
    var lowerLT = (a3, b3, options) => {
      if (!a3) {
        return b3;
      }
      const comp = compare(a3.semver, b3.semver, options);
      return comp < 0 ? a3 : comp > 0 ? b3 : b3.operator === "<" && a3.operator === "<=" ? b3 : a3;
    };
    module.exports = subset;
  }
});

// node_modules/@metamask/utils/node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/@metamask/utils/node_modules/semver/index.js"(exports, module) {
    var internalRe = require_re();
    var constants = require_constants3();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce2 = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module.exports = {
      parse,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce: coerce2,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// node_modules/@metamask/utils/dist/versions.js
var require_versions = __commonJS({
  "node_modules/@metamask/utils/dist/versions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.satisfiesVersionRange = exports.gtRange = exports.gtVersion = exports.assertIsSemVerRange = exports.assertIsSemVerVersion = exports.isValidSemVerRange = exports.isValidSemVerVersion = exports.VersionRangeStruct = exports.VersionStruct = void 0;
    var semver_1 = require_semver2();
    var superstruct_1 = (init_dist(), __toCommonJS(dist_exports));
    var assert_1 = require_assert();
    exports.VersionStruct = (0, superstruct_1.refine)((0, superstruct_1.string)(), "Version", (value) => {
      if ((0, semver_1.valid)(value) === null) {
        return `Expected SemVer version, got "${value}"`;
      }
      return true;
    });
    exports.VersionRangeStruct = (0, superstruct_1.refine)((0, superstruct_1.string)(), "Version range", (value) => {
      if ((0, semver_1.validRange)(value) === null) {
        return `Expected SemVer range, got "${value}"`;
      }
      return true;
    });
    function isValidSemVerVersion(version) {
      return (0, superstruct_1.is)(version, exports.VersionStruct);
    }
    exports.isValidSemVerVersion = isValidSemVerVersion;
    function isValidSemVerRange(versionRange) {
      return (0, superstruct_1.is)(versionRange, exports.VersionRangeStruct);
    }
    exports.isValidSemVerRange = isValidSemVerRange;
    function assertIsSemVerVersion(version) {
      (0, assert_1.assertStruct)(version, exports.VersionStruct);
    }
    exports.assertIsSemVerVersion = assertIsSemVerVersion;
    function assertIsSemVerRange(range) {
      (0, assert_1.assertStruct)(range, exports.VersionRangeStruct);
    }
    exports.assertIsSemVerRange = assertIsSemVerRange;
    function gtVersion(version1, version2) {
      return (0, semver_1.gt)(version1, version2);
    }
    exports.gtVersion = gtVersion;
    function gtRange(version, range) {
      return (0, semver_1.gtr)(version, range);
    }
    exports.gtRange = gtRange;
    function satisfiesVersionRange(version, versionRange) {
      return (0, semver_1.satisfies)(version, versionRange, {
        includePrerelease: true
      });
    }
    exports.satisfiesVersionRange = satisfiesVersionRange;
  }
});

// node_modules/@metamask/utils/dist/index.js
var require_dist = __commonJS({
  "node_modules/@metamask/utils/dist/index.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      var desc = Object.getOwnPropertyDescriptor(m3, k3);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k3];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o3[k22] = m3[k3];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3))
          __createBinding2(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(require_assert(), exports);
    __exportStar2(require_base64(), exports);
    __exportStar2(require_bytes(), exports);
    __exportStar2(require_checksum(), exports);
    __exportStar2(require_coercers(), exports);
    __exportStar2(require_collections(), exports);
    __exportStar2(require_encryption_types(), exports);
    __exportStar2(require_hex(), exports);
    __exportStar2(require_json(), exports);
    __exportStar2(require_keyring(), exports);
    __exportStar2(require_logging(), exports);
    __exportStar2(require_misc(), exports);
    __exportStar2(require_number(), exports);
    __exportStar2(require_opaque(), exports);
    __exportStar2(require_time(), exports);
    __exportStar2(require_transaction_types(), exports);
    __exportStar2(require_versions(), exports);
  }
});

// node_modules/eth-block-tracker/dist/logging-utils.js
var require_logging_utils = __commonJS({
  "node_modules/eth-block-tracker/dist/logging-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createModuleLogger = exports.projectLogger = void 0;
    var utils_1 = require_dist();
    Object.defineProperty(exports, "createModuleLogger", { enumerable: true, get: function() {
      return utils_1.createModuleLogger;
    } });
    exports.projectLogger = (0, utils_1.createProjectLogger)("eth-block-tracker");
  }
});

// node_modules/eth-block-tracker/dist/PollingBlockTracker.js
var require_PollingBlockTracker = __commonJS({
  "node_modules/eth-block-tracker/dist/PollingBlockTracker.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PollingBlockTracker = void 0;
    var json_rpc_random_id_1 = __importDefault2(require_json_rpc_random_id());
    var pify_1 = __importDefault2(require_pify());
    var BaseBlockTracker_1 = require_BaseBlockTracker();
    var logging_utils_1 = require_logging_utils();
    var log = (0, logging_utils_1.createModuleLogger)(logging_utils_1.projectLogger, "polling-block-tracker");
    var createRandomId = (0, json_rpc_random_id_1.default)();
    var sec = 1e3;
    var PollingBlockTracker = class extends BaseBlockTracker_1.BaseBlockTracker {
      constructor(opts = {}) {
        var _a;
        if (!opts.provider) {
          throw new Error("PollingBlockTracker - no provider specified.");
        }
        super(Object.assign(Object.assign({}, opts), { blockResetDuration: (_a = opts.blockResetDuration) !== null && _a !== void 0 ? _a : opts.pollingInterval }));
        this._provider = opts.provider;
        this._pollingInterval = opts.pollingInterval || 20 * sec;
        this._retryTimeout = opts.retryTimeout || this._pollingInterval / 10;
        this._keepEventLoopActive = opts.keepEventLoopActive === void 0 ? true : opts.keepEventLoopActive;
        this._setSkipCacheFlag = opts.setSkipCacheFlag || false;
      }
      // trigger block polling
      async checkForLatestBlock() {
        await this._updateLatestBlock();
        return await this.getLatestBlock();
      }
      async _start() {
        this._synchronize();
      }
      async _end() {
      }
      async _synchronize() {
        var _a;
        while (this._isRunning) {
          try {
            await this._updateLatestBlock();
            const promise = timeout(this._pollingInterval, !this._keepEventLoopActive);
            this.emit("_waitingForNextIteration");
            await promise;
          } catch (err) {
            const newErr = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(_a = err.stack) !== null && _a !== void 0 ? _a : err}`);
            try {
              this.emit("error", newErr);
            } catch (emitErr) {
              console.error(newErr);
            }
            const promise = timeout(this._retryTimeout, !this._keepEventLoopActive);
            this.emit("_waitingForNextIteration");
            await promise;
          }
        }
      }
      async _updateLatestBlock() {
        const latestBlock = await this._fetchLatestBlock();
        this._newPotentialLatest(latestBlock);
      }
      async _fetchLatestBlock() {
        const req = {
          jsonrpc: "2.0",
          id: createRandomId(),
          method: "eth_blockNumber",
          params: []
        };
        if (this._setSkipCacheFlag) {
          req.skipCache = true;
        }
        log("Making request", req);
        const res = await (0, pify_1.default)((cb) => this._provider.sendAsync(req, cb))();
        log("Got response", res);
        if (res.error) {
          throw new Error(`PollingBlockTracker - encountered error fetching block:
${res.error.message}`);
        }
        return res.result;
      }
    };
    exports.PollingBlockTracker = PollingBlockTracker;
    function timeout(duration, unref) {
      return new Promise((resolve) => {
        const timeoutRef = setTimeout(resolve, duration);
        if (timeoutRef.unref && unref) {
          timeoutRef.unref();
        }
      });
    }
  }
});

// node_modules/eth-block-tracker/dist/SubscribeBlockTracker.js
var require_SubscribeBlockTracker = __commonJS({
  "node_modules/eth-block-tracker/dist/SubscribeBlockTracker.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscribeBlockTracker = void 0;
    var json_rpc_random_id_1 = __importDefault2(require_json_rpc_random_id());
    var BaseBlockTracker_1 = require_BaseBlockTracker();
    var createRandomId = (0, json_rpc_random_id_1.default)();
    var SubscribeBlockTracker = class extends BaseBlockTracker_1.BaseBlockTracker {
      constructor(opts = {}) {
        if (!opts.provider) {
          throw new Error("SubscribeBlockTracker - no provider specified.");
        }
        super(opts);
        this._provider = opts.provider;
        this._subscriptionId = null;
      }
      async checkForLatestBlock() {
        return await this.getLatestBlock();
      }
      async _start() {
        if (this._subscriptionId === void 0 || this._subscriptionId === null) {
          try {
            const blockNumber = await this._call("eth_blockNumber");
            this._subscriptionId = await this._call("eth_subscribe", "newHeads");
            this._provider.on("data", this._handleSubData.bind(this));
            this._newPotentialLatest(blockNumber);
          } catch (e3) {
            this.emit("error", e3);
          }
        }
      }
      async _end() {
        if (this._subscriptionId !== null && this._subscriptionId !== void 0) {
          try {
            await this._call("eth_unsubscribe", this._subscriptionId);
            this._subscriptionId = null;
          } catch (e3) {
            this.emit("error", e3);
          }
        }
      }
      _call(method, ...params) {
        return new Promise((resolve, reject) => {
          this._provider.sendAsync({
            id: createRandomId(),
            method,
            params,
            jsonrpc: "2.0"
          }, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res.result);
            }
          });
        });
      }
      _handleSubData(_3, response) {
        var _a;
        if (response.method === "eth_subscription" && ((_a = response.params) === null || _a === void 0 ? void 0 : _a.subscription) === this._subscriptionId) {
          this._newPotentialLatest(response.params.result.number);
        }
      }
    };
    exports.SubscribeBlockTracker = SubscribeBlockTracker;
  }
});

// node_modules/eth-block-tracker/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/eth-block-tracker/dist/index.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      Object.defineProperty(o3, k22, { enumerable: true, get: function() {
        return m3[k3];
      } });
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o3[k22] = m3[k3];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3))
          __createBinding2(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(require_PollingBlockTracker(), exports);
    __exportStar2(require_SubscribeBlockTracker(), exports);
  }
});

// node_modules/json-rpc-engine/dist/getUniqueId.js
var require_getUniqueId = __commonJS({
  "node_modules/json-rpc-engine/dist/getUniqueId.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getUniqueId = void 0;
    var MAX = 4294967295;
    var idCounter = Math.floor(Math.random() * MAX);
    function getUniqueId() {
      idCounter = (idCounter + 1) % MAX;
      return idCounter;
    }
    exports.getUniqueId = getUniqueId;
  }
});

// node_modules/json-rpc-engine/dist/idRemapMiddleware.js
var require_idRemapMiddleware = __commonJS({
  "node_modules/json-rpc-engine/dist/idRemapMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createIdRemapMiddleware = void 0;
    var getUniqueId_1 = require_getUniqueId();
    function createIdRemapMiddleware() {
      return (req, res, next, _end) => {
        const originalId = req.id;
        const newId = getUniqueId_1.getUniqueId();
        req.id = newId;
        res.id = newId;
        next((done) => {
          req.id = originalId;
          res.id = originalId;
          done();
        });
      };
    }
    exports.createIdRemapMiddleware = createIdRemapMiddleware;
  }
});

// node_modules/json-rpc-engine/dist/createAsyncMiddleware.js
var require_createAsyncMiddleware = __commonJS({
  "node_modules/json-rpc-engine/dist/createAsyncMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createAsyncMiddleware = void 0;
    function createAsyncMiddleware(asyncMiddleware) {
      return async (req, res, next, end) => {
        let resolveNextPromise;
        const nextPromise = new Promise((resolve) => {
          resolveNextPromise = resolve;
        });
        let returnHandlerCallback = null;
        let nextWasCalled = false;
        const asyncNext = async () => {
          nextWasCalled = true;
          next((runReturnHandlersCallback) => {
            returnHandlerCallback = runReturnHandlersCallback;
            resolveNextPromise();
          });
          await nextPromise;
        };
        try {
          await asyncMiddleware(req, res, asyncNext);
          if (nextWasCalled) {
            await nextPromise;
            returnHandlerCallback(null);
          } else {
            end(null);
          }
        } catch (error) {
          if (returnHandlerCallback) {
            returnHandlerCallback(error);
          } else {
            end(error);
          }
        }
      };
    }
    exports.createAsyncMiddleware = createAsyncMiddleware;
  }
});

// node_modules/json-rpc-engine/dist/createScaffoldMiddleware.js
var require_createScaffoldMiddleware = __commonJS({
  "node_modules/json-rpc-engine/dist/createScaffoldMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createScaffoldMiddleware = void 0;
    function createScaffoldMiddleware(handlers) {
      return (req, res, next, end) => {
        const handler = handlers[req.method];
        if (handler === void 0) {
          return next();
        }
        if (typeof handler === "function") {
          return handler(req, res, next, end);
        }
        res.result = handler;
        return end();
      };
    }
    exports.createScaffoldMiddleware = createScaffoldMiddleware;
  }
});

// node_modules/json-rpc-engine/node_modules/@metamask/safe-event-emitter/index.js
var require_safe_event_emitter = __commonJS({
  "node_modules/json-rpc-engine/node_modules/@metamask/safe-event-emitter/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require_events();
    function safeApply(handler, context, args) {
      try {
        Reflect.apply(handler, context, args);
      } catch (err) {
        setTimeout(() => {
          throw err;
        });
      }
    }
    function arrayClone(arr) {
      const n2 = arr.length;
      const copy = new Array(n2);
      for (let i3 = 0; i3 < n2; i3 += 1) {
        copy[i3] = arr[i3];
      }
      return copy;
    }
    var SafeEventEmitter = class extends events_1.EventEmitter {
      emit(type2, ...args) {
        let doError = type2 === "error";
        const events = this._events;
        if (events !== void 0) {
          doError = doError && events.error === void 0;
        } else if (!doError) {
          return false;
        }
        if (doError) {
          let er;
          if (args.length > 0) {
            [er] = args;
          }
          if (er instanceof Error) {
            throw er;
          }
          const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ""}`);
          err.context = er;
          throw err;
        }
        const handler = events[type2];
        if (handler === void 0) {
          return false;
        }
        if (typeof handler === "function") {
          safeApply(handler, this, args);
        } else {
          const len = handler.length;
          const listeners = arrayClone(handler);
          for (let i3 = 0; i3 < len; i3 += 1) {
            safeApply(listeners[i3], this, args);
          }
        }
        return true;
      }
    };
    exports.default = SafeEventEmitter;
  }
});

// node_modules/fast-safe-stringify/index.js
var require_fast_safe_stringify = __commonJS({
  "node_modules/fast-safe-stringify/index.js"(exports, module) {
    module.exports = stringify;
    stringify.default = stringify;
    stringify.stable = deterministicStringify;
    stringify.stableStringify = deterministicStringify;
    var LIMIT_REPLACE_NODE = "[...]";
    var CIRCULAR_REPLACE_NODE = "[Circular]";
    var arr = [];
    var replacerStack = [];
    function defaultOptions() {
      return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
      };
    }
    function stringify(obj, replacer, spacer, options) {
      if (typeof options === "undefined") {
        options = defaultOptions();
      }
      decirc(obj, "", 0, [], void 0, 0, options);
      var res;
      try {
        if (replacerStack.length === 0) {
          res = JSON.stringify(obj, replacer, spacer);
        } else {
          res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
        }
      } catch (_3) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        while (arr.length !== 0) {
          var part = arr.pop();
          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
      }
      return res;
    }
    function setReplace(replace, val, k3, parent) {
      var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k3);
      if (propertyDescriptor.get !== void 0) {
        if (propertyDescriptor.configurable) {
          Object.defineProperty(parent, k3, { value: replace });
          arr.push([parent, k3, val, propertyDescriptor]);
        } else {
          replacerStack.push([val, k3, replace]);
        }
      } else {
        parent[k3] = replace;
        arr.push([parent, k3, val]);
      }
    }
    function decirc(val, k3, edgeIndex, stack, parent, depth, options) {
      depth += 1;
      var i3;
      if (typeof val === "object" && val !== null) {
        for (i3 = 0; i3 < stack.length; i3++) {
          if (stack[i3] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k3, parent);
            return;
          }
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k3, parent);
          return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k3, parent);
          return;
        }
        stack.push(val);
        if (Array.isArray(val)) {
          for (i3 = 0; i3 < val.length; i3++) {
            decirc(val[i3], i3, i3, stack, val, depth, options);
          }
        } else {
          var keys = Object.keys(val);
          for (i3 = 0; i3 < keys.length; i3++) {
            var key = keys[i3];
            decirc(val[key], key, i3, stack, val, depth, options);
          }
        }
        stack.pop();
      }
    }
    function compareFunction(a3, b3) {
      if (a3 < b3) {
        return -1;
      }
      if (a3 > b3) {
        return 1;
      }
      return 0;
    }
    function deterministicStringify(obj, replacer, spacer, options) {
      if (typeof options === "undefined") {
        options = defaultOptions();
      }
      var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options) || obj;
      var res;
      try {
        if (replacerStack.length === 0) {
          res = JSON.stringify(tmp, replacer, spacer);
        } else {
          res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
        }
      } catch (_3) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        while (arr.length !== 0) {
          var part = arr.pop();
          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
      }
      return res;
    }
    function deterministicDecirc(val, k3, edgeIndex, stack, parent, depth, options) {
      depth += 1;
      var i3;
      if (typeof val === "object" && val !== null) {
        for (i3 = 0; i3 < stack.length; i3++) {
          if (stack[i3] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k3, parent);
            return;
          }
        }
        try {
          if (typeof val.toJSON === "function") {
            return;
          }
        } catch (_3) {
          return;
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k3, parent);
          return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k3, parent);
          return;
        }
        stack.push(val);
        if (Array.isArray(val)) {
          for (i3 = 0; i3 < val.length; i3++) {
            deterministicDecirc(val[i3], i3, i3, stack, val, depth, options);
          }
        } else {
          var tmp = {};
          var keys = Object.keys(val).sort(compareFunction);
          for (i3 = 0; i3 < keys.length; i3++) {
            var key = keys[i3];
            deterministicDecirc(val[key], key, i3, stack, val, depth, options);
            tmp[key] = val[key];
          }
          if (typeof parent !== "undefined") {
            arr.push([parent, k3, val]);
            parent[k3] = tmp;
          } else {
            return tmp;
          }
        }
        stack.pop();
      }
    }
    function replaceGetterValues(replacer) {
      replacer = typeof replacer !== "undefined" ? replacer : function(k3, v3) {
        return v3;
      };
      return function(key, val) {
        if (replacerStack.length > 0) {
          for (var i3 = 0; i3 < replacerStack.length; i3++) {
            var part = replacerStack[i3];
            if (part[1] === key && part[0] === val) {
              val = part[2];
              replacerStack.splice(i3, 1);
              break;
            }
          }
        }
        return replacer.call(this, key, val);
      };
    }
  }
});

// node_modules/eth-rpc-errors/dist/classes.js
var require_classes = __commonJS({
  "node_modules/eth-rpc-errors/dist/classes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EthereumProviderError = exports.EthereumRpcError = void 0;
    var fast_safe_stringify_1 = require_fast_safe_stringify();
    var EthereumRpcError = class extends Error {
      constructor(code, message, data) {
        if (!Number.isInteger(code)) {
          throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== "string") {
          throw new Error('"message" must be a nonempty string.');
        }
        super(message);
        this.code = code;
        if (data !== void 0) {
          this.data = data;
        }
      }
      /**
       * Returns a plain object with all public class properties.
       */
      serialize() {
        const serialized = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          serialized.data = this.data;
        }
        if (this.stack) {
          serialized.stack = this.stack;
        }
        return serialized;
      }
      /**
       * Return a string representation of the serialized error, omitting
       * any circular references.
       */
      toString() {
        return fast_safe_stringify_1.default(this.serialize(), stringifyReplacer, 2);
      }
    };
    exports.EthereumRpcError = EthereumRpcError;
    var EthereumProviderError = class extends EthereumRpcError {
      /**
       * Create an Ethereum Provider JSON-RPC error.
       * `code` must be an integer in the 1000 <= 4999 range.
       */
      constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
          throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
      }
    };
    exports.EthereumProviderError = EthereumProviderError;
    function isValidEthProviderCode(code) {
      return Number.isInteger(code) && code >= 1e3 && code <= 4999;
    }
    function stringifyReplacer(_3, value) {
      if (value === "[Circular]") {
        return void 0;
      }
      return value;
    }
  }
});

// node_modules/eth-rpc-errors/dist/error-constants.js
var require_error_constants = __commonJS({
  "node_modules/eth-rpc-errors/dist/error-constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorValues = exports.errorCodes = void 0;
    exports.errorCodes = {
      rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
      },
      provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
      }
    };
    exports.errorValues = {
      "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
      },
      "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
      },
      "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
      },
      "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
      },
      "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
      },
      "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
      },
      "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
      },
      "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
      },
      "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
      },
      "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
      },
      "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
      },
      "4001": {
        standard: "EIP-1193",
        message: "User rejected the request."
      },
      "4100": {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
      },
      "4200": {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
      },
      "4900": {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
      },
      "4901": {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
      }
    };
  }
});

// node_modules/eth-rpc-errors/dist/utils.js
var require_utils2 = __commonJS({
  "node_modules/eth-rpc-errors/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeError = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    var error_constants_1 = require_error_constants();
    var classes_1 = require_classes();
    var FALLBACK_ERROR_CODE = error_constants_1.errorCodes.rpc.internal;
    var FALLBACK_MESSAGE = "Unspecified error message. This is a bug, please report it.";
    var FALLBACK_ERROR = {
      code: FALLBACK_ERROR_CODE,
      message: getMessageFromCode(FALLBACK_ERROR_CODE)
    };
    exports.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
      if (Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(error_constants_1.errorValues, codeString)) {
          return error_constants_1.errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
          return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
      }
      return fallbackMessage;
    }
    exports.getMessageFromCode = getMessageFromCode;
    function isValidCode(code) {
      if (!Number.isInteger(code)) {
        return false;
      }
      const codeString = code.toString();
      if (error_constants_1.errorValues[codeString]) {
        return true;
      }
      if (isJsonRpcServerError(code)) {
        return true;
      }
      return false;
    }
    exports.isValidCode = isValidCode;
    function serializeError(error, { fallbackError = FALLBACK_ERROR, shouldIncludeStack = false } = {}) {
      var _a, _b;
      if (!fallbackError || !Number.isInteger(fallbackError.code) || typeof fallbackError.message !== "string") {
        throw new Error("Must provide fallback error with integer number code and string message.");
      }
      if (error instanceof classes_1.EthereumRpcError) {
        return error.serialize();
      }
      const serialized = {};
      if (error && typeof error === "object" && !Array.isArray(error) && hasKey(error, "code") && isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === "string") {
          serialized.message = _error.message;
          if (hasKey(_error, "data")) {
            serialized.data = _error.data;
          }
        } else {
          serialized.message = getMessageFromCode(serialized.code);
          serialized.data = { originalError: assignOriginalError(error) };
        }
      } else {
        serialized.code = fallbackError.code;
        const message = (_a = error) === null || _a === void 0 ? void 0 : _a.message;
        serialized.message = message && typeof message === "string" ? message : fallbackError.message;
        serialized.data = { originalError: assignOriginalError(error) };
      }
      const stack = (_b = error) === null || _b === void 0 ? void 0 : _b.stack;
      if (shouldIncludeStack && error && stack && typeof stack === "string") {
        serialized.stack = stack;
      }
      return serialized;
    }
    exports.serializeError = serializeError;
    function isJsonRpcServerError(code) {
      return code >= -32099 && code <= -32e3;
    }
    function assignOriginalError(error) {
      if (error && typeof error === "object" && !Array.isArray(error)) {
        return Object.assign({}, error);
      }
      return error;
    }
    function hasKey(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/eth-rpc-errors/dist/errors.js
var require_errors2 = __commonJS({
  "node_modules/eth-rpc-errors/dist/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ethErrors = void 0;
    var classes_1 = require_classes();
    var utils_1 = require_utils2();
    var error_constants_1 = require_error_constants();
    exports.ethErrors = {
      rpc: {
        /**
         * Get a JSON RPC 2.0 Parse (-32700) error.
         */
        parse: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Request (-32600) error.
         */
        invalidRequest: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg),
        /**
         * Get a JSON RPC 2.0 Invalid Params (-32602) error.
         */
        invalidParams: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg),
        /**
         * Get a JSON RPC 2.0 Method Not Found (-32601) error.
         */
        methodNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg),
        /**
         * Get a JSON RPC 2.0 Internal (-32603) error.
         */
        internal: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg),
        /**
         * Get a JSON RPC 2.0 Server error.
         * Permits integer error codes in the [ -32099 <= -32005 ] range.
         * Codes -32000 through -32004 are reserved by EIP-1474.
         */
        server: (opts) => {
          if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
            throw new Error("Ethereum RPC Server errors must provide single object argument.");
          }
          const { code } = opts;
          if (!Number.isInteger(code) || code > -32005 || code < -32099) {
            throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
          }
          return getEthJsonRpcError(code, opts);
        },
        /**
         * Get an Ethereum JSON RPC Invalid Input (-32000) error.
         */
        invalidInput: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg),
        /**
         * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
         */
        resourceNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg),
        /**
         * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
         */
        resourceUnavailable: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg),
        /**
         * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
         */
        transactionRejected: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg),
        /**
         * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
         */
        methodNotSupported: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg),
        /**
         * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
         */
        limitExceeded: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg)
      },
      provider: {
        /**
         * Get an Ethereum Provider User Rejected Request (4001) error.
         */
        userRejectedRequest: (arg) => {
          return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
        },
        /**
         * Get an Ethereum Provider Unauthorized (4100) error.
         */
        unauthorized: (arg) => {
          return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
        },
        /**
         * Get an Ethereum Provider Unsupported Method (4200) error.
         */
        unsupportedMethod: (arg) => {
          return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
        },
        /**
         * Get an Ethereum Provider Not Connected (4900) error.
         */
        disconnected: (arg) => {
          return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
        },
        /**
         * Get an Ethereum Provider Chain Not Connected (4901) error.
         */
        chainDisconnected: (arg) => {
          return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
        },
        /**
         * Get a custom Ethereum Provider error.
         */
        custom: (opts) => {
          if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
            throw new Error("Ethereum Provider custom errors must provide single object argument.");
          }
          const { code, message, data } = opts;
          if (!message || typeof message !== "string") {
            throw new Error('"message" must be a nonempty string');
          }
          return new classes_1.EthereumProviderError(code, message, data);
        }
      }
    };
    function getEthJsonRpcError(code, arg) {
      const [message, data] = parseOpts(arg);
      return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
    }
    function getEthProviderError(code, arg) {
      const [message, data] = parseOpts(arg);
      return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
    }
    function parseOpts(arg) {
      if (arg) {
        if (typeof arg === "string") {
          return [arg];
        } else if (typeof arg === "object" && !Array.isArray(arg)) {
          const { message, data } = arg;
          if (message && typeof message !== "string") {
            throw new Error("Must specify string message.");
          }
          return [message || void 0, data];
        }
      }
      return [];
    }
  }
});

// node_modules/eth-rpc-errors/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/eth-rpc-errors/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getMessageFromCode = exports.serializeError = exports.EthereumProviderError = exports.EthereumRpcError = exports.ethErrors = exports.errorCodes = void 0;
    var classes_1 = require_classes();
    Object.defineProperty(exports, "EthereumRpcError", { enumerable: true, get: function() {
      return classes_1.EthereumRpcError;
    } });
    Object.defineProperty(exports, "EthereumProviderError", { enumerable: true, get: function() {
      return classes_1.EthereumProviderError;
    } });
    var utils_1 = require_utils2();
    Object.defineProperty(exports, "serializeError", { enumerable: true, get: function() {
      return utils_1.serializeError;
    } });
    Object.defineProperty(exports, "getMessageFromCode", { enumerable: true, get: function() {
      return utils_1.getMessageFromCode;
    } });
    var errors_1 = require_errors2();
    Object.defineProperty(exports, "ethErrors", { enumerable: true, get: function() {
      return errors_1.ethErrors;
    } });
    var error_constants_1 = require_error_constants();
    Object.defineProperty(exports, "errorCodes", { enumerable: true, get: function() {
      return error_constants_1.errorCodes;
    } });
  }
});

// node_modules/json-rpc-engine/dist/JsonRpcEngine.js
var require_JsonRpcEngine = __commonJS({
  "node_modules/json-rpc-engine/dist/JsonRpcEngine.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JsonRpcEngine = void 0;
    var safe_event_emitter_1 = __importDefault2(require_safe_event_emitter());
    var eth_rpc_errors_1 = require_dist3();
    var JsonRpcEngine = class _JsonRpcEngine extends safe_event_emitter_1.default {
      constructor() {
        super();
        this._middleware = [];
      }
      /**
       * Add a middleware function to the engine's middleware stack.
       *
       * @param middleware - The middleware function to add.
       */
      push(middleware) {
        this._middleware.push(middleware);
      }
      handle(req, cb) {
        if (cb && typeof cb !== "function") {
          throw new Error('"callback" must be a function if provided.');
        }
        if (Array.isArray(req)) {
          if (cb) {
            return this._handleBatch(req, cb);
          }
          return this._handleBatch(req);
        }
        if (cb) {
          return this._handle(req, cb);
        }
        return this._promiseHandle(req);
      }
      /**
       * Returns this engine as a middleware function that can be pushed to other
       * engines.
       *
       * @returns This engine as a middleware function.
       */
      asMiddleware() {
        return async (req, res, next, end) => {
          try {
            const [middlewareError, isComplete, returnHandlers] = await _JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
            if (isComplete) {
              await _JsonRpcEngine._runReturnHandlers(returnHandlers);
              return end(middlewareError);
            }
            return next(async (handlerCallback) => {
              try {
                await _JsonRpcEngine._runReturnHandlers(returnHandlers);
              } catch (error) {
                return handlerCallback(error);
              }
              return handlerCallback();
            });
          } catch (error) {
            return end(error);
          }
        };
      }
      async _handleBatch(reqs, cb) {
        try {
          const responses = await Promise.all(
            // 1. Begin executing each request in the order received
            reqs.map(this._promiseHandle.bind(this))
          );
          if (cb) {
            return cb(null, responses);
          }
          return responses;
        } catch (error) {
          if (cb) {
            return cb(error);
          }
          throw error;
        }
      }
      /**
       * A promise-wrapped _handle.
       */
      _promiseHandle(req) {
        return new Promise((resolve) => {
          this._handle(req, (_err, res) => {
            resolve(res);
          });
        });
      }
      /**
       * Ensures that the request object is valid, processes it, and passes any
       * error and the response object to the given callback.
       *
       * Does not reject.
       */
      async _handle(callerReq, cb) {
        if (!callerReq || Array.isArray(callerReq) || typeof callerReq !== "object") {
          const error2 = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof callerReq}`, { request: callerReq });
          return cb(error2, { id: void 0, jsonrpc: "2.0", error: error2 });
        }
        if (typeof callerReq.method !== "string") {
          const error2 = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof callerReq.method}`, { request: callerReq });
          return cb(error2, { id: callerReq.id, jsonrpc: "2.0", error: error2 });
        }
        const req = Object.assign({}, callerReq);
        const res = {
          id: req.id,
          jsonrpc: req.jsonrpc
        };
        let error = null;
        try {
          await this._processRequest(req, res);
        } catch (_error) {
          error = _error;
        }
        if (error) {
          delete res.result;
          if (!res.error) {
            res.error = eth_rpc_errors_1.serializeError(error);
          }
        }
        return cb(error, res);
      }
      /**
       * For the given request and response, runs all middleware and their return
       * handlers, if any, and ensures that internal request processing semantics
       * are satisfied.
       */
      async _processRequest(req, res) {
        const [error, isComplete, returnHandlers] = await _JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
        _JsonRpcEngine._checkForCompletion(req, res, isComplete);
        await _JsonRpcEngine._runReturnHandlers(returnHandlers);
        if (error) {
          throw error;
        }
      }
      /**
       * Serially executes the given stack of middleware.
       *
       * @returns An array of any error encountered during middleware execution,
       * a boolean indicating whether the request was completed, and an array of
       * middleware-defined return handlers.
       */
      static async _runAllMiddleware(req, res, middlewareStack) {
        const returnHandlers = [];
        let error = null;
        let isComplete = false;
        for (const middleware of middlewareStack) {
          [error, isComplete] = await _JsonRpcEngine._runMiddleware(req, res, middleware, returnHandlers);
          if (isComplete) {
            break;
          }
        }
        return [error, isComplete, returnHandlers.reverse()];
      }
      /**
       * Runs an individual middleware.
       *
       * @returns An array of any error encountered during middleware exection,
       * and a boolean indicating whether the request should end.
       */
      static _runMiddleware(req, res, middleware, returnHandlers) {
        return new Promise((resolve) => {
          const end = (err) => {
            const error = err || res.error;
            if (error) {
              res.error = eth_rpc_errors_1.serializeError(error);
            }
            resolve([error, true]);
          };
          const next = (returnHandler) => {
            if (res.error) {
              end(res.error);
            } else {
              if (returnHandler) {
                if (typeof returnHandler !== "function") {
                  end(new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof returnHandler}" for request:
${jsonify(req)}`, { request: req }));
                }
                returnHandlers.push(returnHandler);
              }
              resolve([null, false]);
            }
          };
          try {
            middleware(req, res, next, end);
          } catch (error) {
            end(error);
          }
        });
      }
      /**
       * Serially executes array of return handlers. The request and response are
       * assumed to be in their scope.
       */
      static async _runReturnHandlers(handlers) {
        for (const handler of handlers) {
          await new Promise((resolve, reject) => {
            handler((err) => err ? reject(err) : resolve());
          });
        }
      }
      /**
       * Throws an error if the response has neither a result nor an error, or if
       * the "isComplete" flag is falsy.
       */
      static _checkForCompletion(req, res, isComplete) {
        if (!("result" in res) && !("error" in res)) {
          throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${jsonify(req)}`, { request: req });
        }
        if (!isComplete) {
          throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${jsonify(req)}`, { request: req });
        }
      }
    };
    exports.JsonRpcEngine = JsonRpcEngine;
    function jsonify(request) {
      return JSON.stringify(request, null, 2);
    }
  }
});

// node_modules/json-rpc-engine/dist/mergeMiddleware.js
var require_mergeMiddleware = __commonJS({
  "node_modules/json-rpc-engine/dist/mergeMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeMiddleware = void 0;
    var JsonRpcEngine_1 = require_JsonRpcEngine();
    function mergeMiddleware(middlewareStack) {
      const engine = new JsonRpcEngine_1.JsonRpcEngine();
      middlewareStack.forEach((middleware) => engine.push(middleware));
      return engine.asMiddleware();
    }
    exports.mergeMiddleware = mergeMiddleware;
  }
});

// node_modules/json-rpc-engine/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/json-rpc-engine/dist/index.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      Object.defineProperty(o3, k22, { enumerable: true, get: function() {
        return m3[k3];
      } });
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o3[k22] = m3[k3];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3))
          __createBinding2(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(require_idRemapMiddleware(), exports);
    __exportStar2(require_createAsyncMiddleware(), exports);
    __exportStar2(require_createScaffoldMiddleware(), exports);
    __exportStar2(require_getUniqueId(), exports);
    __exportStar2(require_JsonRpcEngine(), exports);
    __exportStar2(require_mergeMiddleware(), exports);
  }
});

// node_modules/async-mutex/node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d3, b3) {
  if (typeof b3 !== "function" && b3 !== null)
    throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
  extendStatics(d3, b3);
  function __() {
    this.constructor = d3;
  }
  d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
}
function __rest(s3, e3) {
  var t3 = {};
  for (var p3 in s3)
    if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
      t3[p3] = s3[p3];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
      if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
        t3[p3[i3]] = s3[p3[i3]];
    }
  return t3;
}
function __decorate(decorators, target, key, desc) {
  var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d3 = decorators[i3])
        r4 = (c3 < 3 ? d3(r4) : c3 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
  return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f3) {
    if (f3 !== void 0 && typeof f3 !== "function")
      throw new TypeError("Function expected");
    return f3;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _3, done = false;
  for (var i3 = decorators.length - 1; i3 >= 0; i3--) {
    var context = {};
    for (var p3 in contextIn)
      context[p3] = p3 === "access" ? {} : contextIn[p3];
    for (var p3 in contextIn.access)
      context.access[p3] = contextIn.access[p3];
    context.addInitializer = function(f3) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f3 || null));
    };
    var result = (0, decorators[i3])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_3 = accept(result.get))
        descriptor.get = _3;
      if (_3 = accept(result.set))
        descriptor.set = _3;
      if (_3 = accept(result.init))
        initializers.unshift(_3);
    } else if (_3 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_3);
      else
        descriptor[key] = _3;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i3 = 0; i3 < initializers.length; i3++) {
    value = useValue ? initializers[i3].call(thisArg, value) : initializers[i3].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x3) {
  return typeof x3 === "symbol" ? x3 : "".concat(x3);
}
function __setFunctionName(f3, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f3, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e3) {
        reject(e3);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t3[0] & 1)
      throw t3[1];
    return t3[1];
  }, trys: [], ops: [] }, f3, y3, t3, g3;
  return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
    return this;
  }), g3;
  function verb(n2) {
    return function(v3) {
      return step([n2, v3]);
    };
  }
  function step(op) {
    if (f3)
      throw new TypeError("Generator is already executing.");
    while (g3 && (g3 = 0, op[0] && (_3 = 0)), _3)
      try {
        if (f3 = 1, y3 && (t3 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t3 = y3["return"]) && t3.call(y3), 0) : y3.next) && !(t3 = t3.call(y3, op[1])).done)
          return t3;
        if (y3 = 0, t3)
          op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y3 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t3 = _3.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t3[1]) {
              _3.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _3.label < t3[2]) {
              _3.label = t3[2];
              _3.ops.push(op);
              break;
            }
            if (t3[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e3) {
        op = [6, e3];
        y3 = 0;
      } finally {
        f3 = t3 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m3, o3) {
  for (var p3 in m3)
    if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(o3, p3))
      __createBinding(o3, m3, p3);
}
function __values(o3) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o3[s3], i3 = 0;
  if (m3)
    return m3.call(o3);
  if (o3 && typeof o3.length === "number")
    return {
      next: function() {
        if (o3 && i3 >= o3.length)
          o3 = void 0;
        return { value: o3 && o3[i3++], done: !o3 };
      }
    };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o3, n2) {
  var m3 = typeof Symbol === "function" && o3[Symbol.iterator];
  if (!m3)
    return o3;
  var i3 = m3.call(o3), r4, ar = [], e3;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r4 = i3.next()).done)
      ar.push(r4.value);
  } catch (error) {
    e3 = { error };
  } finally {
    try {
      if (r4 && !r4.done && (m3 = i3["return"]))
        m3.call(i3);
    } finally {
      if (e3)
        throw e3.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
    ar = ar.concat(__read(arguments[i3]));
  return ar;
}
function __spreadArrays() {
  for (var s3 = 0, i3 = 0, il = arguments.length; i3 < il; i3++)
    s3 += arguments[i3].length;
  for (var r4 = Array(s3), k3 = 0, i3 = 0; i3 < il; i3++)
    for (var a3 = arguments[i3], j3 = 0, jl = a3.length; j3 < jl; j3++, k3++)
      r4[k3] = a3[j3];
  return r4;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i3 = 0, l3 = from.length, ar; i3 < l3; i3++) {
      if (ar || !(i3 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i3);
        ar[i3] = from[i3];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v3) {
  return this instanceof __await ? (this.v = v3, this) : new __await(v3);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g3 = generator.apply(thisArg, _arguments || []), i3, q3 = [];
  return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3;
  function verb(n2) {
    if (g3[n2])
      i3[n2] = function(v3) {
        return new Promise(function(a3, b3) {
          q3.push([n2, v3, a3, b3]) > 1 || resume(n2, v3);
        });
      };
  }
  function resume(n2, v3) {
    try {
      step(g3[n2](v3));
    } catch (e3) {
      settle(q3[0][3], e3);
    }
  }
  function step(r4) {
    r4.value instanceof __await ? Promise.resolve(r4.value.v).then(fulfill, reject) : settle(q3[0][2], r4);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f3, v3) {
    if (f3(v3), q3.shift(), q3.length)
      resume(q3[0][0], q3[0][1]);
  }
}
function __asyncDelegator(o3) {
  var i3, p3;
  return i3 = {}, verb("next"), verb("throw", function(e3) {
    throw e3;
  }), verb("return"), i3[Symbol.iterator] = function() {
    return this;
  }, i3;
  function verb(n2, f3) {
    i3[n2] = o3[n2] ? function(v3) {
      return (p3 = !p3) ? { value: __await(o3[n2](v3)), done: false } : f3 ? f3(v3) : v3;
    } : f3;
  }
}
function __asyncValues(o3) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m3 = o3[Symbol.asyncIterator], i3;
  return m3 ? m3.call(o3) : (o3 = typeof __values === "function" ? __values(o3) : o3[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3);
  function verb(n2) {
    i3[n2] = o3[n2] && function(v3) {
      return new Promise(function(resolve, reject) {
        v3 = o3[n2](v3), settle(resolve, reject, v3.done, v3.value);
      });
    };
  }
  function settle(resolve, reject, d3, v3) {
    Promise.resolve(v3).then(function(v4) {
      resolve({ value: v4, done: d3 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k3 in mod)
      if (k3 !== "default" && Object.prototype.hasOwnProperty.call(mod, k3))
        __createBinding(result, mod, k3);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f3) {
  if (kind === "a" && !f3)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f3) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f3)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e3) {
    env.error = env.hasError ? new _SuppressedError(e3, env.error, "An error was suppressed during disposal.") : e3;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async)
          return Promise.resolve(result).then(next, function(e3) {
            fail(e3);
            return next();
          });
      } catch (e3) {
        fail(e3);
      }
    }
    if (env.hasError)
      throw env.error;
  }
  return next();
}
var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/async-mutex/node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d3, b3) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b4) {
        d4.__proto__ = b4;
      } || function(d4, b4) {
        for (var p3 in b4)
          if (Object.prototype.hasOwnProperty.call(b4, p3))
            d4[p3] = b4[p3];
      };
      return extendStatics(d3, b3);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t3) {
        for (var s3, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
          s3 = arguments[i3];
          for (var p3 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p3))
              t3[p3] = s3[p3];
        }
        return t3;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      var desc = Object.getOwnPropertyDescriptor(m3, k3);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k3];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o3[k22] = m3[k3];
    };
    __setModuleDefault = Object.create ? function(o3, v3) {
      Object.defineProperty(o3, "default", { enumerable: true, value: v3 });
    } : function(o3, v3) {
      o3["default"] = v3;
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e3 = new Error(message);
      return e3.name = "SuppressedError", e3.error = error, e3.suppressed = suppressed, e3;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources
    };
  }
});

// node_modules/async-mutex/lib/Semaphore.js
var require_Semaphore = __commonJS({
  "node_modules/async-mutex/lib/Semaphore.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var Semaphore = (
      /** @class */
      function() {
        function Semaphore2(_maxConcurrency) {
          this._maxConcurrency = _maxConcurrency;
          this._queue = [];
          if (_maxConcurrency <= 0) {
            throw new Error("semaphore must be initialized to a positive value");
          }
          this._value = _maxConcurrency;
        }
        Semaphore2.prototype.acquire = function() {
          var _this = this;
          var locked = this.isLocked();
          var ticket = new Promise(function(r4) {
            return _this._queue.push(r4);
          });
          if (!locked)
            this._dispatch();
          return ticket;
        };
        Semaphore2.prototype.runExclusive = function(callback) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            var _a, value, release;
            return tslib_1.__generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  return [4, this.acquire()];
                case 1:
                  _a = _b.sent(), value = _a[0], release = _a[1];
                  _b.label = 2;
                case 2:
                  _b.trys.push([2, , 4, 5]);
                  return [4, callback(value)];
                case 3:
                  return [2, _b.sent()];
                case 4:
                  release();
                  return [
                    7
                    /*endfinally*/
                  ];
                case 5:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        Semaphore2.prototype.isLocked = function() {
          return this._value <= 0;
        };
        Semaphore2.prototype.release = function() {
          if (this._maxConcurrency > 1) {
            throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
          }
          if (this._currentReleaser) {
            var releaser = this._currentReleaser;
            this._currentReleaser = void 0;
            releaser();
          }
        };
        Semaphore2.prototype._dispatch = function() {
          var _this = this;
          var nextConsumer = this._queue.shift();
          if (!nextConsumer)
            return;
          var released = false;
          this._currentReleaser = function() {
            if (released)
              return;
            released = true;
            _this._value++;
            _this._dispatch();
          };
          nextConsumer([this._value--, this._currentReleaser]);
        };
        return Semaphore2;
      }()
    );
    exports.default = Semaphore;
  }
});

// node_modules/async-mutex/lib/Mutex.js
var require_Mutex = __commonJS({
  "node_modules/async-mutex/lib/Mutex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var Semaphore_1 = require_Semaphore();
    var Mutex = (
      /** @class */
      function() {
        function Mutex2() {
          this._semaphore = new Semaphore_1.default(1);
        }
        Mutex2.prototype.acquire = function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            var _a, releaser;
            return tslib_1.__generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  return [4, this._semaphore.acquire()];
                case 1:
                  _a = _b.sent(), releaser = _a[1];
                  return [2, releaser];
              }
            });
          });
        };
        Mutex2.prototype.runExclusive = function(callback) {
          return this._semaphore.runExclusive(function() {
            return callback();
          });
        };
        Mutex2.prototype.isLocked = function() {
          return this._semaphore.isLocked();
        };
        Mutex2.prototype.release = function() {
          this._semaphore.release();
        };
        return Mutex2;
      }()
    );
    exports.default = Mutex;
  }
});

// node_modules/async-mutex/lib/withTimeout.js
var require_withTimeout = __commonJS({
  "node_modules/async-mutex/lib/withTimeout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withTimeout = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    function withTimeout(sync, timeout, timeoutError) {
      var _this = this;
      if (timeoutError === void 0) {
        timeoutError = new Error("timeout");
      }
      return {
        acquire: function() {
          return new Promise(function(resolve, reject) {
            return tslib_1.__awaiter(_this, void 0, void 0, function() {
              var isTimeout, ticket, release;
              return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    isTimeout = false;
                    setTimeout(function() {
                      isTimeout = true;
                      reject(timeoutError);
                    }, timeout);
                    return [4, sync.acquire()];
                  case 1:
                    ticket = _a.sent();
                    if (isTimeout) {
                      release = Array.isArray(ticket) ? ticket[1] : ticket;
                      release();
                    } else {
                      resolve(ticket);
                    }
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          });
        },
        runExclusive: function(callback) {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            var release, ticket;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  release = function() {
                    return void 0;
                  };
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, , 7, 8]);
                  return [4, this.acquire()];
                case 2:
                  ticket = _a.sent();
                  if (!Array.isArray(ticket))
                    return [3, 4];
                  release = ticket[1];
                  return [4, callback(ticket[0])];
                case 3:
                  return [2, _a.sent()];
                case 4:
                  release = ticket;
                  return [4, callback()];
                case 5:
                  return [2, _a.sent()];
                case 6:
                  return [3, 8];
                case 7:
                  release();
                  return [
                    7
                    /*endfinally*/
                  ];
                case 8:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        },
        release: function() {
          sync.release();
        },
        isLocked: function() {
          return sync.isLocked();
        }
      };
    }
    exports.withTimeout = withTimeout;
  }
});

// node_modules/async-mutex/lib/index.js
var require_lib = __commonJS({
  "node_modules/async-mutex/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withTimeout = exports.Semaphore = exports.Mutex = void 0;
    var Mutex_1 = require_Mutex();
    Object.defineProperty(exports, "Mutex", { enumerable: true, get: function() {
      return Mutex_1.default;
    } });
    var Semaphore_1 = require_Semaphore();
    Object.defineProperty(exports, "Semaphore", { enumerable: true, get: function() {
      return Semaphore_1.default;
    } });
    var withTimeout_1 = require_withTimeout();
    Object.defineProperty(exports, "withTimeout", { enumerable: true, get: function() {
      return withTimeout_1.withTimeout;
    } });
  }
});

// node_modules/xtend/immutable.js
var require_immutable = __commonJS({
  "node_modules/xtend/immutable.js"(exports, module) {
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i3 = 0; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
});

// node_modules/eth-query/index.js
var require_eth_query = __commonJS({
  "node_modules/eth-query/index.js"(exports, module) {
    var extend = require_immutable();
    var createRandomId = require_json_rpc_random_id()();
    module.exports = EthQuery;
    function EthQuery(provider) {
      const self2 = this;
      self2.currentProvider = provider;
    }
    EthQuery.prototype.getBalance = generateFnWithDefaultBlockFor(2, "eth_getBalance");
    EthQuery.prototype.getCode = generateFnWithDefaultBlockFor(2, "eth_getCode");
    EthQuery.prototype.getTransactionCount = generateFnWithDefaultBlockFor(2, "eth_getTransactionCount");
    EthQuery.prototype.getStorageAt = generateFnWithDefaultBlockFor(3, "eth_getStorageAt");
    EthQuery.prototype.call = generateFnWithDefaultBlockFor(2, "eth_call");
    EthQuery.prototype.protocolVersion = generateFnFor("eth_protocolVersion");
    EthQuery.prototype.syncing = generateFnFor("eth_syncing");
    EthQuery.prototype.coinbase = generateFnFor("eth_coinbase");
    EthQuery.prototype.mining = generateFnFor("eth_mining");
    EthQuery.prototype.hashrate = generateFnFor("eth_hashrate");
    EthQuery.prototype.gasPrice = generateFnFor("eth_gasPrice");
    EthQuery.prototype.accounts = generateFnFor("eth_accounts");
    EthQuery.prototype.blockNumber = generateFnFor("eth_blockNumber");
    EthQuery.prototype.getBlockTransactionCountByHash = generateFnFor("eth_getBlockTransactionCountByHash");
    EthQuery.prototype.getBlockTransactionCountByNumber = generateFnFor("eth_getBlockTransactionCountByNumber");
    EthQuery.prototype.getUncleCountByBlockHash = generateFnFor("eth_getUncleCountByBlockHash");
    EthQuery.prototype.getUncleCountByBlockNumber = generateFnFor("eth_getUncleCountByBlockNumber");
    EthQuery.prototype.sign = generateFnFor("eth_sign");
    EthQuery.prototype.sendTransaction = generateFnFor("eth_sendTransaction");
    EthQuery.prototype.sendRawTransaction = generateFnFor("eth_sendRawTransaction");
    EthQuery.prototype.estimateGas = generateFnFor("eth_estimateGas");
    EthQuery.prototype.getBlockByHash = generateFnFor("eth_getBlockByHash");
    EthQuery.prototype.getBlockByNumber = generateFnFor("eth_getBlockByNumber");
    EthQuery.prototype.getTransactionByHash = generateFnFor("eth_getTransactionByHash");
    EthQuery.prototype.getTransactionByBlockHashAndIndex = generateFnFor("eth_getTransactionByBlockHashAndIndex");
    EthQuery.prototype.getTransactionByBlockNumberAndIndex = generateFnFor("eth_getTransactionByBlockNumberAndIndex");
    EthQuery.prototype.getTransactionReceipt = generateFnFor("eth_getTransactionReceipt");
    EthQuery.prototype.getUncleByBlockHashAndIndex = generateFnFor("eth_getUncleByBlockHashAndIndex");
    EthQuery.prototype.getUncleByBlockNumberAndIndex = generateFnFor("eth_getUncleByBlockNumberAndIndex");
    EthQuery.prototype.getCompilers = generateFnFor("eth_getCompilers");
    EthQuery.prototype.compileLLL = generateFnFor("eth_compileLLL");
    EthQuery.prototype.compileSolidity = generateFnFor("eth_compileSolidity");
    EthQuery.prototype.compileSerpent = generateFnFor("eth_compileSerpent");
    EthQuery.prototype.newFilter = generateFnFor("eth_newFilter");
    EthQuery.prototype.newBlockFilter = generateFnFor("eth_newBlockFilter");
    EthQuery.prototype.newPendingTransactionFilter = generateFnFor("eth_newPendingTransactionFilter");
    EthQuery.prototype.uninstallFilter = generateFnFor("eth_uninstallFilter");
    EthQuery.prototype.getFilterChanges = generateFnFor("eth_getFilterChanges");
    EthQuery.prototype.getFilterLogs = generateFnFor("eth_getFilterLogs");
    EthQuery.prototype.getLogs = generateFnFor("eth_getLogs");
    EthQuery.prototype.getWork = generateFnFor("eth_getWork");
    EthQuery.prototype.submitWork = generateFnFor("eth_submitWork");
    EthQuery.prototype.submitHashrate = generateFnFor("eth_submitHashrate");
    EthQuery.prototype.sendAsync = function(opts, cb) {
      const self2 = this;
      self2.currentProvider.sendAsync(createPayload(opts), function(err, response) {
        if (!err && response.error)
          err = new Error("EthQuery - RPC Error - " + response.error.message);
        if (err)
          return cb(err);
        cb(null, response.result);
      });
    };
    function generateFnFor(methodName) {
      return function() {
        const self2 = this;
        var args = [].slice.call(arguments);
        var cb = args.pop();
        self2.sendAsync({
          method: methodName,
          params: args
        }, cb);
      };
    }
    function generateFnWithDefaultBlockFor(argCount, methodName) {
      return function() {
        const self2 = this;
        var args = [].slice.call(arguments);
        var cb = args.pop();
        if (args.length < argCount)
          args.push("latest");
        self2.sendAsync({
          method: methodName,
          params: args
        }, cb);
      };
    }
    function createPayload(data) {
      return extend({
        // defaults
        id: createRandomId(),
        jsonrpc: "2.0",
        params: []
        // user-specified
      }, data);
    }
  }
});

// node_modules/eth-json-rpc-filters/node_modules/pify/index.js
var require_pify2 = __commonJS({
  "node_modules/eth-json-rpc-filters/node_modules/pify/index.js"(exports, module) {
    "use strict";
    var processFn = (fn, options, proxy, unwrapped) => function(...arguments_) {
      const P3 = options.promiseModule;
      return new P3((resolve, reject) => {
        if (options.multiArgs) {
          arguments_.push((...result) => {
            if (options.errorFirst) {
              if (result[0]) {
                reject(result);
              } else {
                result.shift();
                resolve(result);
              }
            } else {
              resolve(result);
            }
          });
        } else if (options.errorFirst) {
          arguments_.push((error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        } else {
          arguments_.push(resolve);
        }
        const self2 = this === proxy ? unwrapped : this;
        Reflect.apply(fn, self2, arguments_);
      });
    };
    var filterCache = /* @__PURE__ */ new WeakMap();
    module.exports = (input, options) => {
      options = {
        exclude: [/.+(?:Sync|Stream)$/],
        errorFirst: true,
        promiseModule: Promise,
        ...options
      };
      const objectType = typeof input;
      if (!(input !== null && (objectType === "object" || objectType === "function"))) {
        throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
      }
      const filter = (target, key) => {
        let cached = filterCache.get(target);
        if (!cached) {
          cached = {};
          filterCache.set(target, cached);
        }
        if (key in cached) {
          return cached[key];
        }
        const match = (pattern2) => typeof pattern2 === "string" || typeof key === "symbol" ? key === pattern2 : pattern2.test(key);
        const desc = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = desc === void 0 || desc.writable || desc.configurable;
        const included = options.include ? options.include.some(match) : !options.exclude.some(match);
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
      };
      const cache = /* @__PURE__ */ new WeakMap();
      const proxy = new Proxy(input, {
        apply(target, thisArg, args) {
          const cached = cache.get(target);
          if (cached) {
            return Reflect.apply(cached, thisArg, args);
          }
          const pified = options.excludeMain ? target : processFn(target, options, proxy, target);
          cache.set(target, pified);
          return Reflect.apply(pified, thisArg, args);
        },
        get(target, key) {
          const property = target[key];
          if (!filter(target, key) || property === Function.prototype[key]) {
            return property;
          }
          const cached = cache.get(property);
          if (cached) {
            return cached;
          }
          if (typeof property === "function") {
            const pified = processFn(property, options, proxy, target);
            cache.set(property, pified);
            return pified;
          }
          return property;
        }
      });
      return proxy;
    };
  }
});

// node_modules/eth-json-rpc-filters/base-filter.js
var require_base_filter = __commonJS({
  "node_modules/eth-json-rpc-filters/base-filter.js"(exports, module) {
    var SafeEventEmitter = require_cjs().default;
    var BaseFilter = class extends SafeEventEmitter {
      constructor() {
        super();
        this.updates = [];
      }
      async initialize() {
      }
      async update() {
        throw new Error("BaseFilter - no update method specified");
      }
      addResults(newResults) {
        this.updates = this.updates.concat(newResults);
        newResults.forEach((result) => this.emit("update", result));
      }
      addInitialResults(newResults) {
      }
      getChangesAndClear() {
        const updates = this.updates;
        this.updates = [];
        return updates;
      }
    };
    module.exports = BaseFilter;
  }
});

// node_modules/eth-json-rpc-filters/base-filter-history.js
var require_base_filter_history = __commonJS({
  "node_modules/eth-json-rpc-filters/base-filter-history.js"(exports, module) {
    var BaseFilter = require_base_filter();
    var BaseFilterWithHistory = class extends BaseFilter {
      constructor() {
        super();
        this.allResults = [];
      }
      async update() {
        throw new Error("BaseFilterWithHistory - no update method specified");
      }
      addResults(newResults) {
        this.allResults = this.allResults.concat(newResults);
        super.addResults(newResults);
      }
      addInitialResults(newResults) {
        this.allResults = this.allResults.concat(newResults);
        super.addInitialResults(newResults);
      }
      getAllResults() {
        return this.allResults;
      }
    };
    module.exports = BaseFilterWithHistory;
  }
});

// node_modules/eth-json-rpc-filters/hexUtils.js
var require_hexUtils = __commonJS({
  "node_modules/eth-json-rpc-filters/hexUtils.js"(exports, module) {
    module.exports = {
      minBlockRef,
      maxBlockRef,
      sortBlockRefs,
      bnToHex,
      blockRefIsNumber,
      hexToInt,
      incrementHexInt,
      intToHex,
      unsafeRandomBytes
    };
    function minBlockRef(...refs) {
      const sortedRefs = sortBlockRefs(refs);
      return sortedRefs[0];
    }
    function maxBlockRef(...refs) {
      const sortedRefs = sortBlockRefs(refs);
      return sortedRefs[sortedRefs.length - 1];
    }
    function sortBlockRefs(refs) {
      return refs.sort((refA, refB) => {
        if (refA === "latest" || refB === "earliest")
          return 1;
        if (refB === "latest" || refA === "earliest")
          return -1;
        return hexToInt(refA) - hexToInt(refB);
      });
    }
    function bnToHex(bn) {
      return "0x" + bn.toString(16);
    }
    function blockRefIsNumber(blockRef) {
      return blockRef && !["earliest", "latest", "pending"].includes(blockRef);
    }
    function hexToInt(hexString) {
      if (hexString === void 0 || hexString === null)
        return hexString;
      return Number.parseInt(hexString, 16);
    }
    function incrementHexInt(hexString) {
      if (hexString === void 0 || hexString === null)
        return hexString;
      const value = hexToInt(hexString);
      return intToHex(value + 1);
    }
    function intToHex(int) {
      if (int === void 0 || int === null)
        return int;
      let hexString = int.toString(16);
      const needsLeftPad = hexString.length % 2;
      if (needsLeftPad)
        hexString = "0" + hexString;
      return "0x" + hexString;
    }
    function unsafeRandomBytes(byteCount) {
      let result = "0x";
      for (let i3 = 0; i3 < byteCount; i3++) {
        result += unsafeRandomNibble();
        result += unsafeRandomNibble();
      }
      return result;
    }
    function unsafeRandomNibble() {
      return Math.floor(Math.random() * 16).toString(16);
    }
  }
});

// node_modules/eth-json-rpc-filters/log-filter.js
var require_log_filter = __commonJS({
  "node_modules/eth-json-rpc-filters/log-filter.js"(exports, module) {
    var EthQuery = require_eth_query();
    var pify = require_pify2();
    var BaseFilterWithHistory = require_base_filter_history();
    var { bnToHex, hexToInt, incrementHexInt, minBlockRef, blockRefIsNumber } = require_hexUtils();
    var LogFilter = class extends BaseFilterWithHistory {
      constructor({ provider, params }) {
        super();
        this.type = "log";
        this.ethQuery = new EthQuery(provider);
        this.params = Object.assign({
          fromBlock: "latest",
          toBlock: "latest",
          address: void 0,
          topics: []
        }, params);
        if (this.params.address) {
          if (!Array.isArray(this.params.address)) {
            this.params.address = [this.params.address];
          }
          this.params.address = this.params.address.map((address) => address.toLowerCase());
        }
      }
      async initialize({ currentBlock }) {
        let fromBlock = this.params.fromBlock;
        if (["latest", "pending"].includes(fromBlock))
          fromBlock = currentBlock;
        if ("earliest" === fromBlock)
          fromBlock = "0x0";
        this.params.fromBlock = fromBlock;
        const toBlock = minBlockRef(this.params.toBlock, currentBlock);
        const params = Object.assign({}, this.params, { toBlock });
        const newLogs = await this._fetchLogs(params);
        this.addInitialResults(newLogs);
      }
      async update({ oldBlock, newBlock }) {
        const toBlock = newBlock;
        let fromBlock;
        if (oldBlock) {
          fromBlock = incrementHexInt(oldBlock);
        } else {
          fromBlock = newBlock;
        }
        const params = Object.assign({}, this.params, { fromBlock, toBlock });
        const newLogs = await this._fetchLogs(params);
        const matchingLogs = newLogs.filter((log) => this.matchLog(log));
        this.addResults(matchingLogs);
      }
      async _fetchLogs(params) {
        const newLogs = await pify((cb) => this.ethQuery.getLogs(params, cb))();
        return newLogs;
      }
      matchLog(log) {
        if (hexToInt(this.params.fromBlock) >= hexToInt(log.blockNumber))
          return false;
        if (blockRefIsNumber(this.params.toBlock) && hexToInt(this.params.toBlock) <= hexToInt(log.blockNumber))
          return false;
        const normalizedLogAddress = log.address && log.address.toLowerCase();
        if (this.params.address && normalizedLogAddress && !this.params.address.includes(normalizedLogAddress))
          return false;
        const topicsMatch = this.params.topics.every((topicPattern, index) => {
          let logTopic = log.topics[index];
          if (!logTopic)
            return false;
          logTopic = logTopic.toLowerCase();
          let subtopicsToMatch = Array.isArray(topicPattern) ? topicPattern : [topicPattern];
          const subtopicsIncludeWildcard = subtopicsToMatch.includes(null);
          if (subtopicsIncludeWildcard)
            return true;
          subtopicsToMatch = subtopicsToMatch.map((topic) => topic.toLowerCase());
          const topicDoesMatch = subtopicsToMatch.includes(logTopic);
          return topicDoesMatch;
        });
        return topicsMatch;
      }
    };
    module.exports = LogFilter;
  }
});

// node_modules/eth-json-rpc-filters/getBlocksForRange.js
var require_getBlocksForRange = __commonJS({
  "node_modules/eth-json-rpc-filters/getBlocksForRange.js"(exports, module) {
    module.exports = getBlocksForRange;
    async function getBlocksForRange({ provider, fromBlock, toBlock }) {
      if (!fromBlock)
        fromBlock = toBlock;
      const fromBlockNumber = hexToInt(fromBlock);
      const toBlockNumber = hexToInt(toBlock);
      const blockCountToQuery = toBlockNumber - fromBlockNumber + 1;
      const missingBlockNumbers = Array(blockCountToQuery).fill().map((_3, index) => fromBlockNumber + index).map(intToHex);
      let blockBodies = await Promise.all(
        missingBlockNumbers.map((blockNum) => query(provider, "eth_getBlockByNumber", [blockNum, false]))
      );
      blockBodies = blockBodies.filter((block) => block !== null);
      return blockBodies;
    }
    function hexToInt(hexString) {
      if (hexString === void 0 || hexString === null)
        return hexString;
      return Number.parseInt(hexString, 16);
    }
    function intToHex(int) {
      if (int === void 0 || int === null)
        return int;
      const hexString = int.toString(16);
      return "0x" + hexString;
    }
    function sendAsync(provider, request) {
      return new Promise((resolve, reject) => {
        provider.sendAsync(request, (error, response) => {
          if (error) {
            reject(error);
          } else if (response.error) {
            reject(response.error);
          } else if (response.result) {
            resolve(response.result);
          } else {
            reject(new Error("Result was empty"));
          }
        });
      });
    }
    async function query(provider, method, params) {
      for (let i3 = 0; i3 < 3; i3++) {
        try {
          return await sendAsync(provider, {
            id: 1,
            jsonrpc: "2.0",
            method,
            params
          });
        } catch (error) {
          console.error(
            `provider.sendAsync failed: ${error.stack || error.message || error}`
          );
        }
      }
      return null;
    }
  }
});

// node_modules/eth-json-rpc-filters/block-filter.js
var require_block_filter = __commonJS({
  "node_modules/eth-json-rpc-filters/block-filter.js"(exports, module) {
    var BaseFilter = require_base_filter();
    var getBlocksForRange = require_getBlocksForRange();
    var { incrementHexInt } = require_hexUtils();
    var BlockFilter = class extends BaseFilter {
      constructor({ provider, params }) {
        super();
        this.type = "block";
        this.provider = provider;
      }
      async update({ oldBlock, newBlock }) {
        const toBlock = newBlock;
        const fromBlock = incrementHexInt(oldBlock);
        const blockBodies = await getBlocksForRange({ provider: this.provider, fromBlock, toBlock });
        const blockHashes = blockBodies.map((block) => block.hash);
        this.addResults(blockHashes);
      }
    };
    module.exports = BlockFilter;
  }
});

// node_modules/eth-json-rpc-filters/tx-filter.js
var require_tx_filter = __commonJS({
  "node_modules/eth-json-rpc-filters/tx-filter.js"(exports, module) {
    var BaseFilter = require_base_filter();
    var getBlocksForRange = require_getBlocksForRange();
    var { incrementHexInt } = require_hexUtils();
    var TxFilter = class extends BaseFilter {
      constructor({ provider }) {
        super();
        this.type = "tx";
        this.provider = provider;
      }
      async update({ oldBlock }) {
        const toBlock = oldBlock;
        const fromBlock = incrementHexInt(oldBlock);
        const blocks = await getBlocksForRange({ provider: this.provider, fromBlock, toBlock });
        const blockTxHashes = [];
        for (const block of blocks) {
          blockTxHashes.push(...block.transactions);
        }
        this.addResults(blockTxHashes);
      }
    };
    module.exports = TxFilter;
  }
});

// node_modules/eth-json-rpc-filters/index.js
var require_eth_json_rpc_filters = __commonJS({
  "node_modules/eth-json-rpc-filters/index.js"(exports, module) {
    var Mutex = require_lib().Mutex;
    var { createAsyncMiddleware, createScaffoldMiddleware } = require_dist4();
    var LogFilter = require_log_filter();
    var BlockFilter = require_block_filter();
    var TxFilter = require_tx_filter();
    var { intToHex, hexToInt } = require_hexUtils();
    module.exports = createEthFilterMiddleware;
    function createEthFilterMiddleware({ blockTracker, provider }) {
      let filterIndex = 0;
      let filters = {};
      const mutex = new Mutex();
      const waitForFree = mutexMiddlewareWrapper({ mutex });
      const middleware = createScaffoldMiddleware({
        // install filters
        eth_newFilter: waitForFree(toFilterCreationMiddleware(newLogFilter)),
        eth_newBlockFilter: waitForFree(toFilterCreationMiddleware(newBlockFilter)),
        eth_newPendingTransactionFilter: waitForFree(toFilterCreationMiddleware(newPendingTransactionFilter)),
        // uninstall filters
        eth_uninstallFilter: waitForFree(toAsyncRpcMiddleware(uninstallFilterHandler)),
        // checking filter changes
        eth_getFilterChanges: waitForFree(toAsyncRpcMiddleware(getFilterChanges)),
        eth_getFilterLogs: waitForFree(toAsyncRpcMiddleware(getFilterLogs))
      });
      const filterUpdater = async ({ oldBlock, newBlock }) => {
        if (filters.length === 0)
          return;
        const releaseLock = await mutex.acquire();
        try {
          await Promise.all(objValues(filters).map(async (filter) => {
            try {
              await filter.update({ oldBlock, newBlock });
            } catch (err) {
              console.error(err);
            }
          }));
        } catch (err) {
          console.error(err);
        }
        releaseLock();
      };
      middleware.newLogFilter = newLogFilter;
      middleware.newBlockFilter = newBlockFilter;
      middleware.newPendingTransactionFilter = newPendingTransactionFilter;
      middleware.uninstallFilter = uninstallFilterHandler;
      middleware.getFilterChanges = getFilterChanges;
      middleware.getFilterLogs = getFilterLogs;
      middleware.destroy = () => {
        uninstallAllFilters();
      };
      return middleware;
      async function newLogFilter(params) {
        const filter = new LogFilter({ provider, params });
        const filterIndex2 = await installFilter(filter);
        return filter;
      }
      async function newBlockFilter() {
        const filter = new BlockFilter({ provider });
        const filterIndex2 = await installFilter(filter);
        return filter;
      }
      async function newPendingTransactionFilter() {
        const filter = new TxFilter({ provider });
        const filterIndex2 = await installFilter(filter);
        return filter;
      }
      async function getFilterChanges(filterIndexHex) {
        const filterIndex2 = hexToInt(filterIndexHex);
        const filter = filters[filterIndex2];
        if (!filter) {
          throw new Error(`No filter for index "${filterIndex2}"`);
        }
        const results = filter.getChangesAndClear();
        return results;
      }
      async function getFilterLogs(filterIndexHex) {
        const filterIndex2 = hexToInt(filterIndexHex);
        const filter = filters[filterIndex2];
        if (!filter) {
          throw new Error(`No filter for index "${filterIndex2}"`);
        }
        let results = [];
        if (filter.type === "log") {
          results = filter.getAllResults();
        }
        return results;
      }
      async function uninstallFilterHandler(filterIndexHex) {
        const filterIndex2 = hexToInt(filterIndexHex);
        const filter = filters[filterIndex2];
        const result = Boolean(filter);
        if (result) {
          await uninstallFilter(filterIndex2);
        }
        return result;
      }
      async function installFilter(filter) {
        const prevFilterCount = objValues(filters).length;
        const currentBlock = await blockTracker.getLatestBlock();
        await filter.initialize({ currentBlock });
        filterIndex++;
        filters[filterIndex] = filter;
        filter.id = filterIndex;
        filter.idHex = intToHex(filterIndex);
        const newFilterCount = objValues(filters).length;
        updateBlockTrackerSubs({ prevFilterCount, newFilterCount });
        return filterIndex;
      }
      async function uninstallFilter(filterIndex2) {
        const prevFilterCount = objValues(filters).length;
        delete filters[filterIndex2];
        const newFilterCount = objValues(filters).length;
        updateBlockTrackerSubs({ prevFilterCount, newFilterCount });
      }
      async function uninstallAllFilters() {
        const prevFilterCount = objValues(filters).length;
        filters = {};
        updateBlockTrackerSubs({ prevFilterCount, newFilterCount: 0 });
      }
      function updateBlockTrackerSubs({ prevFilterCount, newFilterCount }) {
        if (prevFilterCount === 0 && newFilterCount > 0) {
          blockTracker.on("sync", filterUpdater);
          return;
        }
        if (prevFilterCount > 0 && newFilterCount === 0) {
          blockTracker.removeListener("sync", filterUpdater);
          return;
        }
      }
    }
    function toFilterCreationMiddleware(createFilterFn) {
      return toAsyncRpcMiddleware(async (...args) => {
        const filter = await createFilterFn(...args);
        const result = intToHex(filter.id);
        return result;
      });
    }
    function toAsyncRpcMiddleware(asyncFn) {
      return createAsyncMiddleware(async (req, res) => {
        const result = await asyncFn.apply(null, req.params);
        res.result = result;
      });
    }
    function mutexMiddlewareWrapper({ mutex }) {
      return (middleware) => {
        return async (req, res, next, end) => {
          const releaseLock = await mutex.acquire();
          releaseLock();
          middleware(req, res, next, end);
        };
      };
    }
    function objValues(obj, fn) {
      const values = [];
      for (let key in obj) {
        values.push(obj[key]);
      }
      return values;
    }
  }
});

// node_modules/eth-json-rpc-filters/subscriptionManager.js
var require_subscriptionManager = __commonJS({
  "node_modules/eth-json-rpc-filters/subscriptionManager.js"(exports, module) {
    var SafeEventEmitter = require_cjs().default;
    var { createAsyncMiddleware, createScaffoldMiddleware } = require_dist4();
    var createFilterMiddleware = require_eth_json_rpc_filters();
    var { unsafeRandomBytes, incrementHexInt } = require_hexUtils();
    var getBlocksForRange = require_getBlocksForRange();
    module.exports = createSubscriptionMiddleware;
    function createSubscriptionMiddleware({ blockTracker, provider }) {
      const subscriptions = {};
      const filterManager = createFilterMiddleware({ blockTracker, provider });
      let isDestroyed = false;
      const events = new SafeEventEmitter();
      const middleware = createScaffoldMiddleware({
        eth_subscribe: createAsyncMiddleware(subscribe),
        eth_unsubscribe: createAsyncMiddleware(unsubscribe)
      });
      middleware.destroy = destroy;
      return { events, middleware };
      async function subscribe(req, res) {
        if (isDestroyed)
          throw new Error(
            "SubscriptionManager - attempting to use after destroying"
          );
        const subscriptionType = req.params[0];
        const subId = unsafeRandomBytes(16);
        let sub;
        switch (subscriptionType) {
          case "newHeads":
            sub = createSubNewHeads({ subId });
            break;
          case "logs":
            const filterParams = req.params[1];
            const filter = await filterManager.newLogFilter(filterParams);
            sub = createSubFromFilter({ subId, filter });
            break;
          default:
            throw new Error(`SubscriptionManager - unsupported subscription type "${subscriptionType}"`);
        }
        subscriptions[subId] = sub;
        res.result = subId;
        return;
        function createSubNewHeads({ subId: subId2 }) {
          const sub2 = {
            type: subscriptionType,
            destroy: async () => {
              blockTracker.removeListener("sync", sub2.update);
            },
            update: async ({ oldBlock, newBlock }) => {
              const toBlock = newBlock;
              const fromBlock = incrementHexInt(oldBlock);
              const rawBlocks = await getBlocksForRange({ provider, fromBlock, toBlock });
              const results = rawBlocks.map(normalizeBlock).filter((block) => block !== null);
              results.forEach((value) => {
                _emitSubscriptionResult(subId2, value);
              });
            }
          };
          blockTracker.on("sync", sub2.update);
          return sub2;
        }
        function createSubFromFilter({ subId: subId2, filter }) {
          filter.on("update", (result) => _emitSubscriptionResult(subId2, result));
          const sub2 = {
            type: subscriptionType,
            destroy: async () => {
              return await filterManager.uninstallFilter(filter.idHex);
            }
          };
          return sub2;
        }
      }
      async function unsubscribe(req, res) {
        if (isDestroyed)
          throw new Error(
            "SubscriptionManager - attempting to use after destroying"
          );
        const id = req.params[0];
        const subscription = subscriptions[id];
        if (!subscription) {
          res.result = false;
          return;
        }
        delete subscriptions[id];
        await subscription.destroy();
        res.result = true;
      }
      function _emitSubscriptionResult(filterIdHex, value) {
        events.emit("notification", {
          jsonrpc: "2.0",
          method: "eth_subscription",
          params: {
            subscription: filterIdHex,
            result: value
          }
        });
      }
      function destroy() {
        events.removeAllListeners();
        for (const id in subscriptions) {
          subscriptions[id].destroy();
          delete subscriptions[id];
        }
        isDestroyed = true;
      }
    }
    function normalizeBlock(block) {
      if (block === null || block === void 0) {
        return null;
      }
      return {
        hash: block.hash,
        parentHash: block.parentHash,
        sha3Uncles: block.sha3Uncles,
        miner: block.miner,
        stateRoot: block.stateRoot,
        transactionsRoot: block.transactionsRoot,
        receiptsRoot: block.receiptsRoot,
        logsBloom: block.logsBloom,
        difficulty: block.difficulty,
        number: block.number,
        gasLimit: block.gasLimit,
        gasUsed: block.gasUsed,
        nonce: block.nonce,
        mixHash: block.mixHash,
        timestamp: block.timestamp,
        extraData: block.extraData
      };
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/provider/SubscriptionManager.js
var require_SubscriptionManager = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/provider/SubscriptionManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionManager = void 0;
    var eth_block_tracker_1 = require_dist2();
    var createSubscriptionManager = require_subscriptionManager();
    var noop = () => {
    };
    var SubscriptionManager = class {
      constructor(provider) {
        const blockTracker = new eth_block_tracker_1.PollingBlockTracker({
          provider,
          pollingInterval: 15e3,
          setSkipCacheFlag: true
        });
        const { events, middleware } = createSubscriptionManager({
          blockTracker,
          provider
        });
        this.events = events;
        this.subscriptionMiddleware = middleware;
      }
      async handleRequest(request) {
        const result = {};
        await this.subscriptionMiddleware(request, result, noop, noop);
        return result;
      }
      destroy() {
        this.subscriptionMiddleware.destroy();
      }
    };
    exports.SubscriptionManager = SubscriptionManager;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/provider/CoinbaseWalletProvider.js
var require_CoinbaseWalletProvider = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/provider/CoinbaseWalletProvider.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoinbaseWalletProvider = void 0;
    var bn_js_1 = __importDefault2(require_bn());
    var eventemitter3_1 = require_eventemitter3();
    var error_1 = require_error();
    var util_1 = require_util();
    var MobileRelay_1 = require_MobileRelay();
    var RelayAbstract_1 = require_RelayAbstract();
    var Session_1 = require_Session();
    var Web3Response_1 = require_Web3Response();
    var eth_eip712_util_1 = __importDefault2(require_eth_eip712_util());
    var DiagnosticLogger_1 = require_DiagnosticLogger();
    var FilterPolyfill_1 = require_FilterPolyfill();
    var SubscriptionManager_1 = require_SubscriptionManager();
    var DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
    var DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
    var CoinbaseWalletProvider = class extends eventemitter3_1.EventEmitter {
      constructor(options) {
        var _a, _b;
        super();
        this._filterPolyfill = new FilterPolyfill_1.FilterPolyfill(this);
        this._subscriptionManager = new SubscriptionManager_1.SubscriptionManager(this);
        this._relay = null;
        this._addresses = [];
        this.hasMadeFirstChainChangedEmission = false;
        this.setProviderInfo = this.setProviderInfo.bind(this);
        this.updateProviderInfo = this.updateProviderInfo.bind(this);
        this.getChainId = this.getChainId.bind(this);
        this.setAppInfo = this.setAppInfo.bind(this);
        this.enable = this.enable.bind(this);
        this.close = this.close.bind(this);
        this.send = this.send.bind(this);
        this.sendAsync = this.sendAsync.bind(this);
        this.request = this.request.bind(this);
        this._setAddresses = this._setAddresses.bind(this);
        this.scanQRCode = this.scanQRCode.bind(this);
        this.genericRequest = this.genericRequest.bind(this);
        this._chainIdFromOpts = options.chainId;
        this._jsonRpcUrlFromOpts = options.jsonRpcUrl;
        this._overrideIsMetaMask = options.overrideIsMetaMask;
        this._relayProvider = options.relayProvider;
        this._storage = options.storage;
        this._relayEventManager = options.relayEventManager;
        this.diagnostic = options.diagnosticLogger;
        this.reloadOnDisconnect = true;
        this.isCoinbaseWallet = (_a = options.overrideIsCoinbaseWallet) !== null && _a !== void 0 ? _a : true;
        this.isCoinbaseBrowser = (_b = options.overrideIsCoinbaseBrowser) !== null && _b !== void 0 ? _b : false;
        this.qrUrl = options.qrUrl;
        const chainId = this.getChainId();
        const chainIdStr = (0, util_1.prepend0x)(chainId.toString(16));
        this.emit("connect", { chainIdStr });
        const cachedAddresses = this._storage.getItem(RelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY);
        if (cachedAddresses) {
          const addresses = cachedAddresses.split(" ");
          if (addresses[0] !== "") {
            this._addresses = addresses.map((address) => (0, util_1.ensureAddressString)(address));
            this.emit("accountsChanged", addresses);
          }
        }
        this._subscriptionManager.events.on("notification", (notification) => {
          this.emit("message", {
            type: notification.method,
            data: notification.params
          });
        });
        if (this._isAuthorized()) {
          void this.initializeRelay();
        }
        window.addEventListener("message", (event) => {
          var _a2;
          if (event.origin !== location.origin || event.source !== window) {
            return;
          }
          if (event.data.type !== "walletLinkMessage")
            return;
          if (event.data.data.action === "dappChainSwitched") {
            const _chainId = event.data.data.chainId;
            const jsonRpcUrl = (_a2 = event.data.data.jsonRpcUrl) !== null && _a2 !== void 0 ? _a2 : this.jsonRpcUrl;
            this.updateProviderInfo(jsonRpcUrl, Number(_chainId));
          }
        });
      }
      /** @deprecated Use `.request({ method: 'eth_accounts' })` instead. */
      get selectedAddress() {
        return this._addresses[0] || void 0;
      }
      /** @deprecated Use the chain ID. If you still need the network ID, use `.request({ method: 'net_version' })`. */
      get networkVersion() {
        return this.getChainId().toString(10);
      }
      /** @deprecated Use `.request({ method: 'eth_chainId' })` instead. */
      get chainId() {
        return (0, util_1.prepend0x)(this.getChainId().toString(16));
      }
      get isWalletLink() {
        return true;
      }
      /**
       * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
       * true for this method.
       */
      get isMetaMask() {
        return this._overrideIsMetaMask;
      }
      get host() {
        return this.jsonRpcUrl;
      }
      get connected() {
        return true;
      }
      isConnected() {
        return true;
      }
      get jsonRpcUrl() {
        var _a;
        return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : this._jsonRpcUrlFromOpts;
      }
      set jsonRpcUrl(value) {
        this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
      }
      disableReloadOnDisconnect() {
        this.reloadOnDisconnect = false;
      }
      setProviderInfo(jsonRpcUrl, chainId) {
        if (!this.isCoinbaseBrowser) {
          this._chainIdFromOpts = chainId;
          this._jsonRpcUrlFromOpts = jsonRpcUrl;
        }
        this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
      }
      updateProviderInfo(jsonRpcUrl, chainId) {
        this.jsonRpcUrl = jsonRpcUrl;
        const originalChainId = this.getChainId();
        this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
        const chainChanged = (0, util_1.ensureIntNumber)(chainId) !== originalChainId;
        if (chainChanged || !this.hasMadeFirstChainChangedEmission) {
          this.emit("chainChanged", this.getChainId());
          this.hasMadeFirstChainChangedEmission = true;
        }
      }
      async watchAsset(type2, address, symbol, decimals, image, chainId) {
        const relay = await this.initializeRelay();
        const result = await relay.watchAsset(type2, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString()).promise;
        if ((0, Web3Response_1.isErrorResponse)(result))
          return false;
        return !!result.result;
      }
      async addEthereumChain(chainId, rpcUrls, blockExplorerUrls, chainName, iconUrls, nativeCurrency) {
        var _a, _b;
        if ((0, util_1.ensureIntNumber)(chainId) === this.getChainId()) {
          return false;
        }
        const relay = await this.initializeRelay();
        const isWhitelistedNetworkOrStandalone = relay.inlineAddEthereumChain(chainId.toString());
        if (!this._isAuthorized() && !isWhitelistedNetworkOrStandalone) {
          await relay.requestEthereumAccounts().promise;
        }
        const res = await relay.addEthereumChain(chainId.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency).promise;
        if ((0, Web3Response_1.isErrorResponse)(res))
          return false;
        if (((_a = res.result) === null || _a === void 0 ? void 0 : _a.isApproved) === true) {
          this.updateProviderInfo(rpcUrls[0], chainId);
        }
        return ((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true;
      }
      async switchEthereumChain(chainId) {
        const relay = await this.initializeRelay();
        const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || void 0).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          if (!res.errorCode)
            return;
          if (res.errorCode === error_1.standardErrorCodes.provider.unsupportedChain) {
            throw error_1.standardErrors.provider.unsupportedChain();
          } else {
            throw error_1.standardErrors.provider.custom({
              message: res.errorMessage,
              code: res.errorCode
            });
          }
        }
        const switchResponse = res.result;
        if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
          this.updateProviderInfo(switchResponse.rpcUrl, chainId);
        }
      }
      setAppInfo(appName, appLogoUrl) {
        void this.initializeRelay().then((relay) => relay.setAppInfo(appName, appLogoUrl));
      }
      /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
      async enable() {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::enable",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : void 0
        });
        if (this._isAuthorized()) {
          return [...this._addresses];
        }
        return await this.send("eth_requestAccounts");
      }
      async close() {
        const relay = await this.initializeRelay();
        relay.resetAndReload();
      }
      send(requestOrMethod, callbackOrParams) {
        try {
          const result = this._send(requestOrMethod, callbackOrParams);
          if (result instanceof Promise) {
            return result.catch((error) => {
              throw (0, error_1.serializeError)(error, requestOrMethod);
            });
          }
        } catch (error) {
          throw (0, error_1.serializeError)(error, requestOrMethod);
        }
      }
      _send(requestOrMethod, callbackOrParams) {
        if (typeof requestOrMethod === "string") {
          const method = requestOrMethod;
          const params = Array.isArray(callbackOrParams) ? callbackOrParams : callbackOrParams !== void 0 ? [callbackOrParams] : [];
          const request = {
            jsonrpc: "2.0",
            id: 0,
            method,
            params
          };
          return this._sendRequestAsync(request).then((res) => res.result);
        }
        if (typeof callbackOrParams === "function") {
          const request = requestOrMethod;
          const callback = callbackOrParams;
          return this._sendAsync(request, callback);
        }
        if (Array.isArray(requestOrMethod)) {
          const requests = requestOrMethod;
          return requests.map((r4) => this._sendRequest(r4));
        }
        const req = requestOrMethod;
        return this._sendRequest(req);
      }
      async sendAsync(request, callback) {
        try {
          return this._sendAsync(request, callback).catch((error) => {
            throw (0, error_1.serializeError)(error, request);
          });
        } catch (error) {
          return Promise.reject((0, error_1.serializeError)(error, request));
        }
      }
      async _sendAsync(request, callback) {
        if (typeof callback !== "function") {
          throw new Error("callback is required");
        }
        if (Array.isArray(request)) {
          const arrayCb = callback;
          this._sendMultipleRequestsAsync(request).then((responses) => arrayCb(null, responses)).catch((err) => arrayCb(err, null));
          return;
        }
        const cb = callback;
        return this._sendRequestAsync(request).then((response) => cb(null, response)).catch((err) => cb(err, null));
      }
      async request(args) {
        try {
          return this._request(args).catch((error) => {
            throw (0, error_1.serializeError)(error, args.method);
          });
        } catch (error) {
          return Promise.reject((0, error_1.serializeError)(error, args.method));
        }
      }
      async _request(args) {
        if (!args || typeof args !== "object" || Array.isArray(args)) {
          throw error_1.standardErrors.rpc.invalidRequest({
            message: "Expected a single, non-array, object argument.",
            data: args
          });
        }
        const { method, params } = args;
        if (typeof method !== "string" || method.length === 0) {
          throw error_1.standardErrors.rpc.invalidRequest({
            message: "'args.method' must be a non-empty string.",
            data: args
          });
        }
        if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
          throw error_1.standardErrors.rpc.invalidRequest({
            message: "'args.params' must be an object or array if provided.",
            data: args
          });
        }
        const newParams = params === void 0 ? [] : params;
        const id = this._relayEventManager.makeRequestId();
        const result = await this._sendRequestAsync({
          method,
          params: newParams,
          jsonrpc: "2.0",
          id
        });
        return result.result;
      }
      async scanQRCode(match) {
        const relay = await this.initializeRelay();
        const res = await relay.scanQRCode((0, util_1.ensureRegExpString)(match)).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw (0, error_1.serializeError)(res.errorMessage, "scanQRCode");
        } else if (typeof res.result !== "string") {
          throw (0, error_1.serializeError)("result was not a string", "scanQRCode");
        }
        return res.result;
      }
      async genericRequest(data, action) {
        const relay = await this.initializeRelay();
        const res = await relay.genericRequest(data, action).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw (0, error_1.serializeError)(res.errorMessage, "generic");
        } else if (typeof res.result !== "string") {
          throw (0, error_1.serializeError)("result was not a string", "generic");
        }
        return res.result;
      }
      /**
       * @beta
       * This method is currently in beta. While it is available for use, please note that it is still under testing and may undergo significant changes.
       *
       * @remarks
       * IMPORTANT: Signature validation is not performed by this method. Users of this method are advised to perform their own signature validation.
       * Common web3 frontend libraries such as ethers.js and viem provide the `verifyMessage` utility function that can be used for signature validation.
       *
       * It combines `eth_requestAccounts` and "Sign-In with Ethereum" (EIP-4361) into a single call.
       * The returned account and signed message can be used to authenticate the user.
       *
       * @param {Object} params - An object with the following properties:
       * - `nonce` {string}: A unique string to prevent replay attacks.
       * - `statement` {string}: An optional human-readable ASCII assertion that the user will sign.
       * - `resources` {string[]}: An optional list of information the user wishes to have resolved as part of authentication by the relying party.
       *
       * @returns {Promise<ConnectAndSignInResponse>} A promise that resolves to an object with the following properties:
       * - `accounts` {string[]}: The Ethereum accounts of the user.
       * - `message` {string}: The overall message that the user signed. Hex encoded.
       * - `signature` {string}: The signature of the message, signed with the user's private key. Hex encoded.
       */
      async connectAndSignIn(params) {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::connectAndSignIn",
          sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : void 0
        });
        let res;
        try {
          const relay = await this.initializeRelay();
          if (!(relay instanceof MobileRelay_1.MobileRelay)) {
            throw new Error("connectAndSignIn is only supported on mobile");
          }
          res = await relay.connectAndSignIn(params).promise;
          if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
          }
        } catch (err) {
          if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
            throw error_1.standardErrors.provider.userRejectedRequest("User denied account authorization");
          }
          throw err;
        }
        if (!res.result) {
          throw new Error("accounts received is empty");
        }
        const { accounts } = res.result;
        this._setAddresses(accounts);
        if (!this.isCoinbaseBrowser) {
          await this.switchEthereumChain(this.getChainId());
        }
        return res.result;
      }
      async selectProvider(providerOptions) {
        const relay = await this.initializeRelay();
        const res = await relay.selectProvider(providerOptions).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw (0, error_1.serializeError)(res.errorMessage, "selectProvider");
        } else if (typeof res.result !== "string") {
          throw (0, error_1.serializeError)("result was not a string", "selectProvider");
        }
        return res.result;
      }
      supportsSubscriptions() {
        return false;
      }
      subscribe() {
        throw new Error("Subscriptions are not supported");
      }
      unsubscribe() {
        throw new Error("Subscriptions are not supported");
      }
      disconnect() {
        return true;
      }
      _sendRequest(request) {
        const response = {
          jsonrpc: "2.0",
          id: request.id
        };
        const { method } = request;
        response.result = this._handleSynchronousMethods(request);
        if (response.result === void 0) {
          throw new Error(`Coinbase Wallet does not support calling ${method} synchronously without a callback. Please provide a callback parameter to call ${method} asynchronously.`);
        }
        return response;
      }
      _setAddresses(addresses, _3) {
        if (!Array.isArray(addresses)) {
          throw new Error("addresses is not an array");
        }
        const newAddresses = addresses.map((address) => (0, util_1.ensureAddressString)(address));
        if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
          return;
        }
        this._addresses = newAddresses;
        this.emit("accountsChanged", this._addresses);
        this._storage.setItem(RelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
      }
      _sendRequestAsync(request) {
        return new Promise((resolve, reject) => {
          try {
            const syncResult = this._handleSynchronousMethods(request);
            if (syncResult !== void 0) {
              return resolve({
                jsonrpc: "2.0",
                id: request.id,
                result: syncResult
              });
            }
            const filterPromise = this._handleAsynchronousFilterMethods(request);
            if (filterPromise !== void 0) {
              filterPromise.then((res) => resolve(Object.assign(Object.assign({}, res), { id: request.id }))).catch((err) => reject(err));
              return;
            }
            const subscriptionPromise = this._handleSubscriptionMethods(request);
            if (subscriptionPromise !== void 0) {
              subscriptionPromise.then((res) => resolve({
                jsonrpc: "2.0",
                id: request.id,
                result: res.result
              })).catch((err) => reject(err));
              return;
            }
          } catch (err) {
            return reject(err);
          }
          this._handleAsynchronousMethods(request).then((res) => res && resolve(Object.assign(Object.assign({}, res), { id: request.id }))).catch((err) => reject(err));
        });
      }
      _sendMultipleRequestsAsync(requests) {
        return Promise.all(requests.map((r4) => this._sendRequestAsync(r4)));
      }
      _handleSynchronousMethods(request) {
        const { method } = request;
        const params = request.params || [];
        switch (method) {
          case "eth_accounts":
            return this._eth_accounts();
          case "eth_coinbase":
            return this._eth_coinbase();
          case "eth_uninstallFilter":
            return this._eth_uninstallFilter(params);
          case "net_version":
            return this._net_version();
          case "eth_chainId":
            return this._eth_chainId();
          default:
            return void 0;
        }
      }
      async _handleAsynchronousMethods(request) {
        const { method } = request;
        const params = request.params || [];
        switch (method) {
          case "eth_requestAccounts":
            return this._eth_requestAccounts();
          case "eth_sign":
            return this._eth_sign(params);
          case "eth_ecRecover":
            return this._eth_ecRecover(params);
          case "personal_sign":
            return this._personal_sign(params);
          case "personal_ecRecover":
            return this._personal_ecRecover(params);
          case "eth_signTransaction":
            return this._eth_signTransaction(params);
          case "eth_sendRawTransaction":
            return this._eth_sendRawTransaction(params);
          case "eth_sendTransaction":
            return this._eth_sendTransaction(params);
          case "eth_signTypedData_v1":
            return this._eth_signTypedData_v1(params);
          case "eth_signTypedData_v2":
            return this._throwUnsupportedMethodError();
          case "eth_signTypedData_v3":
            return this._eth_signTypedData_v3(params);
          case "eth_signTypedData_v4":
          case "eth_signTypedData":
            return this._eth_signTypedData_v4(params);
          case "cbWallet_arbitrary":
            return this._cbwallet_arbitrary(params);
          case "wallet_addEthereumChain":
            return this._wallet_addEthereumChain(params);
          case "wallet_switchEthereumChain":
            return this._wallet_switchEthereumChain(params);
          case "wallet_watchAsset":
            return this._wallet_watchAsset(params);
        }
        const relay = await this.initializeRelay();
        return relay.makeEthereumJSONRPCRequest(request, this.jsonRpcUrl).catch((err) => {
          var _a;
          if (err.code === error_1.standardErrorCodes.rpc.methodNotFound || err.code === error_1.standardErrorCodes.rpc.methodNotSupported) {
            (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.METHOD_NOT_IMPLEMENTED, {
              method: request.method,
              sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : void 0
            });
          }
          throw err;
        });
      }
      _handleAsynchronousFilterMethods(request) {
        const { method } = request;
        const params = request.params || [];
        switch (method) {
          case "eth_newFilter":
            return this._eth_newFilter(params);
          case "eth_newBlockFilter":
            return this._eth_newBlockFilter();
          case "eth_newPendingTransactionFilter":
            return this._eth_newPendingTransactionFilter();
          case "eth_getFilterChanges":
            return this._eth_getFilterChanges(params);
          case "eth_getFilterLogs":
            return this._eth_getFilterLogs(params);
        }
        return void 0;
      }
      _handleSubscriptionMethods(request) {
        switch (request.method) {
          case "eth_subscribe":
          case "eth_unsubscribe":
            return this._subscriptionManager.handleRequest(request);
        }
        return void 0;
      }
      _isKnownAddress(addressString) {
        try {
          const addressStr = (0, util_1.ensureAddressString)(addressString);
          const lowercaseAddresses = this._addresses.map((address) => (0, util_1.ensureAddressString)(address));
          return lowercaseAddresses.includes(addressStr);
        } catch (_a) {
        }
        return false;
      }
      _ensureKnownAddress(addressString) {
        var _a;
        if (!this._isKnownAddress(addressString)) {
          (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED);
          throw new Error("Unknown Ethereum address");
        }
      }
      _prepareTransactionParams(tx) {
        const fromAddress = tx.from ? (0, util_1.ensureAddressString)(tx.from) : this.selectedAddress;
        if (!fromAddress) {
          throw new Error("Ethereum address is unavailable");
        }
        this._ensureKnownAddress(fromAddress);
        const toAddress = tx.to ? (0, util_1.ensureAddressString)(tx.to) : null;
        const weiValue = tx.value != null ? (0, util_1.ensureBN)(tx.value) : new bn_js_1.default(0);
        const data = tx.data ? (0, util_1.ensureBuffer)(tx.data) : Buffer.alloc(0);
        const nonce = tx.nonce != null ? (0, util_1.ensureIntNumber)(tx.nonce) : null;
        const gasPriceInWei = tx.gasPrice != null ? (0, util_1.ensureBN)(tx.gasPrice) : null;
        const maxFeePerGas = tx.maxFeePerGas != null ? (0, util_1.ensureBN)(tx.maxFeePerGas) : null;
        const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? (0, util_1.ensureBN)(tx.maxPriorityFeePerGas) : null;
        const gasLimit = tx.gas != null ? (0, util_1.ensureBN)(tx.gas) : null;
        const chainId = tx.chainId ? (0, util_1.ensureIntNumber)(tx.chainId) : this.getChainId();
        return {
          fromAddress,
          toAddress,
          weiValue,
          data,
          nonce,
          gasPriceInWei,
          maxFeePerGas,
          maxPriorityFeePerGas,
          gasLimit,
          chainId
        };
      }
      _isAuthorized() {
        return this._addresses.length > 0;
      }
      _requireAuthorization() {
        if (!this._isAuthorized()) {
          throw error_1.standardErrors.provider.unauthorized({});
        }
      }
      _throwUnsupportedMethodError() {
        throw error_1.standardErrors.provider.unsupportedMethod({});
      }
      async _signEthereumMessage(message, address, addPrefix, typedDataJson) {
        this._ensureKnownAddress(address);
        try {
          const relay = await this.initializeRelay();
          const res = await relay.signEthereumMessage(message, address, addPrefix, typedDataJson).promise;
          if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
          }
          return { jsonrpc: "2.0", id: 0, result: res.result };
        } catch (err) {
          if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
            throw error_1.standardErrors.provider.userRejectedRequest("User denied message signature");
          }
          throw err;
        }
      }
      async _ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        const relay = await this.initializeRelay();
        const res = await relay.ethereumAddressFromSignedMessage(message, signature, addPrefix).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw new Error(res.errorMessage);
        }
        return { jsonrpc: "2.0", id: 0, result: res.result };
      }
      _eth_accounts() {
        return [...this._addresses];
      }
      _eth_coinbase() {
        return this.selectedAddress || null;
      }
      _net_version() {
        return this.getChainId().toString(10);
      }
      _eth_chainId() {
        return (0, util_1.hexStringFromIntNumber)(this.getChainId());
      }
      getChainId() {
        const chainIdStr = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
        if (!chainIdStr) {
          return (0, util_1.ensureIntNumber)(this._chainIdFromOpts);
        }
        const chainId = parseInt(chainIdStr, 10);
        return (0, util_1.ensureIntNumber)(chainId);
      }
      async _eth_requestAccounts() {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::_eth_requestAccounts",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : void 0
        });
        if (this._isAuthorized()) {
          return Promise.resolve({
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
          });
        }
        let res;
        try {
          const relay = await this.initializeRelay();
          res = await relay.requestEthereumAccounts().promise;
          if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
          }
        } catch (err) {
          if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
            throw error_1.standardErrors.provider.userRejectedRequest("User denied account authorization");
          }
          throw err;
        }
        if (!res.result) {
          throw new Error("accounts received is empty");
        }
        this._setAddresses(res.result);
        if (!this.isCoinbaseBrowser) {
          await this.switchEthereumChain(this.getChainId());
        }
        return { jsonrpc: "2.0", id: 0, result: this._addresses };
      }
      _eth_sign(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const message = (0, util_1.ensureBuffer)(params[1]);
        return this._signEthereumMessage(message, address, false);
      }
      _eth_ecRecover(params) {
        const message = (0, util_1.ensureBuffer)(params[0]);
        const signature = (0, util_1.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, false);
      }
      _personal_sign(params) {
        this._requireAuthorization();
        const message = (0, util_1.ensureBuffer)(params[0]);
        const address = (0, util_1.ensureAddressString)(params[1]);
        return this._signEthereumMessage(message, address, true);
      }
      _personal_ecRecover(params) {
        const message = (0, util_1.ensureBuffer)(params[0]);
        const signature = (0, util_1.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, true);
      }
      async _eth_signTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
          const relay = await this.initializeRelay();
          const res = await relay.signEthereumTransaction(tx).promise;
          if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
          }
          return { jsonrpc: "2.0", id: 0, result: res.result };
        } catch (err) {
          if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
            throw error_1.standardErrors.provider.userRejectedRequest("User denied transaction signature");
          }
          throw err;
        }
      }
      async _eth_sendRawTransaction(params) {
        const signedTransaction = (0, util_1.ensureBuffer)(params[0]);
        const relay = await this.initializeRelay();
        const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId()).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw new Error(res.errorMessage);
        }
        return { jsonrpc: "2.0", id: 0, result: res.result };
      }
      async _eth_sendTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
          const relay = await this.initializeRelay();
          const res = await relay.signAndSubmitEthereumTransaction(tx).promise;
          if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
          }
          return { jsonrpc: "2.0", id: 0, result: res.result };
        } catch (err) {
          if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
            throw error_1.standardErrors.provider.userRejectedRequest("User denied transaction signature");
          }
          throw err;
        }
      }
      async _eth_signTypedData_v1(params) {
        this._requireAuthorization();
        const typedData = (0, util_1.ensureParsedJSONObject)(params[0]);
        const address = (0, util_1.ensureAddressString)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedDataLegacy({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
      }
      async _eth_signTypedData_v3(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v3({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
      }
      async _eth_signTypedData_v4(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v4({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
      }
      /** @deprecated */
      async _cbwallet_arbitrary(params) {
        const action = params[0];
        const data = params[1];
        if (typeof data !== "string") {
          throw new Error("parameter must be a string");
        }
        if (typeof action !== "object" || action === null) {
          throw new Error("parameter must be an object");
        }
        const result = await this.genericRequest(action, data);
        return { jsonrpc: "2.0", id: 0, result };
      }
      async _wallet_addEthereumChain(params) {
        var _a, _b, _c, _d;
        const request = params[0];
        if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
          return {
            jsonrpc: "2.0",
            id: 0,
            error: { code: 2, message: `please pass in at least 1 rpcUrl` }
          };
        }
        if (!request.chainName || request.chainName.trim() === "") {
          throw error_1.standardErrors.rpc.invalidParams("chainName is a required field");
        }
        if (!request.nativeCurrency) {
          throw error_1.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
        }
        const chainIdNumber = parseInt(request.chainId, 16);
        const success = await this.addEthereumChain(chainIdNumber, (_b = request.rpcUrls) !== null && _b !== void 0 ? _b : [], (_c = request.blockExplorerUrls) !== null && _c !== void 0 ? _c : [], request.chainName, (_d = request.iconUrls) !== null && _d !== void 0 ? _d : [], request.nativeCurrency);
        if (success) {
          return { jsonrpc: "2.0", id: 0, result: null };
        }
        return {
          jsonrpc: "2.0",
          id: 0,
          error: { code: 2, message: `unable to add ethereum chain` }
        };
      }
      async _wallet_switchEthereumChain(params) {
        const request = params[0];
        await this.switchEthereumChain(parseInt(request.chainId, 16));
        return { jsonrpc: "2.0", id: 0, result: null };
      }
      async _wallet_watchAsset(params) {
        const request = Array.isArray(params) ? params[0] : params;
        if (!request.type) {
          throw error_1.standardErrors.rpc.invalidParams("Type is required");
        }
        if ((request === null || request === void 0 ? void 0 : request.type) !== "ERC20") {
          throw error_1.standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
        }
        if (!(request === null || request === void 0 ? void 0 : request.options)) {
          throw error_1.standardErrors.rpc.invalidParams("Options are required");
        }
        if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
          throw error_1.standardErrors.rpc.invalidParams("Address is required");
        }
        const chainId = this.getChainId();
        const { address, symbol, image, decimals } = request.options;
        const res = await this.watchAsset(request.type, address, symbol, decimals, image, chainId);
        return { jsonrpc: "2.0", id: 0, result: res };
      }
      _eth_uninstallFilter(params) {
        const filterId = (0, util_1.ensureHexString)(params[0]);
        return this._filterPolyfill.uninstallFilter(filterId);
      }
      async _eth_newFilter(params) {
        const param = params[0];
        const filterId = await this._filterPolyfill.newFilter(param);
        return { jsonrpc: "2.0", id: 0, result: filterId };
      }
      async _eth_newBlockFilter() {
        const filterId = await this._filterPolyfill.newBlockFilter();
        return { jsonrpc: "2.0", id: 0, result: filterId };
      }
      async _eth_newPendingTransactionFilter() {
        const filterId = await this._filterPolyfill.newPendingTransactionFilter();
        return { jsonrpc: "2.0", id: 0, result: filterId };
      }
      _eth_getFilterChanges(params) {
        const filterId = (0, util_1.ensureHexString)(params[0]);
        return this._filterPolyfill.getFilterChanges(filterId);
      }
      _eth_getFilterLogs(params) {
        const filterId = (0, util_1.ensureHexString)(params[0]);
        return this._filterPolyfill.getFilterLogs(filterId);
      }
      initializeRelay() {
        if (this._relay) {
          return Promise.resolve(this._relay);
        }
        return this._relayProvider().then((relay) => {
          relay.setAccountsCallback((accounts, isDisconnect) => this._setAddresses(accounts, isDisconnect));
          relay.setChainCallback((chainId, jsonRpcUrl) => {
            this.updateProviderInfo(jsonRpcUrl, parseInt(chainId, 10));
          });
          relay.setDappDefaultChainCallback(this._chainIdFromOpts);
          this._relay = relay;
          return relay;
        });
      }
    };
    exports.CoinbaseWalletProvider = CoinbaseWalletProvider;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/relay/RelayEventManager.js
var require_RelayEventManager = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/relay/RelayEventManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RelayEventManager = void 0;
    var util_1 = require_util();
    var RelayEventManager = class {
      constructor() {
        this._nextRequestId = 0;
        this.callbacks = /* @__PURE__ */ new Map();
      }
      makeRequestId() {
        this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
        const id = this._nextRequestId;
        const idStr = (0, util_1.prepend0x)(id.toString(16));
        const callback = this.callbacks.get(idStr);
        if (callback) {
          this.callbacks.delete(idStr);
        }
        return id;
      }
    };
    exports.RelayEventManager = RelayEventManager;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletSDK.js
var require_CoinbaseWalletSDK = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletSDK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoinbaseWalletSDK = void 0;
    var wallet_logo_1 = require_wallet_logo();
    var constants_1 = require_constants();
    var util_1 = require_util();
    var ScopedLocalStorage_1 = require_ScopedLocalStorage();
    var CoinbaseWalletProvider_1 = require_CoinbaseWalletProvider();
    var MobileRelay_1 = require_MobileRelay();
    var MobileRelayUI_1 = require_MobileRelayUI();
    var RelayEventManager_1 = require_RelayEventManager();
    var WalletLinkRelayUI_1 = require_WalletLinkRelayUI();
    var WalletLinkRelay_1 = require_WalletLinkRelay();
    var version_1 = require_version();
    var CoinbaseWalletSDK = class _CoinbaseWalletSDK {
      /**
       * Constructor
       * @param options Coinbase Wallet SDK constructor options
       */
      constructor(options) {
        var _a, _b, _c;
        this._appName = "";
        this._appLogoUrl = null;
        this._relay = null;
        this._relayEventManager = null;
        const linkAPIUrl = options.linkAPIUrl || constants_1.LINK_API_URL;
        if (typeof options.overrideIsMetaMask === "undefined") {
          this._overrideIsMetaMask = false;
        } else {
          this._overrideIsMetaMask = options.overrideIsMetaMask;
        }
        this._overrideIsCoinbaseWallet = (_a = options.overrideIsCoinbaseWallet) !== null && _a !== void 0 ? _a : true;
        this._overrideIsCoinbaseBrowser = (_b = options.overrideIsCoinbaseBrowser) !== null && _b !== void 0 ? _b : false;
        this._diagnosticLogger = options.diagnosticLogger;
        this._reloadOnDisconnect = (_c = options.reloadOnDisconnect) !== null && _c !== void 0 ? _c : true;
        const url = new URL(linkAPIUrl);
        const origin = `${url.protocol}//${url.host}`;
        this._storage = new ScopedLocalStorage_1.ScopedLocalStorage(`-walletlink:${origin}`);
        this._storage.setItem("version", _CoinbaseWalletSDK.VERSION);
        if (this.walletExtension || this.coinbaseBrowser) {
          return;
        }
        this._relayEventManager = new RelayEventManager_1.RelayEventManager();
        const isMobile = (0, util_1.isMobileWeb)();
        const uiConstructor = options.uiConstructor || ((opts) => isMobile ? new MobileRelayUI_1.MobileRelayUI(opts) : new WalletLinkRelayUI_1.WalletLinkRelayUI(opts));
        const relayOption = {
          linkAPIUrl,
          version: version_1.LIB_VERSION,
          darkMode: !!options.darkMode,
          uiConstructor,
          storage: this._storage,
          relayEventManager: this._relayEventManager,
          diagnosticLogger: this._diagnosticLogger,
          reloadOnDisconnect: this._reloadOnDisconnect,
          enableMobileWalletLink: options.enableMobileWalletLink
        };
        this._relay = isMobile ? new MobileRelay_1.MobileRelay(relayOption) : new WalletLinkRelay_1.WalletLinkRelay(relayOption);
        this.setAppInfo(options.appName, options.appLogoUrl);
        if (options.headlessMode)
          return;
        this._relay.attachUI();
      }
      /**
       * Create a Web3 Provider object
       * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
       * @param chainId Ethereum Chain ID (Default: 1)
       * @returns A Web3 Provider
       */
      makeWeb3Provider(jsonRpcUrl = "", chainId = 1) {
        const extension = this.walletExtension;
        if (extension) {
          if (!this.isCipherProvider(extension)) {
            extension.setProviderInfo(jsonRpcUrl, chainId);
          }
          if (this._reloadOnDisconnect === false && typeof extension.disableReloadOnDisconnect === "function")
            extension.disableReloadOnDisconnect();
          return extension;
        }
        const dappBrowser = this.coinbaseBrowser;
        if (dappBrowser) {
          return dappBrowser;
        }
        const relay = this._relay;
        if (!relay || !this._relayEventManager || !this._storage) {
          throw new Error("Relay not initialized, should never happen");
        }
        if (!jsonRpcUrl)
          relay.setConnectDisabled(true);
        return new CoinbaseWalletProvider_1.CoinbaseWalletProvider({
          relayProvider: () => Promise.resolve(relay),
          relayEventManager: this._relayEventManager,
          storage: this._storage,
          jsonRpcUrl,
          chainId,
          qrUrl: this.getQrUrl(),
          diagnosticLogger: this._diagnosticLogger,
          overrideIsMetaMask: this._overrideIsMetaMask,
          overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
          overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
        });
      }
      /**
       * Set application information
       * @param appName Application name
       * @param appLogoUrl Application logo image URL
       */
      setAppInfo(appName, appLogoUrl) {
        var _a;
        this._appName = appName || "DApp";
        this._appLogoUrl = appLogoUrl || (0, util_1.getFavicon)();
        const extension = this.walletExtension;
        if (extension) {
          if (!this.isCipherProvider(extension)) {
            extension.setAppInfo(this._appName, this._appLogoUrl);
          }
        } else {
          (_a = this._relay) === null || _a === void 0 ? void 0 : _a.setAppInfo(this._appName, this._appLogoUrl);
        }
      }
      /**
       * Disconnect. After disconnecting, this will reload the web page to ensure
       * all potential stale state is cleared.
       */
      disconnect() {
        var _a;
        const extension = this === null || this === void 0 ? void 0 : this.walletExtension;
        if (extension) {
          void extension.close();
        } else {
          (_a = this._relay) === null || _a === void 0 ? void 0 : _a.resetAndReload();
        }
      }
      /**
       * Return QR URL for mobile wallet connection, will return null if extension is installed
       */
      getQrUrl() {
        var _a, _b;
        return (_b = (_a = this._relay) === null || _a === void 0 ? void 0 : _a.getQRCodeUrl()) !== null && _b !== void 0 ? _b : null;
      }
      /**
       * Official Coinbase Wallet logo for developers to use on their frontend
       * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
       * @param width Width of the logo (Optional)
       * @returns SVG Data URI
       */
      getCoinbaseWalletLogo(type2, width = 240) {
        return (0, wallet_logo_1.walletLogo)(type2, width);
      }
      get walletExtension() {
        var _a;
        return (_a = window.coinbaseWalletExtension) !== null && _a !== void 0 ? _a : window.walletLinkExtension;
      }
      get coinbaseBrowser() {
        var _a, _b;
        try {
          const ethereum = (_a = window.ethereum) !== null && _a !== void 0 ? _a : (_b = window.top) === null || _b === void 0 ? void 0 : _b.ethereum;
          if (!ethereum) {
            return void 0;
          }
          if ("isCoinbaseBrowser" in ethereum && ethereum.isCoinbaseBrowser) {
            return ethereum;
          }
          return void 0;
        } catch (e3) {
          return void 0;
        }
      }
      isCipherProvider(provider) {
        return typeof provider.isCipher === "boolean" && provider.isCipher;
      }
    };
    exports.CoinbaseWalletSDK = CoinbaseWalletSDK;
    CoinbaseWalletSDK.VERSION = version_1.LIB_VERSION;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/index.js
var require_dist5 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoinbaseWalletProvider = exports.CoinbaseWalletSDK = void 0;
    var CoinbaseWalletSDK_1 = require_CoinbaseWalletSDK();
    var CoinbaseWalletProvider_1 = require_CoinbaseWalletProvider();
    var CoinbaseWalletSDK_2 = require_CoinbaseWalletSDK();
    Object.defineProperty(exports, "CoinbaseWalletSDK", { enumerable: true, get: function() {
      return CoinbaseWalletSDK_2.CoinbaseWalletSDK;
    } });
    var CoinbaseWalletProvider_2 = require_CoinbaseWalletProvider();
    Object.defineProperty(exports, "CoinbaseWalletProvider", { enumerable: true, get: function() {
      return CoinbaseWalletProvider_2.CoinbaseWalletProvider;
    } });
    exports.default = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
    if (typeof window !== "undefined") {
      window.CoinbaseWalletSDK = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
      window.CoinbaseWalletProvider = CoinbaseWalletProvider_1.CoinbaseWalletProvider;
      window.WalletLink = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
      window.WalletLinkProvider = CoinbaseWalletProvider_1.CoinbaseWalletProvider;
    }
  }
});

export {
  require_buffer2 as require_buffer,
  require_dist5 as require_dist
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=chunk-MZY7V62A.js.map
