import { MoveData } from "../../types/MoveData";

const rock_tomb: MoveData = {
  id: "rock-tomb",
  name: "oremon.rock-tomb.name",
  description: "oremon.rock-tomb.description",
  category: "physical",
  accuracy: 95,
  power: 60,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "rock",
  effectId: "none",
  effectChance: 100
};

export default rock_tomb;
