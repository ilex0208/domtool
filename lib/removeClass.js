"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default;
var _hasClass = _interopRequireDefault(require("./hasClass"));

function _default(e, a) {
  return (0, _hasClass.default)(a) && (e.classList ? e.classList.remove(a) : e.className = " ".concat(e.className, " ").replace(" ".concat(a, " "), " ").trim()), e
}
module.exports = exports.default;
