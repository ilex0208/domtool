"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e, t) {
  var n = function e(n) {
    if (supportTransitions) {
      if (n.target != this) return;
      this.removeEventListener(transEndEventName, e)
    }
    t && "function" == typeof t && t.call(this)
  };
  supportTransitions ? e.addEventListener(transEndEventName, n) : n()
};
var _getVendorPropertyName = require("./getVendorPropertyName"),
  _getVendorPropertyName2 = _interopRequireDefault(_getVendorPropertyName),
  transEndEventNames = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd",
    transition: "transitionend"
  },
  transEventName = (0, _getVendorPropertyName2.default)("transition", !0),
  transEndEventName = transEndEventNames[transEventName],
  supportTransitions = !!transEventName;
module.exports = exports.default;
