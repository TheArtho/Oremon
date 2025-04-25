import { MoveData } from "../../types/MoveData";

const sand_tomb: MoveData = {
  id: "sand-tomb",
  name: "oremon.sand-tomb.name",
  description: "oremon.sand-tomb.description",
  category: "physical",
  accuracy: 85,
  power: 35,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ground",
  effectId: "none",
  effectChance: 100
};

export default sand_tomb;
