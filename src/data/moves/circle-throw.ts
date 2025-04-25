import { MoveData } from "../../types/MoveData";

const circle_throw: MoveData = {
  id: "circle-throw",
  name: "oremon.circle-throw.name",
  description: "oremon.circle-throw.description",
  category: "physical",
  accuracy: 90,
  power: 60,
  pp: 10,
  priority: -6,
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

export default circle_throw;
