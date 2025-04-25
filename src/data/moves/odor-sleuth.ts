import { MoveData } from "../../types/MoveData";

const odor_sleuth: MoveData = {
  id: "odor-sleuth",
  name: "oremon.odor-sleuth.name",
  description: "oremon.odor-sleuth.description",
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

export default odor_sleuth;
