import { MoveData } from "../../types/MoveData";

const vine_whip: MoveData = {
  id: "vine-whip",
  name: "oremon.vine-whip.name",
  description: "oremon.vine-whip.description",
  category: "physical",
  accuracy: 100,
  power: 45,
  pp: 25,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default vine_whip;
