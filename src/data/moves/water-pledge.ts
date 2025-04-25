import { MoveData } from "../../types/MoveData";

const water_pledge: MoveData = {
  id: "water-pledge",
  name: "oremon.water-pledge.name",
  description: "oremon.water-pledge.description",
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
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default water_pledge;
