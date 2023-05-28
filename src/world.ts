import { loadGlobe } from './components/globe/globe';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createScene } from './components/scene';

import { createRenderer } from './systems/renderer';
import { createControls } from './systems/controls';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

let camera: any;
let controls: any;
let renderer: any;
let scene: any;
let loop: any;

class World {
  constructor(container: any) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);
    loop = new Loop(camera, scene, renderer);
    const { ambientLight, mainLight } = createLights();
    loop.updatables.push(controls);
    container.append(renderer.domElement);
    scene.add(ambientLight, mainLight);
    const resizer = new Resizer(container, camera, renderer);
  }
  async init() {
    const { globe } = await loadGlobe();
    controls.target.copy(globe.position);
    scene.add(globe);
  }
  render() {
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  stop() {
    loop.stop();
  }
}

export { World };

