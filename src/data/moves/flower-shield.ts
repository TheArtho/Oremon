import { MoveData } from "../../types/MoveData";

const flower_shield: MoveData = {
  id: "flower-shield",
  name: "oremon.flower-shield.name",
  description: "oremon.flower-shield.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  punching: true
},
  target: "all_pokemon",
  type: "fairy",
  effectId: "none",
  effectChance: 100
};

export default flower_shield;
