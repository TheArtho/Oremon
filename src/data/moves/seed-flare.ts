import { MoveData } from "../../types/MoveData";

const seed_flare: MoveData = {
  id: "seed-flare",
  name: "oremon.seed-flare.name",
  description: "oremon.seed-flare.description",
  category: "special",
  accuracy: 85,
  power: 120,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: 40
};

export default seed_flare;
