const flame_charge = {
    id: "flame-charge",
    name: "oremon.flame-charge.name",
    description: "oremon.flame-charge.description",
    category: "physical",
    accuracy: 100,
    power: 50,
    pp: 20,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "fire",
    effectId: "none",
    effectChance: 100
};
export default flame_charge;
