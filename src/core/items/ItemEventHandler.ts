import {system, world} from "@minecraft/server";
import {VectorUtils} from "../utils/VectorUtils";
import {moveEntityToLocation} from "../utils/physicsUtils";
import {onBallHitBlock, UseOreball} from "./Oreball";
import {BattleManager} from "../combat/BattleManager";

export class ItemEventHandler {
    static register() {
        this.registerItemUseInBattle()
        world.beforeEvents.itemUse.subscribe(UseOreball);
        world.afterEvents.projectileHitBlock.subscribe(onBallHitBlock);
    }

    private static registerItemUseInBattle() {
        world.beforeEvents.itemUse.subscribe((event) => {
            const battle = BattleManager.getBattleByPlayerId(event.source.id);
            if (battle) {
                event.cancel = true;
            }
        });
    }

    registerMagicStickEvent() {
        world.beforeEvents.itemUse.subscribe(event => {
            const item = event.itemStack.typeId;
            if (item === "minecraft:stick") {
                const hitBlock = event.source.dimension.getBlockFromRay(event.source.getHeadLocation(),
                    event.source.getViewDirection(),
                    {maxDistance: 20});

                if (hitBlock) {
                    const hitPosition = {
                        x: hitBlock.block.location.x + hitBlock.faceLocation.x,
                        y: hitBlock.block.location.y + hitBlock.faceLocation.y,
                        z: hitBlock.block.location.z + hitBlock.faceLocation.z
                    };

                    const interval = system.runInterval(() => {
                        if (VectorUtils.distance(hitPosition, event.source.location) < 0.5) {
                            system.clearRun(interval);
                            return;
                        }
                        const values = moveEntityToLocation(event.source, hitPosition, 0.5);
                        if (values != null) {
                            event.source.applyKnockback({x: values.x, z: values.z}, values.y);
                        }
                    });
                }
            }
        });
    }
}