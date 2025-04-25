const poison_tail = {
    id: "poison-tail",
    name: "oremon.poison-tail.name",
    description: "oremon.poison-tail.description",
    category: "physical",
    accuracy: 100,
    power: 50,
    pp: 25,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "poison",
    effectId: "none",
    effectChance: 10
};
export default poison_tail;
