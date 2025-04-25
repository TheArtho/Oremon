import { MoveData } from "../../types/MoveData";

const scary_face: MoveData = {
  id: "scary-face",
  name: "oremon.scary-face.name",
  description: "oremon.scary-face.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default scary_face;
