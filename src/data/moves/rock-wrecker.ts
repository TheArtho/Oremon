import { MoveData } from "../../types/MoveData";

const rock_wrecker: MoveData = {
  id: "rock-wrecker",
  name: "oremon.rock-wrecker.name",
  description: "oremon.rock-wrecker.description",
  category: "physical",
  accuracy: 90,
  power: 150,
  pp: 5,
  priority: 0,
  flags: {
  reflectable: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "rock",
  effectId: "none",
  effectChance: undefined
};

export default rock_wrecker;
