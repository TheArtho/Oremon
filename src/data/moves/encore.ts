import { MoveData } from "../../types/MoveData";

const encore: MoveData = {
  id: "encore",
  name: "oremon.encore.name",
  description: "oremon.encore.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 5,
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

export default encore;
