import { MoveData } from "../../types/MoveData";

const swift: MoveData = {
  id: "swift",
  name: "oremon.swift.name",
  description: "oremon.swift.description",
  category: "special",
  accuracy: undefined,
  power: 60,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default swift;
