"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default;
var _getVendorPropertyName = _interopRequireDefault(require("./getVendorPropertyName")),
  transEndEventNames = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd",
    transition: "transitionend"
  },
  transEventName = (0, _getVendorPropertyName.default)("transition", !0),
  transEndEventName = transEndEventNames[transEventName],
  supportTransitions = !!transEventName;

function _default(e, t) {
  function n(e) {
    if (supportTransitions) {
      if (e.target != this) return;
      this.removeEventListener(transEndEventName, n)
    }
    t && "function" == typeof t && t.call(this)
  }
  supportTransitions ? e.addEventListener(transEndEventName, n) : n()
}
module.exports = exports.default;
