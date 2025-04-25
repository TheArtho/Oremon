const shadow_force = {
    id: "shadow-force",
    name: "oremon.shadow-force.name",
    description: "oremon.shadow-force.description",
    category: "physical",
    accuracy: 100,
    power: 120,
    pp: 5,
    priority: 0,
    flags: {
        contact: true,
        protectable: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "ghost",
    effectId: "none",
    effectChance: undefined
};
export default shadow_force;
