import { MoveData } from "../../types/MoveData";

const stomp: MoveData = {
  id: "stomp",
  name: "oremon.stomp.name",
  description: "oremon.stomp.description",
  category: "physical",
  accuracy: 100,
  power: 65,
  pp: 20,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true,
  mental: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 30
};

export default stomp;
