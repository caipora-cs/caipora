import { PerspectiveCamera } from "three";
//library for smooth camera aniamtions
import gsap from 'gsap';

function createCamera() {
  
  const camera = new PerspectiveCamera(25, 1, 0.1, 100);

  camera.position.set(8, 4, 15);

  //Event listener for devmode button, the camera will move to the PC
  const devModeButton = document.querySelector("#dev-mode");
  
  devModeButton.addEventListener('click', function() { 
    gsap.to(camera.position, {
      z: 8,
      x: 3,
      y: 4,
      duration: 1.5,
      onUpdate: function() {
        camera.lookAt(3,0,0);
      }
    })
  })
 
  // devModeButton.addEventListener("click", () => {});


  return camera;
}

export { createCamera };
