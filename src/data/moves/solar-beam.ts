import { MoveData } from "../../types/MoveData";

const solar_beam: MoveData = {
  id: "solar-beam",
  name: "oremon.solar-beam.name",
  description: "oremon.solar-beam.description",
  category: "special",
  accuracy: 100,
  power: 120,
  pp: 10,
  priority: 0,
  flags: {
  protectable: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default solar_beam;
