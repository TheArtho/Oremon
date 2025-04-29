import { EasingType, system } from "@minecraft/server";
import moveData from "../../data/moveData";
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
    enqueue(actionBuilder) {
        const action = () => {
            return new Promise((resolve) => {
                actionBuilder(resolve);
            });
        };
        this.eventQueue.push(action);
    }
    // High-level API
    wait(ticks) {
        this.enqueue((resolve) => {
            system.runTimeout(resolve, ticks);
        });
    }
    onBattleStart() {
        return new Promise((resolve) => {
            system.run(() => {
                // this.player.playMusic("oremon.music.wild_battle");
                this.player.camera.setCamera("oremon:shoulder_right", {
                    easeOptions: { easeType: EasingType.InOutQuad, easeTime: 0.5 }
                });
                resolve();
            });
        });
    }
    onBattleEnd() {
        return new Promise((resolve) => {
            system.run(() => {
                this.player.camera.clear();
                resolve();
            });
        });
    }
    onDisplayMessage(message) {
        return new Promise((resolve) => {
            this.player.sendMessage(`[Battle] ${message}`);
            resolve();
        });
    }
    onUpdateInfo() {
        const battleInfo = this.battle.getBattleInfo(this.player);
        let str = `### TURN ${battleInfo.battle.turn + 1} ###\n`;
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
    }
}
