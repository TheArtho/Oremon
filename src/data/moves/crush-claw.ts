import { MoveData } from "../../types/MoveData";

const crush_claw: MoveData = {
  id: "crush-claw",
  name: "oremon.crush-claw.name",
  description: "oremon.crush-claw.description",
  category: "physical",
  accuracy: 95,
  power: 75,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 50
};

export default crush_claw;
