import { MoveData } from "../../types/MoveData";

const phantom_force: MoveData = {
  id: "phantom-force",
  name: "oremon.phantom-force.name",
  description: "oremon.phantom-force.description",
  category: "physical",
  accuracy: 100,
  power: 90,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  protectable: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: undefined
};

export default phantom_force;
