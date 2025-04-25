import { MoveData } from "../../types/MoveData";

const comet_punch: MoveData = {
  id: "comet-punch",
  name: "oremon.comet-punch.name",
  description: "oremon.comet-punch.description",
  category: "physical",
  accuracy: 85,
  power: 18,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  recharge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default comet_punch;
