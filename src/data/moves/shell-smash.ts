import { MoveData } from "../../types/MoveData";

const shell_smash: MoveData = {
  id: "shell-smash",
  name: "oremon.shell-smash.name",
  description: "oremon.shell-smash.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 15,
  priority: 0,
  flags: {
  defrost: true
},
  target: "user",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default shell_smash;
