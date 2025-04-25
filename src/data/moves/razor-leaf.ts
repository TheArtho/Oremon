import { MoveData } from "../../types/MoveData";

const razor_leaf: MoveData = {
  id: "razor-leaf",
  name: "oremon.razor-leaf.name",
  description: "oremon.razor-leaf.description",
  category: "physical",
  accuracy: 95,
  power: 55,
  pp: 25,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default razor_leaf;
