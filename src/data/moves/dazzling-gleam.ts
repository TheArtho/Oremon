import { MoveData } from "../../types/MoveData";

const dazzling_gleam: MoveData = {
  id: "dazzling-gleam",
  name: "oremon.dazzling-gleam.name",
  description: "oremon.dazzling-gleam.description",
  category: "special",
  accuracy: 100,
  power: 80,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "fairy",
  effectId: "none",
  effectChance: undefined
};

export default dazzling_gleam;
