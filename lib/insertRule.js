"use strict";
var extraSheet;

function _default(e) {
  extraSheet || (extraSheet = document.createElement("style"), document.getElementsByTagName("head")[0].appendChild(extraSheet), extraSheet = extraSheet.sheet || extraSheet.styleSheet);
  var t = (extraSheet.cssRules || extraSheet.rules).length;
  return extraSheet.insertRule(e, t), extraSheet
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default, module.exports = exports.default;
