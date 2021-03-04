"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default;
var insertRule = require("./insertRule"),
  vendorPrefix = require("./getVendorPrefix")(),
  index = 0;

function _default(e, r) {
  var t, r = r || "anim_".concat(++index).concat(+new Date),
    n = "@".concat(vendorPrefix, "keyframes ").concat(r, " {");
  for (t in e) {
    for (var o in n += "".concat(t, " {"), e[t]) {
      var a = ":".concat(e[t][o], ";");
      n += vendorPrefix + o + a, n += o + a
    }
    n += "}"
  }
  return insertRule(n += "}"), r
}
module.exports = exports.default;
