import { MoveData } from "../../types/MoveData";

const double_edge: MoveData = {
  id: "double-edge",
  name: "oremon.double-edge.name",
  description: "oremon.double-edge.description",
  category: "physical",
  accuracy: 100,
  power: 120,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default double_edge;
