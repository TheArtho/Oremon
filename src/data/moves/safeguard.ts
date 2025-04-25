import { MoveData } from "../../types/MoveData";

const safeguard: MoveData = {
  id: "safeguard",
  name: "oremon.safeguard.name",
  description: "oremon.safeguard.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 25,
  priority: 0,
  flags: {
  defrost: true
},
  target: "users_field",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default safeguard;
