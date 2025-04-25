import { MoveData } from "../../types/MoveData";

const accelerock: MoveData = {
  id: "accelerock",
  name: "oremon.accelerock.name",
  description: "oremon.accelerock.description",
  category: "physical",
  accuracy: 100,
  power: 40,
  pp: 20,
  priority: 1,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "rock",
  effectId: "none",
  effectChance: undefined
};

export default accelerock;
