import { MoveData } from "../../types/MoveData";

const hypnosis: MoveData = {
  id: "hypnosis",
  name: "oremon.hypnosis.name",
  description: "oremon.hypnosis.description",
  category: "status",
  accuracy: 60,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default hypnosis;
