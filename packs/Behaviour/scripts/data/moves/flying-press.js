const flying_press = {
    id: "flying-press",
    name: "oremon.flying-press.name",
    description: "oremon.flying-press.description",
    category: "physical",
    accuracy: 95,
    power: 100,
    pp: 10,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        soundBased: true,
        punching: true,
        mental: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: undefined
};
export default flying_press;
