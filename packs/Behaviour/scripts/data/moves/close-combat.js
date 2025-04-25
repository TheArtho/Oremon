const close_combat = {
    id: "close-combat",
    name: "oremon.close-combat.name",
    description: "oremon.close-combat.description",
    category: "physical",
    accuracy: 100,
    power: 120,
    pp: 5,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: 100
};
export default close_combat;
