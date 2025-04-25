import { MoveData } from "../../types/MoveData";

const quick_guard: MoveData = {
  id: "quick-guard",
  name: "oremon.quick-guard.name",
  description: "oremon.quick-guard.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 15,
  priority: 3,
  flags: {
  defrost: true
},
  target: "users_field",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default quick_guard;
