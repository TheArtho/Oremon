import { MoveData } from "../../types/MoveData";

const tearful_look: MoveData = {
  id: "tearful-look",
  name: "oremon.tearful-look.name",
  description: "oremon.tearful-look.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: 100
};

export default tearful_look;
