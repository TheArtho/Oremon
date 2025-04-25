import { MoveData } from "../../types/MoveData";

const dragon_claw: MoveData = {
  id: "dragon-claw",
  name: "oremon.dragon-claw.name",
  description: "oremon.dragon-claw.description",
  category: "physical",
  accuracy: 100,
  power: 80,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dragon",
  effectId: "none",
  effectChance: undefined
};

export default dragon_claw;
