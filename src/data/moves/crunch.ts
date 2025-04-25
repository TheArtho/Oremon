import { MoveData } from "../../types/MoveData";

const crunch: MoveData = {
  id: "crunch",
  name: "oremon.crunch.name",
  description: "oremon.crunch.description",
  category: "physical",
  accuracy: 100,
  power: 80,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  ballistics: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: 20
};

export default crunch;
