import { MoveData } from "../../types/MoveData";

const nuzzle: MoveData = {
  id: "nuzzle",
  name: "oremon.nuzzle.name",
  description: "oremon.nuzzle.description",
  category: "physical",
  accuracy: 100,
  power: 20,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: 100
};

export default nuzzle;
