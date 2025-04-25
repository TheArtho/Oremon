import { MoveData } from "../../types/MoveData";

const milk_drink: MoveData = {
  id: "milk-drink",
  name: "oremon.milk-drink.name",
  description: "oremon.milk-drink.description",
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
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default milk_drink;
