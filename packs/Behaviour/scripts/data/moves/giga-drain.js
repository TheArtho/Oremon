const giga_drain = {
    id: "giga-drain",
    name: "oremon.giga-drain.name",
    description: "oremon.giga-drain.description",
    category: "special",
    accuracy: 100,
    power: 75,
    pp: 10,
    priority: 0,
    flags: {
        snatch: true,
        charge: true,
        powderBased: true
    },
    target: "selected_pokemon",
    type: "grass",
    effectId: "none",
    effectChance: undefined
};
export default giga_drain;
