import {EasingType, Entity, Player, system} from "@minecraft/server";
import {Battle} from "../combat/Battle";
import {VectorUtils} from "../utils/VectorUtils";
import {secondsToTick} from "../utils/timeTickUtils";
import {MathUtils} from "../utils/MathUtils";
import {PlayerAction} from "../../types/Battle";
import {BattleCameraManager} from "../camera/BattleCameraManager";
import {BattleUiManager} from "../ui/BattleUiManager";
import {DialogBoxHandler} from "../ui/DialogBoxHandler";

type SceneAction = () => Promise<void>;

export class BattlePlayerScene {
    private eventQueue: SceneAction[] = [];
    private processing = false;

    constructor(public index: number, public battle: Battle, public player: Player) {}

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
        const action: SceneAction = () => {
            return new Promise<void>((resolve) => {
                actionBuilder(resolve);
            });
        };
        this.eventQueue.push(action);
    }

    // High-level API

    async wait(ticks: number) {
        return new Promise<void>((resolve) => {
            system.runTimeout(resolve, ticks);
        });
    }

    onWildBattleStart(opponentCry: string, playerMonster?: Entity, opponentMonster?: Entity): Promise<void> {
        return new Promise<void>((resolve) => {
            const playerPosition = this.player.location;
            const playerMonsterPosition = playerMonster?.location;
            const opponentMonsterPosition = opponentMonster?.location;
            (async () => {
                system.run(() => {
                    this.player.playMusic("oremon.music.wild_battle");
                    if (opponentMonsterPosition) {
                        const yaw = MathUtils.radiansToDegrees(Math.atan2(opponentMonsterPosition.x - playerPosition.x, playerPosition.z - opponentMonsterPosition.z));
                        opponentMonster.setRotation({ x: 0, y: yaw });
                    }
                });
                await this.wait(10);

                if (opponentMonsterPosition && playerMonster && playerMonsterPosition) {
                    const distance = 5;
                    const direction = VectorUtils.normalize(VectorUtils.subtract(playerPosition, opponentMonsterPosition));
                    const cameraOffset = VectorUtils.add(
                        VectorUtils.multiply({ x: direction.x, y: 0, z: direction.z }, distance),
                        { x: 0, y: 2, z: 0 }
                    );
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
                        this.player?.dimension.playSound(opponentCry, {x: opponentMonsterPosition.x, y: opponentMonsterPosition.y + 0.5, z: opponentMonsterPosition.z});
                        this.player?.playSound(opponentCry, {volume: 1});
                        try {
                            opponentMonster?.playAnimation("battle_cry",
                                {
                                    controller: "controller.animation.oremon.base",
                                    nextState: "battle_standing",
                                    blendOutTime: 0.2
                                });
                        }
                        catch (e) {
                            this.player.sendMessage(e as string);
                        }
                    });

                    await this.wait(30);

                    system.run(() => {
                        /*
                        this.player.camera.setCamera("oremon:shoulder_right", {
                            easeOptions: { easeType: EasingType.InOutQuad, easeTime: 0.5 }
                        });
                        */
                        const cameraOption = BattleCameraManager.BattleClassicCamera(playerMonsterPosition, opponentMonsterPosition, {easeType: EasingType.InOutQuad, easeTime: 0.6}, this.player.dimension)
                        this.player.camera.setCamera("minecraft:free", cameraOption);
                    });

                    await this.wait(secondsToTick(1.5));

                    resolve();
                }
            })()
        });
    }


    onTrainerBattleStart() {
        return new Promise<void>((resolve) => {
            system.run(() => {
                this.player.playMusic("oremon.music.wild_battle");
                this.player.camera.setCamera("oremon:shoulder_right", {
                    easeOptions: { easeType: EasingType.InOutQuad, easeTime: 0.5 }
                });
                resolve();
            });
        });
    }

    onBattleEnd() {
        return new Promise<void>((resolve) => {
            system.run(() => {
                this.player.runCommand("music stop 2");
                this.player.camera.clear();
                resolve();
            });
        });
    }

    async onAskInput() {
        const battleInfo = this.battle.getBattleInfo(this.player);

        const actionForm = async (): Promise<void> => {
            const form = BattleUiManager.getChoiceForm(battleInfo);

            const r = await form.show(this.player);

            // If the player cancels, ask again
            if (r.canceled) {
                return actionForm(); // Recursive call
            }

            switch(r.selection) {
                case 0: // Battle
                    return moveChoice();
                case 3: // Run
                {
                    if (this.battle.isTrainerBattle()) {
                        return actionForm();
                    }
                    const playerAction: PlayerAction = {
                        type: "run",
                        value: ""
                    };
                    this.battle.receiveInput(this.player, playerAction);
                    break;
                }
                default:
                    return actionForm();
            }
        }

        const moveChoice = async (): Promise<void> => {
            const form = BattleUiManager.getMoveForm(battleInfo);

            const r = await form.show(this.player);

            // If the player cancels, go back to the previous form
            if (r.canceled) {
                return actionForm();
            }

            const moveId = battleInfo.player.moves[r.selection!]?.id;

            if (!moveId) {
                return moveChoice(); // In case moveId is still undefined
            }

            const playerAction: PlayerAction = {
                type: "move",
                value: moveId
            };

            this.battle.receiveInput(this.player, playerAction);
        };

        await actionForm();
    }


    onDisplayMessage(message: string) {
       return new Promise<void>((resolve) => {
           this.player.sendMessage(`[Battle] ${message}`);
           resolve();
       });
    }

    onDisplayDialog(message: string) {
        return new Promise<void>((resolve) => {
            this.player.sendMessage(`[Battle Dialog] ${message}`);
            (async () => {
                await DialogBoxHandler.DisplayText(this.player, message, {waitTicks: 15, instant: true});
                resolve();
            })()
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
        return new Promise<void>((resolve) => {
            (async () => {
                // Update Battle UI
                console.log(battleInfo);
                resolve();
            })()
        });
    }
}
