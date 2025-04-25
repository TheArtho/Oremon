import { MoveData } from "../../types/MoveData";

const switcheroo: MoveData = {
  id: "switcheroo",
  name: "oremon.switcheroo.name",
  description: "oremon.switcheroo.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default switcheroo;
