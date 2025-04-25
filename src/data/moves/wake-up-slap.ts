import { MoveData } from "../../types/MoveData";

const wake_up_slap: MoveData = {
  id: "wake-up-slap",
  name: "oremon.wake-up-slap.name",
  description: "oremon.wake-up-slap.description",
  category: "physical",
  accuracy: 100,
  power: 70,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default wake_up_slap;
