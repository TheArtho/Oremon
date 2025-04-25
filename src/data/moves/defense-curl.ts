import { MoveData } from "../../types/MoveData";

const defense_curl: MoveData = {
  id: "defense-curl",
  name: "oremon.defense-curl.name",
  description: "oremon.defense-curl.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 40,
  priority: 0,
  flags: {
  defrost: true
},
  target: "user",
  type: "normal",
  effectId: "none",
  effectChance: undefined
};

export default defense_curl;
