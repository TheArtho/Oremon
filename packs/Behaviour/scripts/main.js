import { system } from "@minecraft/server";
import { OremonEntityEventHandler } from "./core/entity/OremonEntityEventHandler";
import { PlayerSaveEventHandler } from "./core/save/PlayerSaveEventHandler";
import { PlayerSaveManager } from "./core/save/PlayerSaveManager";
import { ItemEventHandler } from "./core/items/ItemEventHandler";
import { CaptureEventHandler } from "./core/capture/CaptureEventHandler";
import { CommandEventHandler } from "./core/commands/CommandEventHandler";
import { UiEventManager } from "./core/ui/UiEventManager";
class Game {
    static initialize() {
        // Register all world events
        this.registerEvents();
        // Load or reset data for all connected players
        system.run(() => PlayerSaveManager.loadResetAll());
        console.log("[Oremon] Addon initialized!");
    }
    static registerEvents() {
        PlayerSaveEventHandler.register();
        OremonEntityEventHandler.register();
        ItemEventHandler.register();
        CaptureEventHandler.register();
        CommandEventHandler.register();
        UiEventManager.register();
    }
}
Game.initialize();
