import { Color, Scene } from "three";
/**
 * Scene, a container for all objects that are rendered (other than the camera).
 */
let LAVENDER: string = "#E6E6FA";

const scene: Scene = new Scene();
scene.background = new Color(LAVENDER);

export default scene;
