const head_smash = {
    id: "head-smash",
    name: "oremon.head-smash.name",
    description: "oremon.head-smash.description",
    category: "physical",
    accuracy: 80,
    power: 150,
    pp: 5,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "rock",
    effectId: "none",
    effectChance: undefined
};
export default head_smash;
