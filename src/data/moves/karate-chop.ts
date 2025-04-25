import { MoveData } from "../../types/MoveData";

const karate_chop: MoveData = {
  id: "karate-chop",
  name: "oremon.karate-chop.name",
  description: "oremon.karate-chop.description",
  category: "physical",
  accuracy: 100,
  power: 50,
  pp: 25,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default karate_chop;
