import {
    Entity,
    ItemStack,
    ItemUseBeforeEvent,
    Player,
    ProjectileHitBlockAfterEvent,
    system
} from "@minecraft/server";
import {VectorUtils} from "../utils/VectorUtils";
import {PlayerSave} from "../save/PlayerSave";
import {PlayerMonEntityManager} from "../entity/PlayerMonEntityManager";
import {BattleManager} from "../combat/BattleManager";
import {Oremon} from "../monster/Oremon";
import {expandCompactWildOremon} from "../monster/OremonUtils";
import {BattleTrainer} from "../../types/Battle";
import {BattleScene} from "../frontend/BattleScene";
import {BattlePlayerScene} from "../frontend/BattlePlayerScene";
import {MathUtils} from "../utils/MathUtils";
import {OremonEntityManager} from "../entity/OremonEntityManager";

export function UseOreball(event: ItemUseBeforeEvent) {
    if (event.itemStack.typeId != "oremon:oreball") return;
    const player = event.source;
    if (BattleManager.isInBattle(player.id)) return;
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

function sendOutPokemon(event: ItemUseBeforeEvent) {
    if (event.itemStack.typeId != "oremon:oreball") return;
    const itemStack = event.itemStack;
    const player = event.source;

    const cooldown = itemStack.getComponent("cooldown");

    if (cooldown && cooldown.getCooldownTicksRemaining(player) > 0) return;

    const vD = player.getViewDirection();
    const hL = player.getHeadLocation();
    const spawnLocation = VectorUtils.add(hL, vD);
    //@ts-expect-error: oreball entity check
    const projectile = player.dimension.spawnEntity("oremon:oreball", spawnLocation);

    const projComp = projectile.getComponent("projectile");
    if (projComp) {
        projComp.owner = player;
        const velocity = 2
        projComp.shoot({
            x: vD.x * velocity,
            y: vD.y * velocity,
            z: vD.z * velocity
        });
        player.startItemCooldown("oreball", 10)
        player.dimension.playSound("random.bow", hL);
    }

    projectile.addTag("captured");
    projectile.addTag(`player:${player.id}`);
    projectile.addTag(`slot:${player.selectedSlotIndex}`);
}

function launchOreball(event: ItemUseBeforeEvent) {
    if (event.itemStack.typeId != "oremon:oreball") return;
    const itemStack = event.itemStack;
    const player = event.source;

    const cooldown = itemStack.getComponent("cooldown");

    if (cooldown && cooldown.getCooldownTicksRemaining(player) > 0) return;

    const vD = player.getViewDirection();
    const hL = player.getHeadLocation();
    const spawnLocation = VectorUtils.add(hL, vD);
    //@ts-expect-error: oreball entity check
    const projectile = player.dimension.spawnEntity("oremon:oreball", spawnLocation);

    const projComp = projectile.getComponent("projectile");
    if (projComp) {
        projComp.owner = player;
        const velocity = 2
        projComp.shoot({
            x: vD.x * velocity,
            y: vD.y * velocity,
            z: vD.z * velocity
        });
        player.startItemCooldown("oreball", 10)
        player.dimension.playSound("random.bow", hL);
    }

    if (itemStack.amount - 1 <= 0) {
        player.getComponent("inventory")?.container?.setItem(player.selectedSlotIndex, undefined);
    }
    else {
        player.getComponent("inventory")?.container?.setItem(player.selectedSlotIndex, new ItemStack(itemStack.typeId, itemStack.amount-1));
    }
}

/**
 * When a ball hits a block, send out the Oremon or drop the ball
 * @param event
 */
export function onBallHitBlock(event: ProjectileHitBlockAfterEvent) {
    const projectile = event.projectile;
    if (projectile?.typeId !== "oremon:oreball") return;
    if (projectile?.isValid && projectile?.hasTag("captured")) {
        const player = event.source as Player;
        const slot = projectile.getTags().find(tag => tag.startsWith("slot:"))?.replace("slot:", "");
        projectile.remove();
        system.run(() => {
            PlayerMonEntityManager.playerSendOut(player, Number(slot), event.location);
        });
    }
    else if (projectile?.isValid && !projectile?.hasTag("captured")) {
        const item = new ItemStack(event.projectile.typeId);
        event.projectile.dimension.spawnItem(item, event.location);
        event.projectile.remove();
    }
}

/**
 * When a captured ball hits a wild Oremon, start a battle
 * @param player
 * @param entity
 * @param projectile
 * @param location
 */
export function startBattleWithEntity(player: Player, entity: Entity, projectile: Entity) {
    const battle = BattleManager.getBattleByPlayerId(player.id);
    if (!battle) {
        const preferred= VectorUtils.offsetAroundTarget(
            player.location,
            entity.location,
            5,
            -20
        );

        const spawnLocation = OremonEntityManager.findValidSpawnLocation(player.dimension, preferred, 5, 10);

        // Sends out the Oremon
        const slot = projectile.getTags().find(tag => tag.startsWith("slot:"))?.replace("slot:", "");
        const playerOremon = PlayerMonEntityManager.playerSendOut(player, Number(slot), spawnLocation ?? preferred);

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

        // Get the data of the wild Pokémon
        const wildData = entity?.getDynamicProperty("oremon:wild_data");
        if (!wildData) return;
        const oremon = Oremon.fromWildData(expandCompactWildOremon(JSON.parse(wildData as string)));

        // Set up the battle
        const playerTrainer: BattleTrainer = {
            type: "trainer", active: MathUtils.clamp(player.selectedSlotIndex, 0, PlayerSave.data.get(player.id)!.getTeam().filter(o => o !== undefined).length - 1), player: player, team: PlayerSave.data.get(player.id)!.getTeam().filter(Boolean) as Oremon[]
        }
        const opponent: BattleTrainer = {
            type: "wild_pokemon", active: 0, team: [oremon]
        }

        const battle = BattleManager.createBattle(playerTrainer, opponent);
        const battleScene = new BattleScene(battle);
        battleScene.attachPlayerScene(new BattlePlayerScene(1, battle, player));
        battleScene.attachMonster(1, playerOremon);
        battleScene.attachMonster(2, entity);
        battle.attachMainScene(battleScene);
        battle.start();
        projectile.remove();
    }
}