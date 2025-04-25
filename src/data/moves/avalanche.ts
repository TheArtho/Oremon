import { MoveData } from "../../types/MoveData";

const avalanche: MoveData = {
  id: "avalanche",
  name: "oremon.avalanche.name",
  description: "oremon.avalanche.description",
  category: "physical",
  accuracy: 100,
  power: 60,
  pp: 10,
  priority: -4,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ice",
  effectId: "none",
  effectChance: undefined
};

export default avalanche;
