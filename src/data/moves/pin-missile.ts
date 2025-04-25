import { MoveData } from "../../types/MoveData";

const pin_missile: MoveData = {
  id: "pin-missile",
  name: "oremon.pin-missile.name",
  description: "oremon.pin-missile.description",
  category: "physical",
  accuracy: 95,
  power: 25,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "bug",
  effectId: "none",
  effectChance: undefined
};

export default pin_missile;
