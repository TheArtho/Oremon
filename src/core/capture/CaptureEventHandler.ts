import {ItemStack, world} from "@minecraft/server";

export class CaptureEventHandler {
    static register() {
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
}