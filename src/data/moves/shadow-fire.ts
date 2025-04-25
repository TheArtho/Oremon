import { MoveData } from "../../types/MoveData";

const shadow_fire: MoveData = {
  id: "shadow-fire",
  name: "oremon.shadow-fire.name",
  description: "oremon.shadow-fire.description",
  category: "special",
  accuracy: 100,
  power: 75,
  pp: 0,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "shadow",
  effectId: "none",
  effectChance: 10
};

export default shadow_fire;
