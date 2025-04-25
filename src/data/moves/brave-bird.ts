import { MoveData } from "../../types/MoveData";

const brave_bird: MoveData = {
  id: "brave-bird",
  name: "oremon.brave-bird.name",
  description: "oremon.brave-bird.description",
  category: "physical",
  accuracy: 100,
  power: 120,
  pp: 15,
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
  effectChance: undefined
};

export default brave_bird;
