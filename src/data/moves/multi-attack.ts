import { MoveData } from "../../types/MoveData";

const multi_attack: MoveData = {
  id: "multi-attack",
  name: "oremon.multi-attack.name",
  description: "oremon.multi-attack.description",
  category: "physical",
  accuracy: 100,
  power: 90,
  pp: 10,
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

export default multi_attack;
