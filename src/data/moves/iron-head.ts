import { MoveData } from "../../types/MoveData";

const iron_head: MoveData = {
  id: "iron-head",
  name: "oremon.iron-head.name",
  description: "oremon.iron-head.description",
  category: "physical",
  accuracy: 100,
  power: 80,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "steel",
  effectId: "none",
  effectChance: 30
};

export default iron_head;
