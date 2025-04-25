import { MoveData } from "../../types/MoveData";

const sing: MoveData = {
  id: "sing",
  name: "oremon.sing.name",
  description: "oremon.sing.description",
  category: "status",
  accuracy: 55,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  heal: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default sing;
