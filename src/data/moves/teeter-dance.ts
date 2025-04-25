import { MoveData } from "../../types/MoveData";

const teeter_dance: MoveData = {
  id: "teeter-dance",
  name: "oremon.teeter-dance.name",
  description: "oremon.teeter-dance.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_other_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default teeter_dance;
