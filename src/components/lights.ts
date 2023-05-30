import { AmbientLight, DirectionalLight } from "three";

function createLights() {
  const ambientLight = new AmbientLight(0xffffff, 0.5);

  const mainLight = new DirectionalLight("white", 1);
  mainLight.position.set(1, 1, 1);

  return { ambientLight, mainLight };
}

export { createLights };
