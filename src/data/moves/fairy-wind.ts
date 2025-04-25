import { MoveData } from "../../types/MoveData";

const fairy_wind: MoveData = {
  id: "fairy-wind",
  name: "oremon.fairy-wind.name",
  description: "oremon.fairy-wind.description",
  category: "special",
  accuracy: 100,
  power: 40,
  pp: 30,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fairy",
  effectId: "none",
  effectChance: undefined
};

export default fairy_wind;
