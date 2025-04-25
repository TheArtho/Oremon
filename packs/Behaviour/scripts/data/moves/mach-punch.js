const mach_punch = {
    id: "mach-punch",
    name: "oremon.mach-punch.name",
    description: "oremon.mach-punch.description",
    category: "physical",
    accuracy: 100,
    power: 40,
    pp: 30,
    priority: 1,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        recharge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: undefined
};
export default mach_punch;
