import { system } from "@minecraft/server";
import { BattlePlayerScene } from "./BattlePlayerScene";
import { Battle } from "../combat/Battle";

// Each action is a Promise function that resolves manually
type BattleAction = () => Promise<void>;

export class BattleScene {
    private playerScenes: Map<string, BattlePlayerScene> = new Map();
    private eventQueue: BattleAction[] = [];
    private processing = false;

    constructor(public battle: Battle) {}

    attachPlayerScene(scene: BattlePlayerScene) {
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

    private async processNext() {
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

    private enqueue(actionBuilder: (resolve: () => void) => void) {
        const action: BattleAction = () => {
            return new Promise<void>((resolve) => {
                actionBuilder(resolve);
            });
        };
        this.eventQueue.push(action);
    }

    // High level API

    wait(ticks: number) {
        this.enqueue((resolve) => {
            system.runTimeout(resolve, ticks);
        });
    }

    onBattleStart(playerId?: string) {
        this.enqueue((resolve) => {
            if (playerId) {
                // If there is only one player then only wait for one
                const p = this.playerScenes.get(playerId);
                p?.onBattleStart().then(resolve);
            } else {
                // Else every player have to finish before the resolve
                const promises: Promise<void>[] = [];
                for (const p of this.playerScenes.values()) {
                    promises.push(p.onBattleStart());
                }
                Promise.all(promises).then(() => resolve());
            }
        });
    }

    displayMessage(message: string, playerId?: string) {
        this.enqueue(async (resolve) => {
            if (playerId) {
                const p = this.playerScenes.get(playerId);
                p?.onDisplayMessage(message).then(resolve);
            } else {
                const promises: Promise<void>[] = [];
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
            const promises: Promise<void>[] = [];
            for (const p of this.playerScenes.values()) {
                promises.push(p.onBattleEnd());
            }
            Promise.all(promises).then(() => resolve());
        });
    }

}
