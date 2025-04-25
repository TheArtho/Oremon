import { MoveData } from "../../types/MoveData";

const dragon_tail: MoveData = {
  id: "dragon-tail",
  name: "oremon.dragon-tail.name",
  description: "oremon.dragon-tail.description",
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
  type: "dragon",
  effectId: "none",
  effectChance: undefined
};

export default dragon_tail;
