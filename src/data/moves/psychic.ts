import { MoveData } from "../../types/MoveData";

const psychic: MoveData = {
  id: "psychic",
  name: "oremon.psychic.name",
  description: "oremon.psychic.description",
  category: "special",
  accuracy: 100,
  power: 90,
  pp: 10,
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

export default psychic;
