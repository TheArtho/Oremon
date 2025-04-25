import { MoveData } from "../../types/MoveData";

const megahorn: MoveData = {
  id: "megahorn",
  name: "oremon.megahorn.name",
  description: "oremon.megahorn.description",
  category: "physical",
  accuracy: 85,
  power: 120,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "bug",
  effectId: "none",
  effectChance: undefined
};

export default megahorn;
