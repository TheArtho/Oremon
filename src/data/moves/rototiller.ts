import { MoveData } from "../../types/MoveData";

const rototiller: MoveData = {
  id: "rototiller",
  name: "oremon.rototiller.name",
  description: "oremon.rototiller.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  punching: true,
  mental: true
},
  target: "all_pokemon",
  type: "ground",
  effectId: "none",
  effectChance: 100
};

export default rototiller;
