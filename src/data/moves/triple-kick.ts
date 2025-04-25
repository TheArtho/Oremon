import { MoveData } from "../../types/MoveData";

const triple_kick: MoveData = {
  id: "triple-kick",
  name: "oremon.triple-kick.name",
  description: "oremon.triple-kick.description",
  category: "physical",
  accuracy: 90,
  power: 10,
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

export default triple_kick;
