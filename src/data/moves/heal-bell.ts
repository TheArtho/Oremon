import { MoveData } from "../../types/MoveData";

const heal_bell: MoveData = {
  id: "heal-bell",
  name: "oremon.heal-bell.name",
  description: "oremon.heal-bell.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 5,
  priority: 0,
  flags: {
  defrost: true,
  heal: true,
  punching: true,
  gravity: true
},
  target: "user_and_allies",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default heal_bell;
