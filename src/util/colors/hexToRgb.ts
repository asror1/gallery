import { Rgb } from "@util/types";

/**
 * Converts a hex color to an RGB color.
 *
 * @param hex hex color value
 * @returns {r: number, g: number, b: number} object with red, green, and blue values
 */
export default function hexToRgb(hex: number | string): Rgb {
  if (typeof hex === "string") {
    hex = parseInt(hex.replace("#", ""), 16);
  }
  return {
    r: (hex >> 16) & 0xff, // Shift right 16 bits, then mask with 0xff, which is 0x000000ff
    g: (hex >> 8) & 0xff, // Shift right 8 bits
    b: hex & 0xff, // Mask with 0xff
  };
}
