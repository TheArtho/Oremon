import { MoveData } from "../../types/MoveData";

const focus_punch: MoveData = {
  id: "focus-punch",
  name: "oremon.focus-punch.name",
  description: "oremon.focus-punch.description",
  category: "physical",
  accuracy: 100,
  power: 150,
  pp: 20,
  priority: -3,
  flags: {
  contact: true,
  snatch: true,
  recharge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default focus_punch;
