"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e, r) {
  var i = r || "anim_" + ++index + +new Date,
    n = "@" + vendorPrefix + "keyframes " + i + " {";
  for (var t in e) {
    n += t + " {";
    for (var o in e[t]) {
      var u = ":" + e[t][o] + ";";
      n += vendorPrefix + o + u, n += o + u
    }
    n += "}"
  }
  return n += "}", insertRule(n), i
};
var insertRule = require("./insertRule"),
  vendorPrefix = require("./getVendorPrefix")(),
  index = 0;
module.exports = exports.default;
