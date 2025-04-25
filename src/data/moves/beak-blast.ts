import { MoveData } from "../../types/MoveData";

const beak_blast: MoveData = {
  id: "beak-blast",
  name: "oremon.beak-blast.name",
  description: "oremon.beak-blast.description",
  category: "physical",
  accuracy: 100,
  power: 100,
  pp: 15,
  priority: -3,
  flags: {
  snatch: true
},
  target: "selected_pokemon",
  type: "flying",
  effectId: "none",
  effectChance: undefined
};

export default beak_blast;
