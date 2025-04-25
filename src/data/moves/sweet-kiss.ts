import { MoveData } from "../../types/MoveData";

const sweet_kiss: MoveData = {
  id: "sweet-kiss",
  name: "oremon.sweet-kiss.name",
  description: "oremon.sweet-kiss.description",
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
  type: "fairy",
  effectId: "none",
  effectChance: undefined
};

export default sweet_kiss;
