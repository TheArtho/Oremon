import { MoveData } from "../../types/MoveData";

const chip_away: MoveData = {
  id: "chip-away",
  name: "oremon.chip-away.name",
  description: "oremon.chip-away.description",
  category: "physical",
  accuracy: 100,
  power: 70,
  pp: 20,
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

export default chip_away;
