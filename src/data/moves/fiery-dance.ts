import { MoveData } from "../../types/MoveData";

const fiery_dance: MoveData = {
  id: "fiery-dance",
  name: "oremon.fiery-dance.name",
  description: "oremon.fiery-dance.description",
  category: "special",
  accuracy: 100,
  power: 80,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 50
};

export default fiery_dance;
