import { system, world } from "@minecraft/server";
import { UiManager } from "./UiManager";
export class UiEventManager {
    static register() {
        system.runInterval(() => {
            world.getPlayers().forEach(player => {
                UiManager.displayPokemonTeam(player);
            });
        }, 5);
    }
}
