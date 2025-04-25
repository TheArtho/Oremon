import { MoveData } from "../../types/MoveData";

const trick_or_treat: MoveData = {
  id: "trick-or-treat",
  name: "oremon.trick-or-treat.name",
  description: "oremon.trick-or-treat.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: undefined
};

export default trick_or_treat;
