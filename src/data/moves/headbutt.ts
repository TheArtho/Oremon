import { MoveData } from "../../types/MoveData";

const headbutt: MoveData = {
  id: "headbutt",
  name: "oremon.headbutt.name",
  description: "oremon.headbutt.description",
  category: "physical",
  accuracy: 100,
  power: 70,
  pp: 15,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 30
};

export default headbutt;
