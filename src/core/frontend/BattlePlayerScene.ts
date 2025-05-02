import {EasingType, Entity, Player, system} from "@minecraft/server";
import {Battle} from "../combat/Battle";
import moveData from "../../data/moveData";
import {VectorUtils} from "../utils/VectorUtils";
import {secondsToTick} from "../utils/timeTickUtils";
import {MathUtils} from "../utils/MathUtils";
import {ActionFormData} from "@minecraft/server-ui";
import {PlayerAction} from "../../types/Battle";
import {BattleCameraManager} from "../camera/BattleCameraManager";

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
                        this.player?.dimension.playSound(opponentCry, opponentMonsterPosition);
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
                // this.player.playMusic("oremon.music.wild_battle");
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

        const ask = async (): Promise<void> => {
            const form = new ActionFormData()
                .title("wiki_form:battle")
                .body("Choose a move");

            battleInfo.player.moves.forEach(move => {
                if (move) {
                    form.button(`${move.id} - PP: ${move.pp}/${moveData[move.id].pp}`);
                }
            });

            const r = await form.show(this.player);

            // If the player cancels, ask again
            if (r.canceled) {
                return ask(); // Recursive call
            }

            const moveId = battleInfo.player.moves[r.selection!]?.id;

            if (!moveId) {
                return ask(); // In case moveId is still undefined
            }

            const playerAction: PlayerAction = {
                type: "move",
                value: moveId
            };

            this.battle.receiveInput(this.player, playerAction);
        };

        await ask();
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
