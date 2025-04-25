import { MoveData } from "../../types/MoveData";

const spark: MoveData = {
  id: "spark",
  name: "oremon.spark.name",
  description: "oremon.spark.description",
  category: "physical",
  accuracy: 100,
  power: 65,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: 30
};

export default spark;
