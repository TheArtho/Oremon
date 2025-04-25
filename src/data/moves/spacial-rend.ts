import { MoveData } from "../../types/MoveData";

const spacial_rend: MoveData = {
  id: "spacial-rend",
  name: "oremon.spacial-rend.name",
  description: "oremon.spacial-rend.description",
  category: "special",
  accuracy: 95,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dragon",
  effectId: "none",
  effectChance: undefined
};

export default spacial_rend;
