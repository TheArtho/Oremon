import { MoveData } from "../../types/MoveData";

const toxic_thread: MoveData = {
  id: "toxic-thread",
  name: "oremon.toxic-thread.name",
  description: "oremon.toxic-thread.description",
  category: "status",
  accuracy: 100,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  snatch: true,
  mirror: true,
  charge: true
},
  target: "selected_pokemon",
  type: "poison",
  effectId: "none",
  effectChance: 100
};

export default toxic_thread;
