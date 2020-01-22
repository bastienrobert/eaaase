export default class Sine {
  /**
   * accelerating from zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static in(t: number, b: number, c: number, d: number): number {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  }

  /**
   * decelerating to zero velocity
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static out(t: number, b: number, c: number, d: number): number {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  }

  /**
   * accelerating until halfway, then decelerating
   * @param t - Current time
   * @param b - Start value
   * @param c - Change in value
   * @param d - Duration
   */
  public static inOut(t: number, b: number, c: number, d: number): number {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  }
}
