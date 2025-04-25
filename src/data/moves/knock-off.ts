import { MoveData } from "../../types/MoveData";

const knock_off: MoveData = {
  id: "knock-off",
  name: "oremon.knock-off.name",
  description: "oremon.knock-off.description",
  category: "physical",
  accuracy: 100,
  power: 65,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default knock_off;
