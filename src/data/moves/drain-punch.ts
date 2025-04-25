import { MoveData } from "../../types/MoveData";

const drain_punch: MoveData = {
  id: "drain-punch",
  name: "oremon.drain-punch.name",
  description: "oremon.drain-punch.description",
  category: "physical",
  accuracy: 100,
  power: 75,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  recharge: true,
  powderBased: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default drain_punch;
