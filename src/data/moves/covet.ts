import { MoveData } from "../../types/MoveData";

const covet: MoveData = {
  id: "covet",
  name: "oremon.covet.name",
  description: "oremon.covet.description",
  category: "physical",
  accuracy: 100,
  power: 60,
  pp: 25,
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

export default covet;
