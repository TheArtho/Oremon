import { MoveData } from "../../types/MoveData";

const smog: MoveData = {
  id: "smog",
  name: "oremon.smog.name",
  description: "oremon.smog.description",
  category: "special",
  accuracy: 70,
  power: 30,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "poison",
  effectId: "none",
  effectChance: 40
};

export default smog;
