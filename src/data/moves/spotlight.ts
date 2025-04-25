import { MoveData } from "../../types/MoveData";

const spotlight: MoveData = {
  id: "spotlight",
  name: "oremon.spotlight.name",
  description: "oremon.spotlight.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 15,
  priority: 3,
  flags: {
  snatch: true,
  mirror: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default spotlight;
