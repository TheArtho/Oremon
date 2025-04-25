import { MoveData } from "../../types/MoveData";

const heal_block: MoveData = {
  id: "heal-block",
  name: "oremon.heal-block.name",
  description: "oremon.heal-block.description",
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
  target: "all_opponents",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default heal_block;
