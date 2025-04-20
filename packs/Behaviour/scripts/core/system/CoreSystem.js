import { OremonDataRegistry } from "../registry/OremonDataRegistry";
import oremonData from "../../data/oremonData";
export class CoreSystem {
    static initialize() {
        this.registerAllOremon();
    }
    static registerAllOremon() {
        for (const data of oremonData) {
            OremonDataRegistry.register(data);
        }
        console.log(`[Oremon] Registered ${OremonDataRegistry.getAll().length} Oremon`);
    }
}
