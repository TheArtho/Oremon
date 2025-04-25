import { MoveData } from "../../types/MoveData";

const synchronoise: MoveData = {
  id: "synchronoise",
  name: "oremon.synchronoise.name",
  description: "oremon.synchronoise.description",
  category: "special",
  accuracy: 100,
  power: 120,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_other_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default synchronoise;
