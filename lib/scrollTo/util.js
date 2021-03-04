"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),
  _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function ownKeys(t, e) {
  var o, r = Object.keys(t);
  return Object.getOwnPropertySymbols && (o = Object.getOwnPropertySymbols(t), e && (o = o.filter(function(e) {
    return Object.getOwnPropertyDescriptor(t, e).enumerable
  })), r.push.apply(r, o)), r
}

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = null != arguments[e] ? arguments[e] : {};
    e % 2 ? ownKeys(Object(o), !0).forEach(function(e) {
      (0, _defineProperty2.default)(t, e, o[e])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
    })
  }
  return t
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(e) {
  var t = e.ownerDocument,
    o = t.body,
    r = t && t.documentElement,
    t = e.getBoundingClientRect(),
    e = t.left,
    t = t.top;
  return {
    left: e -= r.clientLeft || o.clientLeft || 0,
    top: t -= r.clientTop || o.clientTop || 0
  }
}

function getScroll(e, t) {
  var o = e["page".concat(t ? "Y" : "X", "Offset")],
    t = "scroll".concat(t ? "Top" : "Left");
  return "number" == typeof o || "number" != typeof(o = (e = e.document).documentElement[t]) && (o = e.body[t]), o
}

function getScrollLeft(e) {
  return getScroll(e)
}

function getScrollTop(e) {
  return getScroll(e, !0)
}

function getOffset(e) {
  var t = getClientPosition(e),
    e = e.ownerDocument,
    e = e.defaultView || e.parentWindow;
  return t.left += getScrollLeft(e), t.top += getScrollTop(e), t
}

function _getComputedStyle(e, t, o) {
  var r = "",
    n = e.ownerDocument,
    e = o || n.defaultView.getComputedStyle(e, null);
  return r = e ? e.getPropertyValue(t) || e[t] : r
}
var getComputedStyleX, _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), "i"),
  RE_POS = /^(top|right|bottom|left)$/,
  CURRENT_STYLE = "currentStyle",
  RUNTIME_STYLE = "runtimeStyle",
  LEFT = "left",
  PX = "px";

function _getComputedStyleIE(e, t) {
  var o, r, n, i = e[CURRENT_STYLE] && e[CURRENT_STYLE][t];
  return _RE_NUM_NO_PX.test(i) && !RE_POS.test(t) && (r = (o = e.style)[LEFT], n = e[RUNTIME_STYLE][LEFT], e[RUNTIME_STYLE][LEFT] = e[CURRENT_STYLE][LEFT], o[LEFT] = "fontSize" === t ? "1em" : i || 0, i = o.pixelLeft + PX, o[LEFT] = r, e[RUNTIME_STYLE][LEFT] = n), "" === i ? "auto" : i
}

function each(e, t) {
  for (var o = 0; o < e.length; o++) t(e[o])
}

function isBorderBoxFn(e) {
  return "border-box" === getComputedStyleX(e, "boxSizing")
}
"undefined" != typeof window && (getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE);
var BOX_MODELS = ["margin", "border", "padding"],
  CONTENT_INDEX = -1,
  PADDING_INDEX = 2,
  BORDER_INDEX = 1,
  MARGIN_INDEX = 0;

function swap(e, t, o) {
  var r, n = {},
    i = e.style;
  for (r in t) t.hasOwnProperty(r) && (n[r] = i[r], i[r] = t[r]);
  for (r in o.call(e), t) t.hasOwnProperty(r) && (i[r] = n[r])
}

function getPBMWidth(e, t, o) {
  for (var r, n, i = 0, l = 0; l < t.length; l++)
    if (r = t[l])
      for (n = 0; n < o.length; n++) {
        var c = void 0,
          c = "border" === r ? "".concat(r + o[n], "Width") : r + o[n];
        i += parseFloat(getComputedStyleX(e, c)) || 0
      }
  return i
}

function isWindow(e) {
  return null != e && e == e.window
}
var domUtils = {};

function getWH(e, t, o) {
  if (isWindow(e)) return "width" === t ? domUtils.viewportWidth(e) : domUtils.viewportHeight(e);
  if (9 === e.nodeType) return "width" === t ? domUtils.docWidth(e) : domUtils.docHeight(e);
  var r = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
    n = "width" === t ? e.offsetWidth : e.offsetHeight,
    i = getComputedStyleX(e),
    l = isBorderBoxFn(e, i),
    c = 0;
  (null == n || n <= 0) && (n = void 0, (null == (c = getComputedStyleX(e, t)) || Number(c) < 0) && (c = e.style[t] || 0), c = parseFloat(c) || 0);
  t = void 0 !== n || l, n = n || c;
  if ((o = void 0 === o ? l ? BORDER_INDEX : CONTENT_INDEX : o) === CONTENT_INDEX) return t ? n - getPBMWidth(e, ["border", "padding"], r, i) : c;
  if (t) {
    t = o === PADDING_INDEX ? -getPBMWidth(e, ["border"], r, i) : getPBMWidth(e, ["margin"], r, i);
    return n + (o === BORDER_INDEX ? 0 : t)
  }
  return c + getPBMWidth(e, BOX_MODELS.slice(o), r, i)
}
each(["Width", "Height"], function(n) {
  domUtils["doc".concat(n)] = function(e) {
    e = e.document;
    return Math.max(e.documentElement["scroll".concat(n)], e.body["scroll".concat(n)], domUtils["viewport".concat(n)](e))
  }, domUtils["viewport".concat(n)] = function(e) {
    var t = "client".concat(n),
      o = e.document,
      r = o.body,
      e = o.documentElement[t];
    return "CSS1Compat" === o.compatMode && e || r && r[t] || e
  }
});
var cssShow = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};

function getWHIgnoreDisplay(e) {
  var t, o = arguments;
  return 0 !== e.offsetWidth ? t = getWH.apply(void 0, o) : swap(e, cssShow, function() {
    t = getWH.apply(void 0, o)
  }), t
}

function css(e, t, o) {
  var r, o = o;
  if ("object" !== (0, _typeof2.default)(t)) return void 0 !== o ? ("number" == typeof o && (o += "px"), void(e.style[t] = o)) : getComputedStyleX(e, t);
  for (r in t) t.hasOwnProperty(r) && css(e, r, t[r])
}

function setOffset(e, t) {
  "static" === css(e, "position") && (e.style.position = "relative");
  var o, r, n = getOffset(e),
    i = {};
  for (r in t) t.hasOwnProperty(r) && (o = parseFloat(css(e, r)) || 0, i[r] = o + t[r] - n[r]);
  css(e, i)
}
each(["width", "height"], function(r) {
  var e = r.charAt(0).toUpperCase() + r.slice(1);
  domUtils["outer".concat(e)] = function(e, t) {
    return e && getWHIgnoreDisplay(e, r, t ? MARGIN_INDEX : BORDER_INDEX)
  };
  var n = "width" === r ? ["Left", "Right"] : ["Top", "Bottom"];
  domUtils[r] = function(e, t) {
    if (void 0 === t) return e && getWHIgnoreDisplay(e, r, CONTENT_INDEX);
    if (e) {
      var o = getComputedStyleX(e);
      return isBorderBoxFn(e) && (t += getPBMWidth(e, ["padding", "border"], n, o)), css(e, r, t)
    }
  }
});
var utils = _objectSpread({
    getWindow: function(e) {
      e = e.ownerDocument || e;
      return e.defaultView || e.parentWindow
    },
    offset: function(e, t) {
      if (void 0 === t) return getOffset(e);
      setOffset(e, t)
    },
    isWindow: isWindow,
    each: each,
    css: css,
    clone: function(e) {
      var t, o = {};
      for (t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
      if (e.overflow)
        for (var r in e) e.hasOwnProperty(r) && (o.overflow[r] = e.overflow[r]);
      return o
    },
    scrollLeft: function(e, t) {
      if (isWindow(e)) {
        if (void 0 === t) return getScrollLeft(e);
        window.scrollTo(t, getScrollTop(e))
      } else {
        if (void 0 === t) return e.scrollLeft;
        e.scrollLeft = t
      }
    },
    scrollTop: function(e, t) {
      if (isWindow(e)) {
        if (void 0 === t) return getScrollTop(e);
        window.scrollTo(getScrollLeft(e), t)
      } else {
        if (void 0 === t) return e.scrollTop;
        e.scrollTop = t
      }
    },
    viewportWidth: 0,
    viewportHeight: 0
  }, domUtils),
  _default = utils;
exports.default = utils, module.exports = exports.default;
