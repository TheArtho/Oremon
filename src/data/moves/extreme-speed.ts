import { MoveData } from "../../types/MoveData";

const extreme_speed: MoveData = {
  id: "extreme-speed",
  name: "oremon.extreme-speed.name",
  description: "oremon.extreme-speed.description",
  category: "physical",
  accuracy: 100,
  power: 80,
  pp: 5,
  priority: 2,
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

export default extreme_speed;
