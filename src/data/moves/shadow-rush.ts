import { MoveData } from "../../types/MoveData";

const shadow_rush: MoveData = {
  id: "shadow-rush",
  name: "oremon.shadow-rush.name",
  description: "oremon.shadow-rush.description",
  category: "physical",
  accuracy: 100,
  power: 55,
  pp: 0,
  priority: 0,
  flags: {
  contact: true,
  snatch: true
},
  target: "selected_pokemon",
  type: "shadow",
  effectId: "none",
  effectChance: undefined
};

export default shadow_rush;
