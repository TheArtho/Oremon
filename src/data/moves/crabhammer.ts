import { MoveData } from "../../types/MoveData";

const crabhammer: MoveData = {
  id: "crabhammer",
  name: "oremon.crabhammer.name",
  description: "oremon.crabhammer.description",
  category: "physical",
  accuracy: 90,
  power: 100,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: undefined
};

export default crabhammer;
