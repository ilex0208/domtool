"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e, t, n) {
  null != e && void 0 !== e && (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n)
}, module.exports = exports.default;
