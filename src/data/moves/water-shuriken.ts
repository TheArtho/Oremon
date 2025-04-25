import { MoveData } from "../../types/MoveData";

const water_shuriken: MoveData = {
  id: "water-shuriken",
  name: "oremon.water-shuriken.name",
  description: "oremon.water-shuriken.description",
  category: "special",
  accuracy: 100,
  power: 15,
  pp: 20,
  priority: 1,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default water_shuriken;
