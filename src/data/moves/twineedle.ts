import { MoveData } from "../../types/MoveData";

const twineedle: MoveData = {
  id: "twineedle",
  name: "oremon.twineedle.name",
  description: "oremon.twineedle.description",
  category: "physical",
  accuracy: 100,
  power: 25,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "bug",
  effectId: "none",
  effectChance: 20
};

export default twineedle;
