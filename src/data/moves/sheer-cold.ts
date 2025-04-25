import { MoveData } from "../../types/MoveData";

const sheer_cold: MoveData = {
  id: "sheer-cold",
  name: "oremon.sheer-cold.name",
  description: "oremon.sheer-cold.description",
  category: "special",
  accuracy: 30,
  power: undefined,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ice",
  effectId: "none",
  effectChance: undefined
};

export default sheer_cold;
