import { MoveData } from "../../types/MoveData";

const fell_stinger: MoveData = {
  id: "fell-stinger",
  name: "oremon.fell-stinger.name",
  description: "oremon.fell-stinger.description",
  category: "physical",
  accuracy: 100,
  power: 50,
  pp: 25,
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

export default fell_stinger;
