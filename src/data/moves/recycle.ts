import { MoveData } from "../../types/MoveData";

const recycle: MoveData = {
  id: "recycle",
  name: "oremon.recycle.name",
  description: "oremon.recycle.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  defrost: true
},
  target: "user",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default recycle;
