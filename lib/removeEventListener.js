"use strict";

function _default(e, t, n) {
  null != e && void 0 !== e && (e.removeEventListenerListener ? e.removeEventListenerListener(t, n, !1) : e.detachEvent ? e.detachEvent("on".concat(t), n) : e["on".concat(t)] = null)
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default, module.exports = exports.default;
