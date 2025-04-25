const rock_throw = {
    id: "rock-throw",
    name: "oremon.rock-throw.name",
    description: "oremon.rock-throw.description",
    category: "physical",
    accuracy: 90,
    power: 50,
    pp: 15,
    priority: 0,
    flags: {
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "rock",
    effectId: "none",
    effectChance: undefined
};
export default rock_throw;
