import { camera, cube, renderer, scene } from "@components";
import { ambientLight, directionalLight } from "@components/lights";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// scene.add(cube);
scene.add(directionalLight);
scene.add(ambientLight);
const loader = new GLTFLoader();
loader.load(
  "donut.glb", // Path to the .glb or .gltf file
  (gltf) => {
    const model = gltf.scene;
    model.scale.set(3, 3, 3);
    scene.add(model);
  },
  undefined,
  (error) => {
    console.error(error);
  }
);
camera.lookAt(cube.position);

const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();
