import { MoveData } from "../../types/MoveData";

const rock_smash: MoveData = {
  id: "rock-smash",
  name: "oremon.rock-smash.name",
  description: "oremon.rock-smash.description",
  category: "physical",
  accuracy: 100,
  power: 40,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: 50
};

export default rock_smash;
