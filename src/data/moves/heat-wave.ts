import { MoveData } from "../../types/MoveData";

const heat_wave: MoveData = {
  id: "heat-wave",
  name: "oremon.heat-wave.name",
  description: "oremon.heat-wave.description",
  category: "special",
  accuracy: 90,
  power: 95,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "fire",
  effectId: "none",
  effectChance: 10
};

export default heat_wave;
