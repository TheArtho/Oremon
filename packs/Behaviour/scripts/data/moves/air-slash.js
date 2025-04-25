const air_slash = {
    id: "air-slash",
    name: "oremon.air-slash.name",
    description: "oremon.air-slash.description",
    category: "special",
    accuracy: 95,
    power: 75,
    pp: 15,
    priority: 0,
    flags: {
        snatch: true,
        charge: true,
        punching: true
    },
    target: "selected_pokemon",
    type: "flying",
    effectId: "none",
    effectChance: 30
};
export default air_slash;
