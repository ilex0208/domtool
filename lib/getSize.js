"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function getStyleSize(e) {
  var t = parseFloat(e);
  return -1 === e.indexOf("%") && !isNaN(t) && t
}

function noop() {}
var logError = "undefined" == typeof console ? noop : function(e) {
    console.error(e)
  },
  measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
  measurementsLength = measurements.length;

function getZeroSize() {
  for (var e = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, t = 0; t < measurementsLength; t++) e[measurements[t]] = 0;
  return e
}

function getStyle(e) {
  e = getComputedStyle(e);
  return e || logError("Style returned ".concat(e, ". Are you running this code in a hidden iframe on Firefox? ") + "See http://bit.ly/getsizebug1"), e
}
var isBoxSizeOuter, isSetup = !1;

function setup() {
  var e, t, i;
  isSetup || (isSetup = !0, (e = document.createElement("div")).style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box", (t = document.body || document.documentElement).appendChild(e), i = getStyle(e), getSize.isBoxSizeOuter = isBoxSizeOuter = 200 === getStyleSize(i.width), t.removeChild(e))
}

function getSize(e) {
  if (setup(), (e = "string" == typeof e ? document.querySelector(e) : e) && "object" == (0, _typeof2.default)(e) && e.nodeType) {
    var t = getStyle(e);
    if ("none" === t.display) return getZeroSize();
    var i = {};
    i.width = e.offsetWidth, i.height = e.offsetHeight;
    for (var r = i.isBorderBox = "border-box" === t.boxSizing, o = 0; o < measurementsLength; o++) {
      var n = measurements[o],
        d = t[n],
        d = parseFloat(d);
      i[n] = isNaN(d) ? 0 : d
    }
    var u = i.paddingLeft + i.paddingRight,
      a = i.paddingTop + i.paddingBottom,
      g = i.marginLeft + i.marginRight,
      h = i.marginTop + i.marginBottom,
      p = i.borderLeftWidth + i.borderRightWidth,
      s = i.borderTopWidth + i.borderBottomWidth,
      e = r && isBoxSizeOuter,
      r = getStyleSize(t.width);
    !1 !== r && (i.width = r + (e ? 0 : u + p));
    r = getStyleSize(t.height);
    return !1 !== r && (i.height = r + (e ? 0 : a + s)), i.innerWidth = i.width - (u + p), i.innerHeight = i.height - (a + s), i.outerWidth = i.width + g, i.outerHeight = i.height + h, i
  }
}
var _default = getSize;
exports.default = getSize, module.exports = exports.default;
