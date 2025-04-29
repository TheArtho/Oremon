import {ItemStack, Player, world} from "@minecraft/server";
import {expandCompactWildOremon} from "../monster/OremonUtils";
import {Oremon} from "../monster/Oremon";
import {PlayerSave} from "../save/PlayerSave";

export class CaptureEventHandler {
    static register() {
        this.registerBallHitEntity();
        this.registerBallHitBlock();
    }

    static registerBallHitBlock() {
        world.afterEvents.projectileHitBlock.subscribe((event) => {
            if (event.projectile.typeId !== "oremon:oreball") return;
            if (event.projectile?.isValid && !event.projectile.hasTag("captured")) {
                const item = new ItemStack(event.projectile.typeId);
                event.projectile.dimension.spawnItem(item, event.location);
                event.projectile.remove();
            }
        });
    }

    static registerBallHitEntity() {
        world.afterEvents.projectileHitEntity.subscribe((event) => {
            const projectile = event.projectile;
            if (projectile.typeId !== "oremon:oreball") return;
            if (event.projectile?.isValid && !event.projectile.hasTag("captured")) {
                const entity = event.getEntityHit().entity;
                const player = event.source;
                if (!entity || !entity.isValid || entity.hasTag("captured")) return;
                if (!player || !(player instanceof Player)) return;
                if (player == entity) return;
                const family = entity.getComponent("type_family");
                if (family && family.hasTypeFamily("oremon")) {
                    const wildData = entity.getDynamicProperty("oremon:wild_data");
                    if (!wildData) {
                        return;
                    }
                    const oremon = Oremon.fromWildData(expandCompactWildOremon(JSON.parse(wildData as string)));
                    entity.remove();
                    event.projectile.remove();
                    PlayerSave.data.get(player.id)?.giveMonster(oremon);
                    player.sendMessage(`${oremon.getName()} has been captured!`)
                }
            }
        });
    }
}