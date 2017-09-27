"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e, s) {
  return e.classList ? e.classList.contains(s) : (" " + e.className + " ").indexOf(" " + s + " ") > -1
}, module.exports = exports.default;
