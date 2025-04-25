import { MoveData } from "../../types/MoveData";

const jump_kick: MoveData = {
  id: "jump-kick",
  name: "oremon.jump-kick.name",
  description: "oremon.jump-kick.description",
  category: "physical",
  accuracy: 95,
  power: 100,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  soundBased: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default jump_kick;
