import { system } from "@minecraft/server";
import { BattlePlayerScene } from "./BattlePlayerScene";
import { Battle } from "../combat/Battle";

type BattleAction = () => Promise<void>;

export class BattleScene {
    private playerScenes: Map<string, BattlePlayerScene> = new Map();
    private eventQueue: BattleAction[] = [];
    private processing = false;

    constructor(public battle: Battle) {}

    attachPlayerScene(scene: BattlePlayerScene) {
        this.playerScenes.set(scene.player.id, scene);
    }

    private async processNext() {
        if (this.processing || this.eventQueue.length === 0) return;
        this.processing = true;

        const next = this.eventQueue.shift();
        if (next) {
            await next();
        }

        this.processing = false;
        this.processNext();
    }

    private enqueue(action: BattleAction) {
        this.eventQueue.push(action);
        this.processNext();
    }

    // High level API

    async wait(ticks: number) {
        return new Promise<void>((resolve) => {
            this.enqueue(async () => {
                system.runTimeout(resolve, ticks);
            });
        });
    }

    async onBattleStart(playerId: string) {
        return new Promise<void>((resolve) => {
            this.enqueue(async () => {
                const p = this.playerScenes.get(playerId);
                await p?.onBattleStart();
                resolve();
            });
        });
    }

    async displayMessage(message: string, playerId?: string) {
        return new Promise<void>((resolve) => {
            this.enqueue(async () => {
                if (playerId) {
                    await this.playerScenes.get(playerId)?.onDisplayMessage(message);
                } else {
                    for(const p of this.playerScenes.values()) {
                        await p.onDisplayMessage(message);
                    }
                }
                resolve();
            });
        });
    }

    async updateInfo() {
        return new Promise<void>((resolve) => {
            this.enqueue(async () => {
                for(const p of this.playerScenes.values()) {
                    p.onUpdateInfo();
                }
                resolve();
            });
        });
    }

    async battleEnd() {
        return new Promise<void>((resolve) => {
            this.enqueue(async () => {
                for(const p of this.playerScenes.values()) {
                    p.onBattleEnd();
                }
                resolve();
            });
        });
    }
}
