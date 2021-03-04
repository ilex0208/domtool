"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default;
var _hasClass = _interopRequireDefault(require("./hasClass"));

function _default(e, a) {
  return e.classList ? e.classList.add(a) : (0, _hasClass.default)(e, a) || (e.className = "".concat(e.className, " ").concat(a)), e
}
module.exports = exports.default;
