import { MoveData } from "../../types/MoveData";

const grassy_terrain: MoveData = {
  id: "grassy-terrain",
  name: "oremon.grassy-terrain.name",
  description: "oremon.grassy-terrain.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  mental: true
},
  target: "entire_field",
  type: "grass",
  effectId: "none",
  effectChance: undefined
};

export default grassy_terrain;
