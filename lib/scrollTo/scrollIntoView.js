"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var _util = _interopRequireDefault(require("./util"));

function scrollIntoView(t, l, e) {
  e = e || {}, 9 === l.nodeType && (l = _util.default.getWindow(l));
  var o, f, u, i, r, d, p = e.allowHorizontalScroll,
    a = e.onlyScrollIfNeeded,
    s = e.alignWithTop,
    _ = e.alignWithLeft,
    c = e.offsetTop || 0,
    n = e.offsetLeft || 0,
    h = e.offsetBottom || 0,
    T = e.offsetRight || 0,
    p = void 0 === p || p,
    W = _util.default.isWindow(l),
    v = _util.default.offset(t),
    e = _util.default.outerHeight(t),
    t = _util.default.outerWidth(t);
  W ? (u = l, d = _util.default.height(u), r = _util.default.width(u), i = {
    left: _util.default.scrollLeft(u),
    top: _util.default.scrollTop(u)
  }, o = {
    left: v.left - i.left - n,
    top: v.top - i.top - c
  }, f = {
    left: v.left + t - (i.left + r) + T,
    top: v.top + e - (i.top + d) + h
  }, u = i) : (r = _util.default.offset(l), d = l.clientHeight, i = l.clientWidth, u = {
    left: l.scrollLeft,
    top: l.scrollTop
  }, o = {
    left: v.left - (r.left + (parseFloat(_util.default.css(l, "borderLeftWidth")) || 0)) - n,
    top: v.top - (r.top + (parseFloat(_util.default.css(l, "borderTopWidth")) || 0)) - c
  }, f = {
    left: v.left + t - (r.left + i + (parseFloat(_util.default.css(l, "borderRightWidth")) || 0)) + T,
    top: v.top + e - (r.top + d + (parseFloat(_util.default.css(l, "borderBottomWidth")) || 0)) + h
  }), o.top < 0 || 0 < f.top ? !0 === s || !1 !== s && o.top < 0 ? _util.default.scrollTop(l, u.top + o.top) : _util.default.scrollTop(l, u.top + f.top) : a || ((s = void 0 === s || !!s) ? _util.default.scrollTop(l, u.top + o.top) : _util.default.scrollTop(l, u.top + f.top)), p && (o.left < 0 || 0 < f.left ? !0 === _ || !1 !== _ && o.left < 0 ? _util.default.scrollLeft(l, u.left + o.left) : _util.default.scrollLeft(l, u.left + f.left) : a || ((_ = void 0 === _ || !!_) ? _util.default.scrollLeft(l, u.left + o.left) : _util.default.scrollLeft(l, u.left + f.left)))
}
var _default = scrollIntoView;
exports.default = scrollIntoView, module.exports = exports.default;
