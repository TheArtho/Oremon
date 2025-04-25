import { MoveData } from "../../types/MoveData";

const thunder_shock: MoveData = {
  id: "thunder-shock",
  name: "oremon.thunder-shock.name",
  description: "oremon.thunder-shock.description",
  category: "special",
  accuracy: 100,
  power: 40,
  pp: 30,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "electric",
  effectId: "none",
  effectChance: 10
};

export default thunder_shock;
