const poison_fang = {
    id: "poison-fang",
    name: "oremon.poison-fang.name",
    description: "oremon.poison-fang.description",
    category: "physical",
    accuracy: 100,
    power: 50,
    pp: 15,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        ballistics: true
    },
    target: "selected_pokemon",
    type: "poison",
    effectId: "none",
    effectChance: 50
};
export default poison_fang;
