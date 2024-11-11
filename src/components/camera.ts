import { PerspectiveCamera } from "three";
/**
 * Camera definition
 */

const FOV = 75; // field of view

const ASPECT_RATIO = window.innerWidth / window.innerHeight; // aspect ratio of the canvas, higher aspect ratio means a wider field of view

const NEAR = 0.1; // near clipping plane, objects closer than this value are not rendered

const FAR = 100; // far clipping plane, objects further than this value are not rendered

const camera: PerspectiveCamera = new PerspectiveCamera(
  FOV,
  ASPECT_RATIO,
  NEAR,
  FAR
);
camera.position.set(3, 1, 0); // camera position in the scene

// Handle window resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  return () => {
    window.removeEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  };
});
export default camera;
