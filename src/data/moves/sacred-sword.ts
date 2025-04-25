import { MoveData } from "../../types/MoveData";

const sacred_sword: MoveData = {
  id: "sacred-sword",
  name: "oremon.sacred-sword.name",
  description: "oremon.sacred-sword.description",
  category: "physical",
  accuracy: 100,
  power: 90,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default sacred_sword;
