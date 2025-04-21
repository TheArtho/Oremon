import { OremonEntityEventHandler } from "./core/monsters/OremonEntityEventHandler";
import { PlayerSaveEventHandler } from "./core/save/PlayerSaveEventHandler";
class Game {
    static initialize() {
        try {
            this.registerEvents();
        }
        catch (e) {
            console.error(e);
        }
        console.log("[Oremon] Addon initialized!");
    }
    static registerEvents() {
        PlayerSaveEventHandler.register();
        OremonEntityEventHandler.register();
    }
}
Game.initialize();
