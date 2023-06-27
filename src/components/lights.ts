import { AmbientLight, DirectionalLight } from "three";

function createLights() {
  const ambientLight = new AmbientLight(0xffffff, 0.5);

  const mainLight = new DirectionalLight("white", 2);
  mainLight.position.set(1, 1, 1);
  mainLight.castShadow = true;
  mainLight.shadow.camera.left = -10;
  mainLight.shadow.camera.right = 10;
  mainLight.shadow.camera.top = 10;
  mainLight.shadow.camera.bottom = -10;
  mainLight.shadow.camera.near = 0.5;
  mainLight.shadow.camera.far = 500;

  // Optional: Increasing shadow map size for better shadow resolution
  mainLight.shadow.mapSize.width = 1024; // default is 512
  mainLight.shadow.mapSize.height = 1024; // default is 512

  return { ambientLight, mainLight };
}

export { createLights };
