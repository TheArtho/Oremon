import { MoveData } from "../../types/MoveData";

const glare: MoveData = {
  id: "glare",
  name: "oremon.glare.name",
  description: "oremon.glare.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 30,
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

export default glare;
