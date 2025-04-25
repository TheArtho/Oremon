const tackle = {
    id: "tackle",
    name: "oremon.tackle.name",
    description: "oremon.tackle.description",
    category: "physical",
    accuracy: 100,
    power: 40,
    pp: 35,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "normal",
    effectId: "none",
    effectChance: undefined
};
export default tackle;
