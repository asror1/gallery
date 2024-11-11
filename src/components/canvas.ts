let canvas: HTMLCanvasElement | null = document.querySelector("#app"); // Get the canvas element from the DOM
// Handle the case where the canvas element wasn't added to the DOM
if (!canvas) {
  console.error("Canvas not found, adding a canvas element to the body");
  canvas = document.createElement("canvas");
  canvas.id = "app";
  document.body.appendChild(canvas);
}
export default canvas as HTMLCanvasElement;
