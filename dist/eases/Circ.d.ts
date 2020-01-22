export default class Circ {
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    static in(t: number, b: number, c: number, d: number): number;
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    static out(t: number, b: number, c: number, d: number): number;
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     */
    static inOut(t: number, b: number, c: number, d: number): number;
}
