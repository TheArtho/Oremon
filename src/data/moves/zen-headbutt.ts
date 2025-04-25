import { MoveData } from "../../types/MoveData";

const zen_headbutt: MoveData = {
  id: "zen-headbutt",
  name: "oremon.zen-headbutt.name",
  description: "oremon.zen-headbutt.description",
  category: "physical",
  accuracy: 90,
  power: 80,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: 20
};

export default zen_headbutt;
