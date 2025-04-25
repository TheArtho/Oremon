import { MoveData } from "../../types/MoveData";

const electric_terrain: MoveData = {
  id: "electric-terrain",
  name: "oremon.electric-terrain.name",
  description: "oremon.electric-terrain.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  mental: true
},
  target: "entire_field",
  type: "electric",
  effectId: "none",
  effectChance: undefined
};

export default electric_terrain;
