import { system, world } from "@minecraft/server";
import { CustomEventSignal } from "./CustomEventSignal";
export class PlayerSlotChangeEventSignal {
    constructor(tickRate = 2) {
        this.tickRate = tickRate;
        this.event = new CustomEventSignal();
        this.lastSlotMap = new Map();
        this.start();
    }
    start() {
        if (this.intervalId !== undefined)
            return;
        this.intervalId = system.runInterval(() => {
            for (const player of world.getPlayers()) {
                const current = player.selectedSlotIndex;
                const last = this.lastSlotMap.get(player.id);
                if (last !== undefined && last !== current) {
                    this.event.trigger({ player, previousSlot: last, currentSlot: current });
                }
                this.lastSlotMap.set(player.id, current);
            }
        }, this.tickRate);
    }
    stop() {
        if (this.intervalId !== undefined) {
            system.clearRun(this.intervalId);
            this.intervalId = undefined;
        }
    }
    subscribe(callback) {
        this.event.subscribe(callback);
    }
    unsubscribe(callback) {
        this.event.unsubscribe(callback);
    }
}
