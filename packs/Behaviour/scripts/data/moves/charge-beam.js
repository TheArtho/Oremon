const charge_beam = {
    id: "charge-beam",
    name: "oremon.charge-beam.name",
    description: "oremon.charge-beam.description",
    category: "special",
    accuracy: 90,
    power: 50,
    pp: 10,
    priority: 0,
    flags: {
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "electric",
    effectId: "none",
    effectChance: 70
};
export default charge_beam;
