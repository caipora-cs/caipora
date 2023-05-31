import { AnimationMixer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setupModel } from "./setupModel";

async function loadModels() {
  const loader = new GLTFLoader();

  // Load each model in parallel and wait for all of them to be ready
  const [computerData, coffeematData, woodentableData] = await Promise.all([
    loader.loadAsync("/smol-pc/smol_pc.glb"),
    loader.loadAsync("/coffeemat/coffeemat.glb"),
    loader.loadAsync("/wooden_table/wooden_table.glb"),
  ]);

  // Create a mixer to handle the animation playback
  const mixer = new AnimationMixer(computerData.scene);

  // Create an action for each animation and play it on the computer model
  for (const clip of computerData.animations) {
    const action = mixer.clipAction(clip);
    action.play();
  }

  coffeematData.scene.traverse((object) => {
    console.log(object.name);
  });

  function logObjectHierarchy(obj, level = 0) {
    var prefix = new Array(level + 1).join("..");
    console.log(prefix + " " + obj.name);

    for (var i = 0; i < obj.children.length; i++) {
      logObjectHierarchy(obj.children[i], level + 1);
    }
  }

  coffeematData.scene.traverse((object) => logObjectHierarchy(object));

  coffeematData.scene.traverse((object) => {
    if (object.name === "Sketchfab_model") {
      object.scale.set(0.004, 0.004, 0.004);
    }
  });

  woodentableData.scene.traverse((object) => {
    if (object.name === "Sketchfab_model") {
      object.rotation.z = Math.PI / -2;
    }
  });

  // Log the data so that we can explore it in the console
  console.log("Computer data:", computerData);
  console.log("Coffeemat data:", coffeematData);
  console.log("Woodentable data:", woodentableData);

  // Wrap the model data in a nice object structure
  const computer = setupModel(computerData);
  computer.position.set(3, 0, 0);

  const coffeemat = setupModel(coffeematData);
  coffeemat.position.set(1, 0, 0);

  const woodentable = setupModel(woodentableData);
  woodentable.position.set(-1, -1.79, -0.5);

  // Also return the mixer so that it can be updated every frame
  return { computer, coffeemat, woodentable, mixer };
}

export { loadModels };
