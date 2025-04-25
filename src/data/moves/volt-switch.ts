import { MoveData } from "../../types/MoveData";

const volt_switch: MoveData = {
  id: "volt-switch",
  name: "oremon.volt-switch.name",
  description: "oremon.volt-switch.description",
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
  type: "electric",
  effectId: "none",
  effectChance: undefined
};

export default volt_switch;
