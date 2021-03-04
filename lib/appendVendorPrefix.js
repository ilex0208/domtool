"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default;
var _getVendorPropertyName = _interopRequireDefault(require("./getVendorPropertyName"));

function _default(e, r) {
  for (var t = Object(e), o = Object.prototype.hasOwnProperty, a = 1; a < arguments.length; a++) {
    var u = arguments[a];
    if (null != u) {
      var l, n = Object(u);
      for (l in n) o.call(n, l) && (t[l] = n[l])
    }
  }
  var i, p = {};
  for (i in t) p[(0, _getVendorPropertyName.default)(i)] = t[i];
  return p
}
module.exports = exports.default;
