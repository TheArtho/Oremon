const clamp = {
    id: "clamp",
    name: "oremon.clamp.name",
    description: "oremon.clamp.description",
    category: "physical",
    accuracy: 85,
    power: 35,
    pp: 15,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "water",
    effectId: "none",
    effectChance: 100
};
export default clamp;
