import { MoveData } from "../../types/MoveData";

const barrage: MoveData = {
  id: "barrage",
  name: "oremon.barrage.name",
  description: "oremon.barrage.description",
  category: "physical",
  accuracy: 85,
  power: 15,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default barrage;
