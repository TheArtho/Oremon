const registry = new Map();
export const OremonDataRegistry = {
    register(data) {
        registry.set(data.id, data);
    },
    get(id) {
        return registry.get(id);
    },
    getAll() {
        return Array.from(registry.values());
    }
};
