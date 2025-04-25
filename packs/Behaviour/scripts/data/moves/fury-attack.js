const fury_attack = {
    id: "fury-attack",
    name: "oremon.fury-attack.name",
    description: "oremon.fury-attack.description",
    category: "physical",
    accuracy: 85,
    power: 15,
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
export default fury_attack;
