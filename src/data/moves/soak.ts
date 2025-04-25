import { MoveData } from "../../types/MoveData";

const soak: MoveData = {
  id: "soak",
  name: "oremon.soak.name",
  description: "oremon.soak.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default soak;
