import { MoveData } from "../../types/MoveData";

const dragon_rush: MoveData = {
  id: "dragon-rush",
  name: "oremon.dragon-rush.name",
  description: "oremon.dragon-rush.description",
  category: "physical",
  accuracy: 75,
  power: 100,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dragon",
  effectId: "none",
  effectChance: 20
};

export default dragon_rush;
