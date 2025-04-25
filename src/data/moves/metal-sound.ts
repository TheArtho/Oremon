import { MoveData } from "../../types/MoveData";

const metal_sound: MoveData = {
  id: "metal-sound",
  name: "oremon.metal-sound.name",
  description: "oremon.metal-sound.description",
  category: "status",
  accuracy: 85,
  power: undefined,
  pp: 40,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  heal: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "steel",
  effectId: "none",
  effectChance: undefined
};

export default metal_sound;
