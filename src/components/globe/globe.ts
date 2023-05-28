import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { setupModel } from './setupModel'

 async function loadGlobe() {
  const loader = new GLTFLoader()
  const [globeData] = await Promise.all ([
  loader.loadAsync('/globe/scene.gltf')
  ]);
  console.log('Zoooommm!',globeData);
  const globe = setupModel(globeData);
  globe.position.set(7, 0,-10);
  return { globe };
} 

export { loadGlobe };
