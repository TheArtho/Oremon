import { MoveData } from "../../types/MoveData";

const embargo: MoveData = {
  id: "embargo",
  name: "oremon.embargo.name",
  description: "oremon.embargo.description",
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
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default embargo;
