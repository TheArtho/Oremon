const fire_blast = {
    id: "fire-blast",
    name: "oremon.fire-blast.name",
    description: "oremon.fire-blast.description",
    category: "special",
    accuracy: 85,
    power: 110,
    pp: 5,
    priority: 0,
    flags: {
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "fire",
    effectId: "none",
    effectChance: 10
};
export default fire_blast;
