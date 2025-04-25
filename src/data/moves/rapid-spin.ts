import { MoveData } from "../../types/MoveData";

const rapid_spin: MoveData = {
  id: "rapid-spin",
  name: "oremon.rapid-spin.name",
  description: "oremon.rapid-spin.description",
  category: "physical",
  accuracy: 100,
  power: 20,
  pp: 40,
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

export default rapid_spin;
