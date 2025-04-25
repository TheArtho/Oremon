import { MoveData } from "../../types/MoveData";

const thunder_fang: MoveData = {
  id: "thunder-fang",
  name: "oremon.thunder-fang.name",
  description: "oremon.thunder-fang.description",
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
  type: "electric",
  effectId: "none",
  effectChance: 10
};

export default thunder_fang;
