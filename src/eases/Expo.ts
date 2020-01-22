export default class Expo {
  /**
   * accelerating from zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static in(t: number, b: number, c: number, d: number): number {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
  }

  /**
   * decelerating to zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static out(t: number, b: number, c: number, d: number): number {
    return c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  }

  /**
   * accelerating until halfway, then decelerating
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static inOut(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    t--;
    return (c / 2) * (-Math.pow(2, -10 * t) + 2) + b;
  }
}
