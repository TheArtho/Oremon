import { MoveData } from "../../types/MoveData";

const natural_gift: MoveData = {
  id: "natural-gift",
  name: "oremon.natural-gift.name",
  description: "oremon.natural-gift.description",
  category: "physical",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default natural_gift;
