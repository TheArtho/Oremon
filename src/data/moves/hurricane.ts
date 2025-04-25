import { MoveData } from "../../types/MoveData";

const hurricane: MoveData = {
  id: "hurricane",
  name: "oremon.hurricane.name",
  description: "oremon.hurricane.description",
  category: "special",
  accuracy: 70,
  power: 110,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  punching: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: 30
};

export default hurricane;
