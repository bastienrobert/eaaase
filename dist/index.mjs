var Back = /** @class */ (function () {
    function Back() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param s - Strength of overshoot
     */
    Back.in = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param s - Strength of overshoot
     */
    Back.out = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param s - Strength of overshoot
     */
    Back.inOut = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1)
            return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    return Back;
}());

var Bounce = /** @class */ (function () {
    function Bounce() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Bounce.in = function (t, b, c, d) {
        return c - Bounce.out(d - t, 0, c, d) + b;
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Bounce.out = function (t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        }
        else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        }
        else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
    };
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Bounce.inOut = function (t, b, c, d) {
        if (t < d / 2)
            return Bounce.in(t * 2, 0, c, d) * 0.5 + b;
        else
            return Bounce.out(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    return Bounce;
}());

var Circ = /** @class */ (function () {
    function Circ() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Circ.in = function (t, b, c, d) {
        t /= d;
        return -c * (Math.sqrt(1 - t * t) - 1) + b;
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Circ.out = function (t, b, c, d) {
        t /= d;
        t--;
        return c * Math.sqrt(1 - t * t) + b;
    };
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Circ.inOut = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1)
            return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
        t -= 2;
        return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b;
    };
    return Circ;
}());

var Cubic = /** @class */ (function () {
    function Cubic() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Cubic.in = function (t, b, c, d) {
        t /= d;
        return c * t * t * t + b;
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Cubic.out = function (t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    };
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Cubic.inOut = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    };
    return Cubic;
}());

var Elastic = /** @class */ (function () {
    function Elastic() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param a - Amplitude (strength of the effect)
     * @param p - Period (how tight the wave is)
     */
    Elastic.in = function (t, b, c, d, a, p) {
        if (a === void 0) { a = 1; }
        if (p === void 0) { p = 0.3; }
        var s = 0;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * 0.3;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else
            s = (p / Elastic.PI_M2) * Math.asin(c / a);
        return (-(a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * Elastic.PI_M2) / p)) + b);
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param a - Amplitude (strength of the effect)
     * @param p - Period (how tight the wave is)
     */
    Elastic.out = function (t, b, c, d, a, p) {
        if (a === void 0) { a = 1; }
        if (p === void 0) { p = 0.3; }
        var s = 0;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * 0.3;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else
            s = (p / Elastic.PI_M2) * Math.asin(c / a);
        return (a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * Elastic.PI_M2) / p) +
            c +
            b);
    };
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param a - Amplitude (strength of the effect)
     * @param p - Period (how tight the wave is)
     */
    Elastic.inOut = function (t, b, c, d, a, p) {
        if (a === void 0) { a = 1; }
        if (p === void 0) { p = 0.3; }
        var s = 0;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (0.3 * 1.5);
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else
            s = (p / Elastic.PI_M2) * Math.asin(c / a);
        if (t < 1)
            return (-0.5 *
                (a *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t * d - s) * Elastic.PI_M2) / p)) +
                b);
        return (a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t * d - s) * Elastic.PI_M2) / p) *
            0.5 +
            c +
            b);
    };
    Elastic.PI_M2 = Math.PI * 2;
    Elastic.PI_D2 = Math.PI / 2;
    return Elastic;
}());

var Expo = /** @class */ (function () {
    function Expo() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Expo.in = function (t, b, c, d) {
        return c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Expo.out = function (t, b, c, d) {
        return c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
    };
    /**
     * accelerating until halfway, then decelerating
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Expo.inOut = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
        t--;
        return (c / 2) * (-Math.pow(2, -10 * t) + 2) + b;
    };
    return Expo;
}());

/**
 * no easing, no acceleration
 * @param t - Current time
 * @param b - Start value
 * @param c - Change in value
 * @param d - Duration
 */
function linear(t, b, c, d) {
    return (c * t) / d + b;
}

var Quad = /** @class */ (function () {
    function Quad() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Quad.in = function (t, b, c, d) {
        t /= d;
        return c * t * t + b;
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Quad.out = function (t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    };
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Quad.inOut = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    return Quad;
}());

var Quart = /** @class */ (function () {
    function Quart() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Quart.in = function (t, b, c, d) {
        t /= d;
        return c * t * t * t * t + b;
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Quart.out = function (t, b, c, d) {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
    };
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Quart.inOut = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * t * t * t * t + b;
        t -= 2;
        return (-c / 2) * (t * t * t * t - 2) + b;
    };
    return Quart;
}());

var Quint = /** @class */ (function () {
    function Quint() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Quint.in = function (t, b, c, d) {
        t /= d;
        return c * t * t * t * t * t + b;
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Quint.out = function (t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t * t * t + 1) + b;
    };
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Quint.inOut = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * t * t * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t * t * t + 2) + b;
    };
    return Quint;
}());

var Sine = /** @class */ (function () {
    function Sine() {
    }
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Sine.in = function (t, b, c, d) {
        return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
    };
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Sine.out = function (t, b, c, d) {
        return c * Math.sin((t / d) * (Math.PI / 2)) + b;
    };
    /**
     * accelerating until halfway, then decelerating
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    Sine.inOut = function (t, b, c, d) {
        return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
    };
    return Sine;
}());

export { Back, Bounce, Circ, Cubic, Elastic, Expo, linear as Linear, Quad, Quart, Quint, Sine };
