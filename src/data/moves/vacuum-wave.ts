import { MoveData } from "../../types/MoveData";

const vacuum_wave: MoveData = {
  id: "vacuum-wave",
  name: "oremon.vacuum-wave.name",
  description: "oremon.vacuum-wave.description",
  category: "special",
  accuracy: 100,
  power: 40,
  pp: 30,
  priority: 1,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default vacuum_wave;
