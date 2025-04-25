import { MoveData } from "../../types/MoveData";

const guillotine: MoveData = {
  id: "guillotine",
  name: "oremon.guillotine.name",
  description: "oremon.guillotine.description",
  category: "physical",
  accuracy: 30,
  power: undefined,
  pp: 5,
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

export default guillotine;
