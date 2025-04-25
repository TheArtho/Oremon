import { MoveData } from "../../types/MoveData";

const reflect: MoveData = {
  id: "reflect",
  name: "oremon.reflect.name",
  description: "oremon.reflect.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  defrost: true
},
  target: "users_field",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default reflect;
