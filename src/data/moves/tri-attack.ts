import { MoveData } from "../../types/MoveData";

const tri_attack: MoveData = {
  id: "tri-attack",
  name: "oremon.tri-attack.name",
  description: "oremon.tri-attack.description",
  category: "special",
  accuracy: 100,
  power: 80,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 20
};

export default tri_attack;
