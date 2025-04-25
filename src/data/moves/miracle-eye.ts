import { MoveData } from "../../types/MoveData";

const miracle_eye: MoveData = {
  id: "miracle-eye",
  name: "oremon.miracle-eye.name",
  description: "oremon.miracle-eye.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 40,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default miracle_eye;
