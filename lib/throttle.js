"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.funcThrottle = exports.default = void 0;
var _DELAY = 500,
  _default = function(t, u) {
    var r = !0;
    return function(e) {
      r && (r = !1, setTimeout(function() {
        r = !0
      }, u), t(e))
    }
  };
exports.default = _default;
var funcThrottle = function(e, t, u, r, o) {
  u = u || null, r = r || _DELAY, o = o || 0, clearTimeout(e.timeoutId), o ? (e._cur = Date.now(), e._preExecute || (e._preExecute = e._cur), e._cur - e._preExecute > o ? (e.call(u, t), e._preExecute = e._cur) : e.timeoutId = setTimeout(function() {
    return e.call(u, t)
  }, r)) : e.timeoutId = setTimeout(function() {
    return e.call(u, t)
  }, r)
};
exports.funcThrottle = funcThrottle;
