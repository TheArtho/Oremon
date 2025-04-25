import { MoveData } from "../../types/MoveData";

const relic_song: MoveData = {
  id: "relic-song",
  name: "oremon.relic-song.name",
  description: "oremon.relic-song.description",
  category: "special",
  accuracy: 100,
  power: 75,
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
  effectChance: 10
};

export default relic_song;
