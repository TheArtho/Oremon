import { MoveData } from "../../types/MoveData";

const powder_snow: MoveData = {
  id: "powder-snow",
  name: "oremon.powder-snow.name",
  description: "oremon.powder-snow.description",
  category: "special",
  accuracy: 100,
  power: 40,
  pp: 25,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_opponents",
  type: "ice",
  effectId: "none",
  effectChance: 10
};

export default powder_snow;
