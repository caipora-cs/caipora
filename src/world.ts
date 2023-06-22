import { loadModels } from "./components/models/models";
import { createCamera } from "./components/camera";
import { createLights } from "./components/lights";
import { createScene } from "./components/scene";

import { createRenderer } from "./systems/renderer";
import { createControls } from "./systems/controls";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";

//Todo: Find a way to declare this variables as private class fields with TS types
let camera: any;
let controls: any;
let renderer: any;
let scene: any;
let loop: any;

class World {
  // Resizer declaration is needed to dispose it later
  private resizer: Resizer;

  //Create a instance of the World class app. Assemble all the components and systems.
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

  //Load the models and add them to the scene.
  async init() {
    const {
      computer,
      coffeemat,
      woodentable,
      monsterplant,
      mixer1,
      mixer2,
      mixer3,
    } = await loadModels();
    // controls.target.copy(computer.position);
    loop.addMixer(mixer1);
    loop.addMixer(mixer2);
    loop.addMixer(mixer3);
    scene.add(computer, coffeemat, woodentable, monsterplant, );
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
