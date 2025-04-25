import { MoveData } from "../../types/MoveData";

const rage: MoveData = {
  id: "rage",
  name: "oremon.rage.name",
  description: "oremon.rage.description",
  category: "physical",
  accuracy: 100,
  power: 20,
  pp: 20,
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

export default rage;
