import isValidRgb from "./isValidRgb";
import { Rgb } from "@util/types";
/**
 * Converts RGB values to a hexidecimal value, returned as a decimal number.
 *
 * @param rgb: Rgb, object with red, green, and blue values,
 * @returns hex value as a decimal number
 */
export default function rgbToHex(rgb: Rgb): number {
  const { r, g, b } = rgb;
  if (!isValidRgb(rgb)) {
    throw new Error("Invalid RGB value: " + JSON.stringify(rgb));
  }
  /**
   * Each hexidecimal digit is 4 bits. A hexidecimal number is 24 bits, 8 bits for each color... red, green, blue.
   * E.g. 0xRRGGBB... 0x (4bits)(4bits) (4bits)(4bits) (4bits)(4bits)
   * Therefore, we shift the red value 16 bits to the left, green 8 bits, and blue 0 bits.
   */
  return (r << 16) + (g << 8) + b;
}
/**
 * Converts RGB values to a hexidecimal value, returned as a string.
 *
 * @param rgb: Rgb, object with red, green, and blue values
 * @returns hex value as a string
 */
export function rbgToHexString(rgb: Rgb): string {
  return `#${rgbToHex(rgb).toString(16)}`;
}
