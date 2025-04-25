import { MoveData } from "../../types/MoveData";

const eerie_impulse: MoveData = {
  id: "eerie-impulse",
  name: "oremon.eerie-impulse.name",
  description: "oremon.eerie-impulse.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: undefined
};

export default eerie_impulse;
