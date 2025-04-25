const sky_attack = {
    id: "sky-attack",
    name: "oremon.sky-attack.name",
    description: "oremon.sky-attack.description",
    category: "physical",
    accuracy: 90,
    power: 140,
    pp: 5,
    priority: 0,
    flags: {
        protectable: true,
        snatch: true,
        charge: true,
        punching: true
    },
    target: "selected_pokemon",
    type: "flying",
    effectId: "none",
    effectChance: 30
};
export default sky_attack;
