const poison_sting = {
    id: "poison-sting",
    name: "oremon.poison-sting.name",
    description: "oremon.poison-sting.description",
    category: "physical",
    accuracy: 100,
    power: 15,
    pp: 35,
    priority: 0,
    flags: {
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "poison",
    effectId: "none",
    effectChance: 30
};
export default poison_sting;
