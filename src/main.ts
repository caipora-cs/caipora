import "./style.css";
import { World } from "./world";

// const mainElement = document.querySelector<HTMLDivElement>('#app')
// if (mainElement) {
//   initThreeJsScene(mainElement)
// }

declare const WinBox: any;
async function main() {
  const container = document.querySelector("#scene-container");
 //Create a instance of the World class app
  if (container) {
    const world = new World(container);
    //Render the scene. World is the encapsulation of Three.js
    await world.init();
    world.start();
  }
}
//it outputs a render method that renders the scene
//catch errors:
main().catch((err) => {
  console.error(err);
});
