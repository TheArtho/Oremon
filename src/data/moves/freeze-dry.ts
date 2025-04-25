import { MoveData } from "../../types/MoveData";

const freeze_dry: MoveData = {
  id: "freeze-dry",
  name: "oremon.freeze-dry.name",
  description: "oremon.freeze-dry.description",
  category: "special",
  accuracy: 100,
  power: 70,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ice",
  effectId: "none",
  effectChance: 10
};

export default freeze_dry;
