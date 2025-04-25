import { MoveData } from "../../types/MoveData";

const thunder_punch: MoveData = {
  id: "thunder-punch",
  name: "oremon.thunder-punch.name",
  description: "oremon.thunder-punch.description",
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
  type: "electric",
  effectId: "none",
  effectChance: 10
};

export default thunder_punch;
