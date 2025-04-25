import { MoveData } from "../../types/MoveData";

const acid_armor: MoveData = {
  id: "acid-armor",
  name: "oremon.acid-armor.name",
  description: "oremon.acid-armor.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  defrost: true
},
  target: "user",
  type: "poison",
  effectId: "none",
  effectChance: undefined
};

export default acid_armor;
