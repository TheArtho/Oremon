import { MoveData } from "../../types/MoveData";

const first_impression: MoveData = {
  id: "first-impression",
  name: "oremon.first-impression.name",
  description: "oremon.first-impression.description",
  category: "physical",
  accuracy: 100,
  power: 90,
  pp: 10,
  priority: 2,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "bug",
  effectId: "none",
  effectChance: undefined
};

export default first_impression;
