import { MoveData } from "../../types/MoveData";

const heart_stamp: MoveData = {
  id: "heart-stamp",
  name: "oremon.heart-stamp.name",
  description: "oremon.heart-stamp.description",
  category: "physical",
  accuracy: 100,
  power: 60,
  pp: 25,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: 30
};

export default heart_stamp;
