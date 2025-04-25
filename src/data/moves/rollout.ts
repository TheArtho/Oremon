import { MoveData } from "../../types/MoveData";

const rollout: MoveData = {
  id: "rollout",
  name: "oremon.rollout.name",
  description: "oremon.rollout.description",
  category: "physical",
  accuracy: 90,
  power: 30,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "rock",
  effectId: "none",
  effectChance: undefined
};

export default rollout;
