import { MoveData } from "../../types/MoveData";

const gastro_acid: MoveData = {
  id: "gastro-acid",
  name: "oremon.gastro-acid.name",
  description: "oremon.gastro-acid.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "poison",
  effectId: "none",
  effectChance: undefined
};

export default gastro_acid;
