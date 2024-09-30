import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

window.addEventListener("resize", () => {
  const canvas: any = document.querySelector("#app");
  if (!canvas) {
    console.error("Canvas not found");
    return;
  }
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
});
window.addEventListener("load", () => {
  const scene: THREE.Scene = new THREE.Scene();
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight; // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 4, 2); // camera position
  const canvas: any = document.querySelector("#app"); // type HTMLCanvasElement
  if (!canvas) {
    console.error("Canvas not found");
    return;
  }
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry: THREE.BoxGeometry = new THREE.BoxGeometry();
  const material: THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial({
    color: "#F8333C",
  });
  const cube: THREE.Mesh = new THREE.Mesh(geometry, material);
  cube.position.set(0, -1, 0);
  camera.lookAt(cube.position);
  const color = 0xffffff;
  const intensity = 2;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(15, 5, 0);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  // Initialize OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Enable damping (inertia)
  controls.dampingFactor = 0.25; // Damping factor
  controls.screenSpacePanning = false; // Disable panning
  controls.minDistance = 1; // Minimum distance to the object
  controls.maxDistance = 100; // Maximum distance to the object
  controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation

  scene.background = new THREE.Color(0x000000);
  scene.add(cube);
  scene.add(light);
  scene.add(ambientLight);

  let isDragging: boolean = false;

  controls.addEventListener("start", () => {
    isDragging = true;
  });
  controls.addEventListener("end", () => {
    isDragging = false;
  });
  const animate = function () {
    requestAnimationFrame(animate);

    if (!isDragging) {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    }

    controls.update();

    renderer.render(scene, camera);
  };

  animate();
});
