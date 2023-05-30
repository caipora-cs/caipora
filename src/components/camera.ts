import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(30, 1, 0.1, 100);

  camera.position.set(10, 5, 12);

  return camera;
}

export { createCamera };
