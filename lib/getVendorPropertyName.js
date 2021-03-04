"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default;
var domVendorPrefix, builtinStyle = require("./builtinStyle"),
  prefixes = ["Moz", "Webkit", "O", "ms"];

function _default(e, r) {
  var t;
  if (e in builtinStyle) return e;
  var i = e.charAt(0).toUpperCase() + e.substr(1);
  if (domVendorPrefix) {
    if ((t = domVendorPrefix + i) in builtinStyle) return t
  } else
    for (var n = 0; n < prefixes.length; ++n)
      if ((t = prefixes[n] + i) in builtinStyle) return domVendorPrefix = prefixes[n], t;
  return r ? void 0 : e
}
module.exports = exports.default;
