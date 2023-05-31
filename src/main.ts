import "./style.css";
import { World } from "./world";

// const mainElement = document.querySelector<HTMLDivElement>('#app')
// if (mainElement) {
//   initThreeJsScene(mainElement)
// }

declare const WinBox: any;
async function main() {
  const container = document.querySelector("#scene-container");
  const about = document.querySelector("#about");
  const contact = document.querySelector("#contact");
  const aboutContent = document.querySelector("#about-content");
  const contactContent = document.querySelector("#contact-content");
  //Create a instance of the World class app
  if (container) {
    const world = new World(container);
    //Render the scene. World is the encapsulation of Three.js
    await world.init();
    world.start();
  }
  about.addEventListener("click", () => {
    const aboutBox = new WinBox({
      title: "About Me",
      // modal: true,
      width: "400px",
      height: "400px",
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: aboutContent,
      onfocus: function () {
        this.setBackground("#00aa00");
      },
      onblur: function () {
        this.setBackground("#777");
      },
    });
  });

  contact.addEventListener("click", () => {
    const contactBox = new WinBox({
      title: "Contact Me",
      width: "400px",
      height: "400px",
      top: 150,
      right: 50,
      bottom: 50,
      left: 250,
      mount: contactContent,
      onfocus: function () {
        this.setBackground("#00aa00");
      },
      onblur: function () {
        this.setBackground("#777");
      },
    });
  });
}
//it outputs a render method that renders the scene
//catch errors:
main().catch((err) => {
  console.error(err);
});
