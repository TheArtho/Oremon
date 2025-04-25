import { MoveData } from "../../types/MoveData";

const poison_powder: MoveData = {
  id: "poison-powder",
  name: "oremon.poison-powder.name",
  description: "oremon.poison-powder.description",
  category: "status",
  accuracy: 75,
  power: undefined,
  pp: 35,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  dance: true
},
  target: "selected_pokemon",
  type: "poison",
  effectId: "none",
  effectChance: undefined
};

export default poison_powder;
