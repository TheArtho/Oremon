import { MoveData } from "../../types/MoveData";

const leaf_storm: MoveData = {
  id: "leaf-storm",
  name: "oremon.leaf-storm.name",
  description: "oremon.leaf-storm.description",
  category: "special",
  accuracy: 90,
  power: 130,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: 100
};

export default leaf_storm;
