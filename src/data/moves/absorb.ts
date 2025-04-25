import { MoveData } from "../../types/MoveData";

const absorb: MoveData = {
  id: "absorb",
  name: "oremon.absorb.name",
  description: "oremon.absorb.description",
  category: "special",
  accuracy: 100,
  power: 20,
  pp: 25,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  powderBased: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default absorb;
