import { MoveData } from "../../types/MoveData";

const false_swipe: MoveData = {
  id: "false-swipe",
  name: "oremon.false-swipe.name",
  description: "oremon.false-swipe.description",
  category: "physical",
  accuracy: 100,
  power: 40,
  pp: 40,
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

export default false_swipe;
