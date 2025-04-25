import { MoveData } from "../../types/MoveData";

const shell_trap: MoveData = {
  id: "shell-trap",
  name: "oremon.shell-trap.name",
  description: "oremon.shell-trap.description",
  category: "special",
  accuracy: 100,
  power: 150,
  pp: 5,
  priority: -3,
  flags: {
  snatch: true
},
  target: "all_opponents",
  type: "fire",
  effectId: "none",
  effectChance: undefined
};

export default shell_trap;
