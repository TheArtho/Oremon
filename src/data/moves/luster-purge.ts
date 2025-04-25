import { MoveData } from "../../types/MoveData";

const luster_purge: MoveData = {
  id: "luster-purge",
  name: "oremon.luster-purge.name",
  description: "oremon.luster-purge.description",
  category: "special",
  accuracy: 100,
  power: 70,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: 50
};

export default luster_purge;
