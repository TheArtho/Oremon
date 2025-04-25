import { MoveData } from "../../types/MoveData";

const v_create: MoveData = {
  id: "v-create",
  name: "oremon.v-create.name",
  description: "oremon.v-create.description",
  category: "physical",
  accuracy: 95,
  power: 180,
  pp: 5,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "fire",
  effectId: "none",
  effectChance: 100
};

export default v_create;
