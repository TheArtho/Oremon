import { MoveData } from "../../types/MoveData";

const quash: MoveData = {
  id: "quash",
  name: "oremon.quash.name",
  description: "oremon.quash.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default quash;
