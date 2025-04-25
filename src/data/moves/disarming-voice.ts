import { MoveData } from "../../types/MoveData";

const disarming_voice: MoveData = {
  id: "disarming-voice",
  name: "oremon.disarming-voice.name",
  description: "oremon.disarming-voice.description",
  category: "special",
  accuracy: undefined,
  power: 40,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  heal: true,
  gravity: true
},
  target: "all_opponents",
  type: "fairy",
  effectId: "none",
  effectChance: undefined
};

export default disarming_voice;
