import { MoveData } from "../../types/MoveData";

const searing_shot: MoveData = {
  id: "searing-shot",
  name: "oremon.searing-shot.name",
  description: "oremon.searing-shot.description",
  category: "special",
  accuracy: 100,
  power: 100,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_other_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 30
};

export default searing_shot;
