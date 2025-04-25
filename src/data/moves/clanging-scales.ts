import { MoveData } from "../../types/MoveData";

const clanging_scales: MoveData = {
  id: "clanging-scales",
  name: "oremon.clanging-scales.name",
  description: "oremon.clanging-scales.description",
  category: "special",
  accuracy: 100,
  power: 110,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  heal: true,
  gravity: true
},
  target: "all_opponents",
  type: "dragon",
  effectId: "none",
  effectChance: 100
};

export default clanging_scales;
