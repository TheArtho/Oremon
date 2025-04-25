import { MoveData } from "../../types/MoveData";

const fury_cutter: MoveData = {
  id: "fury-cutter",
  name: "oremon.fury-cutter.name",
  description: "oremon.fury-cutter.description",
  category: "physical",
  accuracy: 95,
  power: 40,
  pp: 20,
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

export default fury_cutter;
