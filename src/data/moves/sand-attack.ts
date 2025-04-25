import { MoveData } from "../../types/MoveData";

const sand_attack: MoveData = {
  id: "sand-attack",
  name: "oremon.sand-attack.name",
  description: "oremon.sand-attack.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ground",
  effectId: "none",
  effectChance: undefined
};

export default sand_attack;
