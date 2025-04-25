import { MoveData } from "../../types/MoveData";

const bubble_beam: MoveData = {
  id: "bubble-beam",
  name: "oremon.bubble-beam.name",
  description: "oremon.bubble-beam.description",
  category: "special",
  accuracy: 100,
  power: 65,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: 10
};

export default bubble_beam;
