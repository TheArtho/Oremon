const take_down = {
    id: "take-down",
    name: "oremon.take-down.name",
    description: "oremon.take-down.description",
    category: "physical",
    accuracy: 85,
    power: 90,
    pp: 20,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "normal",
    effectId: "none",
    effectChance: undefined
};
export default take_down;
