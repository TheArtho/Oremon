import { MoveData } from "../../types/MoveData";

const aerial_ace: MoveData = {
  id: "aerial-ace",
  name: "oremon.aerial-ace.name",
  description: "oremon.aerial-ace.description",
  category: "physical",
  accuracy: undefined,
  power: 60,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  punching: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: undefined
};

export default aerial_ace;
