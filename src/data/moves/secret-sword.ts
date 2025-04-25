import { MoveData } from "../../types/MoveData";

const secret_sword: MoveData = {
  id: "secret-sword",
  name: "oremon.secret-sword.name",
  description: "oremon.secret-sword.description",
  category: "special",
  accuracy: 100,
  power: 85,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default secret_sword;
