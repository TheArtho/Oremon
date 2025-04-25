import { MoveData } from "../../types/MoveData";

const super_fang: MoveData = {
  id: "super-fang",
  name: "oremon.super-fang.name",
  description: "oremon.super-fang.description",
  category: "physical",
  accuracy: 90,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default super_fang;
