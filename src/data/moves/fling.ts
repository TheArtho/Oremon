import { MoveData } from "../../types/MoveData";

const fling: MoveData = {
  id: "fling",
  name: "oremon.fling.name",
  description: "oremon.fling.description",
  category: "physical",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default fling;
