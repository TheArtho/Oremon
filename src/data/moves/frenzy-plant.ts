import { MoveData } from "../../types/MoveData";

const frenzy_plant: MoveData = {
  id: "frenzy-plant",
  name: "oremon.frenzy-plant.name",
  description: "oremon.frenzy-plant.description",
  category: "special",
  accuracy: 90,
  power: 150,
  pp: 5,
  priority: 0,
  flags: {
  reflectable: true,
  snatch: true,
  charge: true,
  mental: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default frenzy_plant;
