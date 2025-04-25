import { MoveData } from "../../types/MoveData";

const struggle_bug: MoveData = {
  id: "struggle-bug",
  name: "oremon.struggle-bug.name",
  description: "oremon.struggle-bug.description",
  category: "special",
  accuracy: 100,
  power: 50,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "bug",
  effectId: "none",
  effectChance: 100
};

export default struggle_bug;
