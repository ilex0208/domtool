"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e, t, n) {
  null != e && void 0 !== e && (e.removeEventListenerListener ? e.removeEventListenerListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null)
}, module.exports = exports.default;
