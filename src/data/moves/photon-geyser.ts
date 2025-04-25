import { MoveData } from "../../types/MoveData";

const photon_geyser: MoveData = {
  id: "photon-geyser",
  name: "oremon.photon-geyser.name",
  description: "oremon.photon-geyser.description",
  category: "special",
  accuracy: 100,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default photon_geyser;
