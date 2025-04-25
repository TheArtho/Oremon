import { MoveData } from "../../types/MoveData";

const light_screen: MoveData = {
  id: "light-screen",
  name: "oremon.light-screen.name",
  description: "oremon.light-screen.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 30,
  priority: 0,
  flags: {
  defrost: true
},
  target: "users_field",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default light_screen;
