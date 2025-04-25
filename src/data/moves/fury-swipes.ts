import { MoveData } from "../../types/MoveData";

const fury_swipes: MoveData = {
  id: "fury-swipes",
  name: "oremon.fury-swipes.name",
  description: "oremon.fury-swipes.description",
  category: "physical",
  accuracy: 80,
  power: 18,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default fury_swipes;
