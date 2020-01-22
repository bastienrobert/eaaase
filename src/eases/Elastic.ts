export default class Elastic {
  protected static PI_M2: number = Math.PI * 2;
  protected static PI_D2: number = Math.PI / 2;

  /**
   * accelerating from zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   * @param a - Amplitude (strength of the effect)
   * @param p - Period (how tight the wave is)
   */
  public static in(
    t: number,
    b: number,
    c: number,
    d: number,
    a: number = 1,
    p: number = 0.3
  ): number {
    let s = 0;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else s = (p / Elastic.PI_M2) * Math.asin(c / a);
    return (
      -(
        a *
        Math.pow(2, 10 * (t -= 1)) *
        Math.sin(((t * d - s) * Elastic.PI_M2) / p)
      ) + b
    );
  }

  /**
   * decelerating to zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   * @param a - Amplitude (strength of the effect)
   * @param p - Period (how tight the wave is)
   */
  public static out(
    t: number,
    b: number,
    c: number,
    d: number,
    a: number = 1,
    p: number = 0.3
  ): number {
    let s = 0;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else s = (p / Elastic.PI_M2) * Math.asin(c / a);
    return (
      a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * Elastic.PI_M2) / p) +
      c +
      b
    );
  }

  /**
   * acceleration until halfway, then deceleration
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   * @param a - Amplitude (strength of the effect)
   * @param p - Period (how tight the wave is)
   */
  public static inOut(
    t: number,
    b: number,
    c: number,
    d: number,
    a: number = 1,
    p: number = 0.3
  ): number {
    let s = 0;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else s = (p / Elastic.PI_M2) * Math.asin(c / a);
    if (t < 1)
      return (
        -0.5 *
          (a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * Elastic.PI_M2) / p)) +
        b
      );
    return (
      a *
        Math.pow(2, -10 * (t -= 1)) *
        Math.sin(((t * d - s) * Elastic.PI_M2) / p) *
        0.5 +
      c +
      b
    );
  }
}
