import { MoveData } from "../../types/MoveData";

const thunder_wave: MoveData = {
  id: "thunder-wave",
  name: "oremon.thunder-wave.name",
  description: "oremon.thunder-wave.description",
  category: "status",
  accuracy: 90,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: undefined
};

export default thunder_wave;
