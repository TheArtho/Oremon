import { ItemLockMode, ItemStack, system, world } from "@minecraft/server";
import { PlayerSave } from "../save/PlayerSave";
export class HotbarSwitchEventHandler {
    static register() {
        world.beforeEvents.itemUse.subscribe((event) => {
            const itemId = event.itemStack.typeId;
            if (itemId === "oremon:switch_to_oremon") {
                system.run(() => {
                    this.switchToOremonMode(event.source);
                });
            }
            else if (itemId === "oremon:switch_to_items") {
                system.run(() => {
                    this.switchToItemMode(event.source);
                });
            }
        });
    }
    static switchToOremonMode(player) {
        // Remplir slots 0-5 avec équipe
        const playerData = PlayerSave.data.get(player.id);
        if (!playerData)
            return;
        // Sauvegarde l'ancienne hotbar
        this.saveHotbar(player);
        for (let i = 0; i < 6; i++) {
            const oremon = playerData.getTeamSlot(i);
            if (oremon) {
                player.getComponent("minecraft:inventory")?.container?.setItem(i, this.createOreballForOremon(oremon));
            }
            else {
                player.getComponent("minecraft:inventory")?.container?.setItem(i, undefined);
            }
        }
        // Slot 8 = bouton retour vers items
        const switchItem = new ItemStack("oremon:switch_to_items", 1);
        switchItem.lockMode = ItemLockMode.slot;
        player.getComponent("minecraft:inventory")?.container?.setItem(8, switchItem);
    }
    static switchToItemMode(player) {
        const inventory = player.getComponent("minecraft:inventory")?.container;
        if (!inventory)
            return;
        // Recharge les anciens items sauvegardés
        const savedInventory = this.getSavedInventoryEntity(player);
        if (!savedInventory)
            return;
        const savedContainer = savedInventory.getComponent("minecraft:inventory")?.container;
        if (!savedContainer)
            return;
        // Restore slots 0 à 7
        for (let i = 0; i <= 7; i++) {
            const savedItem = savedContainer.getItem(i);
            inventory.setItem(i, savedItem);
        }
        // Slot 8 = bouton retour vers oremon
        const switchItem = new ItemStack("oremon:switch_to_oremon", 1);
        switchItem.lockMode = ItemLockMode.slot;
        inventory.setItem(8, switchItem);
    }
    static saveHotbar(player) {
        const inventory = player.getComponent("minecraft:inventory")?.container;
        if (!inventory)
            return;
        let playerInventoryEntity = this.getSavedInventoryEntity(player);
        if (!playerInventoryEntity) {
            //@ts-expect-error: player_inventory entity check
            playerInventoryEntity = world.getDimension("overworld").spawnEntity("oremon:player_inventory", player.location);
        }
        if (!playerInventoryEntity)
            return;
        const savedContainer = playerInventoryEntity.getComponent("minecraft:inventory")?.container;
        if (!savedContainer)
            return;
        // Copie slots 0 à 8
        for (let i = 0; i <= 8; i++) {
            const item = inventory.getItem(i);
            if (item) {
                savedContainer.setItem(i, item.clone());
            }
            else {
                savedContainer.setItem(i, undefined);
            }
        }
        // Lie cette entité au joueur via une propriété dynamique
        player.setDynamicProperty("oremon:saved_inventory", playerInventoryEntity.id);
    }
    static getSavedInventoryEntity(player) {
        const id = player.getDynamicProperty("oremon:saved_inventory");
        if (!id)
            return undefined;
        return world.getDimension("overworld").getEntities().find(entity => entity.id === id);
    }
    static createOreballForOremon(oremon) {
        const item = new ItemStack("oremon:oreball", 1);
        item.lockMode = ItemLockMode.slot;
        item.nameTag = `${oremon.getName()} Lv.${oremon.getLevel()}`;
        const lore = ["Moves:"];
        lore.push(...oremon.moves.map((m) => m?.id ?? "???"));
        item.setLore(lore);
        return item;
    }
}
