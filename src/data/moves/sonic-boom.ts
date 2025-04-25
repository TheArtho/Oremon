import { MoveData } from "../../types/MoveData";

const sonic_boom: MoveData = {
  id: "sonic-boom",
  name: "oremon.sonic-boom.name",
  description: "oremon.sonic-boom.description",
  category: "special",
  accuracy: 90,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default sonic_boom;
