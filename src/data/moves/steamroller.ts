import { MoveData } from "../../types/MoveData";

const steamroller: MoveData = {
  id: "steamroller",
  name: "oremon.steamroller.name",
  description: "oremon.steamroller.description",
  category: "physical",
  accuracy: 100,
  power: 65,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "bug",
  effectId: "none",
  effectChance: 30
};

export default steamroller;
