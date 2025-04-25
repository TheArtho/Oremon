import { MoveData } from "../../types/MoveData";

const final_gambit: MoveData = {
  id: "final-gambit",
  name: "oremon.final-gambit.name",
  description: "oremon.final-gambit.description",
  category: "special",
  accuracy: 100,
  power: undefined,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default final_gambit;
