import { MoveData } from "../../types/MoveData";

const horn_drill: MoveData = {
  id: "horn-drill",
  name: "oremon.horn-drill.name",
  description: "oremon.horn-drill.description",
  category: "physical",
  accuracy: 30,
  power: undefined,
  pp: 5,
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

export default horn_drill;
