import { MoveData } from "../../types/MoveData";

const leech_life: MoveData = {
  id: "leech-life",
  name: "oremon.leech-life.name",
  description: "oremon.leech-life.description",
  category: "physical",
  accuracy: 100,
  power: 80,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  powderBased: true
},
  target: "selected_pokemon",
  type: "bug",
  effectId: "none",
  effectChance: undefined
};

export default leech_life;
