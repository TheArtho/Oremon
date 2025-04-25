import { MoveData } from "../../types/MoveData";

const freeze_shock: MoveData = {
  id: "freeze-shock",
  name: "oremon.freeze-shock.name",
  description: "oremon.freeze-shock.description",
  category: "physical",
  accuracy: 90,
  power: 140,
  pp: 5,
  priority: 0,
  flags: {
  protectable: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "ice",
  effectId: "none",
  effectChance: 30
};

export default freeze_shock;
