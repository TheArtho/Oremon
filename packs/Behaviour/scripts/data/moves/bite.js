const bite = {
    id: "bite",
    name: "oremon.bite.name",
    description: "oremon.bite.description",
    category: "physical",
    accuracy: 100,
    power: 60,
    pp: 25,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        ballistics: true
    },
    target: "selected_pokemon",
    type: "dark",
    effectId: "none",
    effectChance: 30
};
export default bite;
