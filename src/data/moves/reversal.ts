import { MoveData } from "../../types/MoveData";

const reversal: MoveData = {
  id: "reversal",
  name: "oremon.reversal.name",
  description: "oremon.reversal.description",
  category: "physical",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
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

export default reversal;
