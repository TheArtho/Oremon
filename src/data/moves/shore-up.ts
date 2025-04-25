import { MoveData } from "../../types/MoveData";

const shore_up: MoveData = {
  id: "shore-up",
  name: "oremon.shore-up.name",
  description: "oremon.shore-up.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  defrost: true,
  powderBased: true
},
  target: "user",
  type: "ground",
  effectId: "none",
  effectChance: undefined
};

export default shore_up;
