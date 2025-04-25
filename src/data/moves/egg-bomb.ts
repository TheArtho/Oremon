import { MoveData } from "../../types/MoveData";

const egg_bomb: MoveData = {
  id: "egg-bomb",
  name: "oremon.egg-bomb.name",
  description: "oremon.egg-bomb.description",
  category: "physical",
  accuracy: 75,
  power: 100,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default egg_bomb;
