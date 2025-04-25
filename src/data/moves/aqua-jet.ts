import { MoveData } from "../../types/MoveData";

const aqua_jet: MoveData = {
  id: "aqua-jet",
  name: "oremon.aqua-jet.name",
  description: "oremon.aqua-jet.description",
  category: "physical",
  accuracy: 100,
  power: 40,
  pp: 20,
  priority: 1,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default aqua_jet;
