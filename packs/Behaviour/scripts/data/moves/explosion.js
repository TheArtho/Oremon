const explosion = {
    id: "explosion",
    name: "oremon.explosion.name",
    description: "oremon.explosion.description",
    category: "physical",
    accuracy: 100,
    power: 250,
    pp: 5,
    priority: 0,
    flags: {
        snatch: true,
        charge: true
    },
    target: "all_other_pokemon",
    type: "normal",
    effectId: "none",
    effectChance: undefined
};
export default explosion;
