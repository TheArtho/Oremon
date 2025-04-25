import { MoveData } from "../../types/MoveData";

const flash: MoveData = {
  id: "flash",
  name: "oremon.flash.name",
  description: "oremon.flash.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 20,
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

export default flash;
