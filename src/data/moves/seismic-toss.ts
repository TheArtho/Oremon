import { MoveData } from "../../types/MoveData";

const seismic_toss: MoveData = {
  id: "seismic-toss",
  name: "oremon.seismic-toss.name",
  description: "oremon.seismic-toss.description",
  category: "physical",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  mental: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default seismic_toss;
