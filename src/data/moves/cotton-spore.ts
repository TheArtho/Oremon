import { MoveData } from "../../types/MoveData";

const cotton_spore: MoveData = {
  id: "cotton-spore",
  name: "oremon.cotton-spore.name",
  description: "oremon.cotton-spore.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 40,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  dance: true
},
  target: "all_opponents",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default cotton_spore;
