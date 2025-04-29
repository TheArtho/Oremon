import { EasingType, Player, system } from "@minecraft/server";
import { Battle } from "../combat/Battle";
import moveData from "../../data/moveData";

type PlayerAction = () => Promise<void>;

export class BattlePlayerScene {
    private eventQueue: PlayerAction[] = [];
    private processing = false;

    constructor(public battle: Battle, public player: Player) {}

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

    private enqueue(actionBuilder: (resolve: () => void) => void) {
        const action: PlayerAction = () => {
            return new Promise<void>((resolve) => {
                actionBuilder(resolve);
            });
        };
        this.eventQueue.push(action);
    }

    // High-level API

    wait(ticks: number) {
        this.enqueue((resolve) => {
            system.runTimeout(resolve, ticks);
        });
    }

    onBattleStart() {
        return new Promise<void>((resolve) => {
            system.run(() => {
                // this.player.playMusic("oremon.music.wild_battle");
                this.player.camera.setCamera("oremon:shoulder_right", {
                    easeOptions: { easeType: EasingType.InOutQuad, easeTime: 0.5 }
                });
                resolve();
            });
        })
    }

    onBattleEnd() {
        return new Promise<void>((resolve) => {
            system.run(() => {
                this.player.camera.clear();
                resolve();
            });
        });
    }

    onDisplayMessage(message: string) {
       return new Promise<void>((resolve) => {
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
