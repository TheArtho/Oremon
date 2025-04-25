import { MoveData } from "../../types/MoveData";

const overheat: MoveData = {
  id: "overheat",
  name: "oremon.overheat.name",
  description: "oremon.overheat.description",
  category: "special",
  accuracy: 90,
  power: 130,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 100
};

export default overheat;
