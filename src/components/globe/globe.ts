import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

 function loadGlobe() {
  const loader = new GLTFLoader()
  const globeData =  loader.loadAsync('/public/globe/scene.gltf')
  console.log('Zoooommm!',globeData);
} 

export { loadGlobe };
