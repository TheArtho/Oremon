import { MoveData } from "../../types/MoveData";

const shock_wave: MoveData = {
  id: "shock-wave",
  name: "oremon.shock-wave.name",
  description: "oremon.shock-wave.description",
  category: "special",
  accuracy: undefined,
  power: 60,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: undefined
};

export default shock_wave;
