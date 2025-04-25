const ice_burn = {
    id: "ice-burn",
    name: "oremon.ice-burn.name",
    description: "oremon.ice-burn.description",
    category: "special",
    accuracy: 90,
    power: 140,
    pp: 5,
    priority: 0,
    flags: {
        protectable: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "ice",
    effectId: "none",
    effectChance: 30
};
export default ice_burn;
