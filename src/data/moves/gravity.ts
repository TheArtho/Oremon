import { MoveData } from "../../types/MoveData";

const gravity: MoveData = {
  id: "gravity",
  name: "oremon.gravity.name",
  description: "oremon.gravity.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 5,
  priority: 0,
  flags: {
  mental: true
},
  target: "entire_field",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default gravity;
