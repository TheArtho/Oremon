const head_charge = {
    id: "head-charge",
    name: "oremon.head-charge.name",
    description: "oremon.head-charge.description",
    category: "physical",
    accuracy: 100,
    power: 120,
    pp: 15,
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
export default head_charge;
