import { MoveData } from "../../types/MoveData";

const bullet_punch: MoveData = {
  id: "bullet-punch",
  name: "oremon.bullet-punch.name",
  description: "oremon.bullet-punch.description",
  category: "physical",
  accuracy: 100,
  power: 40,
  pp: 30,
  priority: 1,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  recharge: true
},
  target: "selected_pokemon",
  type: "steel",
  effectId: "none",
  effectChance: undefined
};

export default bullet_punch;
