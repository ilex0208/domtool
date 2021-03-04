"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof")),
  isArray = function(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
  };

function classNames() {
  for (var e = "", r = 0; r < arguments.length; r++) {
    var t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
    if (t) {
      var a = (0, _typeof2.default)(t);
      if ("string" === a || "number" === a) e += " ".concat(t);
      else if (isArray(t)) e += " ".concat(classNames.apply(null, t));
      else if ("object" === a)
        for (var s in t) t.hasOwnProperty(s) && t[s] && (e += " ".concat(s))
    }
  }
  return e.substr(1)
}
var _default = classNames;
exports.default = classNames, module.exports = exports.default;
