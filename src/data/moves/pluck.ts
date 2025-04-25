import { MoveData } from "../../types/MoveData";

const pluck: MoveData = {
  id: "pluck",
  name: "oremon.pluck.name",
  description: "oremon.pluck.description",
  category: "physical",
  accuracy: 100,
  power: 60,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  punching: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: undefined
};

export default pluck;
