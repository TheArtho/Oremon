import { MoveData } from "../../types/MoveData";

const healing_wish: MoveData = {
  id: "healing-wish",
  name: "oremon.healing-wish.name",
  description: "oremon.healing-wish.description",
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

export default healing_wish;
