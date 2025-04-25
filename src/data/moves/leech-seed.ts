import { MoveData } from "../../types/MoveData";

const leech_seed: MoveData = {
  id: "leech-seed",
  name: "oremon.leech-seed.name",
  description: "oremon.leech-seed.description",
  category: "status",
  accuracy: 90,
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

export default leech_seed;
