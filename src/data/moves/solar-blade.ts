import { MoveData } from "../../types/MoveData";

const solar_blade: MoveData = {
  id: "solar-blade",
  name: "oremon.solar-blade.name",
  description: "oremon.solar-blade.description",
  category: "physical",
  accuracy: 100,
  power: 125,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  protectable: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default solar_blade;
