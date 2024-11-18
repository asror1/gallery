import { WebGLRenderer } from "three";
import { canvas } from "@components";

/**
 * Renders the scene and camera to the canvas
 */
const renderer: WebGLRenderer = new WebGLRenderer({
  antialias: true,
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer to the window size

// Handle window resizing
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  return () => {
    window.removeEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  };
});
export default renderer;
