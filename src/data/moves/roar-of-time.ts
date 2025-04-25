import { MoveData } from "../../types/MoveData";

const roar_of_time: MoveData = {
  id: "roar-of-time",
  name: "oremon.roar-of-time.name",
  description: "oremon.roar-of-time.description",
  category: "special",
  accuracy: 90,
  power: 150,
  pp: 5,
  priority: 0,
  flags: {
  reflectable: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dragon",
  effectId: "none",
  effectChance: undefined
};

export default roar_of_time;
