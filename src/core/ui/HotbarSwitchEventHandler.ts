import {Entity, ItemLockMode, ItemStack, ItemUseBeforeEvent, Player, system, world} from "@minecraft/server";
import {PlayerSave} from "../save/PlayerSave";
import {Oremon} from "../monster/Oremon";

export class HotbarSwitchEventHandler {
    static register() {
        world.beforeEvents.itemUse.subscribe((event: ItemUseBeforeEvent) => {
            const itemId = event.itemStack.typeId;

            if (itemId === "oremon:switch_to_oremon") {
                system.run(() => {
                    this.switchToOremonMode(event.source as Player);
                })
            } else if (itemId === "oremon:switch_to_items") {
                system.run(() => {
                    this.switchToItemMode(event.source as Player);
                })
            }
        });
    }

    static switchToOremonMode(player: Player) {
        // Fill slots 0-5 with team
        const playerData = PlayerSave.data.get(player.id);
        if (!playerData) return;

        // Save the hotbar
        this.saveHotbar(player);

        for (let i = 0; i < 6; i++) {
            const oremon = playerData.getTeamSlot(i);
            if (oremon) {
                player.getComponent("minecraft:inventory")?.container?.setItem(i, this.createOreballForOremon(oremon));
            } else {
                player.getComponent("minecraft:inventory")?.container?.setItem(i, undefined);
            }
        }
        // Slot 8 = Switch to Items button
        const switchItem = new ItemStack("oremon:switch_to_items", 1);
        switchItem.lockMode = ItemLockMode.slot;
        player.getComponent("minecraft:inventory")?.container?.setItem(8, switchItem);
    }

    static switchToItemMode(player: Player) {
        const inventory = player.getComponent("minecraft:inventory")?.container;
        if (!inventory) return;

        // Loads old items or creates a new inventory entity
        let savedInventory = this.getSavedInventoryEntity(player);
        if (!savedInventory) {
            savedInventory = this.createInventoryEntity(player);
        }

        const savedContainer = savedInventory?.getComponent("minecraft:inventory")?.container;
        if (!savedContainer) return;

        // Restore slots 0 to 7
        for (let i = 0; i <= 7; i++) {
            const savedItem = savedContainer.getItem(i);
            inventory.setItem(i, savedItem);
        }
        // Slot 8 = Switch to Oremon button
        const switchItem = new ItemStack("oremon:switch_to_oremon", 1);
        switchItem.lockMode = ItemLockMode.slot;
        inventory.setItem(8, switchItem);
    }

    private static saveHotbar(player: Player) {
        const inventory = player.getComponent("minecraft:inventory")?.container;
        if (!inventory) return;

        let playerInventoryEntity = this.getSavedInventoryEntity(player);
        if (!playerInventoryEntity) {
            //@ts-expect-error: player_inventory entity check
            playerInventoryEntity = world.getDimension("overworld").spawnEntity("oremon:player_inventory", player.location);
        }
        if (!playerInventoryEntity) return;

        const savedContainer = playerInventoryEntity.getComponent("minecraft:inventory")?.container;
        if (!savedContainer) return;

        // copy slots 0 to 8
        for (let i = 0; i <= 8; i++) {
            const item = inventory.getItem(i);
            if (item) {
                savedContainer.setItem(i, item.clone());
            }
            else {
                savedContainer.setItem(i, undefined);
            }
        }
    }

    private static getSavedInventoryEntity(player: Player): Entity | undefined {
        const id = player.getDynamicProperty("oremon:saved_inventory") as string;
        if (!id) return undefined;
        return world.getDimension("overworld").getEntities().find(entity => entity.id === id);
    }

    static createInventoryEntity(player: Player): Entity | undefined {
        //@ts-expect-error: player_inventory entity check
        const playerInventoryEntity = world.getDimension("overworld").spawnEntity("oremon:player_inventory", player.location);
        // Links this entity through dynamic properties
        player.setDynamicProperty("oremon:saved_inventory", playerInventoryEntity.id);
        return playerInventoryEntity;
    }

    static createOreballForOremon(oremon: Oremon) {
        const item = new ItemStack("oremon:oreball", 1);
        item.lockMode = ItemLockMode.slot;
        item.nameTag = `${oremon.getName()} Lv.${oremon.getLevel()}`;
        const lore = ["Moves:"];
        lore.push(...oremon.moves.map((m) => m?.id ?? "???"));
        item.setLore(lore);
        return item;
    }
}
