import { MoveData } from "../../types/MoveData";

const hidden_power: MoveData = {
  id: "hidden-power",
  name: "oremon.hidden-power.name",
  description: "oremon.hidden-power.description",
  category: "special",
  accuracy: 100,
  power: 60,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default hidden_power;
