import { MoveData } from "../../types/MoveData";

const wood_hammer: MoveData = {
  id: "wood-hammer",
  name: "oremon.wood-hammer.name",
  description: "oremon.wood-hammer.description",
  category: "physical",
  accuracy: 100,
  power: 120,
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
  effectChance: undefined
};

export default wood_hammer;
