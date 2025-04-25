import { MoveData } from "../../types/MoveData";

const dynamic_punch: MoveData = {
  id: "dynamic-punch",
  name: "oremon.dynamic-punch.name",
  description: "oremon.dynamic-punch.description",
  category: "physical",
  accuracy: 50,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  recharge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: 100
};

export default dynamic_punch;
