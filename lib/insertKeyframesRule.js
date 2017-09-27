"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e) {
  var r = "anim_" + ++index + +new Date,
    i = "@" + vendorPrefix + "keyframes " + r + " {";
  for (var n in e) {
    i += n + " {";
    for (var t in e[n]) {
      var o = ":" + e[n][t] + ";";
      i += vendorPrefix + t + o, i += t + o
    }
    i += "}"
  }
  return i += "}", insertRule(i), r
};
var insertRule = require("./insertRule"),
  vendorPrefix = require("./getVendorPrefix")(),
  index = 0;
module.exports = exports.default;
