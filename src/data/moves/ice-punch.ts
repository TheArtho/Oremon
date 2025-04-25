import { MoveData } from "../../types/MoveData";

const ice_punch: MoveData = {
  id: "ice-punch",
  name: "oremon.ice-punch.name",
  description: "oremon.ice-punch.description",
  category: "physical",
  accuracy: 100,
  power: 75,
  pp: 15,
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
  effectChance: 10
};

export default ice_punch;
