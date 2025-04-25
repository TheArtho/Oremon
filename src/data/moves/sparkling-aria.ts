import { MoveData } from "../../types/MoveData";

const sparkling_aria: MoveData = {
  id: "sparkling-aria",
  name: "oremon.sparkling-aria.name",
  description: "oremon.sparkling-aria.description",
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
  target: "all_other_pokemon",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default sparkling_aria;
