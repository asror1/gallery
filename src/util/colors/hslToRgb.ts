import { Hsl, Rgb } from "@util/types";

/**
 * Converts an HSL color value to RGB. Conversion formula: https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
 *
 * @param hsl: Hsl, object with hue, saturation, and lightness values
 * @returns {r: number, g: number, b: number} object with red, green, and blue values
 */
export default function hslToRgb(hsl: Hsl): Rgb {
  const { h, s, l } = hsl;
  const hue = h / 360;
  const saturation = s / 100;
  const lightness = l / 100;

  let red = lightness;
  let green = lightness;
  let blue = lightness;

  if (saturation !== 0) {
    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }

  return {
    r: Math.round(red * 255),
    g: Math.round(green * 255),
    b: Math.round(blue * 255),
  };
}

function hueToRgb(p: number, q: number, t: number): number {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
