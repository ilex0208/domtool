"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = _default;
var win = "undefined" != typeof window && window,
  doc = "undefined" != typeof document && document,
  docElem = doc && doc.documentElement;

function viewportW() {
  var e = docElem.clientWidth,
    t = win.innerWidth;
  return e < t ? t : e
}

function viewportH() {
  var e = docElem.clientHeight,
    t = win.innerHeight;
  return e < t ? t : e
}

function calibrate(e, t) {
  var n = {};
  return t = +t || 0, n.width = (n.right = e.right + t) - (n.left = e.left - t), n.height = (n.bottom = e.bottom + t) - (n.top = e.top - t), n
}

function rectangle(e, t) {
  return !(!(e = e && !e.nodeType ? e[0] : e) || 1 !== e.nodeType) && calibrate(e.getBoundingClientRect(), t)
}

function _default(e, t) {
  t = rectangle(e, t);
  return !!t && 0 <= t.bottom && 0 <= t.right && t.top <= viewportH() && t.left <= viewportW()
}
module.exports = exports.default;
