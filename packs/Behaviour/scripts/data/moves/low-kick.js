const low_kick = {
    id: "low-kick",
    name: "oremon.low-kick.name",
    description: "oremon.low-kick.description",
    category: "physical",
    accuracy: 100,
    power: undefined,
    pp: 20,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: undefined
};
export default low_kick;
