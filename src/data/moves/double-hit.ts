import { MoveData } from "../../types/MoveData";

const double_hit: MoveData = {
  id: "double-hit",
  name: "oremon.double-hit.name",
  description: "oremon.double-hit.description",
  category: "physical",
  accuracy: 90,
  power: 35,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default double_hit;
