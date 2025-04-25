import { MoveData } from "../../types/MoveData";

const power_split: MoveData = {
  id: "power-split",
  name: "oremon.power-split.name",
  description: "oremon.power-split.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default power_split;
