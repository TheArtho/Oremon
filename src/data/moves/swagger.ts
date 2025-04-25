import { MoveData } from "../../types/MoveData";

const swagger: MoveData = {
  id: "swagger",
  name: "oremon.swagger.name",
  description: "oremon.swagger.description",
  category: "status",
  accuracy: 85,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default swagger;
