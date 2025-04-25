import { MoveData } from "../../types/MoveData";

const electroweb: MoveData = {
  id: "electroweb",
  name: "oremon.electroweb.name",
  description: "oremon.electroweb.description",
  category: "special",
  accuracy: 95,
  power: 55,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "electric",
  effectId: "none",
  effectChance: 100
};

export default electroweb;
