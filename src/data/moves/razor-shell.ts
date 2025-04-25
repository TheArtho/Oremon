import { MoveData } from "../../types/MoveData";

const razor_shell: MoveData = {
  id: "razor-shell",
  name: "oremon.razor-shell.name",
  description: "oremon.razor-shell.description",
  category: "physical",
  accuracy: 95,
  power: 75,
  pp: 10,
  priority: 0,
  flags: {
  contact: true,
  snatch: true,
  charge: true
},
  target: "selected_pokemon",
  type: "water",
  effectId: "none",
  effectChance: 50
};

export default razor_shell;
