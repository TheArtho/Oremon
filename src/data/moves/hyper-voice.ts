import { MoveData } from "../../types/MoveData";

const hyper_voice: MoveData = {
  id: "hyper-voice",
  name: "oremon.hyper-voice.name",
  description: "oremon.hyper-voice.description",
  category: "special",
  accuracy: 100,
  power: 90,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  heal: true,
  gravity: true
},
  target: "all_opponents",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default hyper_voice;
