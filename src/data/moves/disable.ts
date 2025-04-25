import { MoveData } from "../../types/MoveData";

const disable: MoveData = {
  id: "disable",
  name: "oremon.disable.name",
  description: "oremon.disable.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default disable;
