export default class Quart {
  /**
   * accelerating from zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static in(t: number, b: number, c: number, d: number): number {
    t /= d;
    return c * t * t * t * t + b;
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
    return -c * (t * t * t * t - 1) + b;
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
    if (t < 1) return (c / 2) * t * t * t * t + b;
    t -= 2;
    return (-c / 2) * (t * t * t * t - 2) + b;
  }
}
