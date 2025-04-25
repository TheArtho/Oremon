import { MoveData } from "../../types/MoveData";

const heavy_slam: MoveData = {
  id: "heavy-slam",
  name: "oremon.heavy-slam.name",
  description: "oremon.heavy-slam.description",
  category: "physical",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  mental: true
},
  target: "selected_pokemon",
  type: "steel",
  effectId: "none",
  effectChance: undefined
};

export default heavy_slam;
