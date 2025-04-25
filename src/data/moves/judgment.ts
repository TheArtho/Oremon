import { MoveData } from "../../types/MoveData";

const judgment: MoveData = {
  id: "judgment",
  name: "oremon.judgment.name",
  description: "oremon.judgment.description",
  category: "special",
  accuracy: 100,
  power: 100,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default judgment;
