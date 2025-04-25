import { MoveData } from "../../types/MoveData";

const power_trip: MoveData = {
  id: "power-trip",
  name: "oremon.power-trip.name",
  description: "oremon.power-trip.description",
  category: "physical",
  accuracy: 100,
  power: 20,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default power_trip;
