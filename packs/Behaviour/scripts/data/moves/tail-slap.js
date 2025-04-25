const tail_slap = {
    id: "tail-slap",
    name: "oremon.tail-slap.name",
    description: "oremon.tail-slap.description",
    category: "physical",
    accuracy: 85,
    power: 25,
    pp: 10,
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
export default tail_slap;
