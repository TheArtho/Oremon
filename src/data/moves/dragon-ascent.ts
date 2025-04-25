import { MoveData } from "../../types/MoveData";

const dragon_ascent: MoveData = {
  id: "dragon-ascent",
  name: "oremon.dragon-ascent.name",
  description: "oremon.dragon-ascent.description",
  category: "physical",
  accuracy: 100,
  power: 120,
  pp: 5,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  punching: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: 100
};

export default dragon_ascent;
