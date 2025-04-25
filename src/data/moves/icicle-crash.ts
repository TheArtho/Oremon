import { MoveData } from "../../types/MoveData";

const icicle_crash: MoveData = {
  id: "icicle-crash",
  name: "oremon.icicle-crash.name",
  description: "oremon.icicle-crash.description",
  category: "physical",
  accuracy: 90,
  power: 85,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ice",
  effectId: "none",
  effectChance: 30
};

export default icicle_crash;
