import { MoveData } from "../../types/MoveData";

const geomancy: MoveData = {
  id: "geomancy",
  name: "oremon.geomancy.name",
  description: "oremon.geomancy.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  protectable: true,
  mental: true
},
  target: "user",
  type: "fairy",
  effectId: "none",
  effectChance: undefined
};

export default geomancy;
