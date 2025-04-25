import { MoveData } from "../../types/MoveData";

const bulk_up: MoveData = {
  id: "bulk-up",
  name: "oremon.bulk-up.name",
  description: "oremon.bulk-up.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  defrost: true
},
  target: "user",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default bulk_up;
