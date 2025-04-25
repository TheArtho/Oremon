const cross_chop = {
    id: "cross-chop",
    name: "oremon.cross-chop.name",
    description: "oremon.cross-chop.description",
    category: "physical",
    accuracy: 80,
    power: 100,
    pp: 5,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: undefined
};
export default cross_chop;
