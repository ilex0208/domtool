"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e, s) {
  return e.classList ? e.classList.add(s) : (0, _hasClass2.default)(e, s) || (e.className = e.className + " " + s), e
};
var _hasClass = require("./hasClass"),
  _hasClass2 = _interopRequireDefault(_hasClass);
module.exports = exports.default;
