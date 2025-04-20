import { OremonRegistry } from "../registry/OremonRegistry";
import oremonData from "../../data/oremon/index";

export class CoreSystem {
    static initialize() {
        this.registerAllOremon();
    }

    private static registerAllOremon() {
        for (const oremon of oremonData) {
            OremonRegistry.register(oremon);
        }
        console.log(`[Oremon] Registered ${OremonRegistry.getAll().length} Oremon`);
    }
}
