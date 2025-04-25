import { MoveData } from "../../types/MoveData";

const hyperspace_hole: MoveData = {
  id: "hyperspace-hole",
  name: "oremon.hyperspace-hole.name",
  description: "oremon.hyperspace-hole.description",
  category: "special",
  accuracy: undefined,
  power: 80,
  pp: 5,
  priority: 0,
  flags: {
  charge: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default hyperspace_hole;
