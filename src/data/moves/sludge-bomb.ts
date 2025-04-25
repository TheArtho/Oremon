import { MoveData } from "../../types/MoveData";

const sludge_bomb: MoveData = {
  id: "sludge-bomb",
  name: "oremon.sludge-bomb.name",
  description: "oremon.sludge-bomb.description",
  category: "special",
  accuracy: 100,
  power: 90,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "poison",
  effectId: "none",
  effectChance: 30
};

export default sludge_bomb;
