import { MoveData } from "../../types/MoveData";

const fusion_flare: MoveData = {
  id: "fusion-flare",
  name: "oremon.fusion-flare.name",
  description: "oremon.fusion-flare.description",
  category: "special",
  accuracy: 100,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  bite: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: undefined
};

export default fusion_flare;
