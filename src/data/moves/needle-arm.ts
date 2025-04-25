import { MoveData } from "../../types/MoveData";

const needle_arm: MoveData = {
  id: "needle-arm",
  name: "oremon.needle-arm.name",
  description: "oremon.needle-arm.description",
  category: "physical",
  accuracy: 100,
  power: 60,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: 30
};

export default needle_arm;
