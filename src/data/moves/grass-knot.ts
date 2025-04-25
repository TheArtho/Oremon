import { MoveData } from "../../types/MoveData";

const grass_knot: MoveData = {
  id: "grass-knot",
  name: "oremon.grass-knot.name",
  description: "oremon.grass-knot.description",
  category: "special",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  mental: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default grass_knot;
