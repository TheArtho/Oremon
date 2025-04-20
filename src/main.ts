import {CoreSystem} from "./core/system/CoreSystem";
import bulbasaur from "./data/oremon/bulbasaur";
import {Localization} from "./i18n/Localization";

class Game {
    static initialize() {
        CoreSystem.initialize();
        this.registerEvents();

        console.log(`Test: ${Localization.t(bulbasaur.description, "en")}`);
    }

    static registerEvents() {

    }
}

Game.initialize();