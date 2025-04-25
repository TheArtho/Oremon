import { MoveData } from "../../types/MoveData";

const worry_seed: MoveData = {
  id: "worry-seed",
  name: "oremon.worry-seed.name",
  description: "oremon.worry-seed.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default worry_seed;
