import { MoveData } from "../../types/MoveData";

const icicle_spear: MoveData = {
  id: "icicle-spear",
  name: "oremon.icicle-spear.name",
  description: "oremon.icicle-spear.description",
  category: "physical",
  accuracy: 100,
  power: 25,
  pp: 30,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ice",
  effectId: "none",
  effectChance: undefined
};

export default icicle_spear;
