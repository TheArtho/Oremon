import { MoveData } from "../../types/MoveData";

const toxic: MoveData = {
  id: "toxic",
  name: "oremon.toxic.name",
  description: "oremon.toxic.description",
  category: "status",
  accuracy: 90,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "poison",
  effectId: "none",
  effectChance: undefined
};

export default toxic;
