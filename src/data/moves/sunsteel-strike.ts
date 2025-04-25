import { MoveData } from "../../types/MoveData";

const sunsteel_strike: MoveData = {
  id: "sunsteel-strike",
  name: "oremon.sunsteel-strike.name",
  description: "oremon.sunsteel-strike.description",
  category: "physical",
  accuracy: 100,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "steel",
  effectId: "none",
  effectChance: undefined
};

export default sunsteel_strike;
