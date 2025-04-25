const sky_drop = {
    id: "sky-drop",
    name: "oremon.sky-drop.name",
    description: "oremon.sky-drop.description",
    category: "physical",
    accuracy: 100,
    power: 60,
    pp: 10,
    priority: 0,
    flags: {
        contact: true,
        protectable: true,
        snatch: true,
        charge: true,
        soundBased: true,
        punching: true
    },
    target: "selected_pokemon",
    type: "flying",
    effectId: "none",
    effectChance: undefined
};
export default sky_drop;
