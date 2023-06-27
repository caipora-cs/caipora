import { WebGLRenderer } from "three";

function createRenderer() {
  //Typescript type declarations for Three.js might not include the pCorrectLights so as a workaround i assert the object property
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
  }) as WebGLRenderer & { physicallyCorrectLights: boolean };

  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;

  return renderer;
}

export { createRenderer };
