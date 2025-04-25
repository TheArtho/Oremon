import { MoveData } from "../../types/MoveData";

const psych_up: MoveData = {
  id: "psych-up",
  name: "oremon.psych-up.name",
  description: "oremon.psych-up.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  gravity: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default psych_up;
