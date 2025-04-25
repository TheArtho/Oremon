import { MoveData } from "../../types/MoveData";

const grass_pledge: MoveData = {
  id: "grass-pledge",
  name: "oremon.grass-pledge.name",
  description: "oremon.grass-pledge.description",
  category: "special",
  accuracy: 100,
  power: 80,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  mental: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default grass_pledge;
