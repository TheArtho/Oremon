import { MoveData } from "../../types/MoveData";

const bounce: MoveData = {
  id: "bounce",
  name: "oremon.bounce.name",
  description: "oremon.bounce.description",
  category: "physical",
  accuracy: 85,
  power: 85,
  pp: 5,
  priority: 0,
  flags: {
  contact: true,
  protectable: true,
  snatch: true,
  charge: true,
  soundBased: true,
  punching: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: 30
};

export default bounce;
