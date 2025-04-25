import { MoveData } from "../../types/MoveData";

const fairy_lock: MoveData = {
  id: "fairy-lock",
  name: "oremon.fairy-lock.name",
  description: "oremon.fairy-lock.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  charge: true,
  gravity: true
},
  target: "entire_field",
  type: "fairy",
  effectId: "none",
  effectChance: undefined
};

export default fairy_lock;
