import { MoveData } from "../../types/MoveData";

const aura_sphere: MoveData = {
  id: "aura-sphere",
  name: "oremon.aura-sphere.name",
  description: "oremon.aura-sphere.description",
  category: "special",
  accuracy: undefined,
  power: 80,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  punching: true,
  distance: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "fighting",
  effectId: "none",
  effectChance: undefined
};

export default aura_sphere;
