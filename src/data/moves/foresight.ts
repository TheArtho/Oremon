import { MoveData } from "../../types/MoveData";

const foresight: MoveData = {
  id: "foresight",
  name: "oremon.foresight.name",
  description: "oremon.foresight.description",
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
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default foresight;
