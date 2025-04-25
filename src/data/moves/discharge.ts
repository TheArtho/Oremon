import { MoveData } from "../../types/MoveData";

const discharge: MoveData = {
  id: "discharge",
  name: "oremon.discharge.name",
  description: "oremon.discharge.description",
  category: "special",
  accuracy: 100,
  power: 80,
  pp: 15,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "all_other_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: 30
};

export default discharge;
