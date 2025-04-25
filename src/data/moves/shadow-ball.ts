import { MoveData } from "../../types/MoveData";

const shadow_ball: MoveData = {
  id: "shadow-ball",
  name: "oremon.shadow-ball.name",
  description: "oremon.shadow-ball.description",
  category: "special",
  accuracy: 100,
  power: 80,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: 20
};

export default shadow_ball;
