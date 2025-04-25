import { MoveData } from "../../types/MoveData";

const recover: MoveData = {
  id: "recover",
  name: "oremon.recover.name",
  description: "oremon.recover.description",
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
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default recover;
