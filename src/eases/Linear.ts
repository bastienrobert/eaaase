/**
 * no easing, no acceleration
 * @param t - Current time
 * @param b - Start value
 * @param c - Change in value
 * @param d - Duration
 */

export default function linear(
  t: number,
  b: number,
  c: number,
  d: number
): number {
  return (c * t) / d + b;
}
