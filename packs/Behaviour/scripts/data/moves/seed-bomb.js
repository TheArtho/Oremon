const seed_bomb = {
    id: "seed-bomb",
    name: "oremon.seed-bomb.name",
    description: "oremon.seed-bomb.description",
    category: "physical",
    accuracy: 100,
    power: 80,
    pp: 15,
    priority: 0,
    flags: {
        snatch: true,
        charge: true,
        pulseBased: true
    },
    target: "selected_pokemon",
    type: "grass",
    effectId: "none",
    effectChance: undefined
};
export default seed_bomb;
