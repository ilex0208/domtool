"use strict";

function getClientPosition(t) {
  var e = void 0,
    o = void 0,
    r = void 0,
    i = t.ownerDocument,
    n = i.body,
    l = i && i.documentElement;
  return e = t.getBoundingClientRect(), o = e.left, r = e.top, o -= l.clientLeft || n.clientLeft || 0, r -= l.clientTop || n.clientTop || 0, {
    left: o,
    top: r
  }
}

function getScroll(t, e) {
  var o = t["page" + (e ? "Y" : "X") + "Offset"],
    r = "scroll" + (e ? "Top" : "Left");
  if ("number" != typeof o) {
    var i = t.document;
    o = i.documentElement[r], "number" != typeof o && (o = i.body[r])
  }
  return o
}

function getScrollLeft(t) {
  return getScroll(t)
}

function getScrollTop(t) {
  return getScroll(t, !0)
}

function getOffset(t) {
  var e = getClientPosition(t),
    o = t.ownerDocument,
    r = o.defaultView || o.parentWindow;
  return e.left += getScrollLeft(r), e.top += getScrollTop(r), e
}

function _getComputedStyle(t, e, o) {
  var r = "",
    i = t.ownerDocument,
    n = o || i.defaultView.getComputedStyle(t, null);
  return n && (r = n.getPropertyValue(e) || n[e]), r
}

function _getComputedStyleIE(t, e) {
  var o = t[CURRENT_STYLE] && t[CURRENT_STYLE][e];
  if (_RE_NUM_NO_PX.test(o) && !RE_POS.test(e)) {
    var r = t.style,
      i = r[LEFT],
      n = t[RUNTIME_STYLE][LEFT];
    t[RUNTIME_STYLE][LEFT] = t[CURRENT_STYLE][LEFT], r[LEFT] = "fontSize" === e ? "1em" : o || 0, o = r.pixelLeft + PX, r[LEFT] = i, t[RUNTIME_STYLE][LEFT] = n
  }
  return "" === o ? "auto" : o
}

function each(t, e) {
  for (var o = 0; o < t.length; o++) e(t[o])
}

function isBorderBoxFn(t) {
  return "border-box" === getComputedStyleX(t, "boxSizing")
}

function swap(t, e, o) {
  var r = {},
    i = t.style,
    n = void 0;
  for (n in e) e.hasOwnProperty(n) && (r[n] = i[n], i[n] = e[n]);
  o.call(t);
  for (n in e) e.hasOwnProperty(n) && (i[n] = r[n])
}

function getPBMWidth(t, e, o) {
  var r = 0,
    i = void 0,
    n = void 0,
    l = void 0;
  for (n = 0; n < e.length; n++)
    if (i = e[n])
      for (l = 0; l < o.length; l++) {
        var d = void 0;
        d = "border" === i ? i + o[l] + "Width" : i + o[l], r += parseFloat(getComputedStyleX(t, d)) || 0
      }
  return r
}

function isWindow(t) {
  return null != t && t == t.window
}

function getWH(t, e, o) {
  if (isWindow(t)) return "width" === e ? domUtils.viewportWidth(t) : domUtils.viewportHeight(t);
  if (9 === t.nodeType) return "width" === e ? domUtils.docWidth(t) : domUtils.docHeight(t);
  var r = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
    i = "width" === e ? t.offsetWidth : t.offsetHeight,
    n = getComputedStyleX(t),
    l = isBorderBoxFn(t, n),
    d = 0;
  (null == i || i <= 0) && (i = void 0, d = getComputedStyleX(t, e), (null == d || Number(d) < 0) && (d = t.style[e] || 0), d = parseFloat(d) || 0), void 0 === o && (o = l ? BORDER_INDEX : CONTENT_INDEX);
  var f = void 0 !== i || l,
    u = i || d;
  if (o === CONTENT_INDEX) return f ? u - getPBMWidth(t, ["border", "padding"], r, n) : d;
  if (f) {
    var s = o === PADDING_INDEX ? -getPBMWidth(t, ["border"], r, n) : getPBMWidth(t, ["margin"], r, n);
    return u + (o === BORDER_INDEX ? 0 : s)
  }
  return d + getPBMWidth(t, BOX_MODELS.slice(o), r, n)
}

function getWHIgnoreDisplay(t) {
  var e = void 0,
    o = arguments;
  return 0 !== t.offsetWidth ? e = getWH.apply(void 0, o) : swap(t, cssShow, function() {
    e = getWH.apply(void 0, o)
  }), e
}

function css(t, e, o) {
  var r = o; {
    if ("object" !== (void 0 === e ? "undefined" : _typeof(e))) return void 0 !== r ? ("number" == typeof r && (r += "px"), void(t.style[e] = r)) : getComputedStyleX(t, e);
    for (var i in e) e.hasOwnProperty(i) && css(t, i, e[i])
  }
}

function setOffset(t, e) {
  "static" === css(t, "position") && (t.style.position = "relative");
  var o = getOffset(t),
    r = {},
    i = void 0,
    n = void 0;
  for (n in e) e.hasOwnProperty(n) && (i = parseFloat(css(t, n)) || 0, r[n] = i + e[n] - o[n]);
  css(t, r)
}
var _extends = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var o = arguments[e];
      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r])
    }
    return t
  },
  _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  },
  RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
  _RE_NUM_NO_PX = new RegExp("^(" + RE_NUM + ")(?!px)[a-z%]+$", "i"),
  RE_POS = /^(top|right|bottom|left)$/,
  CURRENT_STYLE = "currentStyle",
  RUNTIME_STYLE = "runtimeStyle",
  LEFT = "left",
  PX = "px",
  getComputedStyleX = void 0;
"undefined" != typeof window && (getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE);
var BOX_MODELS = ["margin", "border", "padding"],
  CONTENT_INDEX = -1,
  PADDING_INDEX = 2,
  BORDER_INDEX = 1,
  MARGIN_INDEX = 0,
  domUtils = {};
each(["Width", "Height"], function(t) {
  domUtils["doc" + t] = function(e) {
    var o = e.document;
    return Math.max(o.documentElement["scroll" + t], o.body["scroll" + t], domUtils["viewport" + t](o))
  }, domUtils["viewport" + t] = function(e) {
    var o = "client" + t,
      r = e.document,
      i = r.body,
      n = r.documentElement,
      l = n[o];
    return "CSS1Compat" === r.compatMode && l || i && i[o] || l
  }
});
var cssShow = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
each(["width", "height"], function(t) {
  var e = t.charAt(0).toUpperCase() + t.slice(1);
  domUtils["outer" + e] = function(e, o) {
    return e && getWHIgnoreDisplay(e, t, o ? MARGIN_INDEX : BORDER_INDEX)
  };
  var o = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"];
  domUtils[t] = function(e, r) {
    if (void 0 === r) return e && getWHIgnoreDisplay(e, t, CONTENT_INDEX);
    if (e) {
      var i = getComputedStyleX(e);
      return isBorderBoxFn(e) && (r += getPBMWidth(e, ["padding", "border"], o, i)), css(e, t, r)
    }
  }
}), module.exports = _extends({
  getWindow: function(t) {
    var e = t.ownerDocument || t;
    return e.defaultView || e.parentWindow
  },
  offset: function(t, e) {
    if (void 0 === e) return getOffset(t);
    setOffset(t, e)
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function(t) {
    var e = {};
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    if (t.overflow)
      for (var r in t) t.hasOwnProperty(r) && (e.overflow[r] = t.overflow[r]);
    return e
  },
  scrollLeft: function(t, e) {
    if (isWindow(t)) {
      if (void 0 === e) return getScrollLeft(t);
      window.scrollTo(e, getScrollTop(t))
    } else {
      if (void 0 === e) return t.scrollLeft;
      t.scrollLeft = e
    }
  },
  scrollTop: function(t, e) {
    if (isWindow(t)) {
      if (void 0 === e) return getScrollTop(t);
      window.scrollTo(getScrollLeft(t), e)
    } else {
      if (void 0 === e) return t.scrollTop;
      t.scrollTop = e
    }
  },
  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);
