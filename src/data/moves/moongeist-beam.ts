import { MoveData } from "../../types/MoveData";

const moongeist_beam: MoveData = {
  id: "moongeist-beam",
  name: "oremon.moongeist-beam.name",
  description: "oremon.moongeist-beam.description",
  category: "special",
  accuracy: 100,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: undefined
};

export default moongeist_beam;
