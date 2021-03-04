"use strict";
var cssVendorPrefix;

function _default() {
  if (cssVendorPrefix) return cssVendorPrefix;
  var e = window.getComputedStyle(document.documentElement, ""),
    e = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
  return cssVendorPrefix = "-".concat(e, "-")
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default, module.exports = exports.default;
