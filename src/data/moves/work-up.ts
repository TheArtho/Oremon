import { MoveData } from "../../types/MoveData";

const work_up: MoveData = {
  id: "work-up",
  name: "oremon.work-up.name",
  description: "oremon.work-up.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 30,
  priority: 0,
  flags: {
  defrost: true
},
  target: "user",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default work_up;
