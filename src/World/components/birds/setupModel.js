import { AnimationMixer } from "../../../three/build/three.module.js";

function setupModel(data) {
  console.log("qbirdaaaaaaaaaaaaaa");
  const model = data.scene.children[0];
  const clip = data.animations[0];
  console.log(model);
  console.log(clip);
  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.tick = (delta) => mixer.update(delta);

  return model;
}

export { setupModel };
