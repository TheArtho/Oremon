import { MoveData } from "../../types/MoveData";

const fire_lash: MoveData = {
  id: "fire-lash",
  name: "oremon.fire-lash.name",
  description: "oremon.fire-lash.description",
  category: "physical",
  accuracy: 100,
  power: 80,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 100
};

export default fire_lash;
