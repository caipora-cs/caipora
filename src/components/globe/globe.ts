import { AnimationMixer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { setupModel } from './setupModel';

async function loadGlobe() {
  const loader = new GLTFLoader();
  const globeData = await loader.loadAsync('/globe/a_windy_day.glb');

  // Create a mixer to handle the animation playback
  const mixer = new AnimationMixer(globeData.scene);

  // Create an action for each animation and play it
  for (const clip of globeData.animations) {
    const action = mixer.clipAction(clip);
    action.play();
  }

  console.log('Globe data:', globeData);
  
  const globe = setupModel(globeData);
  globe.position.set(0, 0, 0);

  // Also return the mixer so that it can be updated every frame
  return { globe, mixer };
}

export { loadGlobe };


