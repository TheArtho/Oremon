import { MoveData } from "../../types/MoveData";

const mega_kick: MoveData = {
  id: "mega-kick",
  name: "oremon.mega-kick.name",
  description: "oremon.mega-kick.description",
  category: "physical",
  accuracy: 75,
  power: 120,
  pp: 5,
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

export default mega_kick;
