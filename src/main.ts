import {OremonEntityEventHandler} from "./core/monster/OremonEntityEventHandler";
import {PlayerSaveEventHandler} from "./core/save/PlayerSaveEventHandler";
import {PlayerSaveManager} from "./core/save/PlayerSaveManager";
import {system, world} from "@minecraft/server";
import {ItemEventHandler} from "./core/items/ItemEventHandler";
import {CaptureEventHandler} from "./core/capture/CaptureEventHandler";
import {UiManager} from "./core/ui/UiManager";
import {CommandEventHandler} from "./core/commands/CommandEventHandler";

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
    }
}

Game.initialize();

system.runInterval(() => {
    world.getPlayers().forEach(player => {
        UiManager.displayPokemonTeam(player)
    });
}, 5);