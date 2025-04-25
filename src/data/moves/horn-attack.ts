import { MoveData } from "../../types/MoveData";

const horn_attack: MoveData = {
  id: "horn-attack",
  name: "oremon.horn-attack.name",
  description: "oremon.horn-attack.description",
  category: "physical",
  accuracy: 100,
  power: 65,
  pp: 25,
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

export default horn_attack;
