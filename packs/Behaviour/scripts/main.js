import bulbasaur from "./data/oremon/bulbasaur";
import { Localization } from "./i18n/Localization";
import { OremonEntityEventHandler } from "./core/monsters/OremonEntityEventHandler";
class Game {
    static initialize() {
        try {
            this.registerEvents();
            console.log(`Test: ${Localization.t(bulbasaur.description, "en")}`);
        }
        catch (e) {
            console.error(e);
        }
    }
    static registerEvents() {
        OremonEntityEventHandler.register();
    }
}
Game.initialize();
