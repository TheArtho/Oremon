import { MoveData } from "../../types/MoveData";

const withdraw: MoveData = {
  id: "withdraw",
  name: "oremon.withdraw.name",
  description: "oremon.withdraw.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 40,
  priority: 0,
  flags: {
  defrost: true
},
  target: "user",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default withdraw;
