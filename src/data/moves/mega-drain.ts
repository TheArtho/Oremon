import { MoveData } from "../../types/MoveData";

const mega_drain: MoveData = {
  id: "mega-drain",
  name: "oremon.mega-drain.name",
  description: "oremon.mega-drain.description",
  category: "special",
  accuracy: 100,
  power: 40,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  powderBased: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default mega_drain;
