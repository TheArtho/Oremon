import { MoveData } from "../../types/MoveData";

const inferno: MoveData = {
  id: "inferno",
  name: "oremon.inferno.name",
  description: "oremon.inferno.description",
  category: "special",
  accuracy: 50,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 100
};

export default inferno;
