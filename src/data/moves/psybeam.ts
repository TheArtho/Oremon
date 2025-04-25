import { MoveData } from "../../types/MoveData";

const psybeam: MoveData = {
  id: "psybeam",
  name: "oremon.psybeam.name",
  description: "oremon.psybeam.description",
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
  type: "psychic",
  effectId: "none",
  effectChance: 10
};

export default psybeam;
