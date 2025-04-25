import { MoveData } from "../../types/MoveData";

const brine: MoveData = {
  id: "brine",
  name: "oremon.brine.name",
  description: "oremon.brine.description",
  category: "special",
  accuracy: 100,
  power: 65,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default brine;
