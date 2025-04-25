import { MoveData } from "../../types/MoveData";

const petal_dance: MoveData = {
  id: "petal-dance",
  name: "oremon.petal-dance.name",
  description: "oremon.petal-dance.description",
  category: "special",
  accuracy: 100,
  power: 120,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "random_opponent",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default petal_dance;
