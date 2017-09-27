"use strict";

function detectEvents() {
  var n = document.createElement("div"),
    e = n.style;
  "AnimationEvent" in window || delete EVENT_NAME_MAP.animationend.animation, "TransitionEvent" in window || delete EVENT_NAME_MAP.transitionend.transition;
  for (var t in EVENT_NAME_MAP) {
    var i = EVENT_NAME_MAP[t];
    for (var o in i)
      if (o in e) {
        endEvents.push(i[o]);
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
Object.defineProperty(exports, "__esModule", {
  value: !0
});
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
"undefined" != typeof window && detectEvents(), exports.default = {
  addEndEventListener: function(n, e) {
    if (0 === endEvents.length) return void window.setTimeout(e, 0);
    endEvents.forEach(function(t) {
      addEventListener(n, t, e)
    })
  },
  removeEndEventListener: function(n, e) {
    0 !== endEvents.length && endEvents.forEach(function(t) {
      removeEventListener(n, t, e)
    })
  }
}, module.exports = exports.default;
