import { MoveData } from "../../types/MoveData";

const heat_crash: MoveData = {
  id: "heat-crash",
  name: "oremon.heat-crash.name",
  description: "oremon.heat-crash.description",
  category: "physical",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  mental: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: undefined
};

export default heat_crash;
