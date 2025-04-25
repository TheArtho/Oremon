import { MoveData } from "../../types/MoveData";

const fire_punch: MoveData = {
  id: "fire-punch",
  name: "oremon.fire-punch.name",
  description: "oremon.fire-punch.description",
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
  type: "fire",
  effectId: "none",
  effectChance: 10
};

export default fire_punch;
