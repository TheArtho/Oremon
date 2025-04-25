import { MoveData } from "../../types/MoveData";

const thief: MoveData = {
  id: "thief",
  name: "oremon.thief.name",
  description: "oremon.thief.description",
  category: "physical",
  accuracy: 100,
  power: 60,
  pp: 25,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default thief;
