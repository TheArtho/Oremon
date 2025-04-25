const rock_blast = {
    id: "rock-blast",
    name: "oremon.rock-blast.name",
    description: "oremon.rock-blast.description",
    category: "physical",
    accuracy: 90,
    power: 25,
    pp: 10,
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
export default rock_blast;
