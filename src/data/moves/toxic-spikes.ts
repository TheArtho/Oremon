import { MoveData } from "../../types/MoveData";

const toxic_spikes: MoveData = {
  id: "toxic-spikes",
  name: "oremon.toxic-spikes.name",
  description: "oremon.toxic-spikes.description",
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
  type: "poison",
  effectId: "none",
  effectChance: undefined
};

export default toxic_spikes;
