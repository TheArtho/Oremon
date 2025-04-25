const flamethrower = {
    id: "flamethrower",
    name: "oremon.flamethrower.name",
    description: "oremon.flamethrower.description",
    category: "special",
    accuracy: 100,
    power: 90,
    pp: 15,
    priority: 0,
    flags: {
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "fire",
    effectId: "none",
    effectChance: 10
};
export default flamethrower;
