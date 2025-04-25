import { MoveData } from "../../types/MoveData";

const heal_pulse: MoveData = {
  id: "heal-pulse",
  name: "oremon.heal-pulse.name",
  description: "oremon.heal-pulse.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  punching: true,
  powderBased: true,
  distance: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default heal_pulse;
