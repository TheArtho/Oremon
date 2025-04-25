import { MoveData } from "../../types/MoveData";

const darkest_lariat: MoveData = {
  id: "darkest-lariat",
  name: "oremon.darkest-lariat.name",
  description: "oremon.darkest-lariat.description",
  category: "physical",
  accuracy: 100,
  power: 85,
  pp: 10,
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

export default darkest_lariat;
