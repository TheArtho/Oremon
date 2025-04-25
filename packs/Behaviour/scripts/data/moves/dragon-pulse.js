const dragon_pulse = {
    id: "dragon-pulse",
    name: "oremon.dragon-pulse.name",
    description: "oremon.dragon-pulse.description",
    category: "special",
    accuracy: 100,
    power: 85,
    pp: 10,
    priority: 0,
    flags: {
        snatch: true,
        charge: true,
        punching: true,
        distance: true
    },
    target: "selected_pokemon",
    type: "dragon",
    effectId: "none",
    effectChance: undefined
};
export default dragon_pulse;
