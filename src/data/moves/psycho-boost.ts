import { MoveData } from "../../types/MoveData";

const psycho_boost: MoveData = {
  id: "psycho-boost",
  name: "oremon.psycho-boost.name",
  description: "oremon.psycho-boost.description",
  category: "special",
  accuracy: 90,
  power: 140,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: 100
};

export default psycho_boost;
