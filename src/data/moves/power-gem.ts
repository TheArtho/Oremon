import { MoveData } from "../../types/MoveData";

const power_gem: MoveData = {
  id: "power-gem",
  name: "oremon.power-gem.name",
  description: "oremon.power-gem.description",
  category: "special",
  accuracy: 100,
  power: 80,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "rock",
  effectId: "none",
  effectChance: undefined
};

export default power_gem;
