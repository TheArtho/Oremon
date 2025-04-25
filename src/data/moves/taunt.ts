import { MoveData } from "../../types/MoveData";

const taunt: MoveData = {
  id: "taunt",
  name: "oremon.taunt.name",
  description: "oremon.taunt.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true,
  gravity: true,
  authentic: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default taunt;
