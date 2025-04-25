import { MoveData } from "../../types/MoveData";

const x_scissor: MoveData = {
  id: "x-scissor",
  name: "oremon.x-scissor.name",
  description: "oremon.x-scissor.description",
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
  type: "bug",
  effectId: "none",
  effectChance: undefined
};

export default x_scissor;
