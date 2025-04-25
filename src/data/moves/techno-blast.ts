import { MoveData } from "../../types/MoveData";

const techno_blast: MoveData = {
  id: "techno-blast",
  name: "oremon.techno-blast.name",
  description: "oremon.techno-blast.description",
  category: "special",
  accuracy: 100,
  power: 120,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default techno_blast;
