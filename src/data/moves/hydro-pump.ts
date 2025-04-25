import { MoveData } from "../../types/MoveData";

const hydro_pump: MoveData = {
  id: "hydro-pump",
  name: "oremon.hydro-pump.name",
  description: "oremon.hydro-pump.description",
  category: "special",
  accuracy: 80,
  power: 110,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default hydro_pump;
