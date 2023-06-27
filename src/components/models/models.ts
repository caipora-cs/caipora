import { AnimationMixer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setupModel } from "./setupModel";

async function loadModels() {
  const loader = new GLTFLoader();

  // Load each model in parallel and wait for all of them to be ready
  const [
    computerData,
    coffeematData,
    woodentableData,
    monsterplantData,
    portalData,
  ] = await Promise.all([
    loader.loadAsync("/smol-pc/smol_pc.glb"),
    loader.loadAsync("/coffeemat/coffeemat.glb"),
    loader.loadAsync("/wooden_table/wooden_table.glb"),
    loader.loadAsync("/monster_plant/monster_plant.glb"),
    loader.loadAsync("/portal/portal.glb"),
  ]);

  // Create a mixer to handle the animation playback
  const mixer1 = new AnimationMixer(computerData.scene);
  const mixer2 = new AnimationMixer(monsterplantData.scene);
  const mixer3 = new AnimationMixer(portalData.scene);

  // Create an action for each animation and play it on the computer model
  for (const clip of computerData.animations) {
    const action = mixer1.clipAction(clip);
    action.play();
  }
  // And for the monster plant
  for (const clip of monsterplantData.animations) {
    const action = mixer2.clipAction(clip);
    action.play();
  }
  // And for the portal
  for (const clip of portalData.animations) {
    const action = mixer3.clipAction(clip);
    action.play();
  }
  // Put shadows on the objects
  // This one is for the computer
  computerData.scene.traverse(object => {
    object.castShadow = true;
    object.receiveShadow = true;
  });

  // Log the data so that we can explore it in the console
  // This one is to find out the name of the object in the scene
  // coffeematData.scene.traverse(object => {
  //   console.log(object.name);
  // });
  // This one is to find out the hierarchy of the object in the scene
  // function logObjectHierarchy(obj, level = 0) {
  //   var prefix = new Array(level + 1).join("..");
  //   console.log(prefix + " " + obj.name);
  //
  //   for (var i = 0; i < obj.children.length; i++) {
  //     logObjectHierarchy(obj.children[i], level + 1);
  //   }
  // }
  //Call the function you can change the name of the object to find out the hierarchy
  //portalData.scene.traverse(object => logObjectHierarchy(object));
  //Now that we know the name of the object, we can manipulate it
  //Size of the object - Sacalar
  coffeematData.scene.traverse(object => {
    if (object.name === "Sketchfab_model") {
      object.scale.set(0.004, 0.004, 0.004);
    }
  });
  monsterplantData.scene.traverse(object => {
    if (object.name === "Sketchfab_model") {
      object.scale.set(0.004, 0.004, 0.004);
    }
  });
  portalData.scene.traverse(object => {
    if (object.name === "Sketchfab_Scene") {
      object.scale.set(0.004, 0.004, 0.004);
    }
  });
  //Position of the object - Vector3
  woodentableData.scene.traverse(object => {
    if (object.name === "Sketchfab_model") {
      object.rotation.z = Math.PI / -2;
    }
  });

  // // Log the data so that we can explore it in the console
  // console.log("Computer data:", computerData);
  // console.log("Coffeemat data:", coffeematData);
  // console.log("Woodentable data:", woodentableData);
  // console.log("Monsterplant data:", monsterplantData);
  // console.log("Portal data:", portalData);

  // Wrap the model data in a nice object structure
  const computer = setupModel(computerData);
  computer.position.set(3, 0, 0);

  const coffeemat = setupModel(coffeematData);
  coffeemat.position.set(1, 0, 0);

  const woodentable = setupModel(woodentableData);
  woodentable.position.set(-1, -1.79, -0.5);

  const monsterplant = setupModel(monsterplantData);
  monsterplant.position.set(-1, -0.1, 1);

  const portal = setupModel(portalData);
  portal.position.set(-6, 0, -3);

  // Also return the mixer so that it can be updated every frame
  return {
    computer,
    coffeemat,
    woodentable,
    monsterplant,
    portal,
    mixer1,
    mixer2,
    mixer3,
  };
}

export { loadModels };
