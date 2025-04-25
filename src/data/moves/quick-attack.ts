import { MoveData } from "../../types/MoveData";

const quick_attack: MoveData = {
  id: "quick-attack",
  name: "oremon.quick-attack.name",
  description: "oremon.quick-attack.description",
  category: "physical",
  accuracy: 100,
  power: 40,
  pp: 30,
  priority: 1,
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

export default quick_attack;
