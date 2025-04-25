import { MoveData } from "../../types/MoveData";

const outrage: MoveData = {
  id: "outrage",
  name: "oremon.outrage.name",
  description: "oremon.outrage.description",
  category: "physical",
  accuracy: 100,
  power: 120,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "random_opponent",
  type: "dragon",
  effectId: "none",
  effectChance: undefined
};

export default outrage;
