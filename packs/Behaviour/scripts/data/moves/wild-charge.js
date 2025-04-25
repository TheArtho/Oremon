const wild_charge = {
    id: "wild-charge",
    name: "oremon.wild-charge.name",
    description: "oremon.wild-charge.description",
    category: "physical",
    accuracy: 100,
    power: 90,
    pp: 15,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "electric",
    effectId: "none",
    effectChance: undefined
};
export default wild_charge;
