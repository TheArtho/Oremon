const stored_power = {
    id: "stored-power",
    name: "oremon.stored-power.name",
    description: "oremon.stored-power.description",
    category: "special",
    accuracy: 100,
    power: 20,
    pp: 10,
    priority: 0,
    flags: {
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "psychic",
    effectId: "none",
    effectChance: undefined
};
export default stored_power;
