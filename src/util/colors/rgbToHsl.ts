import { Rgb, Hsl } from "@util/types";
import { hexToRgb } from "@util/colors";

/**
 * Converts a hex color value to HSL.
 *
 * @param hex hex color value
 * @returns hsl: Hsl object with hue, saturation, and lightness values
 */
export function hexToHsl(hex: number | string): Hsl {
  return rgbToHsl(hexToRgb(hex));
}
/**
 * Converts an RGB color value to HSL.
 *
 * @param rgb: Rgb, object with red, green, and blue values
 * @returns hsl: Hsl, object with hue, saturation, and lightness values
 */
export function rgbToHsl(rgb: Rgb): Hsl {
  const red = rgb.r / 255;
  const green = rgb.g / 255;
  const blue = rgb.b / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  let hue = 0;
  let saturation = 0;
  const lightness = (max + min) / 2;

  if (max !== min) {
    const delta = max - min;

    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case red:
        hue = ((green - blue) / delta + (green < blue ? 6 : 0)) / 6;
        break;
      case green:
        hue = ((blue - red) / delta + 2) / 6;
        break;
      case blue:
        hue = ((red - green) / delta + 4) / 6;
        break;
    }
  }

  return new Hsl(hue * 360, saturation * 100, lightness * 100);
}
