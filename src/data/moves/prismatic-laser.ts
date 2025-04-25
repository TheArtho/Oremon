import { MoveData } from "../../types/MoveData";

const prismatic_laser: MoveData = {
  id: "prismatic-laser",
  name: "oremon.prismatic-laser.name",
  description: "oremon.prismatic-laser.description",
  category: "special",
  accuracy: 100,
  power: 160,
  pp: 10,
  priority: 0,
  flags: {
  reflectable: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default prismatic_laser;
