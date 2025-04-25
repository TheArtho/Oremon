import { MoveData } from "../../types/MoveData";

const night_daze: MoveData = {
  id: "night-daze",
  name: "oremon.night-daze.name",
  description: "oremon.night-daze.description",
  category: "special",
  accuracy: 95,
  power: 85,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: 40
};

export default night_daze;
