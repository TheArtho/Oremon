import { MoveData } from "../../types/MoveData";

const synthesis: MoveData = {
  id: "synthesis",
  name: "oremon.synthesis.name",
  description: "oremon.synthesis.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 5,
  priority: 0,
  flags: {
  defrost: true,
  powderBased: true
},
  target: "user",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default synthesis;
