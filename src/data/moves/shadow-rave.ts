import { MoveData } from "../../types/MoveData";

const shadow_rave: MoveData = {
  id: "shadow-rave",
  name: "oremon.shadow-rave.name",
  description: "oremon.shadow-rave.description",
  category: "special",
  accuracy: 100,
  power: 70,
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

export default shadow_rave;
