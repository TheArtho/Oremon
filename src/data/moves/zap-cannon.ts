import { MoveData } from "../../types/MoveData";

const zap_cannon: MoveData = {
  id: "zap-cannon",
  name: "oremon.zap-cannon.name",
  description: "oremon.zap-cannon.description",
  category: "special",
  accuracy: 50,
  power: 120,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: 100
};

export default zap_cannon;
