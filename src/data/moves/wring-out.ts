import { MoveData } from "../../types/MoveData";

const wring_out: MoveData = {
  id: "wring-out",
  name: "oremon.wring-out.name",
  description: "oremon.wring-out.description",
  category: "special",
  accuracy: 100,
  power: undefined,
  pp: 5,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default wring_out;
