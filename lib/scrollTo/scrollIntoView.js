"use strict";

function scrollIntoView(t, l, o) {
  o = o || {}, 9 === l.nodeType && (l = util.getWindow(l));
  var e = o.allowHorizontalScroll,
    i = o.onlyScrollIfNeeded,
    f = o.alignWithTop,
    p = o.alignWithLeft,
    r = o.offsetTop || 0,
    s = o.offsetLeft || 0,
    u = o.offsetBottom || 0,
    d = o.offsetRight || 0;
  e = void 0 === e || e;
  var c = util.isWindow(l),
    v = util.offset(t),
    a = util.outerHeight(t),
    h = util.outerWidth(t),
    n = void 0,
    T = void 0,
    L = void 0,
    W = void 0,
    g = void 0,
    w = void 0,
    b = void 0,
    F = void 0,
    m = void 0,
    H = void 0;
  c ? (b = l, H = util.height(b), m = util.width(b), F = {
    left: util.scrollLeft(b),
    top: util.scrollTop(b)
  }, g = {
    left: v.left - F.left - s,
    top: v.top - F.top - r
  }, w = {
    left: v.left + h - (F.left + m) + d,
    top: v.top + a - (F.top + H) + u
  }, W = F) : (n = util.offset(l), T = l.clientHeight, L = l.clientWidth, W = {
    left: l.scrollLeft,
    top: l.scrollTop
  }, g = {
    left: v.left - (n.left + (parseFloat(util.css(l, "borderLeftWidth")) || 0)) - s,
    top: v.top - (n.top + (parseFloat(util.css(l, "borderTopWidth")) || 0)) - r
  }, w = {
    left: v.left + h - (n.left + L + (parseFloat(util.css(l, "borderRightWidth")) || 0)) + d,
    top: v.top + a - (n.top + T + (parseFloat(util.css(l, "borderBottomWidth")) || 0)) + u
  }), g.top < 0 || w.top > 0 ? !0 === f ? util.scrollTop(l, W.top + g.top) : !1 === f ? util.scrollTop(l, W.top + w.top) : g.top < 0 ? util.scrollTop(l, W.top + g.top) : util.scrollTop(l, W.top + w.top) : i || (f = void 0 === f || !!f, f ? util.scrollTop(l, W.top + g.top) : util.scrollTop(l, W.top + w.top)), e && (g.left < 0 || w.left > 0 ? !0 === p ? util.scrollLeft(l, W.left + g.left) : !1 === p ? util.scrollLeft(l, W.left + w.left) : g.left < 0 ? util.scrollLeft(l, W.left + g.left) : util.scrollLeft(l, W.left + w.left) : i || (p = void 0 === p || !!p, p ? util.scrollLeft(l, W.left + g.left) : util.scrollLeft(l, W.left + w.left)))
}
var util = require("./util");
module.exports = scrollIntoView;
