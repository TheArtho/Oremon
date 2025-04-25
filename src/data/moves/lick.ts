import { MoveData } from "../../types/MoveData";

const lick: MoveData = {
  id: "lick",
  name: "oremon.lick.name",
  description: "oremon.lick.description",
  category: "physical",
  accuracy: 100,
  power: 30,
  pp: 30,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: 30
};

export default lick;
