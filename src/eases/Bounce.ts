export default class Bounce {
  /**
   * accelerating from zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static in(t: number, b: number, c: number, d: number): number {
    return c - Bounce.out(d - t, 0, c, d) + b;
  }

  /**
   * decelerating to zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static out(t: number, b: number, c: number, d: number): number {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  }

  /**
   * acceleration until halfway, then deceleration
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static inOut(t: number, b: number, c: number, d: number): number {
    if (t < d / 2) return Bounce.in(t * 2, 0, c, d) * 0.5 + b;
    else return Bounce.out(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  }
}
