import { MoveData } from "../../types/MoveData";

const swallow: MoveData = {
  id: "swallow",
  name: "oremon.swallow.name",
  description: "oremon.swallow.description",
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

export default swallow;
