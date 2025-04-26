import {EasingType, Player, system} from "@minecraft/server";
import { Battle } from "../combat/Battle";
import moveData from "../../data/moveData";

/**
 * Battle scene instance specific for a player
 */
export class BattlePlayerScene {
    private eventQueue: { action: () => void, delay: number }[] = [];
    private processing = false;

    constructor(public battle: Battle, public player: Player) {

    }

    enqueue(action: () => void, delay: number = 0) {
        this.eventQueue.push({ action, delay });
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
            } else {
                system.runTimeout(() => {
                    this.processing = false;
                    this.processNext();
                }, next.delay);
            }
        }
    }

    wait(ticks: number) {
        this.enqueue(() => {}, ticks);
    }

    play() {
        this.processNext();
    }

    onBattleStart() {
        system.run(() => {
            this.player.playMusic("oremon.music.wild_battle");
            this.player.camera.setCamera("oremon:shoulder_right", {
                easeOptions: { easeType: EasingType.InOutQuad, easeTime: 0.5 },
                rotation: {x: 0, y: 0}
            });
        });
    }

    onBattleEnd() {
        this.player.sendMessage("[Battle] The battle is over!");
        system.run(() => {
            this.player.runCommand("/music stop 2");
            this.player.camera.clear();
        });
    }

    onDisplayMessage(message: string) {
        this.player.sendMessage(`[Battle] ${message}`);
    }

    onUpdateInfo() {
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
        })
        this.player.sendMessage(str);
    }
}
