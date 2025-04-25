import { MoveData } from "../../types/MoveData";

const constrict: MoveData = {
  id: "constrict",
  name: "oremon.constrict.name",
  description: "oremon.constrict.description",
  category: "physical",
  accuracy: 100,
  power: 10,
  pp: 35,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 10
};

export default constrict;
