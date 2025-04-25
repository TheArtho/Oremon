import { MoveData } from "../../types/MoveData";

const sweet_scent: MoveData = {
  id: "sweet-scent",
  name: "oremon.sweet-scent.name",
  description: "oremon.sweet-scent.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "all_opponents",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default sweet_scent;
