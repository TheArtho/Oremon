import { MoveData } from "../../types/MoveData";

const aeroblast: MoveData = {
  id: "aeroblast",
  name: "oremon.aeroblast.name",
  description: "oremon.aeroblast.description",
  category: "special",
  accuracy: 95,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  punching: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: undefined
};

export default aeroblast;
