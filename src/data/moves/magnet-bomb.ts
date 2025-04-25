import { MoveData } from "../../types/MoveData";

const magnet_bomb: MoveData = {
  id: "magnet-bomb",
  name: "oremon.magnet-bomb.name",
  description: "oremon.magnet-bomb.description",
  category: "physical",
  accuracy: undefined,
  power: 60,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  charge: true,
  pulseBased: true
},
  target: "selected_pokemon",
  type: "steel",
  effectId: "none",
  effectChance: undefined
};

export default magnet_bomb;
