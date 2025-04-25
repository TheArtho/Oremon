import { MoveData } from "../../types/MoveData";

const drill_run: MoveData = {
  id: "drill-run",
  name: "oremon.drill-run.name",
  description: "oremon.drill-run.description",
  category: "physical",
  accuracy: 95,
  power: 80,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ground",
  effectId: "none",
  effectChance: undefined
};

export default drill_run;
