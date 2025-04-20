import {OremonData} from "../../types/OremonData";

const registry = new Map<string, OremonData>();

export const OremonDataRegistry = {
    register(data: OremonData) {
        registry.set(data.id, data);
    },
    get(id: string): OremonData | undefined {
        return registry.get(id);
    },
    getAll(): OremonData[] {
        return Array.from(registry.values());
    }
};
