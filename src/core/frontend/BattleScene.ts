import {Battle} from "../combat/Battle";
import {system} from "@minecraft/server";
import {BattlePlayerScene} from "./BattlePlayerScene";

/**
 * Main scene of a battle (for general effects)
 */
export class BattleScene {
    private playerScenes: Map<string, BattlePlayerScene> = new Map();

    private eventQueue: { action: () => void, delay: number }[] = [];
    private processing: boolean = false;

    constructor(public battle: Battle) {

    }

    attachPlayerScene(scene: BattlePlayerScene) {
        this.playerScenes.set(scene.player.id, scene);
    }

    private enqueue(action: () => void, delay: number = 0) {
        this.eventQueue.push({ action, delay });
        this.processNext();
    }

    wait(ticks: number) {
        this.enqueue(() => {}, ticks);
    }

    play() {
        this.processNext();
    }

    private processNext() {
        if (this.processing || this.eventQueue.length === 0) return;

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

    onBattleStart(playerId: string) {
        const p = this.playerScenes.get(playerId)
        this.enqueue(() => {
            p?.onBattleStart();
        });
    }

    onDisplayMessage(message: string, playerId?: string) {
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
            })
        });
    }
}