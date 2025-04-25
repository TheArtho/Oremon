import { MoveData } from "../../types/MoveData";

const acid_spray: MoveData = {
  id: "acid-spray",
  name: "oremon.acid-spray.name",
  description: "oremon.acid-spray.description",
  category: "special",
  accuracy: 100,
  power: 40,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "poison",
  effectId: "none",
  effectChance: 100
};

export default acid_spray;
