export default class Circ {
  /**
   * accelerating from zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static in(t: number, b: number, c: number, d: number): number {
    t /= d;
    return -c * (Math.sqrt(1 - t * t) - 1) + b;
  }

  /**
   * decelerating to zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static out(t: number, b: number, c: number, d: number): number {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
  }

  /**
   * acceleration until halfway, then deceleration
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static inOut(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b;
  }
}
