import { MoveData } from "../../types/MoveData";

const torment: MoveData = {
  id: "torment",
  name: "oremon.torment.name",
  description: "oremon.torment.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  gravity: true,
  authentic: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default torment;
