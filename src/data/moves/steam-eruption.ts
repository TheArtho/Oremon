import { MoveData } from "../../types/MoveData";

const steam_eruption: MoveData = {
  id: "steam-eruption",
  name: "oremon.steam-eruption.name",
  description: "oremon.steam-eruption.description",
  category: "special",
  accuracy: 95,
  power: 110,
  pp: 5,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  bite: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: 30
};

export default steam_eruption;
