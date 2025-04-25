import { MoveData } from "../../types/MoveData";

const yawn: MoveData = {
  id: "yawn",
  name: "oremon.yawn.name",
  description: "oremon.yawn.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default yawn;
