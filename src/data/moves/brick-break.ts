import { MoveData } from "../../types/MoveData";

const brick_break: MoveData = {
  id: "brick-break",
  name: "oremon.brick-break.name",
  description: "oremon.brick-break.description",
  category: "physical",
  accuracy: 100,
  power: 75,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default brick_break;
