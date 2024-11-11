import { DirectionalLight } from "three";

/**
 * Directional light, a light source that acts like a sun in the scene.
 */
let COLOR: number = 0xffffff; // white light

let INTENSITY: number = 2; // 200% intensity

const directionalLight: DirectionalLight = new DirectionalLight(
  COLOR,
  INTENSITY
);

directionalLight.position.set(15, 5, 0); // x, y, z

export default directionalLight;
