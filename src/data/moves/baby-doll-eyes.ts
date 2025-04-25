import { MoveData } from "../../types/MoveData";

const baby_doll_eyes: MoveData = {
  id: "baby-doll-eyes",
  name: "oremon.baby-doll-eyes.name",
  description: "oremon.baby-doll-eyes.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 30,
  priority: 1,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fairy",
  effectId: "none",
  effectChance: undefined
};

export default baby_doll_eyes;
