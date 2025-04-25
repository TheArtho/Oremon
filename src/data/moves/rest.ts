import { MoveData } from "../../types/MoveData";

const rest: MoveData = {
  id: "rest",
  name: "oremon.rest.name",
  description: "oremon.rest.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  defrost: true,
  powderBased: true
},
  target: "user",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default rest;
