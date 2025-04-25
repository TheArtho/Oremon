import { MoveData } from "../../types/MoveData";

const snore: MoveData = {
  id: "snore",
  name: "oremon.snore.name",
  description: "oremon.snore.description",
  category: "special",
  accuracy: 100,
  power: 50,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  heal: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 30
};

export default snore;
