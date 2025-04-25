import { MoveData } from "../../types/MoveData";

const confuse_ray: MoveData = {
  id: "confuse-ray",
  name: "oremon.confuse-ray.name",
  description: "oremon.confuse-ray.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ghost",
  effectId: "none",
  effectChance: undefined
};

export default confuse_ray;
