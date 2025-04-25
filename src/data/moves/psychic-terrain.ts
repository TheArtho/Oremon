import { MoveData } from "../../types/MoveData";

const psychic_terrain: MoveData = {
  id: "psychic-terrain",
  name: "oremon.psychic-terrain.name",
  description: "oremon.psychic-terrain.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  mental: true
},
  target: "entire_field",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default psychic_terrain;
