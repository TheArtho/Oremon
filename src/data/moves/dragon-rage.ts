import { MoveData } from "../../types/MoveData";

const dragon_rage: MoveData = {
  id: "dragon-rage",
  name: "oremon.dragon-rage.name",
  description: "oremon.dragon-rage.description",
  category: "special",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dragon",
  effectId: "none",
  effectChance: undefined
};

export default dragon_rage;
