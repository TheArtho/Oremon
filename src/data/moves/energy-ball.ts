import { MoveData } from "../../types/MoveData";

const energy_ball: MoveData = {
  id: "energy-ball",
  name: "oremon.energy-ball.name",
  description: "oremon.energy-ball.description",
  category: "special",
  accuracy: 100,
  power: 90,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: 10
};

export default energy_ball;
