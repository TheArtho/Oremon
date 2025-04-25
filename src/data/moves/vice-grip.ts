import { MoveData } from "../../types/MoveData";

const vice_grip: MoveData = {
  id: "vice-grip",
  name: "oremon.vice-grip.name",
  description: "oremon.vice-grip.description",
  category: "physical",
  accuracy: 100,
  power: 55,
  pp: 30,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default vice_grip;
