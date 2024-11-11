import { AmbientLight } from "three";

/**
 * Ambient light, a light source that adds a constant amount of light to the scene.
 */
const COLOR: number = 0xffffff; // white light

const INTENSITY: number = 0.7; // 70% intensity

const ambientLight: AmbientLight = new AmbientLight(COLOR, INTENSITY);

export default ambientLight;
