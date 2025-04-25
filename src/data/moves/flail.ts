import { MoveData } from "../../types/MoveData";

const flail: MoveData = {
  id: "flail",
  name: "oremon.flail.name",
  description: "oremon.flail.description",
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
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default flail;
