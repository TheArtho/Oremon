import { MoveData } from "../../types/MoveData";

const lucky_chant: MoveData = {
  id: "lucky-chant",
  name: "oremon.lucky-chant.name",
  description: "oremon.lucky-chant.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 30,
  priority: 0,
  flags: {
  defrost: true
},
  target: "users_field",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default lucky_chant;
