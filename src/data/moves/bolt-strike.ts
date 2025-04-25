import { MoveData } from "../../types/MoveData";

const bolt_strike: MoveData = {
  id: "bolt-strike",
  name: "oremon.bolt-strike.name",
  description: "oremon.bolt-strike.description",
  category: "physical",
  accuracy: 85,
  power: 130,
  pp: 5,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: 20
};

export default bolt_strike;
