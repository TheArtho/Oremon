import { MoveData } from "../../types/MoveData";

const bind: MoveData = {
  id: "bind",
  name: "oremon.bind.name",
  description: "oremon.bind.description",
  category: "physical",
  accuracy: 85,
  power: 15,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 100
};

export default bind;
