import { MoveData } from "../../types/MoveData";

const dragon_dance: MoveData = {
  id: "dragon-dance",
  name: "oremon.dragon-dance.name",
  description: "oremon.dragon-dance.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  defrost: true
},
  target: "user",
  type: "dragon",
  effectId: "none",
  effectChance: undefined
};

export default dragon_dance;
