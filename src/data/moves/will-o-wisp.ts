import { MoveData } from "../../types/MoveData";

const will_o_wisp: MoveData = {
  id: "will-o-wisp",
  name: "oremon.will-o-wisp.name",
  description: "oremon.will-o-wisp.description",
  category: "status",
  accuracy: 85,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: undefined
};

export default will_o_wisp;
