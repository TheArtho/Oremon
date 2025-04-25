import { MoveData } from "../../types/MoveData";

const shadow_down: MoveData = {
  id: "shadow-down",
  name: "oremon.shadow-down.name",
  description: "oremon.shadow-down.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 0,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "opponents_field",
  type: "shadow",
  effectId: "none",
  effectChance: undefined
};

export default shadow_down;
