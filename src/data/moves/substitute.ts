import { MoveData } from "../../types/MoveData";

const substitute: MoveData = {
  id: "substitute",
  name: "oremon.substitute.name",
  description: "oremon.substitute.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  defrost: true,
  mental: true
},
  target: "user",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default substitute;
