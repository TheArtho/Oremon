import { MoveData } from "../../types/MoveData";

const shadow_sneak: MoveData = {
  id: "shadow-sneak",
  name: "oremon.shadow-sneak.name",
  description: "oremon.shadow-sneak.description",
  category: "physical",
  accuracy: 100,
  power: 40,
  pp: 30,
  priority: 1,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: undefined
};

export default shadow_sneak;
