const burn_up = {
    id: "burn-up",
    name: "oremon.burn-up.name",
    description: "oremon.burn-up.description",
    category: "special",
    accuracy: 100,
    power: 130,
    pp: 5,
    priority: 0,
    flags: {
        snatch: true,
        charge: true,
        bite: true
    },
    target: "selected_pokemon",
    type: "fire",
    effectId: "none",
    effectChance: undefined
};
export default burn_up;
