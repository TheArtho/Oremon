import { MoveData } from "../../types/MoveData";

const drill_peck: MoveData = {
  id: "drill-peck",
  name: "oremon.drill-peck.name",
  description: "oremon.drill-peck.description",
  category: "physical",
  accuracy: 100,
  power: 80,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  punching: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: undefined
};

export default drill_peck;
