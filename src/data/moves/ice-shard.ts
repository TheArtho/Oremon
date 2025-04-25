import { MoveData } from "../../types/MoveData";

const ice_shard: MoveData = {
  id: "ice-shard",
  name: "oremon.ice-shard.name",
  description: "oremon.ice-shard.description",
  category: "physical",
  accuracy: 100,
  power: 40,
  pp: 30,
  priority: 1,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ice",
  effectId: "none",
  effectChance: undefined
};

export default ice_shard;
