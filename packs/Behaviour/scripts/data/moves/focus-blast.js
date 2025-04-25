const focus_blast = {
    id: "focus-blast",
    name: "oremon.focus-blast.name",
    description: "oremon.focus-blast.description",
    category: "special",
    accuracy: 70,
    power: 120,
    pp: 5,
    priority: 0,
    flags: {
        snatch: true,
        charge: true,
        pulseBased: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: 10
};
export default focus_blast;
