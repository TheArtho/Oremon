import { MoveData } from "../../types/MoveData";

const hold_back: MoveData = {
  id: "hold-back",
  name: "oremon.hold-back.name",
  description: "oremon.hold-back.description",
  category: "physical",
  accuracy: 100,
  power: 40,
  pp: 40,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default hold_back;
