import { MoveData } from "../../types/MoveData";

const hold_hands: MoveData = {
  id: "hold-hands",
  name: "oremon.hold-hands.name",
  description: "oremon.hold-hands.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 40,
  priority: 0,
  flags: {
  gravity: true
},
  target: "ally",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default hold_hands;
