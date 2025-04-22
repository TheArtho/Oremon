// events/CustomEventBus.ts
import { PlayerSlotChangeEventSignal } from "./signals/PlayerSlotChangeEventSignal";
export class CustomEventBus {
}
CustomEventBus.afterEvents = {
    playerSlotChange: new PlayerSlotChangeEventSignal(),
};
CustomEventBus.beforeEvents = {};
