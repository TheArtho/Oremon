import { MoveData } from "../../types/MoveData";

const bug_bite: MoveData = {
  id: "bug-bite",
  name: "oremon.bug-bite.name",
  description: "oremon.bug-bite.description",
  category: "physical",
  accuracy: 100,
  power: 60,
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

export default bug_bite;
