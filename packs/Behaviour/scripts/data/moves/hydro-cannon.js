const hydro_cannon = {
    id: "hydro-cannon",
    name: "oremon.hydro-cannon.name",
    description: "oremon.hydro-cannon.description",
    category: "special",
    accuracy: 90,
    power: 150,
    pp: 5,
    priority: 0,
    flags: {
        reflectable: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "water",
    effectId: "none",
    effectChance: undefined
};
export default hydro_cannon;
