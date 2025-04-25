import { MoveData } from "../../types/MoveData";

const night_shade: MoveData = {
  id: "night-shade",
  name: "oremon.night-shade.name",
  description: "oremon.night-shade.description",
  category: "special",
  accuracy: 100,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: undefined
};

export default night_shade;
