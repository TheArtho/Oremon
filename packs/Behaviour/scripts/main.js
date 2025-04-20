import { CoreSystem } from "./core/system/CoreSystem";
class Game {
    static initialize() {
        CoreSystem.initialize();
        this.registerEvents();
    }
    static registerEvents() {
    }
}
Game.initialize();
