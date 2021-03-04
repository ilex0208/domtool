"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var EVENT_NAME_MAP = {
    transitionend: {
      transition: "transitionend",
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "mozTransitionEnd",
      OTransition: "oTransitionEnd",
      msTransition: "MSTransitionEnd"
    },
    animationend: {
      animation: "animationend",
      WebkitAnimation: "webkitAnimationEnd",
      MozAnimation: "mozAnimationEnd",
      OAnimation: "oAnimationEnd",
      msAnimation: "MSAnimationEnd"
    }
  },
  endEvents = [];

function detectEvents() {
  var n, e = document.createElement("div").style;
  for (n in "AnimationEvent" in window || delete EVENT_NAME_MAP.animationend.animation, "TransitionEvent" in window || delete EVENT_NAME_MAP.transitionend.transition, EVENT_NAME_MAP) {
    var t, i = EVENT_NAME_MAP[n];
    for (t in i)
      if (t in e) {
        endEvents.push(i[t]);
        break
      }
  }
}

function addEventListener(n, e, t) {
  n.addEventListener(e, t, !1)
}

function removeEventListener(n, e, t) {
  n.removeEventListener(e, t, !1)
}
"undefined" != typeof window && detectEvents();
var _default = {
  addEndEventListener: function(e, t) {
    0 !== endEvents.length ? endEvents.forEach(function(n) {
      addEventListener(e, n, t)
    }) : window.setTimeout(t, 0)
  },
  removeEndEventListener: function(e, t) {
    0 !== endEvents.length && endEvents.forEach(function(n) {
      removeEventListener(e, n, t)
    })
  }
};
exports.default = _default, module.exports = exports.default;
