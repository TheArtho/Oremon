import { MoveData } from "../../types/MoveData";

const electro_ball: MoveData = {
  id: "electro-ball",
  name: "oremon.electro-ball.name",
  description: "oremon.electro-ball.description",
  category: "special",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: undefined
};

export default electro_ball;
