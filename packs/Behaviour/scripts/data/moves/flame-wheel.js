const flame_wheel = {
    id: "flame-wheel",
    name: "oremon.flame-wheel.name",
    description: "oremon.flame-wheel.description",
    category: "physical",
    accuracy: 100,
    power: 60,
    pp: 25,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        bite: true
    },
    target: "selected_pokemon",
    type: "fire",
    effectId: "none",
    effectChance: 10
};
export default flame_wheel;
