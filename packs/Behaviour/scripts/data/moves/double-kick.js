const double_kick = {
    id: "double-kick",
    name: "oremon.double-kick.name",
    description: "oremon.double-kick.description",
    category: "physical",
    accuracy: 100,
    power: 30,
    pp: 30,
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
export default double_kick;
