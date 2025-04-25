import { MoveData } from "../../types/MoveData";

const whirlpool: MoveData = {
  id: "whirlpool",
  name: "oremon.whirlpool.name",
  description: "oremon.whirlpool.description",
  category: "special",
  accuracy: 85,
  power: 35,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  authentic: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: 100
};

export default whirlpool;
