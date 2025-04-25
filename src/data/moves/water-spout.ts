import { MoveData } from "../../types/MoveData";

const water_spout: MoveData = {
  id: "water-spout",
  name: "oremon.water-spout.name",
  description: "oremon.water-spout.description",
  category: "special",
  accuracy: 100,
  power: 150,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default water_spout;
