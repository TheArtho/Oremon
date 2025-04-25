import { MoveData } from "../../types/MoveData";

const trick_room: MoveData = {
  id: "trick-room",
  name: "oremon.trick-room.name",
  description: "oremon.trick-room.description",
  category: "status",
  accuracy: undefined,
  power: undefined,
  pp: 5,
  priority: -7,
  flags: {
  charge: true
},
  target: "entire_field",
  type: "psychic",
  effectId: "none",
  effectChance: undefined
};

export default trick_room;
