import { MoveData } from "../../types/MoveData";

const attract: MoveData = {
  id: "attract",
  name: "oremon.attract.name",
  description: "oremon.attract.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  gravity: true,
  authentic: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default attract;
