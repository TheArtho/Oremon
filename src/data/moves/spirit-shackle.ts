import { MoveData } from "../../types/MoveData";

const spirit_shackle: MoveData = {
  id: "spirit-shackle",
  name: "oremon.spirit-shackle.name",
  description: "oremon.spirit-shackle.description",
  category: "physical",
  accuracy: 100,
  power: 80,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: undefined
};

export default spirit_shackle;
