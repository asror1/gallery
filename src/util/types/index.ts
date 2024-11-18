import { hslToRgb, rgbToHex } from "@util/colors";

/**
 * RGB color type.
 * RGB stands for Red, Green, and Blue.
 */
export class Rgb {
  r: number;
  g: number;
  b: number;
  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  toString(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

/**
 * HSL color model
 * HSL stands for Hue, Saturation, and Lightness.
 */
export class Hsl {
  h: number;
  s: number;
  l: number;
  constructor(h: number, s: number, l: number) {
    this.h = h;
    this.s = s;
    this.l = l;
  }
  toHex(): number {
    return rgbToHex(hslToRgb(this));
  }
  toString(): string {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
  tetrad(): Hsl[] {
    return [
      new Hsl(this.h, this.s, this.l),
      new Hsl(this.#adjustHue(this.h, 90), this.s, this.l),
      new Hsl(this.#adjustHue(this.h, 180), this.s, this.l),
      new Hsl(this.#adjustHue(this.h, 270), this.s, this.l),
    ];
  }
  triad(): Hsl[] {
    return [
      new Hsl(this.h, this.s, this.l),
      new Hsl(this.#adjustHue(this.h, 120), this.s, this.l),
      new Hsl(this.#adjustHue(this.h, 240), this.s, this.l),
    ];
  }
  analogous(): Hsl[] {
    return [
      new Hsl(this.h, this.s, this.l),
      new Hsl(this.#adjustHue(this.h, 30), this.s, this.l),
      new Hsl(this.#adjustHue(this.h, -30), this.s, this.l),
    ];
  }
  adjustHue(degrees: number): Hsl {
    this.h = this.#adjustHue(this.h, degrees);
    return this;
  }
  #adjustHue(hue: number, degrees: number): number {
    hue += degrees;
    if (hue > 360) {
      return hue - 360;
    } else if (hue < 0) {
      return hue + 360;
    }
    return hue;
  }
}
