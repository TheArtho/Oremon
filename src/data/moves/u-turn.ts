import { MoveData } from "../../types/MoveData";

const u_turn: MoveData = {
  id: "u-turn",
  name: "oremon.u-turn.name",
  description: "oremon.u-turn.description",
  category: "physical",
  accuracy: 100,
  power: 70,
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
  effectChance: undefined
};

export default u_turn;
