import { MoveData } from "../../types/MoveData";

const air_cutter: MoveData = {
  id: "air-cutter",
  name: "oremon.air-cutter.name",
  description: "oremon.air-cutter.description",
  category: "special",
  accuracy: 95,
  power: 60,
  pp: 25,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "flying",
  effectId: "none",
  effectChance: undefined
};

export default air_cutter;
