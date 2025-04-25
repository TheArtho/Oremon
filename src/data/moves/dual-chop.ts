import { MoveData } from "../../types/MoveData";

const dual_chop: MoveData = {
  id: "dual-chop",
  name: "oremon.dual-chop.name",
  description: "oremon.dual-chop.description",
  category: "physical",
  accuracy: 90,
  power: 40,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dragon",
  effectId: "none",
  effectChance: undefined
};

export default dual_chop;
