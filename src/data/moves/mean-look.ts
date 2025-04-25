import { MoveData } from "../../types/MoveData";

const mean_look: MoveData = {
  id: "mean-look",
  name: "oremon.mean-look.name",
  description: "oremon.mean-look.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 5,
  priority: 0,
  flags: {
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default mean_look;
