const slash = {
    id: "slash",
    name: "oremon.slash.name",
    description: "oremon.slash.description",
    category: "physical",
    accuracy: 100,
    power: 70,
    pp: 20,
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
export default slash;
