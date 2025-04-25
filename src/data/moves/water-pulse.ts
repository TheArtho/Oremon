import { MoveData } from "../../types/MoveData";

const water_pulse: MoveData = {
  id: "water-pulse",
  name: "oremon.water-pulse.name",
  description: "oremon.water-pulse.description",
  category: "special",
  accuracy: 100,
  power: 60,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  punching: true,
  distance: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: 20
};

export default water_pulse;
