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
    /**
     * Attach an entity to the trainer of the scene for animations and camera controls
     * @param index Index between 1 and 2
     * @param entity
     */
    attachTrainer(index, entity) {
        switch (index) {
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
    attachMonster(index, entity) {
        if (entity?.getComponent("type_family")?.hasTypeFamily("oremon")) {
            switch (index) {
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
    onWildBattleStart(playerId) {
        this.enqueue((resolve) => {
            if (playerId) {
                // If there is only one player then only wait for one
                const p = this.playerScenes.get(playerId);
                p?.onWildBattleStart(this.battle.getOpponentCry(p?.index), this.getMonsterFromIndex(p?.index), this.getOpponentMonsterFromIndex(p?.index)).then(resolve);
            }
            else {
                // Else every player have to finish before the resolve
                const promises = [];
                for (const p of this.playerScenes.values()) {
                    promises.push(p.onWildBattleStart(this.battle.getOpponentCry(p?.index), this.getMonsterFromIndex(p?.index), this.getOpponentMonsterFromIndex(p?.index)));
                }
                Promise.all(promises).then(() => resolve());
            }
        });
    }
    onTrainerBattleStart(playerId) {
        this.enqueue((resolve) => {
            if (playerId) {
                // If there is only one player then only wait for one
                const p = this.playerScenes.get(playerId);
                p?.onTrainerBattleStart().then(resolve);
            }
            else {
                // Else every player have to finish before the resolve
                const promises = [];
                for (const p of this.playerScenes.values()) {
                    promises.push(p.onTrainerBattleStart());
                }
                Promise.all(promises).then(() => resolve());
            }
        });
    }
    displayInput() {
        this.enqueue((resolve) => {
            for (const p of this.playerScenes.values()) {
                p.onAskInput();
            }
            resolve();
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
    displayDialog(message, playerId) {
        this.enqueue(async (resolve) => {
            if (playerId) {
                const p = this.playerScenes.get(playerId);
                p?.onDisplayDialog(message).then(resolve);
            }
            else {
                const promises = [];
                for (const p of this.playerScenes.values()) {
                    promises.push(p.onDisplayDialog(message));
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
    faint(index) {
        this.enqueue((resolve) => {
            system.run(() => {
                this.getMonsterFromIndex(index)?.kill();
                resolve();
            });
        });
    }
    battleEnd() {
        this.enqueue((resolve) => {
            const promises = [];
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
    getMonsterFromIndex(index) {
        if (index == 1) {
            return this.monster1;
        }
        else {
            return this.monster2;
        }
    }
    getOpponentMonsterFromIndex(index) {
        if (index == 1) {
            return this.monster2;
        }
        else if (index == 2) {
            return this.monster1;
        }
    }
}
