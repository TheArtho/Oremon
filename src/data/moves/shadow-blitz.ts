import { MoveData } from "../../types/MoveData";

const shadow_blitz: MoveData = {
  id: "shadow-blitz",
  name: "oremon.shadow-blitz.name",
  description: "oremon.shadow-blitz.description",
  category: "physical",
  accuracy: 100,
  power: 40,
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

export default shadow_blitz;
