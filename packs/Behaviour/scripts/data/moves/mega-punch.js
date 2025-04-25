const mega_punch = {
    id: "mega-punch",
    name: "oremon.mega-punch.name",
    description: "oremon.mega-punch.description",
    category: "physical",
    accuracy: 85,
    power: 80,
    pp: 20,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        recharge: true
    },
    target: "selected_pokemon",
    type: "normal",
    effectId: "none",
    effectChance: undefined
};
export default mega_punch;
