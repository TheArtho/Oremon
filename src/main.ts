import bulbasaur from "./data/oremon/bulbasaur";
import {Localization} from "./i18n/Localization";
import {world} from "@minecraft/server";
import oremonData from "./data/oremonData";

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
        // Test entity spawn on Pokémon
        world.afterEvents.entitySpawn.subscribe((event) => {
            const entity = event.entity;
            if (!entity.isValid) return;
            const family = entity.getComponent("type_family");

            // Checks for a oremon
            if (family && family.hasTypeFamily("oremon")) {
                const level = (Math.random() * 9 + 1).toFixed(0);
                const name = Localization.t(oremonData[entity.typeId].name, "en");

                entity.nameTag = `${name}\nLv.${level}`;
            }
        });
    }
}

Game.initialize();