import { MoveData } from "../../types/MoveData";

const slack_off: MoveData = {
  id: "slack-off",
  name: "oremon.slack-off.name",
  description: "oremon.slack-off.description",
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

export default slack_off;
