import { MoveData } from "../../types/MoveData";

const curse: MoveData = {
  id: "curse",
  name: "oremon.curse.name",
  description: "oremon.curse.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  gravity: true
},
  target: "specific_move",
  type: "ghost",
  effectId: "none",
  effectChance: undefined
};

export default curse;
