import { MoveData } from "../../types/MoveData";

const struggle: MoveData = {
  id: "struggle",
  name: "oremon.struggle.name",
  description: "oremon.struggle.description",
  category: "physical",
  accuracy: undefined,
  power: 50,
  pp: 1,
  priority: 0,
  flags: {
  contact: true,
  snatch: true
},
  target: "random_opponent",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default struggle;
