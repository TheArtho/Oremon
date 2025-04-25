import { MoveData } from "../../types/MoveData";

const lava_plume: MoveData = {
  id: "lava-plume",
  name: "oremon.lava-plume.name",
  description: "oremon.lava-plume.description",
  category: "special",
  accuracy: 100,
  power: 80,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_other_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 30
};

export default lava_plume;
