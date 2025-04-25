import { MoveData } from "../../types/MoveData";

const feint: MoveData = {
  id: "feint",
  name: "oremon.feint.name",
  description: "oremon.feint.description",
  category: "physical",
  accuracy: 100,
  power: 30,
  pp: 10,
  priority: 2,
  flags: {
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default feint;
