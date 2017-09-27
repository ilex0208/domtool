"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e, r) {
  var i = void 0;
  if (e in builtinStyle) return e;
  var t = e.charAt(0).toUpperCase() + e.substr(1);
  if (domVendorPrefix) {
    if ((i = domVendorPrefix + t) in builtinStyle) return i
  } else
    for (var o = 0; o < prefixes.length; ++o)
      if ((i = prefixes[o] + t) in builtinStyle) return domVendorPrefix = prefixes[o], i;
  return r ? void 0 : e
};
var builtinStyle = require("./builtinStyle"),
  prefixes = ["Moz", "Webkit", "O", "ms"],
  domVendorPrefix = void 0;
module.exports = exports.default;
