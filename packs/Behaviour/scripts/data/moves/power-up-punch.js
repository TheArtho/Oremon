const power_up_punch = {
    id: "power-up-punch",
    name: "oremon.power-up-punch.name",
    description: "oremon.power-up-punch.description",
    category: "physical",
    accuracy: 100,
    power: 40,
    pp: 20,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        recharge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: 100
};
export default power_up_punch;
