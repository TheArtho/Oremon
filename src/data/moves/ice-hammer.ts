import { MoveData } from "../../types/MoveData";

const ice_hammer: MoveData = {
  id: "ice-hammer",
  name: "oremon.ice-hammer.name",
  description: "oremon.ice-hammer.description",
  category: "physical",
  accuracy: 90,
  power: 100,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  recharge: true
},
  target: "selected_pokemon",
  type: "ice",
  effectId: "none",
  effectChance: 100
};

export default ice_hammer;
