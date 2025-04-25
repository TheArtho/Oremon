import { MoveData } from "../../types/MoveData";

const bullet_seed: MoveData = {
  id: "bullet-seed",
  name: "oremon.bullet-seed.name",
  description: "oremon.bullet-seed.description",
  category: "physical",
  accuracy: 100,
  power: 25,
  pp: 30,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default bullet_seed;
