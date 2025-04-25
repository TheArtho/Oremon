import { MoveData } from "../../types/MoveData";

const chatter: MoveData = {
  id: "chatter",
  name: "oremon.chatter.name",
  description: "oremon.chatter.description",
  category: "special",
  accuracy: 100,
  power: 65,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  heal: true,
  punching: true,
  gravity: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: 100
};

export default chatter;
