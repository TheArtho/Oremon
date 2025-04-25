import { MoveData } from "../../types/MoveData";

const beat_up: MoveData = {
  id: "beat-up",
  name: "oremon.beat-up.name",
  description: "oremon.beat-up.description",
  category: "physical",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default beat_up;
