import { MoveData } from "../../types/MoveData";

const wing_attack: MoveData = {
  id: "wing-attack",
  name: "oremon.wing-attack.name",
  description: "oremon.wing-attack.description",
  category: "physical",
  accuracy: 100,
  power: 60,
  pp: 35,
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

export default wing_attack;
