const plasma_fists = {
    id: "plasma-fists",
    name: "oremon.plasma-fists.name",
    description: "oremon.plasma-fists.description",
    category: "physical",
    accuracy: 100,
    power: 100,
    pp: 15,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        recharge: true
    },
    target: "selected_pokemon",
    type: "electric",
    effectId: "none",
    effectChance: undefined
};
export default plasma_fists;
