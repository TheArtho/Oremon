import { EasingType, system } from "@minecraft/server";
import moveData from "../../data/moveData";
/**
 * Battle scene instance specific for a player
 */
export class BattlePlayerScene {
    constructor(battle, player) {
        this.battle = battle;
        this.player = player;
        this.eventQueue = [];
        this.processing = false;
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
    async wait(ticks) {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                system.runTimeout(resolve, ticks);
            });
        });
    }
    async onBattleStart() {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                system.run(() => {
                    this.player.playMusic("oremon.music.wild_battle");
                    this.player.camera.setCamera("oremon:shoulder_right", {
                        easeOptions: { easeType: EasingType.InOutQuad, easeTime: 0.5 }
                    });
                    resolve();
                });
            });
        });
    }
    async onBattleEnd() {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                this.player.sendMessage("[Battle] The battle is over!");
                system.run(() => {
                    this.player.runCommand("/music stop 2");
                    this.player.camera.clear();
                    resolve();
                });
            });
        });
    }
    async onDisplayMessage(message) {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                this.player.sendMessage(`[Battle] ${message}`);
                resolve();
            });
        });
    }
    async onUpdateInfo() {
        return new Promise((resolve) => {
            this.enqueue(async () => {
                const battleInfo = this.battle.getBattleInfo(this.player);
                let str = "";
                str += `    ${battleInfo.player.name} Lv.${battleInfo.player.level} - HP: ${battleInfo.player.currentHp}/${battleInfo.player.maxHp}\n`;
                str += `    Vs\n`;
                str += `    ${battleInfo.opponent.name} Lv.${battleInfo.opponent.level} - HP: ${battleInfo.opponent.currentHp}/${battleInfo.opponent.maxHp}\n`;
                str += 'Moves:\n';
                battleInfo.player.moves.forEach(move => {
                    if (move) {
                        str += `    ${move.id} - PP: ${move.pp}/${moveData[move.id].pp}\n`;
                    }
                });
                this.player.sendMessage(str);
                resolve();
            });
        });
    }
}
