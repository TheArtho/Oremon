import { MoveData } from "../../types/MoveData";

const spore: MoveData = {
  id: "spore",
  name: "oremon.spore.name",
  description: "oremon.spore.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  dance: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default spore;
