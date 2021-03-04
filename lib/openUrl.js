"use strict";

function winexe(e, n) {
  e = "/general/winexe/?PROG=".concat(n, "&NAME=").concat(e);
  window.open(e, "winexe", "height=100,width=350,status=0,toolbar=no,menubar=no,location=no,scrollbars=yes,top=0,left=0,resizable=no")
}

function openURL(e, n, t) {
  var o;
  0 !== t.indexOf("http://") && 0 !== t.indexOf("https://") && 0 !== t.indexOf("ftp://") ? 0 !== t.indexOf("file://") ? (o = "", (o = 1e4 <= e && e <= 14999 ? "/fis/".concat(t) : 15e3 <= e && e <= 15499 ? "/hr/".concat(t) : 650 <= e && e <= 1e3 || 4 < t.length && ".jsp" === t.substr(t.length - 4).toLowerCase() ? "/app/".concat(t) : "/general/" !== t.substr(0, 9) ? "/general/".concat(t) : t).indexOf(".") < 0 && o.indexOf("?") < 0 && o.indexOf("#") < 0 && "/" !== o.substring(o.length - 1) && (o += "/"), window.open(o)) : winexe(n, t.substr(7)) : window.open(t)
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = openURL, module.exports = exports.default;
