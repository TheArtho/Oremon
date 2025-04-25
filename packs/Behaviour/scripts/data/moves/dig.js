const dig = {
    id: "dig",
    name: "oremon.dig.name",
    description: "oremon.dig.description",
    category: "physical",
    accuracy: 100,
    power: 80,
    pp: 10,
    priority: 0,
    flags: {
        contact: true,
        protectable: true,
        snatch: true,
        charge: true,
        mental: true
    },
    target: "selected_pokemon",
    type: "ground",
    effectId: "none",
    effectChance: undefined
};
export default dig;
