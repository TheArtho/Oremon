import { Player, system, world } from "@minecraft/server";
import { Oremon } from "../monster/Oremon";
import { compactWildOremon } from "../monster/OremonUtils";
import { PlayerSave } from "../save/PlayerSave";
import { CaptureManager } from "../capture/CaptureManager";
import { startBattleWithEntity } from "../items/Oreball";
import { ActionFormData } from "@minecraft/server-ui";
const blockedVanillaEntities = new Set([
    "minecraft:armadillo",
    "minecraft:creaking",
    "minecraft:allay",
    "minecraft:axolotl",
    "minecraft:bat",
    "minecraft:bee",
    "minecraft:blaze",
    "minecraft:camel",
    "minecraft:cat",
    "minecraft:cave_spider",
    "minecraft:chicken",
    "minecraft:cod",
    "minecraft:cow",
    "minecraft:creeper",
    "minecraft:dolphin",
    "minecraft:donkey",
    "minecraft:drowned",
    "minecraft:elder_guardian",
    "minecraft:ender_dragon",
    "minecraft:enderman",
    "minecraft:endermite",
    "minecraft:evoker",
    "minecraft:fox",
    "minecraft:frog",
    "minecraft:ghast",
    "minecraft:giant",
    "minecraft:glow_squid",
    "minecraft:goat",
    "minecraft:guardian",
    "minecraft:hoglin",
    "minecraft:horse",
    "minecraft:husk",
    "minecraft:illusioner",
    "minecraft:iron_golem",
    "minecraft:llama",
    "minecraft:magma_cube",
    "minecraft:mooshroom",
    "minecraft:mule",
    "minecraft:ocelot",
    "minecraft:panda",
    "minecraft:parrot",
    "minecraft:phantom",
    "minecraft:pig",
    "minecraft:piglin",
    "minecraft:piglin_brute",
    "minecraft:pillager",
    "minecraft:polar_bear",
    "minecraft:pufferfish",
    "minecraft:rabbit",
    "minecraft:ravager",
    "minecraft:salmon",
    "minecraft:sheep",
    "minecraft:shulker",
    "minecraft:silverfish",
    "minecraft:sniffer",
    "minecraft:skeleton",
    "minecraft:skeleton_horse",
    "minecraft:slime",
    "minecraft:snow_golem",
    "minecraft:spider",
    "minecraft:squid",
    "minecraft:stray",
    "minecraft:strider",
    "minecraft:tadpole",
    "minecraft:trader_llama",
    "minecraft:tropical_fish",
    "minecraft:turtle",
    "minecraft:vex",
    "minecraft:villager",
    "minecraft:vindicator",
    "minecraft:wandering_trader",
    "minecraft:warden",
    "minecraft:witch",
    "minecraft:wither",
    "minecraft:wither_skeleton",
    "minecraft:wolf",
    "minecraft:zoglin",
    "minecraft:zombie",
    "minecraft:zombie_horse",
    "minecraft:zombie_villager",
    "minecraft:zombified_piglin"
]);
export class OremonEntityEventHandler {
    static register() {
        this.disableVanillaSpawnEvent();
        this.registerSpawnEvent();
        this.registerInteractFormEvent();
        // this.registerInteractTameEvent();
        // this.registerInteractBattleEvent();
        this.registerHitByBall();
    }
    static registerSpawnEvent() {
        // Test Entity spawn for Oremons
        world.afterEvents.entitySpawn.subscribe(({ entity }) => {
            if (!entity.isValid)
                return;
            const family = entity.getComponent("type_family");
            if (family && family.hasTypeFamily("oremon")) {
                if (entity.hasTag("captured")) {
                    const playerId = entity.getTags().find(tag => tag.includes("player:"))?.replace("player:", "");
                    const slot = Number(entity.getTags().find(tag => tag.includes("slot:"))?.replace("slot:", ""));
                    const playerData = PlayerSave.data.get(playerId);
                    if (!playerData) {
                        return;
                    }
                    const oremonInstance = playerData.getTeamSlot(slot);
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
                    if (!entity.hasTag("in_battle")) {
                        try {
                            entity.triggerEvent("oremon:overworld");
                        }
                        catch {
                            // Skip
                        }
                    }
                    entity.nameTag = `${name}\nLv.${oremonInstance.getLevel()}\n${playerData.player.name}'s`;
                }
                else {
                    // Generate a brand new Oremon
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
                    try {
                        entity.triggerEvent("oremon:overworld");
                    }
                    catch {
                        // Skip
                    }
                    entity.nameTag = `${name}\nLv.${level}`;
                    entity.setDynamicProperty("oremon:wild_data", JSON.stringify(compactWildOremon(oremonInstance.toWildData())));
                    // console.log(`Saved oremon data proprerties : ${entity.getDynamicPropertyTotalByteCount()} total bytes`)
                }
            }
        });
    }
    static registerInteractFormEvent() {
        world.beforeEvents.playerInteractWithEntity.subscribe((event) => {
            const entity = event.target;
            const player = event.player;
            if (!entity.isValid)
                return;
            const family = entity.getComponent("type_family");
            if (family && family.hasTypeFamily("oremon")) {
                system.run(() => {
                    const form = new ActionFormData()
                        .title("wiki_form:battle_form:")
                        .body("Choose a move")
                        .button("Attack 1")
                        .button("Attack 2")
                        .button("Attack 3")
                        .button("Attack 4");
                    form.show(player);
                });
            }
        });
    }
    static registerInteractTameEvent() {
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
                            entity.triggerEvent("oremon:capture");
                        }
                        catch (e) {
                            console.error(e);
                        }
                    });
                }
            }
        });
    }
    static registerInteractBattleEvent() {
        world.beforeEvents.playerInteractWithEntity.subscribe((event) => {
            const entity = event.target;
            if (!entity.isValid)
                return;
            const family = entity.getComponent("type_family");
            if (family && family.hasTypeFamily("oremon")) {
                const tameable = entity.getComponent("tameable");
                if (tameable && tameable.isTamed) {
                    system.run(() => {
                        try {
                            if (entity.getProperty("oremon:battling") === true) {
                                entity.triggerEvent("oremon:overworld");
                                event.player.sendMessage("Not battling anymore.");
                            }
                            else {
                                entity.triggerEvent("oremon:battle");
                                event.player.sendMessage("Battling.");
                            }
                        }
                        catch (e) {
                            console.error(e);
                        }
                    });
                }
            }
        });
    }
    static registerPlayerLeaveEvent() {
    }
    static disableVanillaSpawnEvent() {
        world.afterEvents.entitySpawn.subscribe(event => {
            const entity = event.entity;
            if (blockedVanillaEntities.has(entity.typeId)) {
                try {
                    entity.remove();
                }
                catch {
                    // Skip
                }
            }
        });
    }
    static registerHitByBall() {
        world.afterEvents.projectileHitEntity.subscribe((event) => {
            const projectile = event.projectile;
            if (projectile.typeId !== "oremon:oreball")
                return;
            system.run(() => {
                const entity = event.getEntityHit().entity;
                const player = event.source;
                if (!player || !(player instanceof Player))
                    return;
                if (!entity)
                    return;
                if (player === entity)
                    return;
                if (!projectile)
                    return;
                if (event.projectile?.isValid && !event.projectile.hasTag("captured")) {
                    CaptureManager.CaptureEntity(entity, player, event.projectile);
                }
                else if (event.projectile?.isValid && event.projectile.hasTag("captured")) {
                    startBattleWithEntity(player, entity, projectile);
                }
            });
        });
    }
}
