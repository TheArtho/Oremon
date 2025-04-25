import { MoveData } from "../../types/MoveData";

const feint_attack: MoveData = {
  id: "feint-attack",
  name: "oremon.feint-attack.name",
  description: "oremon.feint-attack.description",
  category: "physical",
  accuracy: undefined,
  power: 60,
  pp: 20,
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

export default feint_attack;
