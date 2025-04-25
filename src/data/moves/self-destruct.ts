import { MoveData } from "../../types/MoveData";

const self_destruct: MoveData = {
  id: "self-destruct",
  name: "oremon.self-destruct.name",
  description: "oremon.self-destruct.description",
  category: "physical",
  accuracy: 100,
  power: 200,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_other_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default self_destruct;
