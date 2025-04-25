import { MoveData } from "../../types/MoveData";

const block: MoveData = {
  id: "block",
  name: "oremon.block.name",
  description: "oremon.block.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 5,
  priority: 0,
  flags: {
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default block;
