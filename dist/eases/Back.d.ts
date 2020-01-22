export default class Back {
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param s - Strength of overshoot
     */
    static in(t: number, b: number, c: number, d: number, s?: number): number;
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param s - Strength of overshoot
     */
    static out(t: number, b: number, c: number, d: number, s?: number): number;
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param s - Strength of overshoot
     */
    static inOut(t: number, b: number, c: number, d: number, s?: number): number;
}
