import { MoveData } from "../../types/MoveData";

const lovely_kiss: MoveData = {
  id: "lovely-kiss",
  name: "oremon.lovely-kiss.name",
  description: "oremon.lovely-kiss.description",
  category: "status",
  accuracy: 75,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default lovely_kiss;
