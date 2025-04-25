import { MoveData } from "../../types/MoveData";

const hyper_fang: MoveData = {
  id: "hyper-fang",
  name: "oremon.hyper-fang.name",
  description: "oremon.hyper-fang.description",
  category: "physical",
  accuracy: 90,
  power: 80,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 10
};

export default hyper_fang;
