const cut = {
    id: "cut",
    name: "oremon.cut.name",
    description: "oremon.cut.description",
    category: "physical",
    accuracy: 95,
    power: 50,
    pp: 30,
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
export default cut;
