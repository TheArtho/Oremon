import { MoveData } from "../../types/MoveData";

const giga_impact: MoveData = {
  id: "giga-impact",
  name: "oremon.giga-impact.name",
  description: "oremon.giga-impact.description",
  category: "physical",
  accuracy: 90,
  power: 150,
  pp: 5,
  priority: 0,
  flags: {
  contact: true,
  reflectable: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default giga_impact;
