import { OremonRegistry } from "../registry/OremonRegistry";
import allOremon from "../../data/oremon/index";
export class CoreSystem {
    static initialize() {
        this.registerAllOremon();
    }
    static registerAllOremon() {
        for (const oremon of allOremon) {
            OremonRegistry.register(oremon);
        }
        console.log(`[Oremon] Registered ${OremonRegistry.getAll().length} Oremon`);
    }
}
