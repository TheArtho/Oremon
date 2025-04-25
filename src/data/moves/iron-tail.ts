import { MoveData } from "../../types/MoveData";

const iron_tail: MoveData = {
  id: "iron-tail",
  name: "oremon.iron-tail.name",
  description: "oremon.iron-tail.description",
  category: "physical",
  accuracy: 75,
  power: 100,
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

export default iron_tail;
