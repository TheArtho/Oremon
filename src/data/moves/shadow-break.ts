import { MoveData } from "../../types/MoveData";

const shadow_break: MoveData = {
  id: "shadow-break",
  name: "oremon.shadow-break.name",
  description: "oremon.shadow-break.description",
  category: "physical",
  accuracy: 100,
  power: 75,
  pp: 0,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "shadow",
  effectId: "none",
  effectChance: undefined
};

export default shadow_break;
