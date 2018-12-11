;(function(root) {
  /**
   * Inspired from http://gizma.com/easing/
   */

  var Ease = {
    /**
     * no easing, no acceleration
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    linear: function(t, b, c, d) {
      return (c * t) / d + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInQuad: function(t, b, c, d) {
      t /= d
      return c * t * t + b
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeOutQuad: function(t, b, c, d) {
      t /= d
      return -c * t * (t - 2) + b
    },

    /**
     * acceleration until halfway, then deceleration
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInOutQuad: function(t, b, c, d) {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInCubic: function(t, b, c, d) {
      t /= d
      return c * t * t * t + b
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeOutCubic: function(t, b, c, d) {
      t /= d
      t--
      return c * (t * t * t + 1) + b
    },

    /**
     * acceleration until halfway, then deceleration
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInOutCubic: function(t, b, c, d) {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t * t + b
      t -= 2
      return (c / 2) * (t * t * t + 2) + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInQuart: function(t, b, c, d) {
      t /= d
      return c * t * t * t * t + b
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeOutQuart: function(t, b, c, d) {
      t /= d
      t--
      return -c * (t * t * t * t - 1) + b
    },

    /**
     * acceleration until halfway, then deceleration
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInOutQuart: function(t, b, c, d) {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t * t * t + b
      t -= 2
      return (-c / 2) * (t * t * t * t - 2) + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInQuint: function(t, b, c, d) {
      t /= d
      return c * t * t * t * t * t + b
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeOutQuint: function(t, b, c, d) {
      t /= d
      t--
      return c * (t * t * t * t * t + 1) + b
    },

    /**
     * acceleration until halfway, then deceleration
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInOutQuint: function(t, b, c, d) {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t * t * t * t + b
      t -= 2
      return (c / 2) * (t * t * t * t * t + 2) + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInSine: function(t, b, c, d) {
      return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeOutSine: function(t, b, c, d) {
      return c * Math.sin((t / d) * (Math.PI / 2)) + b
    },

    /**
     * accelerating until halfway, then decelerating
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInOutSine: function(t, b, c, d) {
      return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInExpo: function(t, b, c, d) {
      return c * Math.pow(2, 10 * (t / d - 1)) + b
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeOutExpo: function(t, b, c, d) {
      return c * (-Math.pow(2, (-10 * t) / d) + 1) + b
    },

    /**
     * accelerating until halfway, then decelerating
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInOutExpo: function(t, b, c, d) {
      t /= d / 2
      if (t < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b
      t--
      return (c / 2) * (-Math.pow(2, -10 * t) + 2) + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInCirc: function(t, b, c, d) {
      t /= d
      return -c * (Math.sqrt(1 - t * t) - 1) + b
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeOutCirc: function(t, b, c, d) {
      t /= d
      t--
      return c * Math.sqrt(1 - t * t) + b
    },

    /**
     * acceleration until halfway, then deceleration
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInOutCirc: function(t, b, c, d) {
      t /= d / 2
      if (t < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b
      t -= 2
      return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     * @param {number} [s=1.70158]
     */
    easeInBack: function(t, b, c, d, s = 1.70158) {
      return c * (t /= d) * t * ((s + 1) * t - s) + b
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     * @param {number} [s=1.70158]
     */
    easeOutBack: function(t, b, c, d, s = 1.70158) {
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },

    /**
     * acceleration until halfway, then deceleration
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     * @param {number} [s=1.70158]
     */
    easeInOutBack: function(t, b, c, d, s = 1.70158) {
      if ((t /= d / 2) < 1)
        return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
      return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInBounce: function(t, b, c, d) {
      return c - easeOutBounce(d - t, 0, c, d) + b
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeOutBounce: function(t, b, c, d) {
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
      }
    },

    /**
     * acceleration until halfway, then deceleration
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     */
    easeInOutBounce: function(t, b, c, d) {
      if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * 0.5 + b
      else return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    },

    /**
     * accelerating from zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     * @param {number} [a]
     * @param {number} [p]
     */
    easeInElastic: function(t, b, c, d, a = undefined, p = undefined) {
      var s = 0
      if (t == 0) return b
      if ((t /= d) == 1) return b + c
      if (!p) p = d * 0.3
      if (!a || a < Math.abs(c)) {
        a = c
        s = p / 4
      } else s = (p / PI_M2) * Math.asin(c / a)
      return (
        -(
          a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t * d - s) * PI_M2) / p)
        ) + b
      )
    },

    /**
     * decelerating to zero velocity
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     * @param {number} [a]
     * @param {number} [p]
     */
    easeOutElastic: function(t, b, c, d, a = undefined, p = undefined) {
      var s = 0
      if (t == 0) return b
      if ((t /= d) == 1) return b + c
      if (!p) p = d * 0.3
      if (!a || a < Math.abs(c)) {
        a = c
        s = p / 4
      } else s = (p / PI_M2) * Math.asin(c / a)
      return (
        a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * PI_M2) / p) + c + b
      )
    },

    /**
     * acceleration until halfway, then deceleration
     * @param {number} t - Current time
     * @param {number} b - Start value
     * @param {number} c - Change in value
     * @param {number} d - Duration
     * @param {number} [a]
     * @param {number} [p]
     */
    easeInOutElastic: function(t, b, c, d, a = undefined, p = undefined) {
      var s = 0
      if (t == 0) return b
      if ((t /= d / 2) == 2) return b + c
      if (!p) p = d * (0.3 * 1.5)
      if (!a || a < Math.abs(c)) {
        a = c
        s = p / 4
      } else s = (p / PI_M2) * Math.asin(c / a)
      if (t < 1)
        return (
          -0.5 *
            (a *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t * d - s) * PI_M2) / p)) +
          b
        )
      return (
        a *
          Math.pow(2, -10 * (t -= 1)) *
          Math.sin(((t * d - s) * PI_M2) / p) *
          0.5 +
        c +
        b
      )
    }
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isClass
    }
    exports.Ease = Ease
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return Ease
    })
  } else {
    root.Ease = Ease
  }
})(this)
