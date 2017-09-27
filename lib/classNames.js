"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  },
  _arguments = arguments,
  isArray = function(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  },
  classNames = function t() {
    for (var e = "", r = 0; r < _arguments.length; r++) {
      var o = _arguments[r];
      if (o) {
        var n = void 0 === o ? "undefined" : _typeof(o);
        if ("string" === n || "number" === n) e += " " + o;
        else if (isArray(o)) e += " " + t.apply(null, o);
        else if ("object" === n)
          for (var s in o) o.hasOwnProperty(s) && o[s] && (e += " " + s)
      }
    }
    return e.substr(1)
  };
exports.default = classNames, module.exports = exports.default;
