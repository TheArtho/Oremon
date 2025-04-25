import { MoveData } from "../../types/MoveData";

const topsy_turvy: MoveData = {
  id: "topsy-turvy",
  name: "oremon.topsy-turvy.name",
  description: "oremon.topsy-turvy.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default topsy_turvy;
