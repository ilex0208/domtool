"use strict";

function getStyleSize(e) {
  var t = parseFloat(e);
  return -1 === e.indexOf("%") && !isNaN(t) && t
}

function noop() {}

function getZeroSize() {
  for (var e = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, t = 0; t < measurementsLength; t++) {
    e[measurements[t]] = 0
  }
  return e
}

function getStyle(e) {
  var t = getComputedStyle(e);
  return t || logError("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
}

function setup() {
  if (!isSetup) {
    isSetup = !0;
    var e = document.createElement("div");
    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
    var t = document.body || document.documentElement;
    t.appendChild(e);
    var i = getStyle(e);
    getSize.isBoxSizeOuter = isBoxSizeOuter = 200 === getStyleSize(i.width), t.removeChild(e)
  }
}

function getSize(e) {
  if (setup(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (void 0 === e ? "undefined" : _typeof(e)) && e.nodeType) {
    var t = getStyle(e);
    if ("none" === t.display) return getZeroSize();
    var i = {};
    i.width = e.offsetWidth, i.height = e.offsetHeight;
    for (var o = i.isBorderBox = "border-box" === t.boxSizing, r = 0; r < measurementsLength; r++) {
      var n = measurements[r],
        d = t[n],
        g = parseFloat(d);
      i[n] = isNaN(g) ? 0 : g
    }
    var u = i.paddingLeft + i.paddingRight,
      p = i.paddingTop + i.paddingBottom,
      h = i.marginLeft + i.marginRight,
      a = i.marginTop + i.marginBottom,
      s = i.borderLeftWidth + i.borderRightWidth,
      m = i.borderTopWidth + i.borderBottomWidth,
      f = o && isBoxSizeOuter,
      l = getStyleSize(t.width);
    !1 !== l && (i.width = l + (f ? 0 : u + s));
    var y = getStyleSize(t.height);
    return !1 !== y && (i.height = y + (f ? 0 : p + m)), i.innerWidth = i.width - (u + s), i.innerHeight = i.height - (p + m), i.outerWidth = i.width + h, i.outerHeight = i.height + a, i
  }
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  },
  logError = "undefined" == typeof console ? noop : function(e) {
    console.error(e)
  },
  measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
  measurementsLength = measurements.length,
  isSetup = !1,
  isBoxSizeOuter = void 0;
exports.default = getSize, module.exports = exports.default;
