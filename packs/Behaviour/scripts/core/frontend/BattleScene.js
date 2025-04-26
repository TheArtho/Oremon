import { system } from "@minecraft/server";
/**
 * Main scene of a battle (for general effects)
 */
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
    enqueue(action, delay = 0) {
        this.eventQueue.push({ action, delay });
        this.processNext();
    }
    wait(ticks) {
        this.enqueue(() => { }, ticks);
    }
    play() {
        this.processNext();
    }
    processNext() {
        if (this.processing || this.eventQueue.length === 0)
            return;
        this.processing = true;
        const next = this.eventQueue.shift();
        if (next) {
            next.action();
            if (next.delay === 0) {
                system.run(() => {
                    this.processing = false;
                    this.processNext();
                });
            }
            else {
                system.runTimeout(() => {
                    this.processing = false;
                    this.processNext();
                }, next.delay);
            }
        }
    }
    onUpdateInfo() {
        this.enqueue(() => {
            this.playerScenes.forEach(p => {
                p.onUpdateInfo();
            });
        });
    }
    onBattleStart(playerId) {
        const p = this.playerScenes.get(playerId);
        this.enqueue(() => {
            p?.onBattleStart();
        });
    }
    onDisplayMessage(message, playerId) {
        this.enqueue(() => {
            if (playerId) {
                const p = this.playerScenes.get(playerId);
                p?.onDisplayMessage(message);
            }
            else {
                this.playerScenes.forEach(p => {
                    p.onDisplayMessage(message);
                });
            }
        });
    }
    onBattleEnd() {
        this.enqueue(() => {
            this.playerScenes.forEach(p => {
                p.onBattleEnd();
            });
        });
    }
}
