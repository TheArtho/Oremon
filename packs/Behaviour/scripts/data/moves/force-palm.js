const force_palm = {
    id: "force-palm",
    name: "oremon.force-palm.name",
    description: "oremon.force-palm.description",
    category: "physical",
    accuracy: 100,
    power: 60,
    pp: 10,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: 30
};
export default force_palm;
