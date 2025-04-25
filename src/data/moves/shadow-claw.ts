import { MoveData } from "../../types/MoveData";

const shadow_claw: MoveData = {
  id: "shadow-claw",
  name: "oremon.shadow-claw.name",
  description: "oremon.shadow-claw.description",
  category: "physical",
  accuracy: 100,
  power: 70,
  pp: 15,
  priority: 0,
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

export default shadow_claw;
