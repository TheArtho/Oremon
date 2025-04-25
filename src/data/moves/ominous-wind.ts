import { MoveData } from "../../types/MoveData";

const ominous_wind: MoveData = {
  id: "ominous-wind",
  name: "oremon.ominous-wind.name",
  description: "oremon.ominous-wind.description",
  category: "special",
  accuracy: 100,
  power: 60,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: 10
};

export default ominous_wind;
