import { MoveData } from "../../types/MoveData";

const blue_flare: MoveData = {
  id: "blue-flare",
  name: "oremon.blue-flare.name",
  description: "oremon.blue-flare.description",
  category: "special",
  accuracy: 85,
  power: 130,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 20
};

export default blue_flare;
