const power_whip = {
    id: "power-whip",
    name: "oremon.power-whip.name",
    description: "oremon.power-whip.description",
    category: "physical",
    accuracy: 85,
    power: 120,
    pp: 10,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "grass",
    effectId: "none",
    effectChance: undefined
};
export default power_whip;
