import { MoveData } from "../../types/MoveData";

const sacred_fire: MoveData = {
  id: "sacred-fire",
  name: "oremon.sacred-fire.name",
  description: "oremon.sacred-fire.description",
  category: "physical",
  accuracy: 95,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  bite: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 50
};

export default sacred_fire;
