import { MoveData } from "../../types/MoveData";

const secret_power: MoveData = {
  id: "secret-power",
  name: "oremon.secret-power.name",
  description: "oremon.secret-power.description",
  category: "physical",
  accuracy: 100,
  power: 70,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 30
};

export default secret_power;
