import { Rgb } from "@util/types";

/**
 * Checks if each value in an Rgb object is an 8-bit integer
 *
 * @param rgb: Rgb, object with red, green, and blue values
 * @returns whether the value is an 8-bit integer
 */
export default function isValidRgb(rgb: Rgb): boolean {
  const { r, g, b } = rgb;
  if (r < 0 || r > 255) return false;
  if (g < 0 || g > 255) return false;
  if (b < 0 || b > 255) return false;
  return true;
}
