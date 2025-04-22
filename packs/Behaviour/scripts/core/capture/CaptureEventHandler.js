import { Player, world } from "@minecraft/server";
import { expandCompactWildOremon } from "../monster/OremonUtils";
import { Oremon } from "../monster/Oremon";
import { PlayerSave } from "../save/PlayerSave";
export class CaptureEventHandler {
    static register() {
        // Snowball test for capture
        world.afterEvents.projectileHitEntity.subscribe((event) => {
            const projectile = event.projectile;
            const entity = event.getEntityHit().entity;
            const trainer = event.source;
            if (projectile.typeId !== "minecraft:snowball")
                return;
            if (!entity)
                return;
            if (!entity.isValid)
                return;
            if (!trainer || !(trainer instanceof Player))
                return;
            const family = entity.getComponent("type_family");
            if (family && family.hasTypeFamily("oremon")) {
                const wildData = entity.getDynamicProperty("oremon:wild_data");
                if (!wildData) {
                    return;
                }
                const oremon = Oremon.fromWildData(expandCompactWildOremon(JSON.parse(wildData)));
                entity.kill();
                PlayerSave.data.get(trainer.id)?.giveMonster(oremon);
                trainer.sendMessage(`${oremon.getName()} has been captured!`);
            }
        });
    }
}
