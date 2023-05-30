import { loadGlobe } from "./components/globe/globe";
import { createCamera } from "./components/camera";
import { createLights } from "./components/lights";
import { createScene } from "./components/scene";

import { createRenderer } from "./systems/renderer";
import { createControls } from "./systems/controls";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";

//Find a way to declare this variables as private class fields with TS types
let camera: any;
let controls: any;
let renderer: any;
let scene: any;
let loop: any;

class World {
  private resizer: Resizer;
  //Create a instance of the World class app
  constructor(container: any) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    controls = createControls(camera, renderer.domElement);
    loop = new Loop(camera, scene, renderer);

    const { ambientLight, mainLight } = createLights();

    // loop.updatables.push(controls);
    container.append(renderer.domElement);
    scene.add(ambientLight, mainLight);

    this.resizer = new Resizer(container, camera, renderer);
  }
  async init() {
    const { globe, mixer } = await loadGlobe();
    controls.target.copy(globe.position);
    loop.addMixer(mixer);
    scene.add(globe);
  }
  //Render the scene.
  render() {
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  stop() {
    loop.stop();
  }
  dispose() {
    this.resizer.dispose();
  }
}

export { World };
