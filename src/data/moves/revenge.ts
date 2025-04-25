import { MoveData } from "../../types/MoveData";

const revenge: MoveData = {
  id: "revenge",
  name: "oremon.revenge.name",
  description: "oremon.revenge.description",
  category: "physical",
  accuracy: 100,
  power: 60,
  pp: 10,
  priority: -4,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default revenge;
