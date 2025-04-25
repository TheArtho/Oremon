import { MoveData } from "../../types/MoveData";

const fly: MoveData = {
  id: "fly",
  name: "oremon.fly.name",
  description: "oremon.fly.description",
  category: "physical",
  accuracy: 95,
  power: 90,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  protectable: true,
  snatch: true,
  charge: true,
  soundBased: true,
  punching: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: undefined
};

export default fly;
