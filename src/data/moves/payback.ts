import { MoveData } from "../../types/MoveData";

const payback: MoveData = {
  id: "payback",
  name: "oremon.payback.name",
  description: "oremon.payback.description",
  category: "physical",
  accuracy: 100,
  power: 50,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default payback;
