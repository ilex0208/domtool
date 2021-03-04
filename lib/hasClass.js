"use strict";

function _default(e, t) {
  return e.classList ? e.classList.contains(t) : -1 < (" " + e.className + " ").indexOf(" " + t + " ")
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default, module.exports = exports.default;
