import { MoveData } from "../../types/MoveData";

const bug_buzz: MoveData = {
  id: "bug-buzz",
  name: "oremon.bug-buzz.name",
  description: "oremon.bug-buzz.description",
  category: "special",
  accuracy: 100,
  power: 90,
  pp: 10,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  heal: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "bug",
  effectId: "none",
  effectChance: 10
};

export default bug_buzz;
