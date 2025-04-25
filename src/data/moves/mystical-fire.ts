import { MoveData } from "../../types/MoveData";

const mystical_fire: MoveData = {
  id: "mystical-fire",
  name: "oremon.mystical-fire.name",
  description: "oremon.mystical-fire.description",
  category: "special",
  accuracy: 100,
  power: 75,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 100
};

export default mystical_fire;
