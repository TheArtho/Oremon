const rolling_kick = {
    id: "rolling-kick",
    name: "oremon.rolling-kick.name",
    description: "oremon.rolling-kick.description",
    category: "physical",
    accuracy: 85,
    power: 60,
    pp: 15,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: 30
};
export default rolling_kick;
