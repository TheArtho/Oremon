import { MoveData } from "../../types/MoveData";

const whirlwind: MoveData = {
  id: "whirlwind",
  name: "oremon.whirlwind.name",
  description: "oremon.whirlwind.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 20,
  priority: -6,
  flags: {
  mirror: true,
  charge: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default whirlwind;
