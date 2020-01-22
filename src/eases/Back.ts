export default class Back {
  /**
   * accelerating from zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   * @param s - Strength of overshoot
   */
  public static in(
    t: number,
    b: number,
    c: number,
    d: number,
    s: number = 1.70158
  ): number {
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }

  /**
   * decelerating to zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   * @param s - Strength of overshoot
   */
  public static out(
    t: number,
    b: number,
    c: number,
    d: number,
    s: number = 1.70158
  ): number {
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }

  /**
   * acceleration until halfway, then deceleration
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   * @param s - Strength of overshoot
   */
  public static inOut(
    t: number,
    b: number,
    c: number,
    d: number,
    s: number = 1.70158
  ): number {
    if ((t /= d / 2) < 1)
      return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }
}
