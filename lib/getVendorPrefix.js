"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function() {
  if (cssVendorPrefix) return cssVendorPrefix;
  var e = window.getComputedStyle(document.documentElement, ""),
    r = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
  return cssVendorPrefix = "-" + r + "-"
};
var cssVendorPrefix = void 0;
module.exports = exports.default;
