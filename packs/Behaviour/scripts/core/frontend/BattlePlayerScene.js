import { EasingType, system } from "@minecraft/server";
import { VectorUtils } from "../utils/VectorUtils";
import { secondsToTick } from "../utils/timeTickUtils";
import { MathUtils } from "../utils/MathUtils";
import { BattleCameraManager } from "../camera/BattleCameraManager";
import { BattleUiManager } from "../ui/BattleUiManager";
import { DialogBoxHandler } from "../ui/DialogBoxHandler";
export class BattlePlayerScene {
    constructor(index, battle, player) {
        this.index = index;
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
    async wait(ticks) {
        return new Promise((resolve) => {
            system.runTimeout(resolve, ticks);
        });
    }
    onWildBattleStart(opponentCry, playerMonster, opponentMonster) {
        return new Promise((resolve) => {
            const playerPosition = this.player.location;
            const playerMonsterPosition = playerMonster?.location;
            const opponentMonsterPosition = opponentMonster?.location;
            (async () => {
                system.run(() => {
                    // this.player.playMusic("oremon.music.wild_battle");
                    if (opponentMonsterPosition) {
                        const yaw = MathUtils.radiansToDegrees(Math.atan2(opponentMonsterPosition.x - playerPosition.x, playerPosition.z - opponentMonsterPosition.z));
                        opponentMonster.setRotation({ x: 0, y: yaw });
                    }
                });
                await this.wait(10);
                if (opponentMonsterPosition && playerMonster && playerMonsterPosition) {
                    const distance = 5;
                    const direction = VectorUtils.normalize(VectorUtils.subtract(playerPosition, opponentMonsterPosition));
                    const cameraOffset = VectorUtils.add(VectorUtils.multiply({ x: direction.x, y: 0, z: direction.z }, distance), { x: 0, y: 2, z: 0 });
                    const cameraWorldPosition = VectorUtils.add(opponentMonsterPosition, cameraOffset);
                    const yaw = MathUtils.radiansToDegrees(Math.atan2(opponentMonsterPosition.x - playerMonsterPosition.x, playerMonsterPosition.z - opponentMonsterPosition.z));
                    system.run(() => {
                        playerMonster.setRotation({ x: 0, y: yaw + 180 });
                        opponentMonster.setRotation({ x: 0, y: yaw });
                        this.player.camera.setCamera("minecraft:free", {
                            easeOptions: { easeType: EasingType.InOutQuad, easeTime: 0.5 },
                            facingEntity: opponentMonster,
                            location: cameraWorldPosition
                        });
                    });
                    await this.wait(secondsToTick(0.5));
                    system.run(() => {
                        this.player?.dimension.playSound(opponentCry, opponentMonsterPosition);
                        this.player?.playSound(opponentCry, { volume: 1 });
                        try {
                            opponentMonster?.playAnimation("battle_cry", {
                                controller: "controller.animation.oremon.base",
                                nextState: "battle_standing",
                                blendOutTime: 0.2
                            });
                        }
                        catch (e) {
                            this.player.sendMessage(e);
                        }
                    });
                    await this.wait(30);
                    system.run(() => {
                        /*
                        this.player.camera.setCamera("oremon:shoulder_right", {
                            easeOptions: { easeType: EasingType.InOutQuad, easeTime: 0.5 }
                        });
                        */
                        const cameraOption = BattleCameraManager.BattleClassicCamera(playerMonsterPosition, opponentMonsterPosition, { easeType: EasingType.InOutQuad, easeTime: 0.6 }, this.player.dimension);
                        this.player.camera.setCamera("minecraft:free", cameraOption);
                    });
                    await this.wait(secondsToTick(1.5));
                    resolve();
                }
            })();
        });
    }
    onTrainerBattleStart() {
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
                // this.player.runCommand("music stop 2");
                this.player.camera.clear();
                resolve();
            });
        });
    }
    async onAskInput() {
        const battleInfo = this.battle.getBattleInfo(this.player);
        const ask = async () => {
            const form = BattleUiManager.getBattleForm(battleInfo);
            const r = await form.show(this.player);
            // If the player cancels, ask again
            if (r.canceled) {
                return ask(); // Recursive call
            }
            const moveId = battleInfo.player.moves[r.selection]?.id;
            if (!moveId) {
                return ask(); // In case moveId is still undefined
            }
            const playerAction = {
                type: "move",
                value: moveId
            };
            this.battle.receiveInput(this.player, playerAction);
        };
        await ask();
    }
    onDisplayMessage(message) {
        return new Promise((resolve) => {
            this.player.sendMessage(`[Battle] ${message}`);
            resolve();
        });
    }
    onDisplayDialog(message) {
        return new Promise((resolve) => {
            this.player.sendMessage(`[Battle Dialog] ${message}`);
            (async () => {
                await DialogBoxHandler.DisplayText(this.player, message, { waitTicks: 15, instant: true });
                resolve();
            })();
        });
    }
    onUpdateInfo() {
        const battleInfo = this.battle.getBattleInfo(this.player);
        /*
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
        */
        return new Promise((resolve) => {
            (async () => {
                // Update Battle UI
                console.log(battleInfo);
                resolve();
            })();
        });
    }
}
