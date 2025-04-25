import { MoveData } from "../../types/MoveData";

const fusion_bolt: MoveData = {
  id: "fusion-bolt",
  name: "oremon.fusion-bolt.name",
  description: "oremon.fusion-bolt.description",
  category: "physical",
  accuracy: 100,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: undefined
};

export default fusion_bolt;
