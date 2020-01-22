export default class Elastic {
    protected static PI_M2: number;
    protected static PI_D2: number;
    /**
     * accelerating from zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param a - Amplitude (strength of the effect)
     * @param p - Period (how tight the wave is)
     */
    static in(t: number, b: number, c: number, d: number, a?: number, p?: number): number;
    /**
     * decelerating to zero velocity
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param a - Amplitude (strength of the effect)
     * @param p - Period (how tight the wave is)
     */
    static out(t: number, b: number, c: number, d: number, a?: number, p?: number): number;
    /**
     * acceleration until halfway, then deceleration
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @param a - Amplitude (strength of the effect)
     * @param p - Period (how tight the wave is)
     */
    static inOut(t: number, b: number, c: number, d: number, a?: number, p?: number): number;
}
