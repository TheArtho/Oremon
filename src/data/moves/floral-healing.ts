import { MoveData } from "../../types/MoveData";

const floral_healing: MoveData = {
  id: "floral-healing",
  name: "oremon.floral-healing.name",
  description: "oremon.floral-healing.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  powderBased: true
},
  target: "selected_pokemon",
  type: "fairy",
  effectId: "none",
  effectChance: undefined
};

export default floral_healing;
