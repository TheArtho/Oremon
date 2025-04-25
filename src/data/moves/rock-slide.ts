import { MoveData } from "../../types/MoveData";

const rock_slide: MoveData = {
  id: "rock-slide",
  name: "oremon.rock-slide.name",
  description: "oremon.rock-slide.description",
  category: "physical",
  accuracy: 90,
  power: 75,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "rock",
  effectId: "none",
  effectChance: 30
};

export default rock_slide;
