"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e, r) {
  for (var t = Object(e), o = Object.prototype.hasOwnProperty, a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    if (null != n) {
      var u = Object(n);
      for (var l in u) o.call(u, l) && (t[l] = u[l])
    }
  }
  var p = {};
  for (var d in t) p[(0, _getVendorPropertyName2.default)(d)] = t[d];
  return p
};
var _getVendorPropertyName = require("./getVendorPropertyName"),
  _getVendorPropertyName2 = _interopRequireDefault(_getVendorPropertyName);
module.exports = exports.default;
