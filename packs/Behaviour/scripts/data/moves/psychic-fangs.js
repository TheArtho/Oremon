const psychic_fangs = {
    id: "psychic-fangs",
    name: "oremon.psychic-fangs.name",
    description: "oremon.psychic-fangs.description",
    category: "physical",
    accuracy: 100,
    power: 85,
    pp: 10,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "psychic",
    effectId: "none",
    effectChance: undefined
};
export default psychic_fangs;
