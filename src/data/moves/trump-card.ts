import { MoveData } from "../../types/MoveData";

const trump_card: MoveData = {
  id: "trump-card",
  name: "oremon.trump-card.name",
  description: "oremon.trump-card.description",
  category: "special",
  accuracy: undefined,
  power: undefined,
  pp: 5,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default trump_card;
