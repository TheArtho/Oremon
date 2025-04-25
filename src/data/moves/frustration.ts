import { MoveData } from "../../types/MoveData";

const frustration: MoveData = {
  id: "frustration",
  name: "oremon.frustration.name",
  description: "oremon.frustration.description",
  category: "physical",
  accuracy: 100,
  power: undefined,
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

export default frustration;
