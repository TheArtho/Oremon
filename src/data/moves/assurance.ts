import { MoveData } from "../../types/MoveData";

const assurance: MoveData = {
  id: "assurance",
  name: "oremon.assurance.name",
  description: "oremon.assurance.description",
  category: "physical",
  accuracy: 100,
  power: 60,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default assurance;
