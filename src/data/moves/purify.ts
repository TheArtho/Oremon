import { MoveData } from "../../types/MoveData";

const purify: MoveData = {
  id: "purify",
  name: "oremon.purify.name",
  description: "oremon.purify.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  powderBased: true
},
  target: "selected_pokemon",
  type: "poison",
  effectId: "none",
  effectChance: undefined
};

export default purify;
