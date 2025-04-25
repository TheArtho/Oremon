const trop_kick = {
    id: "trop-kick",
    name: "oremon.trop-kick.name",
    description: "oremon.trop-kick.description",
    category: "physical",
    accuracy: 100,
    power: 70,
    pp: 15,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "grass",
    effectId: "none",
    effectChance: 100
};
export default trop_kick;
