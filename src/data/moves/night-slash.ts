import { MoveData } from "../../types/MoveData";

const night_slash: MoveData = {
  id: "night-slash",
  name: "oremon.night-slash.name",
  description: "oremon.night-slash.description",
  category: "physical",
  accuracy: 100,
  power: 70,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "dark",
  effectId: "none",
  effectChance: undefined
};

export default night_slash;
