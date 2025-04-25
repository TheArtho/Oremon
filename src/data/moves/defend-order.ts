import { MoveData } from "../../types/MoveData";

const defend_order: MoveData = {
  id: "defend-order",
  name: "oremon.defend-order.name",
  description: "oremon.defend-order.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  defrost: true
},
  target: "user",
  type: "bug",
  effectId: "none",
  effectChance: undefined
};

export default defend_order;
