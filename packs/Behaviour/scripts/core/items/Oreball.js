import { ItemStack, Player, system } from "@minecraft/server";
import { VectorUtils } from "../utils/vectorUtils";
import { PlayerSave } from "../save/PlayerSave";
import { PlayerMonEntityManager } from "../entity/PlayerMonEntityManager";
import { BattleManager } from "../combat/BattleManager";
import { Oremon } from "../monster/Oremon";
import { expandCompactWildOremon } from "../monster/OremonUtils";
import { BattleScene } from "../frontend/BattleScene";
import { BattlePlayerScene } from "../frontend/BattlePlayerScene";
export function UseOreball(event) {
    if (event.itemStack.typeId != "oremon:oreball")
        return;
    const player = event.source;
    const inventory = player.getComponent("inventory");
    if (inventory?.container.getItem(8)?.typeId == "oremon:switch_to_oremon") {
        system.run(() => {
            launchOreball(event);
        });
    }
    else {
        system.run(() => {
            if (PlayerSave.data.get(player.id)?.oremonOut.includes(player.selectedSlotIndex)) {
                PlayerMonEntityManager.playerRetrieve(player, player.selectedSlotIndex);
            }
            else {
                sendOutPokemon(event);
            }
        });
    }
}
function sendOutPokemon(event) {
    if (event.itemStack.typeId != "oremon:oreball")
        return;
    const itemStack = event.itemStack;
    const player = event.source;
    const cooldown = itemStack.getComponent("cooldown");
    if (cooldown && cooldown.getCooldownTicksRemaining(player) > 0)
        return;
    const vD = player.getViewDirection();
    const hL = player.getHeadLocation();
    const spawnLocation = VectorUtils.add(hL, vD);
    //@ts-expect-error: oreball entity check
    const projectile = player.dimension.spawnEntity("oremon:oreball", spawnLocation);
    const projComp = projectile.getComponent("projectile");
    if (projComp) {
        projComp.owner = player;
        const velocity = 2;
        projComp.shoot({
            x: vD.x * velocity,
            y: vD.y * velocity,
            z: vD.z * velocity
        });
        player.startItemCooldown("oreball", 10);
        player.dimension.playSound("random.bow", hL);
    }
    projectile.addTag("captured");
    projectile.addTag(`player:${player.id}`);
    projectile.addTag(`slot:${player.selectedSlotIndex}`);
}
function launchOreball(event) {
    if (event.itemStack.typeId != "oremon:oreball")
        return;
    const itemStack = event.itemStack;
    const player = event.source;
    const cooldown = itemStack.getComponent("cooldown");
    if (cooldown && cooldown.getCooldownTicksRemaining(player) > 0)
        return;
    const vD = player.getViewDirection();
    const hL = player.getHeadLocation();
    const spawnLocation = VectorUtils.add(hL, vD);
    //@ts-expect-error: oreball entity check
    const projectile = player.dimension.spawnEntity("oremon:oreball", spawnLocation);
    const projComp = projectile.getComponent("projectile");
    if (projComp) {
        projComp.owner = player;
        const velocity = 2;
        projComp.shoot({
            x: vD.x * velocity,
            y: vD.y * velocity,
            z: vD.z * velocity
        });
        player.startItemCooldown("oreball", 10);
        player.dimension.playSound("random.bow", hL);
    }
    if (itemStack.amount - 1 <= 0) {
        player.getComponent("inventory")?.container?.setItem(player.selectedSlotIndex, undefined);
    }
    else {
        player.getComponent("inventory")?.container?.setItem(player.selectedSlotIndex, new ItemStack(itemStack.typeId, itemStack.amount - 1));
    }
}
/**
 * When a captured ball hits a block, send out the Oremon
 * @param event
 */
export function onBallHitBlock(event) {
    if (event.projectile.typeId != "oremon:oreball")
        return;
    if (event.projectile?.isValid && event.projectile.hasTag("captured")) {
        const player = event.source;
        const projectile = event.projectile;
        const slot = projectile.getTags().find(tag => tag.startsWith("slot:"))?.replace("slot:", "");
        projectile.remove();
        system.run(() => {
            PlayerMonEntityManager.playerSendOut(player, Number(slot), event.location);
        });
    }
}
/**
 * When a captured ball hits a wild Oremon, start a battle
 * @param event
 */
export function onBallHitEntity(event) {
    const projectile = event.projectile;
    if (projectile.typeId !== "oremon:oreball")
        return;
    if (event.projectile?.isValid && event.projectile.hasTag("captured")) {
        const player = event.source;
        const entity = event.getEntityHit().entity;
        if (!player || !(player instanceof Player))
            return;
        if (!entity || !entity.isValid || entity.hasTag("captured"))
            return;
        const family = entity.getComponent("type_family");
        // Start battle if it hits an Oremon
        if (family && family.hasTypeFamily("oremon")) {
            const battle = BattleManager.getBattleByPlayerId(player.id);
            if (!battle) {
                system.run(() => {
                    // Sends out the Oremon
                    const slot = projectile.getTags().find(tag => tag.startsWith("slot:"))?.replace("slot:", "");
                    const playerOremon = PlayerMonEntityManager.playerSendOut(player, Number(slot), event.location);
                    try {
                        playerOremon?.triggerEvent("oremon:battle");
                    }
                    catch {
                        // Skip
                    }
                    try {
                        entity?.triggerEvent("oremon:battle");
                    }
                    catch {
                        // Skip
                    }
                    projectile.remove();
                    // Get the data of the wild Pokémon
                    const wildData = entity?.getDynamicProperty("oremon:wild_data");
                    if (!wildData)
                        return;
                    const oremon = Oremon.fromWildData(expandCompactWildOremon(JSON.parse(wildData)));
                    // Set up the battle
                    const playerTrainer = {
                        type: "trainer", active: 0, player: player, team: PlayerSave.data.get(player.id).getTeam().filter(Boolean)
                    };
                    const opponent = {
                        type: "wild_pokemon", active: 0, team: [oremon]
                    };
                    const battle = BattleManager.createBattle(playerTrainer, opponent);
                    const battleScene = new BattleScene(battle);
                    battleScene.attachPlayerScene(new BattlePlayerScene(battle, player));
                    battle.attachMainScene(battleScene);
                    battle.start();
                });
            }
        }
    }
}
