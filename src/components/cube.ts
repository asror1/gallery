import { hexToHsl } from "@util/colors";
import { Hsl } from "@util/types";
import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
/**
 * Cube, a beginner 3D object that is rendered in the scene.
 */

const pastelColor: string = "#FFC0CB";
const colorGenerator = (hsl: Hsl): Hsl[] => {
  return hsl.analogous();
};

const material: MeshStandardMaterial = new MeshStandardMaterial({
  color: pastelColor,
});

let i = 0;
let prev: Hsl = hexToHsl(pastelColor);
let colors: Hsl[] = colorGenerator(prev);
setInterval(() => {
  const hsl: Hsl = colors[i];
  material.color.set(hsl.toHex());
  i++;
  if (i === colors.length) {
    colors = colorGenerator(hsl);
  }
  i = i % colors.length;
}, 1000);

const geometry: BoxGeometry = new BoxGeometry();
const cube: Mesh = new Mesh(geometry, material);
cube.position.set(0, -1, 0); // x, y, z

export default cube;
