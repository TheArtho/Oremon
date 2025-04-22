// events/CustomEventBus.ts
import { PlayerSlotChangeEventSignal } from "./signals/PlayerSlotChangeEventSignal";

export class CustomEventBus {
    static readonly afterEvents = {
        playerSlotChange: new PlayerSlotChangeEventSignal(),
    };

    static readonly beforeEvents = {}
}