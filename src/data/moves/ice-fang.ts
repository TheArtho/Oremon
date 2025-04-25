import { MoveData } from "../../types/MoveData";

const ice_fang: MoveData = {
  id: "ice-fang",
  name: "oremon.ice-fang.name",
  description: "oremon.ice-fang.description",
  category: "physical",
  accuracy: 95,
  power: 65,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  ballistics: true
},
  target: "selected_pokemon",
  type: "ice",
  effectId: "none",
  effectChance: 10
};

export default ice_fang;
