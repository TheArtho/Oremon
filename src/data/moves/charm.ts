import { MoveData } from "../../types/MoveData";

const charm: MoveData = {
  id: "charm",
  name: "oremon.charm.name",
  description: "oremon.charm.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fairy",
  effectId: "none",
  effectChance: undefined
};

export default charm;
