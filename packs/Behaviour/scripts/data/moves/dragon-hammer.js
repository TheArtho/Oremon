const dragon_hammer = {
    id: "dragon-hammer",
    name: "oremon.dragon-hammer.name",
    description: "oremon.dragon-hammer.description",
    category: "physical",
    accuracy: 100,
    power: 90,
    pp: 15,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "dragon",
    effectId: "none",
    effectChance: undefined
};
export default dragon_hammer;
