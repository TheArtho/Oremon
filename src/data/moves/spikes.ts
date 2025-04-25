import { MoveData } from "../../types/MoveData";

const spikes: MoveData = {
  id: "spikes",
  name: "oremon.spikes.name",
  description: "oremon.spikes.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 20,
  priority: 0,
  flags: {
  mirror: true,
  mental: true
},
  target: "opponents_field",
  type: "ground",
  effectId: "none",
  effectChance: undefined
};

export default spikes;
