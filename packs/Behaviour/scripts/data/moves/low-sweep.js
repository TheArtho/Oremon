const low_sweep = {
    id: "low-sweep",
    name: "oremon.low-sweep.name",
    description: "oremon.low-sweep.description",
    category: "physical",
    accuracy: 100,
    power: 65,
    pp: 20,
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
export default low_sweep;
