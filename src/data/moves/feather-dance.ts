import { MoveData } from "../../types/MoveData";

const feather_dance: MoveData = {
  id: "feather-dance",
  name: "oremon.feather-dance.name",
  description: "oremon.feather-dance.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: undefined
};

export default feather_dance;
