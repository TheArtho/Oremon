import { system, world } from "@minecraft/server";
import { Oremon } from "./Oremon";
import { compactWildOremon } from "./OremonUtils";
export class OremonEntityEventHandler {
    static register() {
        this.registerSpawnEvent();
        this.registerInteractEvent();
    }
    static registerSpawnEvent() {
        // Test Entity spawn for Oremons
        world.afterEvents.entitySpawn.subscribe(({ entity }) => {
            if (!entity.isValid)
                return;
            const family = entity.getComponent("type_family");
            if (family && family.hasTypeFamily("oremon")) {
                const level = Math.ceil(Math.random() * 9);
                const oremonInstance = new Oremon(entity.typeId, { level });
                const name = oremonInstance.getName();
                // Set Shiny
                if (oremonInstance.isShiny()) {
                    try {
                        entity.triggerEvent("oremon:make_shiny");
                    }
                    catch {
                        // Skip
                    }
                }
                // Set Gender
                try {
                    if (oremonInstance.getGender() === true) {
                        entity.triggerEvent('oremon:make_male');
                    }
                    else if (oremonInstance.getGender() === false) {
                        entity.triggerEvent('oremon:make_female');
                    }
                    else {
                        entity.triggerEvent('oremon:make_genderless');
                    }
                }
                catch {
                    // Skip
                }
                // Set Size
                try {
                    const oremonSizes = ["very_small", "small", "medium", "big", "gigantic"];
                    entity.triggerEvent(`setsize:${oremonSizes[oremonInstance.getSize()]}`);
                }
                catch {
                    // Skip
                }
                entity.nameTag = `${name}\nLv.${level}`;
                entity.setDynamicProperty("oremon:wild_data", JSON.stringify(compactWildOremon(oremonInstance.toWildData())));
                // console.log(`Saved oremon data proprerties : ${entity.getDynamicPropertyTotalByteCount()} total bytes`)
            }
        });
    }
    static registerInteractEvent() {
        world.beforeEvents.playerInteractWithEntity.subscribe((event) => {
            const entity = event.target;
            const player = event.player;
            if (!entity.isValid)
                return;
            const family = entity.getComponent("type_family");
            if (family && family.hasTypeFamily("oremon")) {
                const tameable = entity.getComponent("tameable");
                if (tameable && !tameable.isTamed) {
                    system.run(() => {
                        tameable.tame(player);
                        try {
                            entity.triggerEvent("oremon:tame");
                        }
                        catch (e) {
                            console.error(e);
                        }
                    });
                }
            }
        });
    }
}
