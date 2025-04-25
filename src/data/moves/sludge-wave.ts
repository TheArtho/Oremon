import { MoveData } from "../../types/MoveData";

const sludge_wave: MoveData = {
  id: "sludge-wave",
  name: "oremon.sludge-wave.name",
  description: "oremon.sludge-wave.description",
  category: "special",
  accuracy: 100,
  power: 95,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_other_pokemon",
  type: "poison",
  effectId: "none",
  effectChance: 10
};

export default sludge_wave;
