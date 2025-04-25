import { MoveData } from "../../types/MoveData";

const pursuit: MoveData = {
  id: "pursuit",
  name: "oremon.pursuit.name",
  description: "oremon.pursuit.description",
  category: "physical",
  accuracy: 100,
  power: 40,
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

export default pursuit;
