import { MoveData } from "../../types/MoveData";

const uproar: MoveData = {
  id: "uproar",
  name: "oremon.uproar.name",
  description: "oremon.uproar.description",
  category: "special",
  accuracy: 100,
  power: 90,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  heal: true,
  gravity: true
},
  target: "random_opponent",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default uproar;
