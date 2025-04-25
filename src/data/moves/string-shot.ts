import { MoveData } from "../../types/MoveData";

const string_shot: MoveData = {
  id: "string-shot",
  name: "oremon.string-shot.name",
  description: "oremon.string-shot.description",
  category: "status",
  accuracy: 95,
  power: undefined,
  pp: 40,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "all_opponents",
  type: "bug",
  effectId: "none",
  effectChance: undefined
};

export default string_shot;
