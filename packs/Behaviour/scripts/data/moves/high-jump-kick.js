const high_jump_kick = {
    id: "high-jump-kick",
    name: "oremon.high-jump-kick.name",
    description: "oremon.high-jump-kick.description",
    category: "physical",
    accuracy: 90,
    power: 130,
    pp: 10,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        soundBased: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: undefined
};
export default high_jump_kick;
