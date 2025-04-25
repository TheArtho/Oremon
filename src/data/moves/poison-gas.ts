import { MoveData } from "../../types/MoveData";

const poison_gas: MoveData = {
  id: "poison-gas",
  name: "oremon.poison-gas.name",
  description: "oremon.poison-gas.description",
  category: "status",
  accuracy: 90,
  power: undefined,
  pp: 40,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "all_opponents",
  type: "poison",
  effectId: "none",
  effectChance: undefined
};

export default poison_gas;
