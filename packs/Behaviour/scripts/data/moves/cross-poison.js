const cross_poison = {
    id: "cross-poison",
    name: "oremon.cross-poison.name",
    description: "oremon.cross-poison.description",
    category: "physical",
    accuracy: 100,
    power: 70,
    pp: 20,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "poison",
    effectId: "none",
    effectChance: 10
};
export default cross_poison;
