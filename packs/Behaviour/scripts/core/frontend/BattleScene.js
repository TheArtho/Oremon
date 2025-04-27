import { system } from "@minecraft/server";
export class BattleScene {
    constructor(battle) {
        this.battle = battle;
        this.playerScenes = new Map();
        this.eventQueue = [];
        this.processing = false;
    }
    attachPlayerScene(scene) {
        this.playerScenes.set(scene.player.id, scene);
    }
    async processNext() {
        if (this.processing || this.eventQueue.length === 0)
            return;
        this.processing = true;
        const next = this.eventQueue.shift();
        if (next) {
            await next();
        }
        this.processing = false;
        this.processNext();
    }
    enqueue(action) {
        this.eventQueue.push(action);
        this.processNext();
    }
    // High level API
    async wait(ticks) {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                system.runTimeout(resolve, ticks);
            });
        });
    }
    async onBattleStart(playerId) {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                const p = this.playerScenes.get(playerId);
                await p?.onBattleStart();
                resolve();
            });
        });
    }
    async displayMessage(message, playerId) {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                if (playerId) {
                    await this.playerScenes.get(playerId)?.onDisplayMessage(message);
                }
                else {
                    for (const p of this.playerScenes.values()) {
                        await p.onDisplayMessage(message);
                    }
                }
                resolve();
            });
        });
    }
    async updateInfo() {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                for (const p of this.playerScenes.values()) {
                    p.onUpdateInfo();
                }
                resolve();
            });
        });
    }
    async battleEnd() {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                for (const p of this.playerScenes.values()) {
                    p.onBattleEnd();
                }
                resolve();
            });
        });
    }
}
