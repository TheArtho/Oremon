import { MoveData } from "../../types/MoveData";

const vital_throw: MoveData = {
  id: "vital-throw",
  name: "oremon.vital-throw.name",
  description: "oremon.vital-throw.description",
  category: "physical",
  accuracy: undefined,
  power: 70,
  pp: 10,
  priority: -1,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default vital_throw;
