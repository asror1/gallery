import { camera, load, renderer, scene } from '@components';
import { ambientLight, directionalLight } from '@components/lights';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Set up OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable damping (inertia)
controls.dampingFactor = 0.25; // Damping factor
controls.screenSpacePanning = false; // Do not allow panning in screen space
controls.minDistance = 5; // Minimum distance for zoom
controls.maxDistance = 10; // Maximum distance for zoom
controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation to 90 degrees

let isCameraRotating = false;

controls.addEventListener('start', () => {
  isCameraRotating = true;
});

controls.addEventListener('end', () => {
  isCameraRotating = false;
});

(async function init() {
  try {
    const donut: THREE.Object3D = await load('donut.glb');
    scene.add(directionalLight);
    scene.add(ambientLight);
    scene.add(donut);
    camera.lookAt(donut.position);

    let clock = new THREE.Clock();

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      let time = clock.getElapsedTime();
      donut.position.y = Math.sin(time * 2) * 0.5;
      renderer.render(scene, camera);
    };

    animate();
  } catch (error) {
    console.error('Error loading model:', error);
  }
})();
