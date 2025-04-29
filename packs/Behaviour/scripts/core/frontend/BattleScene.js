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
    play() {
        if (!this.processing) {
            this.processing = true;
            this.processNext();
        }
    }
    pause() {
        this.processing = false;
    }
    stop() {
        this.processing = false;
        this.eventQueue = [];
    }
    async processNext() {
        if (!this.processing) {
            return;
        }
        if (this.eventQueue.length === 0) {
            this.stop();
            return;
        }
        const next = this.eventQueue.shift();
        if (next) {
            await next();
        }
        this.processNext();
    }
    enqueue(actionBuilder) {
        const action = () => {
            return new Promise((resolve) => {
                actionBuilder(resolve);
            });
        };
        this.eventQueue.push(action);
    }
    // High level API
    wait(ticks) {
        this.enqueue((resolve) => {
            system.runTimeout(resolve, ticks);
        });
    }
    onBattleStart(playerId) {
        this.enqueue((resolve) => {
            if (playerId) {
                // If there is only one player then only wait for one
                const p = this.playerScenes.get(playerId);
                p?.onBattleStart().then(resolve);
            }
            else {
                // Else every player have to finish before the resolve
                const promises = [];
                for (const p of this.playerScenes.values()) {
                    promises.push(p.onBattleStart());
                }
                Promise.all(promises).then(() => resolve());
            }
        });
    }
    displayMessage(message, playerId) {
        this.enqueue(async (resolve) => {
            if (playerId) {
                const p = this.playerScenes.get(playerId);
                p?.onDisplayMessage(message).then(resolve);
            }
            else {
                const promises = [];
                for (const p of this.playerScenes.values()) {
                    promises.push(p.onDisplayMessage(message));
                }
                Promise.all(promises).then(() => resolve());
            }
        });
    }
    updateInfo() {
        this.enqueue((resolve) => {
            for (const p of this.playerScenes.values()) {
                p.onUpdateInfo();
            }
            resolve();
        });
    }
    battleEnd() {
        this.enqueue((resolve) => {
            const promises = [];
            for (const p of this.playerScenes.values()) {
                promises.push(p.onBattleEnd());
            }
            Promise.all(promises).then(() => resolve());
        });
    }
}
