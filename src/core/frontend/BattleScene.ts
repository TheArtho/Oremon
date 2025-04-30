import {Entity, system} from "@minecraft/server";
import { BattlePlayerScene } from "./BattlePlayerScene";
import { Battle } from "../combat/Battle";

// Each action is a Promise function that resolves manually
type BattleAction = () => Promise<void>;

export class BattleScene {
    private playerScenes: Map<string, BattlePlayerScene> = new Map();
    private eventQueue: BattleAction[] = [];
    private processing = false;

    trainer1: Entity | undefined;
    trainer2: Entity | undefined;
    monster1: Entity | undefined;
    monster2: Entity | undefined;

    constructor(public battle: Battle) {}

    attachPlayerScene(scene: BattlePlayerScene) {
        this.playerScenes.set(scene.player.id, scene);
    }

    /**
     * Attach an entity to the trainer of the scene for animations and camera controls
     * @param index Index between 1 and 2
     * @param entity
     */
    attachTrainer(index: number, entity?: Entity) {
        switch (index){
            case 1:
                this.trainer1 = entity;
                break;
            case 2:
                this.trainer2 = entity;
                break;
        }
    }

    /**
     * Attach an entity to the monster of the scene for animations and camera controls
     * @param index Index between 1 and 2
     * @param entity
     */
    attachMonster(index: number, entity?: Entity) {
        if (entity?.getComponent("type_family")?.hasTypeFamily("oremon")) {
            switch (index){
                case 1:
                    this.monster1 = entity;
                    break;
                case 2:
                    this.monster2 = entity;
                    break;
            }
        }
        entity?.addTag("in_battle");
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

    onWildBattleStart(playerId?: string) {
        this.enqueue((resolve) => {
            if (playerId) {
                // If there is only one player then only wait for one
                const p = this.playerScenes.get(playerId);
                p?.onWildBattleStart(this.battle.getOpponentCry(p?.index), this.getMonsterFromIndex(p?.index), this.getOpponentMonsterFromIndex(p?.index)).then(resolve);
            } else {
                // Else every player have to finish before the resolve
                const promises: Promise<void>[] = [];
                for (const p of this.playerScenes.values()) {
                    promises.push(p.onWildBattleStart(this.battle.getOpponentCry(p?.index), this.getMonsterFromIndex(p?.index), this.getOpponentMonsterFromIndex(p?.index)));
                }
                Promise.all(promises).then(() => resolve());
            }
        });
    }

    onTrainerBattleStart(playerId?: string) {
        this.enqueue((resolve) => {
            if (playerId) {
                // If there is only one player then only wait for one
                const p = this.playerScenes.get(playerId);
                p?.onTrainerBattleStart().then(resolve);
            } else {
                // Else every player have to finish before the resolve
                const promises: Promise<void>[] = [];
                for (const p of this.playerScenes.values()) {
                    promises.push(p.onTrainerBattleStart());
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

    faint(index: number) {
        this.enqueue((resolve) => {
            system.run(() => {
                this.getMonsterFromIndex(index)?.kill();
                resolve();
            });
        });
    }

    battleEnd() {
        this.enqueue((resolve) => {
            const promises: Promise<void>[] = [];
            for (const p of this.playerScenes.values()) {
                promises.push(p.onBattleEnd());
            }
            system.run(() => {
                this.monster1?.removeTag("in_battle");
                this.monster2?.removeTag("in_battle");
                try {
                    this.monster1?.triggerEvent("oremon:overworld");
                }
                catch {
                    // Skip
                }
                try {
                    this.monster2?.triggerEvent("oremon:overworld");
                }
                catch {
                    // Skip
                }
            });
            Promise.all(promises).then(() => resolve());
        });
    }

    getMonsterFromIndex(index: number) {
        if (index == 1) {
            return this.monster1;
        }
        else {
            return this.monster2;
        }
    }

    getOpponentMonsterFromIndex(index: number) {
        if (index == 1) {
            return this.monster2;
        }
        else if (index == 2) {
            return this.monster1;
        }
    }
}
