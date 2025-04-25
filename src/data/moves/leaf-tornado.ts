import { MoveData } from "../../types/MoveData";

const leaf_tornado: MoveData = {
  id: "leaf-tornado",
  name: "oremon.leaf-tornado.name",
  description: "oremon.leaf-tornado.description",
  category: "special",
  accuracy: 90,
  power: 65,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: 50
};

export default leaf_tornado;
