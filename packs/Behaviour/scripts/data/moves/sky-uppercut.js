const sky_uppercut = {
    id: "sky-uppercut",
    name: "oremon.sky-uppercut.name",
    description: "oremon.sky-uppercut.description",
    category: "physical",
    accuracy: 90,
    power: 85,
    pp: 15,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        recharge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: undefined
};
export default sky_uppercut;
