import { MoveData } from "../../types/MoveData";

const water_gun: MoveData = {
  id: "water-gun",
  name: "oremon.water-gun.name",
  description: "oremon.water-gun.description",
  category: "special",
  accuracy: 100,
  power: 40,
  pp: 25,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default water_gun;
