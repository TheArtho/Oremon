const attack_order = {
    id: "attack-order",
    name: "oremon.attack-order.name",
    description: "oremon.attack-order.description",
    category: "physical",
    accuracy: 100,
    power: 90,
    pp: 15,
    priority: 0,
    flags: {
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "bug",
    effectId: "none",
    effectChance: undefined
};
export default attack_order;
