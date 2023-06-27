import { Clock, Camera, Scene, WebGLRenderer, AnimationMixer } from "three";

const clock = new Clock();

class Loop {
  private camera: Camera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private updatables: any[];
  private mixers: AnimationMixer[] = [];
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  //Mixer for animations in the scene
  addMixer(mixer: AnimationMixer) {
    this.mixers.push(mixer);
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();

      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    // only call the getDelta function once per frame!
    const delta = clock.getDelta();

    // console.log(
    //   `The last frame rendered in ${delta * 1000} milliseconds`,
    // );
    // update each mixer with the time delta
    for (const mixer of this.mixers) {
      mixer.update(delta);
    }

    for (const object of this.updatables) {
      if (typeof object.tick === "function") {
        object.tick(delta);
      } else {
        // console.warn("Not a tickable object", object);
      }
    }
  }
}

export { Loop };
