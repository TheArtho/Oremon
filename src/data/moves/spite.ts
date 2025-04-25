import { MoveData } from "../../types/MoveData";

const spite: MoveData = {
  id: "spite",
  name: "oremon.spite.name",
  description: "oremon.spite.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: undefined
};

export default spite;
