import { MoveData } from "../../types/MoveData";

const infestation: MoveData = {
  id: "infestation",
  name: "oremon.infestation.name",
  description: "oremon.infestation.description",
  category: "special",
  accuracy: 100,
  power: 20,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "bug",
  effectId: "none",
  effectChance: 100
};

export default infestation;
