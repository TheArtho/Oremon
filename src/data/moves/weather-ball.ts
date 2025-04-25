import { MoveData } from "../../types/MoveData";

const weather_ball: MoveData = {
  id: "weather-ball",
  name: "oremon.weather-ball.name",
  description: "oremon.weather-ball.description",
  category: "special",
  accuracy: 100,
  power: 50,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default weather_ball;
