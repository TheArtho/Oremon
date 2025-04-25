import { MoveData } from "../../types/MoveData";

const guard_swap: MoveData = {
  id: "guard-swap",
  name: "oremon.guard-swap.name",
  description: "oremon.guard-swap.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default guard_swap;
