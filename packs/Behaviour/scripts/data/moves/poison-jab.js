const poison_jab = {
    id: "poison-jab",
    name: "oremon.poison-jab.name",
    description: "oremon.poison-jab.description",
    category: "physical",
    accuracy: 100,
    power: 80,
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
    effectChance: 30
};
export default poison_jab;
