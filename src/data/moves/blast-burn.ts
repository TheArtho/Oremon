import { MoveData } from "../../types/MoveData";

const blast_burn: MoveData = {
  id: "blast-burn",
  name: "oremon.blast-burn.name",
  description: "oremon.blast-burn.description",
  category: "special",
  accuracy: 90,
  power: 150,
  pp: 5,
  priority: 0,
  flags: {
  reflectable: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: undefined
};

export default blast_burn;
