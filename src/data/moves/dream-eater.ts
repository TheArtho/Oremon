import { MoveData } from "../../types/MoveData";

const dream_eater: MoveData = {
  id: "dream-eater",
  name: "oremon.dream-eater.name",
  description: "oremon.dream-eater.description",
  category: "special",
  accuracy: 100,
  power: 100,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  powderBased: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default dream_eater;
