import { system, world } from "@minecraft/server";
import { PlayerSave } from "../save/PlayerSave";
export class PlayerMonEntityManager {
    static playerSendOut(player, slot, location) {
        const playerData = PlayerSave.data.get(player.id);
        if (!playerData)
            return;
        const target = playerData.getTeamSlot(slot);
        if (!target) {
            player.sendMessage(`[Oremon] You don't have any oremon to send out.`);
            return undefined;
        }
        if (playerData.oremonOut.includes(slot)) {
            player.sendMessage(`[Oremon] ${target.getName()} is already out.`);
            return undefined;
        }
        if (target.isFainted()) {
            player.sendMessage(`[Oremon] ${target.getName()} is fainted.`);
            return undefined;
        }
        // Spawn the Oremon entity
        //@ts-expect-error: the species id might not have an entity registered to it
        const entity = world.getDimension(player.dimension.id).spawnEntity(target.getSpeciesId(), location);
        // We tag the entity to track which Oremon it is
        entity.addTag("captured");
        entity.addTag(`player:${player.id}`);
        entity.addTag(`slot:${slot}`);
        // Tame the entity
        const tameable = entity.getComponent("tameable");
        if (tameable && !tameable.isTamed) {
            tameable.tame(player);
            try {
                entity.triggerEvent("oremon:capture");
            }
            catch (e) {
                console.error(e);
            }
        }
        // Save that it's out
        playerData.oremonOut.push(slot);
        player.sendMessage(`[Oremon] You sent out ${target.getName()}!`);
        return entity;
    }
    static playerRetrieve(player, slot) {
        const playerData = PlayerSave.data.get(player.id);
        if (!playerData)
            return;
        const target = playerData.getTeamSlot(slot);
        if (!target) {
            player.sendMessage(`[Oremon] You don't have any oremon to retrieve.`);
            return;
        }
        if (!playerData.oremonOut.includes(slot)) {
            player.sendMessage(`[Oremon] ${target.getName()} isn't out.`);
            return;
        }
        system.run(() => {
            // Find and kill/remove the entity
            const entities = world.getDimension(player.dimension.id)
                .getEntities({ type: target.getSpeciesId() })
                .filter(entity => entity.getTags().includes(`player:${player.id}`) &&
                entity.getTags().includes(`slot:${slot}`));
            for (const entity of entities) {
                entity.remove(); // Kill the entity cleanly
            }
        });
        // Remove from the oremonOut list
        playerData.oremonOut = playerData.oremonOut.filter(n => n !== slot);
        player.sendMessage(`[Oremon] You retrieved ${target.getName()}!`);
    }
}
